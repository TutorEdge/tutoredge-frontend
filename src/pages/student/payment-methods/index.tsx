import Link from 'next/link';
import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function PaymentMethodsPage() {
  return (
    <StudentDashboardLayout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <Link href="/student/payment-methods/add-card" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white">Add Card</Link>
      </div>
      <div className="rounded-xl border bg-white p-6 text-gray-600">No saved cards yet.</div>
    </StudentDashboardLayout>
  );
}


