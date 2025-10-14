import Link from 'next/link';

import ParentDashboardLayout from '@/layouts/ParentDashboardLayout';

const payments = [
  { id: 'INV-1001', date: '01 Sep', amount: '₹1,500', status: 'Paid' },
  { id: 'INV-1002', date: '10 Oct', amount: '₹1,500', status: 'Due' },
];

export default function StudentPaymentsPage() {
  return (
    <ParentDashboardLayout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payments</h1>
        <Link
          href="/parent/payment-methods"
          className="text-sm font-semibold text-blue-700"
        >
          Payment Methods
        </Link>
      </div>
      <div className="overflow-hidden rounded-xl border bg-white">
        <div className="grid grid-cols-4 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
          <div>Invoice</div>
          <div>Date</div>
          <div>Amount</div>
          <div className="text-right">Status</div>
        </div>
        {payments.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-4 items-center px-4 py-3 text-sm text-gray-700"
          >
            <div className="font-medium">{p.id}</div>
            <div>{p.date}</div>
            <div>{p.amount}</div>
            <div className="text-right">
              <span
                className={`rounded-md px-2 py-1 ${p.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}
              >
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ParentDashboardLayout>
  );
}
