import Link from 'next/link';
import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';
// val
export default function PaymentMethodsPage() {
  const cards: Array<{ brand: string; last4: string; exp: string }> = [];

  return (
    <StudentDashboardLayout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <Link href="/student/payment-methods/add-card" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white">Add Card</Link>
      </div>
      {cards.length === 0 ? (
        <div className="rounded-xl border bg-white p-6 text-gray-600">No saved cards yet.</div>
      ) : (
        <div className="overflow-hidden rounded-xl border bg-white">
          <div className="grid grid-cols-3 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
            <div>Brand</div>
            <div>Last 4</div>
            <div className="text-right">Expiry</div>
          </div>
          {cards.map((c, idx) => (
            <div key={idx} className="grid grid-cols-3 items-center px-4 py-3 text-sm text-gray-700">
              <div className="font-medium">{c.brand}</div>
              <div>•••• {c.last4}</div>
              <div className="text-right">{c.exp}</div>
            </div>
          ))}
        </div>
      )}
    </StudentDashboardLayout>
  );
}


