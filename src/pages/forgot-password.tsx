import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import AuthLayout from '@/layouts/AuthLayout';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // --- FOR BACKEND TEAM ---
    // Send 'email' to /api/auth/forgot-password
    // The backend will send a password reset email
    console.log('Password reset requested for:', email);
    alert('Password reset email sent! (Simulated)');
  };

  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Don't worry, happens to all of us. Enter your email below to recover your password"
      illustrationUrl="/images/login-flow/forgot-password.png" // Replace with your image path
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-lg border-gray-300 py-3"
            placeholder="john.doe@gmail.com"
            required
          />
        </div>
        <Button type="submit" className="h-12 w-full">
          Submit
        </Button>
        <div className="text-center">
          <Link href="/login">
            <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900">
              <ArrowLeft size={16} />
              Back to login
            </span>
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
