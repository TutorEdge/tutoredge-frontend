import React from 'react';

import AdminDashboardLayout from '@/components/admin-dashboard/AdminDashboardLayout';
import ParentRequestsPage from '@/components/admin-dashboard/ParentRequestsPage';

const Requests = () => {
  return (
    <AdminDashboardLayout>
      <ParentRequestsPage />
    </AdminDashboardLayout>
  );
};

export default Requests;
