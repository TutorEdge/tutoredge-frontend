import { Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';

// Assuming your Button is in src/components/ui

// --- Mock Data ---
// In a real app, this would be fetched from your API
const mockApplications = [
  {
    id: 1,
    name: 'Ethan Harper',
    subjects: 'Mathematics, Physics',
    appliedDate: '2025-10-14',
    status: 'Pending',
  },
  {
    id: 2,
    name: 'Olivia Bennett',
    subjects: 'English Literature, History',
    appliedDate: '2025-10-13',
    status: 'Approved',
  },
  {
    id: 3,
    name: 'Noah Carter',
    subjects: 'Computer Science, Programming',
    appliedDate: '2025-10-12',
    status: 'Rejected',
  },
  {
    id: 4,
    name: 'Ava Morgan',
    subjects: 'Biology, Chemistry',
    appliedDate: '2025-10-11',
    status: 'Pending',
  },
  {
    id: 5,
    name: 'Liam Foster',
    subjects: 'Economics, Finance',
    appliedDate: '2025-10-10',
    status: 'Approved',
  },
];

// Reusable component for status pills
const StatusPill = ({ status }: { status: string }) => {
  const statusColors: { [key: string]: string } = {
    Pending: 'bg-yellow-100 text-yellow-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[status] || 'bg-gray-100 text-gray-800'}`}
    >
      {status}
    </span>
  );
};

// --- Main Page Component ---
const TutorApplicationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredApplications = useMemo(() => {
    return mockApplications
      .filter((app) => statusFilter === 'All' || app.status === statusFilter)
      .filter((app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
  }, [searchQuery, statusFilter]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Tutor Applications</h1>
        <p className="mt-1 text-gray-500">
          Review, approve, or reject new tutor applications.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row">
        <div className="relative grow">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by tutor name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border-gray-300 bg-white py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="shrink-0">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-md border-gray-300 sm:w-auto"
          >
            <option>All Statuses</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications Table */}
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-4 font-medium text-gray-600">Tutor Name</th>
              <th className="p-4 font-medium text-gray-600">Subject(s)</th>
              <th className="p-4 font-medium text-gray-600">
                Application Date
              </th>
              <th className="p-4 font-medium text-gray-600">Status</th>
              <th className="p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id} className="border-t">
                <td className="p-4 font-medium text-gray-800">{app.name}</td>
                <td className="p-4 text-gray-600">{app.subjects}</td>
                <td className="p-4 text-gray-600">{app.appliedDate}</td>
                <td className="p-4">
                  <StatusPill status={app.status} />
                </td>
                <td className="p-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Review
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredApplications.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No applications found for the selected filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorApplicationsPage;
