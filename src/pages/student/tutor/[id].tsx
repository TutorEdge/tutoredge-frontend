import { useRouter } from 'next/router';
import Link from 'next/link';
import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function TutorDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <StudentDashboardLayout>
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Tutor Profile</h1>
        <p className="text-gray-600">Tutor ID: {id}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 md:col-span-2">
          <h2 className="mb-2 text-lg font-semibold">About</h2>
          <p className="text-gray-600">Experienced Math tutor. Focus on fundamentals and exam prep.</p>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h2 className="mb-2 text-lg font-semibold">Request Session</h2>
          <div className="text-sm text-gray-600">Select a date and time.</div>
          <div className="mt-3 rounded-md border p-3 text-sm text-gray-500">Calendar placeholder</div>
          <Link href="/student/booking-success" className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Request Demo</Link>
        </div>
      </div>
    </StudentDashboardLayout>
  );
}


