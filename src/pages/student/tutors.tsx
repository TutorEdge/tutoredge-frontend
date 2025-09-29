import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function StudentTutorsPage() {
  return (
    <StudentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">My Tutors</h1>
      <div className="rounded-xl border bg-white p-6 text-gray-600">No tutors assigned yet.</div>
    </StudentDashboardLayout>
  );
}



