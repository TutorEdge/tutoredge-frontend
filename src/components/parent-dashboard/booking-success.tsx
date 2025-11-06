import Link from 'next/link';

export default function BookingSuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-lg rounded-xl border bg-white p-10 text-center">
        <h1 className="mb-2 text-2xl font-bold">Request Sent Successfully!</h1>
        <p className="text-gray-600">
          We will notify you once the tutor confirms the session.
        </p>
        <Link
          href="/parent/dashboard"
          className="mt-6 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
