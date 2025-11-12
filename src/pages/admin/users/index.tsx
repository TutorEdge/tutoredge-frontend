import React from "react";

import UserCard from "@/components/admin-dashboard/UserCard";

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Student",
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Tutor",
    status: "active",
    joinDate: "2024-01-10",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Admin",
    status: "inactive",
    joinDate: "2024-01-05",
  },
];

const UserManagementPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          Add New User
        </button>
      </div>

      <div className="flex space-x-4">
        <select className="rounded-lg border border-gray-300 px-3 py-2">
          <option>All Roles</option>
          <option>Student</option>
          <option>Tutor</option>
          <option>Admin</option>
        </select>
        <select className="rounded-lg border border-gray-300 px-3 py-2">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <input
          type="text"
          placeholder="Search users..."
          className="flex-1 rounded-lg border border-gray-300 px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserManagementPage;
