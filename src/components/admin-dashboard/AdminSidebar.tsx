import {
  BellRing,
  LayoutDashboard,
  Receipt,
  UserCheck,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// Data for admin navigation links
const navLinks = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/applications', label: 'Tutor Applications', icon: UserCheck },
  { href: '/admin/requests', label: 'Parent Requests', icon: BellRing },
  { href: '/admin/users', label: 'User Management', icon: Users },
  { href: '/admin/payments', label: 'Payment Logs', icon: Receipt },
];

const AdminSidebar = () => {
  const router = useRouter();

  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-800 text-white">
      <div className="flex flex-col gap-4 p-4">
        <Link href="/admin/dashboard" className="flex items-center gap-2 p-2">
          <Image
            src="/images/logo.png"
            alt="TutorEdge Logo"
            width={150}
            height={150}
          />
        </Link>

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
                      ? 'bg-slate-700 text-white'
                      : 'text-gray-400 hover:bg-slate-700 hover:text-white'
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

export default AdminSidebar;
