import {
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  { name: "User Management", href: "/admin/users", icon: UsersIcon },
  {
    name: "Content Management",
    href: "/admin/content",
    icon: DocumentTextIcon,
  },
  { name: "Analytics", href: "/admin/analytics", icon: ChartBarIcon },
  { name: "Settings", href: "/admin/settings", icon: CogIcon },
];

const AdminSidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center justify-center bg-blue-600 text-white">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          {navigation.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3 size-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default AdminSidebar;
