import type { NextPage } from "next";
import { useRouter } from "next/router";

const ApplicationReceived: NextPage = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg rounded-lg bg-white p-10 text-center shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold">Application Received!</h2>
        <p className="mb-6 text-gray-600">
          Thank you for applying to join Tutoredge! Our team will review your
          details and contact you shortly.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => router.push("/tutor-flow/complete-profile")}
            className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
          >
            Complete Profile
          </button>
          <button
            onClick={() => router.push("/")}
            className="rounded-md bg-gray-200 px-6 py-2 text-gray-800 hover:bg-gray-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReceived;
