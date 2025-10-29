import React from 'react';

import AdminSidebar from './AdminSidebar';

type AdminDashboardLayoutProps = {
  children: React.ReactNode;
};

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50 font-sans">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
};

export default AdminDashboardLayout;
