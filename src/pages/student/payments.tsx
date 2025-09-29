import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function StudentPaymentsPage() {
  return (
    <StudentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Payments</h1>
      <div className="rounded-xl border bg-white p-6">
        <div className="text-gray-600">No transactions yet.</div>
      </div>
    </StudentDashboardLayout>
  );
}



