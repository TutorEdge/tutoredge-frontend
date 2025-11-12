import React from "react";

const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold">User Growth</h2>
          <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
            <p className="text-gray-500">User Growth Chart</p>
          </div>
        </div>

        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-lg font-semibold">Content Performance</h2>
          <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100">
            <p className="text-gray-500">Content Performance Chart</p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">Recent Reports</h2>
        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between border-b border-gray-200 py-3"
            >
              <div>
                <p className="font-medium">Monthly Report - January 2024</p>
                <p className="text-sm text-gray-600">
                  Generated on Jan 20, 2024
                </p>
              </div>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
