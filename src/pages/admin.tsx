import React from 'react';
import AdminDashboardLayout from '@/components/admin-dashboard/AdminDashboardLayout';

interface AdminPageProps {
  children: React.ReactNode;
}

const AdminPage: React.FC<AdminPageProps> = ({ children }) => {
  return (
    <AdminDashboardLayout>
      {children}
    </AdminDashboardLayout>
  );
};

export default AdminPage;
