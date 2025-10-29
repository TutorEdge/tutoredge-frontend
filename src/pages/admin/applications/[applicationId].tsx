import React from 'react';

import AdminDashboardLayout from '@/components/admin-dashboard/AdminDashboardLayout';
import ReviewTutorPage from '@/components/admin-dashboard/ReviewTutorPage';

// In a real app, you would fetch the specific application data from your API
// For now, we'll create some detailed mock data to use.
const mockApplicationDetails = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@email.com',
  phone: '(555) 123-4567',
  address: '123 Elm Street, Anytown, USA',
  experience: '5 years',
  college: 'Anytown University',
  qualifications: 'PhD in Mathematics',
  subjects: 'Algebra, Calculus, Geometry',
  status: 'Pending',
};

const ReviewApplication = () => {
  // const router = useRouter();
  // const { applicationId } = router.query;

  // Here, we just use the mock data.
  // In a real app, you would fetch data using applicationId
  const application = mockApplicationDetails;

  // Keep the check in case fetching fails in the future
  if (!application) {
    return (
      <AdminDashboardLayout>
        <p>Application not found.</p>
      </AdminDashboardLayout>
    );
  }

  return (
    <AdminDashboardLayout>
      <ReviewTutorPage application={application} />
    </AdminDashboardLayout>
  );
};

export default ReviewApplication;
