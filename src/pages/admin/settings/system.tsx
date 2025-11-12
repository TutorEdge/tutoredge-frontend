import Link from "next/link";
import React from "react";

const SystemSettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
        <Link href="/admin/settings">
          <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200">
            Back to Settings
          </button>
        </Link>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">General Settings</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Site Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue="Learning Platform"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Site Description
            </label>
            <textarea
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
              defaultValue="A modern learning platform for students and tutors"
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">Security Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-gray-600">
                Require 2FA for all admin users
              </p>
            </div>
            <button className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="sr-only">Use setting</span>
              <span className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button className="rounded-lg border border-gray-300 px-6 py-2 transition-colors hover:bg-gray-50">
          Cancel
        </button>
        <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SystemSettingsPage;
