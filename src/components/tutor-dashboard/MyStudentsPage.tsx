import { Search } from 'lucide-react';
import React, { useState } from 'react';

import StudentCard from './StudentCard';

// Mock data updated to remove imageUrl
export const mockStudentsData = [
  { id: '1', name: 'Ethan Carter', grade: 'Grade 10' },
  { id: '2', name: 'Olivia Bennett', grade: 'Grade 11' },
  { id: '3', name: 'Noah Thompson', grade: 'Grade 9' },
  { id: '4', name: 'Ava Harper', grade: 'Grade 12' },
  { id: '5', name: 'Liam Foster', grade: 'Grade 10' },
  { id: '6', name: 'Isabella Hayes', grade: 'Grade 11' },
  { id: '7', name: 'Mason Reid', grade: 'Grade 8' },
  { id: '8', name: 'Sophia Cruz', grade: 'Grade 12' },
];

const MyStudentsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = mockStudentsData.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">My Students</h1>

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

      {filteredStudents.length > 0 ? (
        // Changed lg:grid-cols-6 to lg:grid-cols-5
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <div className="mt-8 text-center text-gray-500">
          <p>No students found for &quot;{searchQuery}&quot;.</p>
        </div>
      )}
    </div>
  );
};

export default MyStudentsPage;
