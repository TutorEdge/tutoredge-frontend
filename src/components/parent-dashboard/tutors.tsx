import Image from 'next/image';
import Link from 'next/link';

import ParentDashboardLayout from '@/layouts/ParentDashboardLayout';

const tutors = [
  {
    id: 'ananya',
    name: 'Ananya Gupta',
    subject: 'Mathematics',
    rating: 4.9,
    avatar: '/images/tutors/tutor-1.jpg',
  },
  {
    id: 'rahul',
    name: 'Rahul Mehta',
    subject: 'Physics',
    rating: 4.8,
    avatar: '/images/tutors/tutor-2.jpg',
  },
  {
    id: 'sneha',
    name: 'Sneha Iyer',
    subject: 'Chemistry',
    rating: 4.7,
    avatar: '/images/tutors/tutor-3.jpg',
  },
];

export default function StudentTutorsPage() {
  return (
    <ParentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">My Tutors</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="overflow-hidden rounded-xl border bg-white"
          >
            <div className="relative h-40 w-full">
              <Image
                src={tutor.avatar}
                alt={tutor.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-semibold">{tutor.name}</div>
                  <div className="text-sm text-gray-600">{tutor.subject}</div>
                </div>
                <div className="rounded-md bg-blue-50 px-2 py-1 text-sm font-semibold text-blue-700">
                  {tutor.rating}★
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Link
                  href={`/parent/tutor/${tutor.id}`}
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white"
                >
                  View profile
                </Link>
                <Link
                  href={`/parent/tutor/${tutor.id}`}
                  className="text-sm font-semibold text-blue-700"
                >
                  Request session
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ParentDashboardLayout>
  );
}
