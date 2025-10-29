import { Search } from 'lucide-react';
import React, { useMemo, useState } from 'react';

// --- Mock Data ---
// In a real app, this would be fetched from your API
const mockParentRequests = [
  {
    id: 1,
    parentName: 'Peter Parker',
    tutorName: 'Chloe Clark',
    subject: 'Math, Physics',
    status: 'Active',
    requestedDate: '2024-07-22',
  },
  {
    id: 2,
    parentName: 'Jackson Reed',
    tutorName: 'Owen Reed',
    subject: 'Science',
    status: 'Inactive',
    requestedDate: '2024-07-21',
  },
  {
    id: 3,
    parentName: 'Isabella Hayes',
    tutorName: 'Lucas Hayes',
    subject: 'All',
    status: 'Active',
    requestedDate: '2024-07-19',
  },
  {
    id: 4,
    parentName: 'Aiden Parker',
    tutorName: 'Lily Parker',
    subject: 'History',
    status: 'Inactive',
    requestedDate: '2024-07-17',
  },
  {
    id: 5,
    parentName: 'Mia Bennett',
    tutorName: 'Ethan Bennett',
    subject: 'Spanish',
    status: 'Active',
    requestedDate: '2024-07-16',
  },
];

// Reusable component for status pills
const StatusPill = ({ status }: { status: string }) => {
  const statusColors: { [key: string]: string } = {
    Active: 'bg-green-100 text-green-800',
    Inactive: 'bg-gray-100 text-gray-800',
    // Add other statuses as needed
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[status] || 'bg-yellow-100 text-yellow-800'}`}
    >
      {status}
    </span>
  );
};

// --- Main Page Component ---
const ParentRequestsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [subjectFilter, setSubjectFilter] = useState('All');

  const filteredRequests = useMemo(() => {
    return mockParentRequests
      .filter((req) => statusFilter === 'All' || req.status === statusFilter)
      .filter(
        (req) => subjectFilter === 'All' || req.subject.includes(subjectFilter),
      )
      .filter(
        (req) =>
          req.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          req.tutorName.toLowerCase().includes(searchQuery.toLowerCase()),
      );
  }, [searchQuery, statusFilter, subjectFilter]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">Parent Requests</h1>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 rounded-xl border bg-white p-4 shadow-sm sm:flex-row">
        <div className="relative grow">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search by parent or tutor name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border-gray-300 bg-white py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex shrink-0 gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-md border-gray-300 sm:w-auto"
          >
            <option value="All">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="w-full rounded-md border-gray-300 sm:w-auto"
          >
            <option value="All">All Subjects</option>
            <option>Math</option>
            <option>Science</option>
            <option>History</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>

      {/* Requests Table */}
      <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
        <table className="w-full min-w-[800px] text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-4 font-medium text-gray-600">Parent Name</th>
              <th className="p-4 font-medium text-gray-600">Tutor Name</th>
              <th className="p-4 font-medium text-gray-600">Subject</th>
              <th className="p-4 font-medium text-gray-600">Status</th>
              <th className="p-4 font-medium text-gray-600">Requested Date</th>
              <th className="p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="p-4 font-medium text-gray-800">
                  {req.parentName}
                </td>
                <td className="p-4 text-gray-600">{req.tutorName}</td>
                <td className="p-4 text-gray-600">{req.subject}</td>
                <td className="p-4">
                  <StatusPill status={req.status} />
                </td>
                <td className="p-4 text-gray-600">{req.requestedDate}</td>
                <td className="p-4">
                  <a
                    href={`/admin/requests/${req.id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredRequests.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No parent requests found for the selected filters.
          </div>
        )}
      </div>
    </div>
  );
};

export default ParentRequestsPage;
