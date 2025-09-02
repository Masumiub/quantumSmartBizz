// app/userdashboard/page.jsx
'use client';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import AIInsightsPanel from '../components/AllInsightsPanel';

// Icons
const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const RevenueIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" className='text-purple-500' strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ProfitIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" className='text-green-500' strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const ProductsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" className='text-blue-500' strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const SalesIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" className='text-red-500' strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const StatsCard = ({ title, value, subtitle, icon, color }) => (
  <div className={`bg-gradient-to-br ${color} p-6 rounded-2xl shadow-lg text-white`}>
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-sm opacity-90">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        {subtitle && <p className="text-sm opacity-80 mt-1">{subtitle}</p>}
      </div>
      <div className="p-3 bg-white bg-opacity-20 rounded-full">
        {icon}
      </div>
    </div>
  </div>
);

const RecentSalesItem = ({ sale }) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
    <div className="flex items-center">
      <div className="p-2 bg-purple-100 rounded-lg">
        <SalesIcon />
      </div>
      <div className="ml-4">
        <p className="font-medium text-gray-800">{sale.product}</p>
        <p className="text-sm text-gray-500">{sale.month} • {sale.region}</p>
      </div>
    </div>
    <div className="text-right">
      <p className="font-semibold text-gray-800">${sale.revenue?.toLocaleString()}</p>
      <p className="text-sm text-green-600">{sale.unitsSold} units</p>
    </div>
  </div>
);

export default function DashboardHome() {
  const { data: session } = useSession();
  const [stats, setStats] = useState(null);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [statsResponse, salesResponse] = await Promise.all([
          fetch('/api/user-dashboard/stats'),
          fetch('/api/sales')
        ]);

        const statsData = await statsResponse.json();
        const salesData = await salesResponse.json();

        if (statsData.success) setStats(statsData.data);
        if (salesData.success) setInsights(salesData.data.insights || []);
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const getUserInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'U';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your business.</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - User Profile and Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {getUserInitials(session?.user?.name)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{session?.user?.name || 'User'}</h2>
                    <p className="text-gray-600">{session?.user?.email || 'user@example.com'}</p>
                    <div className="flex items-center mt-1">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-gray-500">Online • Admin</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    <UserIcon className="w-4 h-4 mr-1" />
                    Premium
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Member since 2024</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatsCard
                title="Total Revenue"
                value={`$${stats?.totalRevenue?.toLocaleString() || '0'}`}
                subtitle="All-time sales revenue"
                icon={<RevenueIcon />}
                color="from-purple-600 to-indigo-600"
              />
              <StatsCard
                title="Total Profit"
                value={`$${stats?.totalProfit?.toLocaleString() || '0'}`}
                subtitle="Net profit margin"
                icon={<ProfitIcon />}
                color="from-green-600 to-emerald-600"
              />
              <StatsCard
                title="Products Sold"
                value={stats?.totalUnits?.toLocaleString() || '0'}
                subtitle="Total units sold"
                icon={<ProductsIcon />}
                color="from-blue-600 to-cyan-600"
              />
              <StatsCard
                title="Active Products"
                value={stats?.productCount || '0'}
                subtitle="Unique products in catalog"
                icon={<SalesIcon />}
                color="from-orange-600 to-red-600"
              />
            </div>

            {/* Recent Sales */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800">Recent Sales</h3>
                <span className="text-sm text-purple-600 font-medium">View all</span>
              </div>
              <div className="space-y-2">
                {stats?.recentSales?.map((sale, index) => (
                  <RecentSalesItem key={index} sale={sale} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Insights and Quick Actions */}
          <div className="space-y-6">
            {/* AI Insights Panel */}
            <AIInsightsPanel insights={insights} loading={loading} />

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Profit Margin</span>
                  <span className="font-semibold text-green-600">
                    {stats?.totalRevenue > 0 ? ((stats.totalProfit / stats.totalRevenue) * 100).toFixed(1) : '0'}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Top Product</span>
                  <span className="font-semibold text-purple-600">
                    {stats?.topProduct?._id || 'N/A'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Active Regions</span>
                  <span className="font-semibold text-blue-600">6 regions</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-between">
                  <span>Add New Sale</span>
                  <ActivityIcon />
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-between">
                  <span>Generate Report</span>
                  <ActivityIcon />
                </button>
                <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-between">
                  <span>View Analytics</span>
                  <ActivityIcon />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}