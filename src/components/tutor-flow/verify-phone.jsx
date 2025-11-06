// src/pages/tutor-flow/verify-phone.jsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function VerifyPhone() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: verify OTP logic
    router.push("/tutor-flow/application-received");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-xl font-semibold mb-2">Verify Your Phone Number</h2>
        <p className="text-gray-600 mb-6">
          We’ve sent a 6-digit OTP to your phone number.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter 6-digit code"
            maxLength="6"
            className="border w-full p-2 rounded-md text-center tracking-widest text-lg"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Verify & Continue
          </button>
        </form>
      </div>
    </div>
  );
}
