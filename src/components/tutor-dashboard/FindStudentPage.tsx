import React, { useMemo, useState } from 'react';

import Button from '../ui/Button';

// --- Mock Data (Updated with mode and location) ---
const mockRequestsData = [
  {
    id: 1,
    title: 'Looking for a Grade 10 Math tutor',
    subject: 'Math',
    grade: 'Grade 10',
    description:
      'Parent is seeking a tutor for their child in Grade 10 Math...',
    mode: 'Online',
    location: 'Any',
  },
  {
    id: 2,
    title: 'Seeking a Grade 11 Chemistry tutor',
    subject: 'Chemistry',
    grade: 'Grade 11',
    description:
      'Parent is looking for a tutor for their child in Grade 11 Chemistry...',
    mode: 'Offline',
    location: 'Lucknow',
  },
  {
    id: 3,
    title: 'Need a Grade 9 English tutor',
    subject: 'English',
    grade: 'Grade 9',
    description:
      'Parent is searching for a tutor for their child in Grade 9 English...',
    mode: 'Online',
    location: 'Any',
  },
  {
    id: 4,
    title: 'Searching for a Grade 12 Physics tutor',
    subject: 'Physics',
    grade: 'Grade 12',
    description:
      'Parent is seeking a tutor for their child in Grade 12 Physics...',
    mode: 'Offline',
    location: 'Kanpur',
  },
];

// --- A reusable card for each request (unchanged) ---
const RequestCard = ({
  request,
}: {
  request: (typeof mockRequestsData)[0];
}) => (
  <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 shadow-sm sm:flex-row sm:items-center">
    <div className="grow space-y-3">
      <h3 className="text-lg font-bold text-gray-800">{request.title}</h3>
      <p className="text-sm text-gray-600">{request.description}</p>
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
          {request.subject}
        </span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
          {request.grade}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${request.mode === 'Online' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}
        >
          {request.mode}
        </span>
        {request.mode === 'Offline' && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
            {request.location}
          </span>
        )}
      </div>
      <div className="pt-2">
        <Button
          variant="dark"
          className="bg-gray-800 text-white hover:bg-gray-700"
        >
          Request to Teach
        </Button>
      </div>
    </div>
  </div>
);

// --- Main Page Component ---
const FindStudentPage = () => {
  // 1. Added new state for mode and location filters
  const [subjectFilter, setSubjectFilter] = useState('All');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [modeFilter, setModeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');

  // 2. Updated filtering logic to include new filters
  const filteredRequests = useMemo(() => {
    return mockRequestsData.filter((req) => {
      const subjectMatch =
        subjectFilter === 'All' || req.subject === subjectFilter;
      const gradeMatch = gradeFilter === 'All' || req.grade === gradeFilter;
      const modeMatch = modeFilter === 'All' || req.mode === modeFilter;
      // Location filter only applies if the mode is 'Offline'
      const locationMatch =
        modeFilter !== 'Offline' ||
        locationFilter === 'All' ||
        req.location === locationFilter;

      return subjectMatch && gradeMatch && modeMatch && locationMatch;
    });
  }, [subjectFilter, gradeFilter, modeFilter, locationFilter]);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Find New Students</h1>
        <p className="mt-1 text-gray-500">
          Browse and apply for AI-matched tutoring opportunities.
        </p>
      </div>

      {/* 3. Updated Filters UI */}
      <div className="grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <label
            htmlFor="subject-filter"
            className="text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <select
            id="subject-filter"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300"
          >
            <option>All</option>
            <option>Math</option>
            <option>Chemistry</option>
            <option>English</option>
            <option>Physics</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="grade-filter"
            className="text-sm font-medium text-gray-700"
          >
            Grade
          </label>
          <select
            id="grade-filter"
            value={gradeFilter}
            onChange={(e) => setGradeFilter(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300"
          >
            <option>All</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="mode-filter"
            className="text-sm font-medium text-gray-700"
          >
            Mode
          </label>
          <select
            id="mode-filter"
            value={modeFilter}
            onChange={(e) => setModeFilter(e.target.value)}
            className="mt-1 w-full rounded-md border-gray-300"
          >
            <option>All</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>
        {/* Location filter is only shown when 'Offline' is selected */}
        <div
          className={`transition-opacity duration-300 ${modeFilter === 'Offline' ? 'opacity-100' : 'opacity-50'}`}
        >
          <label
            htmlFor="location-filter"
            className="text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <select
            id="location-filter"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            disabled={modeFilter !== 'Offline'}
            className="mt-1 w-full rounded-md border-gray-300"
          >
            <option>All</option>
            <option>Lucknow</option>
            <option>Kanpur</option>
            <option>Delhi</option>
          </select>
        </div>
      </div>

      {/* List of Requests */}
      <div className="space-y-6">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))
        ) : (
          <div className="py-12 text-center text-gray-500">
            <p>No matching student requests found.</p>
            <p className="text-sm">Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindStudentPage;
