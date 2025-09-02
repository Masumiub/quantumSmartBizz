// app/api/sales/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { generateSalesInsights } from '../../utils/analysisInsights';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
    try {
        await client.connect();
        const database = client.db('CustomZBusinessDB');
        const collection = database.collection('sales');

        // Fetch all raw data for the table
        const allSalesData = await collection.find({}).toArray();

        // 1. Revenue Trend Over Time (Group by month)
        const revenueTrend = await collection.aggregate([
            {
                $group: {
                    _id: '$month',
                    totalRevenue: { $sum: '$revenue' },
                    totalProfit: { $sum: '$profit' }
                }
            },
            { $sort: { _id: 1 } } // Sort by month ascending
        ]).toArray();

        // 2. Total Revenue by Product Category
        const revenueByCategory = await collection.aggregate([
            {
                $group: {
                    _id: '$category',
                    totalRevenue: { $sum: '$revenue' }
                }
            }
        ]).toArray();

        // 3. Sales Distribution by Region
        const salesByRegion = await collection.aggregate([
            {
                $group: {
                    _id: '$region',
                    totalRevenue: { $sum: '$revenue' },
                    count: { $sum: 1 }
                }
            }
        ]).toArray();

        // 4. Top Selling Products (by Units Sold)
        const topProducts = await collection.aggregate([
            {
                $group: {
                    _id: '$product',
                    totalUnitsSold: { $sum: '$unitsSold' },
                    totalRevenue: { $sum: '$revenue' }
                }
            },
            { $sort: { totalUnitsSold: -1 } }, // Sort by units sold descending
            { $limit: 10 } // Get top 10 products
        ]).toArray();

        return NextResponse.json({
            success: true,
            data: {
                allSalesData,
                revenueTrend,
                revenueByCategory,
                salesByRegion,
                topProducts,
                insights: generateSalesInsights({ revenueTrend, revenueByCategory, salesByRegion, topProducts, allSalesData })
            }
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch sales data' },
            { status: 500 }
        );
    } finally {
        await client.close();
    }
}