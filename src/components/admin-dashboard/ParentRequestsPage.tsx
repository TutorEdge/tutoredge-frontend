import { Search } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import NavBar from '@/components/navbar/NavBar';
import apiClient from '@/lib/apiClient'; // 1. Import your API client

// 2. Define a type for the API data
interface ParentRequest {
  id: string;
  parent: { name: string };
  tutor: { name: string };
  academicNeeds: string[];
  status: string;
  createdAt: string;
}

// Reusable component for status pills
const StatusPill = ({ status }: { status: string }) => {
  const statusColors: { [key: string]: string } = {
    Active: 'bg-green-100 text-green-800',
    Inactive: 'bg-gray-100 text-gray-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Assigned: 'bg-blue-100 text-blue-800',
    Completed: 'bg-purple-100 text-purple-800',
  };
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium capitalize ${
        statusColors[status] || 'bg-gray-100 text-gray-800'
      }`}
    >
      {status}
    </span>
  );
};

// --- Main Page Component ---
const ParentRequestsPage = () => {
  // 3. Remove mockData and add state for API data
  const [requests, setRequests] = useState<ParentRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [subjectFilter, setSubjectFilter] = useState('All');

  // 4. Fetch data from the API on component mount
  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await apiClient.get('/parent/requests?type=all');
        setRequests(response.data || []);
      } catch (err: any) {
        setError('Failed to fetch requests. Are you logged in as an Admin?');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRequests();
  }, []); // Empty array means this runs once on load

  // 5. Update useMemo to use the 'requests' state
  const filteredRequests = useMemo(() => {
    return requests
      .filter((req) => statusFilter === 'All' || req.status === statusFilter)
      .filter(
        (req) =>
          subjectFilter === 'All' || req.academicNeeds.includes(subjectFilter),
      )
      .filter(
        (req) =>
          req.parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (req.tutor &&
            req.tutor.name.toLowerCase().includes(searchQuery.toLowerCase())),
      );
  }, [searchQuery, statusFilter, subjectFilter, requests]);

  // 6. Add loading and error states to the UI
  if (isLoading) {
    return <div className="p-4">Loading requests...</div>;
  }
  if (error) {
    return <div className="p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <NavBar/>
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
            <option value="Pending">Pending</option>
            <option value="Assigned">Assigned</option>
            <option value="Completed">Completed</option>
          </select>
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="w-full rounded-md border-gray-300 sm:w-auto"
          >
            <option value="All">All Subjects</option>
            {/* Note: This list is static. You might want to dynamically populate it from the API data */}
            <option>Math</option>
            <option>Science</option>
            <option>History</option>
            <option>Spanish</option>
            <option>Physics</option>
            <option>All</option>
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
                  {req.parent.name}
                </td>
                <td className="p-4 text-gray-600">
                  {req.tutor?.name || 'N/A'}
                </td>
                <td className="p-4 text-gray-600">
                  {req.academicNeeds.join(', ')}
                </td>
                <td className="p-4">
                  <StatusPill status={req.status} />
                </td>
                <td className="p-4 text-gray-600">
                  {new Date(req.createdAt).toLocaleDateString()}
                </td>
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
