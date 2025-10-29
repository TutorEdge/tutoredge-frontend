import React from 'react';

import AdminDashboardLayout from '@/components/admin-dashboard/AdminDashboardLayout';
import PaymentLogsPage from '@/components/admin-dashboard/PaymentLogsPage';

const Payments = () => {
  return (
    <AdminDashboardLayout>
      <PaymentLogsPage />
    </AdminDashboardLayout>
  );
};

export default Payments;
