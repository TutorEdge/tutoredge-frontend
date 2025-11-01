import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useAuthStore } from '@/stores/useAuthStore';

const navLinks = [
  { href: '/subjects', label: 'Subjects' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/pricing', label: 'Pricing' },
];

const NavBar = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  // Get the whole user object first
  const user = useAuthStore((state) => state.user);

  // Safely get the role from the user object (it will be null if logged out)
  const userRole = user ? user.role : null;

  const getDashboardUrl = () => {
    switch (userRole) {
      case 'tutor':
        return '/tutor/dashboard';
      case 'parent':
        return '/parent/dashboard';
      case 'admin':
        return '/admin/dashboard';
      default:
        return '/';
    }
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-gray-200 px-4 py-3 sm:px-10">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="TutorEdge Logo"
          width={150}
          height={40}
          priority
        />
      </Link>

      <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-800 transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden h-6 w-px bg-gray-200 md:block" />

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            // Logged In State: Show profile icon linking to dashboard
            <Link href={getDashboardUrl()}>
              <button
                className="flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                aria-label="Dashboard"
              >
                <CircleUserRound size={24} />
              </button>
            </Link>
          ) : (
            // Logged Out State: Show CTA buttons
            <>
              <Link href="/find-a-tutor">
                <button className="h-10 rounded-xl bg-primary px-4 text-sm font-bold text-white transition-colors hover:bg-[#1262a6]">
                  Find a Tutor
                </button>
              </Link>
              <Link href="/become-a-tutor">
                <button className="hidden h-10 rounded-xl bg-gray-100 px-4 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-200 sm:block">
                  Become a Tutor
                </button>
              </Link>
              <Link href="/login">
                {' '}
                {/* Changed from /signin to /login */}
                <button className="hidden h-10 rounded-xl bg-black px-4 text-sm font-bold text-white transition-colors hover:bg-gray-700 sm:block">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
