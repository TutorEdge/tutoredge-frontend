import React from 'react';

import AdminDashboardLayout from '@/components/admin-dashboard/AdminDashboardLayout';
import UserManagementPage from '@/components/admin-dashboard/UserManagementPage';

const Users = () => {
  return (
    <AdminDashboardLayout>
      <UserManagementPage />
    </AdminDashboardLayout>
  );
};

export default Users;
