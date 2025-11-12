import { NextPage } from "next";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/router";

const VerifyPhone: NextPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value.slice(0, 6));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Assume OTP is correct for demo
    router.push("/tutor-flow/application-received");
  };

  const handleResend = () => {
    alert("OTP resent successfully (mock)");
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
            inputMode="numeric"
            pattern="\d*"
            value={otp}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            maxLength={6}
            className="border w-full p-2 rounded-md text-center tracking-widest text-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Verify & Continue
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <button onClick={handleResend} className="underline">
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
