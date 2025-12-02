// src/components/tutor-flow/ApplicationReceived.tsx
import { useRouter } from 'next/router';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/landing/Footer';
import { CheckCircle } from 'lucide-react';

export default function ApplicationReceived() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 bg-gradient-to-tr from-purple-400 via-pink-300 to-yellow-200 px-4 py-16">
        <div className="rounded-3xl bg-white p-10 shadow-2xl text-center max-w-md w-full">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-3xl font-bold text-gray-800">
            Congratulations!
          </h2>

          {/* Message */}
         <p className="mb-6 text-gray-600">
  Your application has been successfully received. <br />
  Please wait for 2 days. <br />
  We will contact you via call or message for your demo or interview.
</p>


          {/* Button */}
          <button
            onClick={() => router.push('/')}
            className="rounded-xl bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition-colors duration-200"
          >
            Back to Home Page
          </button>
        </div>

        {/* Optional: Features / small note */}
        <p className="mt-6 text-white/90 text-sm text-center max-w-md">
          Thank you for choosing Tutoredge. Stay tuned for updates and announcements!
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
