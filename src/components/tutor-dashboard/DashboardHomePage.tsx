import React from 'react';

// Mock data - in a real app, this would come from your API
const upcomingSessions = [
  {
    student: 'Ethan Harper',
    subject: 'Calculus I',
    dateTime: 'July 20, 2024, 2:00 PM',
    status: 'Scheduled',
  },
  {
    student: 'Olivia Bennett',
    subject: 'Organic Chemistry',
    dateTime: 'July 21, 2024, 10:00 AM',
    status: 'Scheduled',
  },
  {
    student: 'Noah Thompson',
    subject: 'Physics II',
    dateTime: 'July 22, 2024, 4:00 PM',
    status: 'Scheduled',
  },
];

// A small component for the status pill in the table
const StatusPill = ({ status }: { status: string }) => (
  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
    {status}
  </span>
);

const DashboardHomePage = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome, Dr. Carter</h1>

      {/* Quick Stats Widgets */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">Total Active Students</h3>
          <p className="text-3xl font-bold text-gray-800">12</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">Earnings This Month</h3>
          <p className="text-3xl font-bold text-gray-800">$1,250</p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">Assignments to Grade</h3>
          <p className="text-3xl font-bold text-gray-800">3</p>
        </div>
      </div>

      {/* Upcoming Sessions Table */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Upcoming Sessions
        </h2>
        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-4 font-medium text-gray-600">Student</th>
                <th className="p-4 font-medium text-gray-600">Subject</th>
                <th className="p-4 font-medium text-gray-600">Date & Time</th>
                <th className="p-4 font-medium text-gray-600">Status</th>
                <th className="p-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {upcomingSessions.map((session, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 text-gray-800">{session.student}</td>
                  <td className="p-4 text-gray-600">{session.subject}</td>
                  <td className="p-4 text-gray-600">{session.dateTime}</td>
                  <td className="p-4">
                    <StatusPill status={session.status} />
                  </td>
                  <td className="p-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      View Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
