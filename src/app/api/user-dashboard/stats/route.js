// app/api/dashboard/stats/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function GET() {
  try {
    await client.connect();
    const database = client.db('CustomZBusinessDB');
    const collection = database.collection('sales');

    // Get total revenue
    const totalRevenue = await collection.aggregate([
      { $group: { _id: null, total: { $sum: '$revenue' } } }
    ]).toArray();

    // Get total profit
    const totalProfit = await collection.aggregate([
      { $group: { _id: null, total: { $sum: '$profit' } } }
    ]).toArray();

    // Get total units sold
    const totalUnits = await collection.aggregate([
      { $group: { _id: null, total: { $sum: '$unitsSold' } } }
    ]).toArray();

    // Get number of products
    const productCount = await collection.distinct('product');

    // Get recent sales (last 30 days logic - simplified)
    const recentSales = await collection.find({})
      .sort({ month: -1 })
      .limit(5)
      .toArray();

    // Get top performing product
    const topProduct = await collection.aggregate([
      { $group: { _id: '$product', totalRevenue: { $sum: '$revenue' } } },
      { $sort: { totalRevenue: -1 } },
      { $limit: 1 }
    ]).toArray();

    return NextResponse.json({
      success: true,
      data: {
        totalRevenue: totalRevenue[0]?.total || 0,
        totalProfit: totalProfit[0]?.total || 0,
        totalUnits: totalUnits[0]?.total || 0,
        productCount: productCount.length,
        recentSales,
        topProduct: topProduct[0] || null
      }
    });

  } catch (error) {
    console.error('Dashboard stats error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch dashboard stats' },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}