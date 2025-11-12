import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

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
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Verify Your Phone Number</h2>
        <p className="mb-6 text-gray-600">
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
            className="w-full rounded-md border p-2 text-center text-lg tracking-widest"
            required
          />

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
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
