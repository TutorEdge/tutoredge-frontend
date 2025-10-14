import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const UserDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = {
    id: id as string,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Student',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-01-20',
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">User Details</h1>
        <Link href="/admin/users">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Back to Users
          </button>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <p className="font-medium">{user.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Role</label>
                <p className="font-medium">{user.role}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Account Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <p className="font-medium">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'active' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {user.status}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Join Date</label>
                <p className="font-medium">{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Login</label>
                <p className="font-medium">{new Date(user.lastLogin).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Edit User
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Deactivate User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
