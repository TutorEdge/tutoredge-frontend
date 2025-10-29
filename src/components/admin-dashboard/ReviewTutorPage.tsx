import { Check, X } from 'lucide-react';
import React from 'react';

import Button from '@/components/ui/Button'; // Assuming your Button is in src/components/ui

// --- Type Definition for the application data ---
type TutorApplication = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  experience: string;
  college: string;
  qualifications: string;
  subjects: string;
  status: string;
};

// --- A reusable component to display data fields cleanly ---
const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium text-gray-800">{value}</p>
  </div>
);

// --- Main Page Component ---
const ReviewTutorPage: React.FC<{ application: TutorApplication }> = ({
  application,
}) => {
  const handleApprove = () => {
    // --- FOR BACKEND TEAM ---
    // This sends a request to approve the application
    // await fetch(`/api/admin/applications/${application.id}/approve`, { method: 'POST' });
  };

  const handleReject = () => {
    // --- FOR BACKEND TEAM ---
    // This sends a request to reject the application
    // await fetch(`/api/admin/applications/${application.id}/reject`, { method: 'POST' });
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header with Action Buttons */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Reviewing: {application.name}
          </h1>
          <p className="mt-1 text-gray-500">
            Review the applicant&apso;s details and take action.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleReject}
            variant="dark"
            className="bg-red-100 text-red-700 hover:bg-red-200"
          >
            <X className="mr-2 size-4" />
            Reject Application
          </Button>
          <Button onClick={handleApprove}>
            <Check className="mr-2 size-4" />
            Approve Application
          </Button>
        </div>
      </div>

      {/* Details Card */}
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        {/* Contact Information */}
        <section>
          <h2 className="text-xl font-bold text-gray-800">
            Contact Information
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 border-t pt-4 sm:grid-cols-2">
            <DetailItem label="Full Name" value={application.name} />
            <DetailItem label="Email Address" value={application.email} />
            <DetailItem label="Phone Number" value={application.phone} />
            <DetailItem label="Address" value={application.address} />
          </div>
        </section>

        {/* Experience */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">
            Experience & Qualifications
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 border-t pt-4 sm:grid-cols-2">
            <DetailItem
              label="Years of Experience"
              value={application.experience}
            />
            <DetailItem
              label="College/University"
              value={application.college}
            />
            <DetailItem
              label="Qualifications"
              value={application.qualifications}
            />
          </div>
        </section>

        {/* Subjects */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">Subjects</h2>
          <div className="mt-4 border-t pt-4">
            <DetailItem label="Subjects Offered" value={application.subjects} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReviewTutorPage;
