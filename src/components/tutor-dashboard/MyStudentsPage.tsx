import { Search, UserCheck, Users, UserX } from 'lucide-react';
import React, { useMemo, useState } from 'react';

import StudentCard from './StudentCard';

// 1. Updated mock data to include a 'status' for filtering
export const mockStudentsData = [
  { id: '1', name: 'Ethan Carter', grade: 'Grade 10', status: 'active' },
  { id: '2', name: 'Olivia Bennett', grade: 'Grade 11', status: 'active' },
  { id: '3', name: 'Noah Thompson', grade: 'Grade 9', status: 'inactive' },
  { id: '4', name: 'Ava Harper', grade: 'Grade 12', status: 'active' },
  { id: '5', name: 'Liam Foster', grade: 'Grade 10', status: 'active' },
  { id: '6', name: 'Isabella Hayes', grade: 'Grade 11', status: 'inactive' },
  { id: '7', name: 'Mason Reid', grade: 'Grade 8', status: 'active' },
  { id: '8', name: 'Sophia Cruz', grade: 'Grade 12', status: 'active' },
];

// Define a type for the filter state
type StudentFilter = 'total' | 'active' | 'inactive';

// 2. Updated StatCard to be a clickable button with an active state
const StatCard = ({
  title,
  value,
  icon: Icon,
  isActive,
  onClick,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`rounded-xl p-6 text-left shadow-sm transition-all duration-200
      ${isActive ? 'border-2 border-blue-500 bg-blue-50' : 'border bg-white hover:border-gray-300'}`}
  >
    <div className="flex items-center justify-between">
      <h3 className="text-gray-500">{title}</h3>
      <Icon
        className={`size-6 ${isActive ? 'text-blue-600' : 'text-gray-400'}`}
      />
    </div>
    <p className="mt-4 text-3xl font-bold text-gray-800">{value}</p>
  </button>
);

const MyStudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // 3. New state to track the active filter tile
  const [activeFilter, setActiveFilter] = useState<StudentFilter>('total');

  // 4. Filtering logic now uses both activeFilter and searchQuery
  const filteredStudents = useMemo(() => {
    return mockStudentsData
      .filter((student) => {
        if (activeFilter === 'total') return true;
        return student.status === activeFilter;
      })
      .filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
  }, [activeFilter, searchQuery]);

  // Calculate stats based on the full dataset
  const totalStudents = mockStudentsData.length;
  const activeStudents = mockStudentsData.filter(
    (s) => s.status === 'active',
  ).length;
  const inactiveStudents = mockStudentsData.filter(
    (s) => s.status === 'inactive',
  ).length;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Students</h1>
        <p className="mt-1 text-gray-500">
          View and manage your student roster.
        </p>
      </div>

      {/* --- 5. Stat Cards are now interactive buttons --- */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <StatCard
          title="Total Students Taught"
          value={String(totalStudents)}
          icon={Users}
          isActive={activeFilter === 'total'}
          onClick={() => setActiveFilter('total')}
        />
        <StatCard
          title="Active Students"
          value={String(activeStudents)}
          icon={UserCheck}
          isActive={activeFilter === 'active'}
          onClick={() => setActiveFilter('active')}
        />
        <StatCard
          title="Inactive Students"
          value={String(inactiveStudents)}
          icon={UserX}
          isActive={activeFilter === 'inactive'}
          onClick={() => setActiveFilter('inactive')}
        />
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search students by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border bg-white py-2 pl-10 pr-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Student Grid */}
      {filteredStudents.length > 0 ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-lg border-2 border-dashed bg-gray-50 py-12 text-center text-gray-500">
          <p>No students found.</p>
          <p className="text-sm">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
};

export default MyStudentsPage;
