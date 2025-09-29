import {
  Calendar,
  DollarSign,
  Home,
  Library,
  Search,
  Users,
  // User icon is no longer needed here
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// 1. Removed the 'Profile' link from the data array
const navLinks = [
  { href: '/tutor/dashboard', label: 'Home', icon: Home },
  { href: '/tutor/students', label: 'My Students', icon: Users },
  { href: '/tutor/schedule', label: 'Schedule & Availability', icon: Calendar },
  { href: '/tutor/library', label: 'Content Library', icon: Library },
  { href: '/tutor/find-student', label: 'Find a Student', icon: Search },
  { href: '/tutor/earnings', label: 'Earnings', icon: DollarSign },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      <div className="flex flex-col gap-4 p-4">
        {/* 2. Wrapped the entire profile section in a Link */}
        <Link
          href="/tutor/profile"
          className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-100"
        >
          <Image
            src="/images/tutors/tutor-4.jpg" // Placeholder tutor image
            alt="Tutor profile picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="font-medium text-gray-800">Dr. Amelia Carter</h1>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = router.pathname.startsWith(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                <Icon className="size-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
