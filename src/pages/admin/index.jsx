import React from 'react';
import { 
  UsersIcon, 
  DocumentTextIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';
import StatsCard from '@/components/admin-dashboard/StatsCard';

const stats = [
  {
    title: 'Total Users',
    value: '1,234',
    icon: UsersIcon,
    color: 'bg-blue-500',
    change: '+12%',
  },
  {
    title: 'Total Content',
    value: '567',
    icon: DocumentTextIcon,
    color: 'bg-green-500',
    change: '+8%',
  },
  {
    title: 'Revenue',
    value: '$12,345',
    icon: CurrencyDollarIcon,
    color: 'bg-purple-500',
    change: '+15%',
  },
  {
    title: 'Active Sessions',
    value: '89',
    icon: ChartBarIcon,
    color: 'bg-orange-500',
    change: '+3%',
  },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center space-x-3 text-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>New user registered</span>
                <span className="text-gray-500 ml-auto">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              Add New User
            </button>
            <button className="w-full text-left px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
              Create Content
            </button>
            <button className="w-full text-left px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
