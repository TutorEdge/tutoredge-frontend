import React from 'react';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
  change: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, color, change }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="text-sm text-green-600 font-medium">{change} from last month</span>
      </div>
    </div>
  );
};

export default StatsCard;
