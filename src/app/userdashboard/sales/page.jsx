
// 'use client';
// import { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
// import AIInsightsPanel from '../../components/AllInsightsPanel';


// // Color palette for charts
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

// export default function SalesDashboard() {
//     const [data, setData] = useState({
//         allSalesData: [],
//         revenueTrend: [],
//         revenueByCategory: [],
//         salesByRegion: [],
//         topProducts: [],
//         insights: []
//     });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/api/sales');
//                 const result = await response.json();

//                 if (result.success) {
//                     setData(result.data);
//                 } else {
//                     setError(result.error);
//                 }
//             } catch (err) {
//                 setError('Failed to fetch data');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div>;
//     if (error) return <div className="text-red-500 text-center p-8">Error: {error}</div>;
//     if (!data) return <div className="text-center p-8">No data found</div>;

//     return (
//         <div className="p-6 mb-20 bg-gradient-to-br from-purple-50 to-indigo-100">

//             <div className="max-w-7xl mx-auto">
//                 <h1 className="text-3xl font-bold mb-8 text-gray-800">Sales Dashboard</h1>

//                 {/* Charts Grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">


//                     {/* 2. Total Revenue by Product Category (Bar Chart) */}
//                     <div className="bg-white p-4 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4 text-black">Revenue by Category</h2>
//                         <ResponsiveContainer width="100%" height={300}>
//                             <BarChart data={data.revenueByCategory}>
//                                 <CartesianGrid strokeDasharray="3 3" />
//                                 <XAxis dataKey="_id" />
//                                 <YAxis />
//                                 <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} className='text-black' />
//                                 <Legend />
//                                 <Bar dataKey="totalRevenue" fill="#8884d8" name="Revenue" />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     </div>


//                     {/* 1. Revenue Trend Over Time (Line Chart) */}
//                     <div className="bg-white p-4 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4 text-black">Revenue Trend Over Time</h2>
//                         <ResponsiveContainer width="100%" height={300}>
//                             <LineChart data={data.revenueTrend}>
//                                 <CartesianGrid strokeDasharray="3 3" />
//                                 <XAxis dataKey="_id" />
//                                 <YAxis />
//                                 <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Value']} />
//                                 <Legend />
//                                 <Line type="monotone" dataKey="totalRevenue" stroke="#0088FE" name="Revenue" strokeWidth={2} />
//                                 <Line type="monotone" dataKey="totalProfit" stroke="#00C49F" name="Profit" strokeWidth={2} />
//                             </LineChart>
//                         </ResponsiveContainer>
//                     </div>

//                     <div className="lg:col-span-2">
//                         <AIInsightsPanel insights={data.insights} loading={loading} />
//                     </div>



//                     {/* 3. Sales Distribution by Region (Pie Chart) */}
//                     <div className="bg-white p-4 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4 text-black">Sales by Region</h2>
//                         <ResponsiveContainer width="100%" height={300}>
//                             <PieChart>
//                                 <Pie
//                                     data={data.salesByRegion}
//                                     cx="50%"
//                                     cy="50%"
//                                     labelLine={false}
//                                     label={({ _id, percent }) => `${_id} (${(percent * 100).toFixed(0)}%)`}
//                                     outerRadius={80}
//                                     fill="#8884d8"
//                                     dataKey="totalRevenue"
//                                     nameKey="_id"
//                                 >
//                                     {data.salesByRegion.map((entry, index) => (
//                                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                                     ))}
//                                 </Pie>
//                                 <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
//                             </PieChart>
//                         </ResponsiveContainer>
//                     </div>

//                     {/* 4. Top Selling Products (Bar Chart) */}
//                     <div className="bg-white p-4 rounded-lg shadow-md">
//                         <h2 className="text-xl font-semibold mb-4 text-black">Top Selling Products (Units Sold)</h2>
//                         <ResponsiveContainer width="100%" height={300}>
//                             <BarChart data={data.topProducts} layout="vertical">
//                                 <CartesianGrid strokeDasharray="3 3" />
//                                 <XAxis type="number" />
//                                 <YAxis type="category" dataKey="_id" width={100} />
//                                 <Tooltip formatter={(value, name) => [name === 'totalUnitsSold' ? value : `$${value.toLocaleString()}`, name === 'totalUnitsSold' ? 'Units Sold' : 'Revenue']} />
//                                 <Legend />
//                                 <Bar dataKey="totalUnitsSold" fill="#FF8042" name="Units Sold" />
//                             </BarChart>
//                         </ResponsiveContainer>
//                     </div>
//                 </div>

//                 {/* 5. Raw Data Table */}
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                     <h2 className="text-xl font-semibold mb-4 text-black">Raw Sales Data</h2>
//                     <div className="overflow-x-auto">
//                         <table className="min-w-full table-auto text-black">
//                             <thead>
//                                 <tr className="bg-gray-100">
//                                     <th className="px-4 py-2 text-left">Month</th>
//                                     <th className="px-4 py-2 text-left">Product</th>
//                                     <th className="px-4 py-2 text-left">Category</th>
//                                     <th className="px-4 py-2 text-left">Region</th>
//                                     <th className="px-4 py-2 text-right">Units Sold</th>
//                                     <th className="px-4 py-2 text-right">Revenue</th>
//                                     <th className="px-4 py-2 text-right">Cost</th>
//                                     <th className="px-4 py-2 text-right">Profit</th>
//                                     <th className="px-4 py-2 text-right">Profit Margin</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.allSalesData.map((sale, index) => (
//                                     <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
//                                         <td className="px-4 py-2">{sale.month}</td>
//                                         <td className="px-4 py-2">{sale.product}</td>
//                                         <td className="px-4 py-2">{sale.category}</td>
//                                         <td className="px-4 py-2">{sale.region}</td>
//                                         <td className="px-4 py-2 text-right">{sale.unitsSold.toLocaleString()}</td>
//                                         <td className="px-4 py-2 text-right">${sale.revenue.toLocaleString()}</td>
//                                         <td className="px-4 py-2 text-right">${sale.cost.toLocaleString()}</td>
//                                         <td className="px-4 py-2 text-right">${sale.profit.toLocaleString()}</td>
//                                         <td className="px-4 py-2 text-right">{sale.profitMargin.toFixed(1)}%</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }


'use client';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import AIInsightsPanel from '../../components/AllInsightsPanel';

// Color palette for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

// Custom Tooltip with better styling
const CustomTooltip = ({ active, payload, label, formatter }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
                <p className="text-gray-800 font-medium">{label}</p>
                {payload.map((entry, index) => (
                    <p key={index} className="text-sm" style={{ color: entry.color }}>
                        {entry.name}: {formatter ? formatter(entry.value) : entry.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

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

    if (loading) return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-indigo-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-indigo-100">
            <div className="text-red-500 text-center p-8 bg-white rounded-lg shadow-md">
                Error: {error}
            </div>
        </div>
    );

    if (!data.allSalesData.length) return (
        <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-50 to-indigo-100">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                No sales data found. Please upload some data to get started.
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-4 sm:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Sales Dashboard</h1>
                    <p className="text-gray-600 mt-2">Analyze your sales performance and trends</p>
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-6">
                    {/* Revenue Trend Over Time (Line Chart) */}
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Revenue Trend</h2>
                        <div className="h-64 sm:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data.revenueTrend} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="_id"
                                        tick={{ fontSize: 12 }}
                                        angle={-45}
                                        textAnchor="end"
                                        height={60}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 12 }}
                                        tickFormatter={(value) => `$${value / 1000}k`}
                                    />
                                    <Tooltip
                                        content={<CustomTooltip formatter={(value) => `$${value.toLocaleString()}`} />}
                                    />
                                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="totalRevenue"
                                        stroke="#0088FE"
                                        name="Revenue"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        activeDot={{ r: 6 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="totalProfit"
                                        stroke="#00C49F"
                                        name="Profit"
                                        strokeWidth={2}
                                        dot={{ r: 3 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Revenue by Category (Bar Chart) */}
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Revenue by Category</h2>
                        <div className="h-64 sm:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data.revenueByCategory} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                    <XAxis
                                        dataKey="_id"
                                        tick={{ fontSize: 12 }}
                                        angle={-45}
                                        textAnchor="end"
                                        height={60}
                                    />
                                    <YAxis
                                        tick={{ fontSize: 12 }}
                                        tickFormatter={(value) => `$${value / 1000}k`}
                                    />
                                    <Tooltip
                                        content={<CustomTooltip formatter={(value) => `$${value.toLocaleString()}`} />}
                                    />
                                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                                    <Bar
                                        dataKey="totalRevenue"
                                        fill="#8884d8"
                                        name="Revenue"
                                        radius={[4, 4, 0, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Sales Distribution by Region (Pie Chart) */}
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Sales by Region</h2>
                        <div className="h-64 sm:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={data.salesByRegion}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        innerRadius={60}
                                        paddingAngle={2}
                                        dataKey="totalRevenue"
                                        nameKey="_id"
                                        label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                                        labelLine={false}
                                    >
                                        {data.salesByRegion.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        content={<CustomTooltip formatter={(value) => `$${value.toLocaleString()}`} />}
                                    />
                                    <Legend
                                        wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                                        layout="vertical"
                                        verticalAlign="bottom"
                                        align="center"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Top Selling Products (Bar Chart) */}
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
                        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Top Products (Units Sold)</h2>
                        <div className="h-64 sm:h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={data.topProducts}
                                    layout="vertical"
                                    margin={{ top: 5, right: 20, left: 60, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={true} vertical={false} />
                                    <XAxis
                                        type="number"
                                        tick={{ fontSize: 12 }}
                                        tickFormatter={(value) => value.toLocaleString()}
                                    />
                                    <YAxis
                                        type="category"
                                        dataKey="_id"
                                        tick={{ fontSize: 12 }}
                                        width={80}
                                    />
                                    <Tooltip
                                        content={<CustomTooltip formatter={(value) => value.toLocaleString()} />}
                                    />
                                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                                    <Bar
                                        dataKey="totalUnitsSold"
                                        fill="#FF8042"
                                        name="Units Sold"
                                        radius={[0, 4, 4, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* AI Insights Panel - Full width */}
                <div className="mb-6">
                    <AIInsightsPanel insights={data.insights} loading={loading} />
                </div>

                {/* Raw Data Table */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Sales Data</h2>
                        <span className="text-sm text-gray-500">{data.allSalesData.length} records</span>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Profit</th>
                                        <th className="px-3 py-2 sm:px-4 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Margin</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {data.allSalesData.map((sale, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800">{sale.month}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800">{sale.product}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800">{sale.category}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800">{sale.region}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800 text-right">{sale.unitsSold.toLocaleString()}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800 text-right">${sale.revenue.toLocaleString()}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800 text-right">${sale.profit.toLocaleString()}</td>
                                            <td className="px-3 py-2 sm:px-4 sm:py-3 whitespace-nowrap text-sm text-gray-800 text-right">
                                                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${sale.profitMargin >= 40 ? 'bg-green-100 text-green-800' :
                                                        sale.profitMargin >= 25 ? 'bg-yellow-100 text-yellow-800' :
                                                            'bg-red-100 text-red-800'
                                                    }`}>
                                                    {sale.profitMargin.toFixed(1)}%
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}