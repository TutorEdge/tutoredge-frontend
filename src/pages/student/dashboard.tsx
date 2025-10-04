import Link from 'next/link';

import AttendanceDonut from '@/components/student-dashboard/AttendanceDonut';
import MarksChart from '@/components/student-dashboard/MarksChart';
import TestsComparison from '@/components/student-dashboard/TestsComparison';
import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function StudentDashboardPage() {
  return (
    <StudentDashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-600">
          Here is a quick overview of your learning.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">
            Upcoming Session
          </div>
          <div className="text-lg font-medium">
            Math with Ananya • Today 6:00 PM
          </div>
          <Link
            href="#"
            className="mt-3 inline-block text-sm font-semibold text-blue-700"
          >
            Join meeting
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">
            Pending Assignments
          </div>
          <div className="text-3xl font-bold">2</div>
          <Link
            href="/student/assignments"
            className="mt-3 inline-block text-sm font-semibold text-blue-700"
          >
            View assignments
          </Link>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">
            Payments
          </div>
          <div className="text-lg font-medium">Next due on 10 Oct</div>
          <Link
            href="/student/payments"
            className="mt-3 inline-block text-sm font-semibold text-blue-700"
          >
            Manage
          </Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5">
          <AttendanceDonut percentage={92} title="Attendance" />
        </div>
        <div className="rounded-xl border bg-white p-5 md:col-span-2">
          <MarksChart
            title="Subject-wise Marks"
            data={[
              { label: 'Math', value: 88 },
              { label: 'Sci', value: 76 },
              { label: 'Eng', value: 91 },
              { label: 'Hist', value: 72 },
              { label: 'Geo', value: 84 },
            ]}
          />
        </div>
      </div>

      <div className="mt-6 rounded-xl border bg-white p-5">
        <TestsComparison
          title="Last 5 Tests: Previous vs Current"
          data={[
            { label: 'T1', previous: 72, current: 78 },
            { label: 'T2', previous: 65, current: 74 },
            { label: 'T3', previous: 80, current: 83 },
            { label: 'T4', previous: 77, current: 79 },
            { label: 'T5', previous: 70, current: 86 },
          ]}
        />
      </div>
    </StudentDashboardLayout>
  );
}
