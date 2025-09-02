
'use client';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import AIInsightsPanel from '../../components/AllInsightsPanel';


// Color palette for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export default function SalesDashboard() {
    const [data, setData] = useState({
        allSalesData: [],
        revenueTrend: [],
        revenueByCategory: [],
        salesByRegion: [],
        topProducts: [],
        insights: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/sales');
                const result = await response.json();

                if (result.success) {
                    setData(result.data);
                } else {
                    setError(result.error);
                }
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>;
    if (error) return <div className="text-red-500 text-center p-8">Error: {error}</div>;
    if (!data) return <div className="text-center p-8">No data found</div>;

    return (
        <div className="p-6 mb-20 bg-gradient-to-br from-purple-50 to-indigo-100">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Sales Dashboard</h1>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">


                {/* 2. Total Revenue by Product Category (Bar Chart) */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-black">Revenue by Category</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.revenueByCategory}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="_id" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} className='text-black'/>
                            <Legend />
                            <Bar dataKey="totalRevenue" fill="#8884d8" name="Revenue" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>


                {/* 1. Revenue Trend Over Time (Line Chart) */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-black">Revenue Trend Over Time</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data.revenueTrend}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="_id" />
                            <YAxis />
                            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Value']} />
                            <Legend />
                            <Line type="monotone" dataKey="totalRevenue" stroke="#0088FE" name="Revenue" strokeWidth={2} />
                            <Line type="monotone" dataKey="totalProfit" stroke="#00C49F" name="Profit" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="lg:col-span-2">
                    <AIInsightsPanel insights={data.insights} loading={loading} />
                </div>



                {/* 3. Sales Distribution by Region (Pie Chart) */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-black">Sales by Region</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data.salesByRegion}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ _id, percent }) => `${_id} (${(percent * 100).toFixed(0)}%)`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="totalRevenue"
                                nameKey="_id"
                            >
                                {data.salesByRegion.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* 4. Top Selling Products (Bar Chart) */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-black">Top Selling Products (Units Sold)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data.topProducts} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="_id" width={100} />
                            <Tooltip formatter={(value, name) => [name === 'totalUnitsSold' ? value : `$${value.toLocaleString()}`, name === 'totalUnitsSold' ? 'Units Sold' : 'Revenue']} />
                            <Legend />
                            <Bar dataKey="totalUnitsSold" fill="#FF8042" name="Units Sold" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* 5. Raw Data Table */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 text-black">Raw Sales Data</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-black">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 text-left">Month</th>
                                <th className="px-4 py-2 text-left">Product</th>
                                <th className="px-4 py-2 text-left">Category</th>
                                <th className="px-4 py-2 text-left">Region</th>
                                <th className="px-4 py-2 text-right">Units Sold</th>
                                <th className="px-4 py-2 text-right">Revenue</th>
                                <th className="px-4 py-2 text-right">Cost</th>
                                <th className="px-4 py-2 text-right">Profit</th>
                                <th className="px-4 py-2 text-right">Profit Margin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.allSalesData.map((sale, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                                    <td className="px-4 py-2">{sale.month}</td>
                                    <td className="px-4 py-2">{sale.product}</td>
                                    <td className="px-4 py-2">{sale.category}</td>
                                    <td className="px-4 py-2">{sale.region}</td>
                                    <td className="px-4 py-2 text-right">{sale.unitsSold.toLocaleString()}</td>
                                    <td className="px-4 py-2 text-right">${sale.revenue.toLocaleString()}</td>
                                    <td className="px-4 py-2 text-right">${sale.cost.toLocaleString()}</td>
                                    <td className="px-4 py-2 text-right">${sale.profit.toLocaleString()}</td>
                                    <td className="px-4 py-2 text-right">{sale.profitMargin.toFixed(1)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}