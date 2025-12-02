import { CircleUserRound, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { useAuthStore } from '@/stores/useAuthStore';

const navLinks = [
  { href: '/subjects', label: 'Subjects' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/pricing', label: 'Pricing' },
];

const NavBar = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const userRole = user ? user.role : null;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 shadow-md backdrop-blur-lg transition-all">
      {/* Main container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 sm:px-10">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo1.png"
            alt="TutorEdge Logo"
            width={50}
            height={50}
            priority
            className="transition-transform hover:scale-110"
          />
          <span className="text-2xl font-extrabold text-blue-600 hover:text-blue-500 transition-colors">
            TutorEdge
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-lg font-medium text-gray-700 transition-colors hover:text-blue-600 group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA / Profile */}
        <div className="hidden md:flex items-center gap-3">
          {isLoggedIn ? (
            <Link href={getDashboardUrl()}>
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:bg-gray-200 hover:shadow-lg">
                <CircleUserRound size={26} />
              </button>
            </Link>
          ) : (
            <>
              <Link href="../find-tutor-flow/create-account">
                <button className="h-10 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg">
                  Find a Tutor
                </button>
              </Link>

              <Link href="../tutor-flow/tutor-registration">
                <button className="hidden h-10 rounded-xl bg-gray-100 px-5 text-sm font-semibold text-gray-800 shadow-md transition-all hover:bg-gray-200 hover:shadow-lg sm:block">
                  Become a Tutor
                </button>
              </Link>

              <Link href="/login">
                <button className="hidden h-10 rounded-xl bg-black px-5 text-sm font-semibold text-white shadow-md transition-all hover:bg-gray-800 hover:shadow-lg sm:block">
                  Login
                </button>
              </Link>

              <Link
                href="/sitemap"
                className="inline-block h-10 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-500 hover:shadow-lg"
              >
                Sitemap
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 shadow-lg backdrop-blur-md border-t border-gray-200 animate-slide-down">
          <nav className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg font-medium text-gray-700 transition-colors hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-4 pb-6">
            {isLoggedIn ? (
              <Link href={getDashboardUrl()}>
                <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:bg-gray-200 hover:shadow-lg">
                  <CircleUserRound size={26} />
                </button>
              </Link>
            ) : (
              <>
                <Link href="../find-tutor-flow/create-account">
                  <button className="w-40 h-10 rounded-xl bg-blue-600 text-white font-semibold shadow-md transition-all hover:bg-blue-700 hover:shadow-lg">
                    Find a Tutor
                  </button>
                </Link>
                <Link href="../tutor-flow/tutor-registration">
                  <button className="w-40 h-10 rounded-xl bg-gray-100 text-gray-800 font-semibold shadow-md transition-all hover:bg-gray-200 hover:shadow-lg">
                    Become a Tutor
                  </button>
                </Link>
                <Link href="/login">
                  <button className="w-40 h-10 rounded-xl bg-black text-white font-semibold shadow-md transition-all hover:bg-gray-800 hover:shadow-lg">
                    Login
                  </button>
                </Link>
                <Link
                  href="/sitemap"
                  className="w-40 h-10 rounded-xl bg-indigo-600 text-white font-semibold shadow-md transition-all hover:bg-indigo-500 hover:shadow-lg flex items-center justify-center"
                >
                  Sitemap
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default NavBar;
