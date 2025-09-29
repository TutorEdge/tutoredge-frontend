import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function StudentMaterialsPage() {
  return (
    <StudentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Study Materials</h1>
      <div className="rounded-xl border bg-white p-6 text-gray-600">No materials available yet.</div>
    </StudentDashboardLayout>
  );
}



