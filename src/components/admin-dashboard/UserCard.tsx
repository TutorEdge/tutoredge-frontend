import React from 'react';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 font-semibold">
            {user.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{user.name}</h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Role:</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            user.role === 'Admin' 
              ? 'bg-purple-100 text-purple-800'
              : user.role === 'Tutor'
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {user.role}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Status:</span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            user.status === 'active' 
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {user.status}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Joined:</span>
          <span>{new Date(user.joinDate).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <Link
          href={`/admin/users/${user.id}`}
          className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          View Details
        </Link>
        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Edit
        </button>
      </div>
    </div>
  );
};

export default UserCard;
