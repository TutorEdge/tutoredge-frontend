import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminDashboardLayout: React.FC = () => {
  return (
    <div className="admin-dashboard-layout">
      <AdminSidebar />
      <main className="admin-main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboardLayout;
