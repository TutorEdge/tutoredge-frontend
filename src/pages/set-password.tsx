import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';
import AuthLayout from '@/layouts/AuthLayout';

const SetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // --- FOR BACKEND TEAM ---
    // In a real app, you'd get a 'token' from the URL (e.g., /set-password?token=... )
    // const { token } = router.query;
    // Send 'password' and 'token' to /api/auth/reset-password
    console.log('Setting new password...');
    alert('Password has been reset! (Simulated)');
    router.push('/login');
  };

  return (
    <AuthLayout
      title="Set a password"
      subtitle="Your previous password has been reset. Please set a new password for your account."
      illustrationUrl="/images/login-flow/forgot-password" // Replace with your image path
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <PasswordInput
          label="Create Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput
          label="Re-enter Password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" className="h-12 w-full">
          Set password
        </Button>
      </form>
    </AuthLayout>
  );
};

export default SetPasswordPage;
