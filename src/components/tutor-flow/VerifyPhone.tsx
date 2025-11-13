// src/components/tutor-flow/VerifyPhone.tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import apiClient from '../../lib/apiClient';
import { useAuthStore } from '../../stores/useAuthStore';

const VerifyPhone: NextPage = () => {
  const router = useRouter();
  // --- 2. GET PHONE FROM URL ---
  const { phone } = router.query;

  const [otp, setOtp] = useState<string>('');
  // --- 3. ADD LOADING AND ERROR STATES ---
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, '');
    setOtp(v.slice(0, 6));
  };

  // --- 4. MAKE HANDLE_SUBMIT ASYNC ---
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!phone || otp.length < 6) {
      setError('Please enter a valid 6-digit OTP.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // --- !! IMPORTANT: CHANGE THIS ENDPOINT !! ---
      // I am assuming the endpoint and the response structure.
      // You must change '/auth/tutor/verify-otp' to your real endpoint.
      const response = await apiClient.post('/auth/tutor/verify-otp', {
        phone: phone as string, // Phone number from the URL
        otp,
      });

      // --- 5. USE ZUSTAND TO LOG IN ---
      // Assuming the API returns { user: {...}, token: "..." }
      const { user, token } = response.data;

      if (!user || !token) {
        throw new Error('Invalid response from server.');
      }

      // This is where you use your global state!
      useAuthStore.getState().login(user, token);

      // --- 6. REDIRECT ON SUCCESS ---
      router.push('/tutor-flow/application-received');
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Invalid OTP or an error occurred.',
      );
      setIsLoading(false);
    }
  };

  const handleResend = () => {
    // TODO: trigger resend OTP API
    alert('OTP resent (mock)');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Verify Your Phone Number</h2>
        <p className="mb-6 text-gray-600">
          We&apos;ve sent a 6-digit OTP to {phone ? `+${phone}` : 'your phone'}.
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
            disabled={isLoading}
          />

          {/* --- ERROR DISPLAY --- */}
          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className={`w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 ${
              isLoading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify & Continue'}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          <button
            onClick={handleResend}
            className="underline"
            disabled={isLoading}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyPhone;
