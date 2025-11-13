// src/components/tutor-flow/ApplicationReceived.tsx
import { useRouter } from 'next/router';

export default function ApplicationReceived() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-10 text-center shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold">Application Received!</h2>
        <p className="mb-6 text-gray-600">
          Thank you for applying! Our team will review your details shortly.
        </p>
        <button
          // 1. Change the onClick handler to push to the root ('/')
          onClick={() => router.push('/')}
          className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
        >
          {/* 2. Change the button text */}
          Back to Home Page
        </button>
      </div>
    </div>
  );
}
