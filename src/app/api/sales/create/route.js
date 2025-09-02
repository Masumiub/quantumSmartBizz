// app/api/sales/create/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import * as Papa from 'papaparse';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    await client.connect();
    const database = client.db('CustomZBusinessDB');
    const collection = database.collection('sales');

    const contentType = request.headers.get('content-type');
    
    // Handle CSV File Upload
    if (contentType?.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('file');

      if (!file) {
        return NextResponse.json(
          { success: false, error: 'No file uploaded' },
          { status: 400 }
        );
      }

      // Read and parse CSV file
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const csvData = buffer.toString();

      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true, // Automatically convert numbers
        transform: (value, field) => {
          if (field === 'month') return value.trim();
          if (['unitsSold', 'revenue', 'cost', 'profit', 'profitMargin'].includes(field)) {
            return Number(value) || 0;
          }
          return value;
        }
      });

      if (parsedData.errors.length > 0) {
        return NextResponse.json(
          { success: false, error: 'CSV parsing failed', details: parsedData.errors },
          { status: 400 }
        );
      }

      // Validate and transform CSV data
      const validatedData = parsedData.data.map(item => ({
        month: item.month,
        product: item.product,
        category: item.category,
        region: item.region,
        unitsSold: Number(item.unitsSold) || 0,
        revenue: Number(item.revenue) || 0,
        cost: Number(item.cost) || 0,
        profit: Number(item.profit) || 0,
        profitMargin: Number(item.profitMargin) || 0
      }));

      // Insert into MongoDB
      const result = await collection.insertMany(validatedData);

      return NextResponse.json({
        success: true,
        message: `${validatedData.length} records uploaded successfully`,
        data: result
      });

    } 
    // Handle Manual Form Data
    else {
      const jsonData = await request.json();
      
      // Validate required fields
      const requiredFields = ['month', 'product', 'category', 'region'];
      const missingFields = requiredFields.filter(field => !jsonData[field]);
      
      if (missingFields.length > 0) {
        return NextResponse.json(
          { success: false, error: `Missing required fields: ${missingFields.join(', ')}` },
          { status: 400 }
        );
      }

      // Calculate profit and profitMargin if not provided
      const revenue = Number(jsonData.revenue) || 0;
      const cost = Number(jsonData.cost) || 0;
      const profit = revenue - cost;
      const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0;

      const salesData = {
        month: jsonData.month,
        product: jsonData.product,
        category: jsonData.category,
        region: jsonData.region,
        unitsSold: Number(jsonData.unitsSold) || 0,
        revenue: revenue,
        cost: cost,
        profit: profit,
        profitMargin: parseFloat(profitMargin.toFixed(1))
      };

      // Insert into MongoDB
      const result = await collection.insertOne(salesData);

      return NextResponse.json({
        success: true,
        message: 'Sales data added successfully',
        data: { insertedId: result.insertedId, ...salesData }
      });
    }

  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to add sales data' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}