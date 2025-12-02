import { useState } from 'react';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/landing/Footer';
import Button from '@/components/ui/Button';

// --- Mock Data ---
const mockParentPayments = [
  {
    id: 'TXN12345',
    userName: 'Liam Harper',
    amount: '₹15,000',
    date: '2025-07-26',
    status: 'Succeeded',
  },
  {
    id: 'TXN67890',
    userName: 'Olivia Bennett',
    amount: '₹20,000',
    date: '2025-07-25',
    status: 'Failed',
  },
  {
    id: 'TXN11223',
    userName: 'Noah Carter',
    amount: '₹10,000',
    date: '2025-07-24',
    status: 'Succeeded',
  },
  {
    id: 'TXN33445',
    userName: 'Ava Mitchell',
    amount: '₹18,000',
    date: '2025-07-23',
    status: 'Pending',
  },
];

const mockTutorPayouts = [
  {
    id: 1,
    tutorName: 'Dr. Amelia Harper',
    earnings: '₹25,000',
    commission: '₹2,500',
    payout: '₹22,500',
    status: 'Pending Approval',
  },
  {
    id: 2,
    tutorName: 'Prof. Ethan Bennett',
    earnings: '₹18,000',
    commission: '₹1,800',
    payout: '₹16,200',
    status: 'Sent',
  },
  {
    id: 3,
    tutorName: 'Ms. Olivia Hayes',
    earnings: '₹32,000',
    commission: '₹3,200',
    payout: '₹28,800',
    status: 'Pending Approval',
  },
];

// Reusable Pill Component
const StatusPill = ({ status }: { status: string }) => {
  const statusColors: Record<string, string> = {
    Succeeded: 'bg-green-100 text-green-800',
    Paid: 'bg-green-100 text-green-800',
    Sent: 'bg-blue-100 text-blue-800',
    Failed: 'bg-red-100 text-red-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    'Pending Approval': 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        statusColors[status] || 'bg-gray-100 text-gray-800'
      }`}
    >
      {status}
    </span>
  );
};

// --- Main Page Component ---
const PaymentLogsPage = () => {
  const [activeTab, setActiveTab] = useState('Parent Payments');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const tabs = ['Parent Payments', 'Tutor Payouts'];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />

      <main className="container mx-auto mt-6 px-4 flex-1">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Payment Logs</h1>
            <p className="mt-1 text-gray-500">
              Track all incoming payments from parents and outgoing payouts to tutors.
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Parent Payments */}
          {activeTab === 'Parent Payments' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm sm:grid-cols-3">
                <h3 className="text-lg font-semibold text-gray-800 sm:col-span-3">
                  Filter by Date
                </h3>

                <div>
                  <label className="text-sm font-medium text-gray-700">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-300"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
                <table className="w-full min-w-[700px] text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="p-4 font-medium text-gray-600">Transaction ID</th>
                      <th className="p-4 font-medium text-gray-600">User Name</th>
                      <th className="p-4 font-medium text-gray-600">Amount</th>
                      <th className="p-4 font-medium text-gray-600">Date</th>
                      <th className="p-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockParentPayments.map((payment) => (
                      <tr key={payment.id} className="border-t">
                        <td className="p-4 font-mono text-xs text-gray-600">{payment.id}</td>
                        <td className="p-4 font-medium text-gray-800">{payment.userName}</td>
                        <td className="p-4 font-medium text-gray-800">{payment.amount}</td>
                        <td className="p-4 text-gray-600">{payment.date}</td>
                        <td className="p-4">
                          <StatusPill status={payment.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tutor Payouts */}
          {activeTab === 'Tutor Payouts' && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="grid grid-cols-1 gap-4 rounded-xl border bg-white p-4 shadow-sm sm:grid-cols-3">
                <h3 className="text-lg font-semibold text-gray-800 sm:col-span-3">
                  Filter by Month
                </h3>

                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-gray-700">Payout Cycle</label>
                  <input
                    type="month"
                    defaultValue="2025-08"
                    className="mt-1 w-full rounded-md border-gray-300"
                  />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
                <table className="w-full min-w-[800px] text-sm">
                  <thead className="bg-gray-50 text-left">
                    <tr>
                      <th className="p-4 font-medium text-gray-600">Tutor Name</th>
                      <th className="p-4 font-medium text-gray-600">Total Earnings</th>
                      <th className="p-4 font-medium text-gray-600">Platform Commission</th>
                      <th className="p-4 font-medium text-gray-600">Final Payout</th>
                      <th className="p-4 font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTutorPayouts.map((payout) => (
                      <tr key={payout.id} className="border-t">
                        <td className="p-4 font-medium text-gray-800">{payout.tutorName}</td>
                        <td className="p-4 text-gray-600">{payout.earnings}</td>
                        <td className="p-4 text-gray-600">{payout.commission}</td>
                        <td className="p-4 font-medium text-green-600">{payout.payout}</td>
                        <td className="p-4">
                          <StatusPill status={payout.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end">
                <Button>Approve & Initiate Payouts</Button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default PaymentLogsPage;
