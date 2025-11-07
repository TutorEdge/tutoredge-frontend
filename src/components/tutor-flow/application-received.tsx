import { NextPage } from "next";
import { useRouter } from "next/router";

const ApplicationReceived: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-3">Application Received!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for applying to join Tutoredge! Our team will review your details and contact you shortly.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => router.push("/tutor-flow/complete-profile")}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Complete Profile
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationReceived;
