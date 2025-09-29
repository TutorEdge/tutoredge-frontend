import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';
import Link from 'next/link';

export default function StudentDashboardPage() {
  return (
    <StudentDashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-gray-600">Here is a quick overview of your learning.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">Upcoming Session</div>
          <div className="text-lg font-medium">Math with Ananya • Today 6:00 PM</div>
          <Link href="#" className="mt-3 inline-block text-sm font-semibold text-blue-700">Join meeting</Link>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">Pending Assignments</div>
          <div className="text-3xl font-bold">2</div>
          <Link href="/student/assignments" className="mt-3 inline-block text-sm font-semibold text-blue-700">View assignments</Link>
        </div>

        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">Payments</div>
          <div className="text-lg font-medium">Next due on 10 Oct</div>
          <Link href="/student/payments" className="mt-3 inline-block text-sm font-semibold text-blue-700">Manage</Link>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5">
          <div className="mb-2 text-sm font-semibold text-gray-500">Quick Links</div>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/student/tutors" className="font-semibold text-blue-700">Find tutors</Link>
            <Link href="/student/materials" className="font-semibold text-blue-700">Study materials</Link>
            <Link href="/student/profile" className="font-semibold text-blue-700">Edit profile</Link>
          </div>
        </div>
        <div className="rounded-xl border bg-white p-5 md:col-span-2">
          <div className="mb-2 text-sm font-semibold text-gray-500">Recent Activity</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Completed: Algebra Practice Set</li>
            <li>Watched: Triangles Lecture</li>
            <li>Upcoming: Demo with Ananya (Today 6:00 PM)</li>
          </ul>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}



