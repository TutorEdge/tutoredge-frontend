// 1. Replaced 'next/image' with the icon import
import { CircleUserRound } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Define the type for a single student's data (imageUrl is no longer needed)
interface Student {
  id: string;
  name: string;
  grade: string;
}

interface StudentCardProps {
  student: Student;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Link
      href={`/tutor/students/${student.id}`}
      className="group block text-center"
    >
      {/* 2. Updated card styling for a cleaner, border-based look */}
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-xl border bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg">
        {/* 3. Replaced the Image component with the Lucide icon */}
        <CircleUserRound className="size-20 text-gray-300" />
        <div>
          <p className="font-medium text-gray-800">{student.name}</p>
          <p className="text-sm text-gray-500">{student.grade}</p>
        </div>
      </div>
    </Link>
  );
};

export default StudentCard;
