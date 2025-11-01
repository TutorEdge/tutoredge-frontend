import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';
import AuthLayout from '@/layouts/AuthLayout';
import apiClient from '@/lib/apiClient'; // Import your API client
import { useAuthStore } from '@/stores/useAuthStore';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State to hold login errors

  // This gets the 'login' action from your Zustand store
  const { login } = useAuthStore();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      // 1. CHANGED: Call the parent login endpoint from your docs
      const response = await apiClient.post('/auth/parent/login', {
        email,
        password,
      });

      // 2. UPDATED: Get the full 'user' object and 'token' from the backend response
      // (This assumes your API returns { user: {...}, token: '...' } on success)
      const { user, token } = response.data;

      // 3. UPDATED: Call your Zustand 'login' action with the user object and token
      // This will save the user's login state globally
      login(user, token);

      // 4. CHANGED: Redirect directly to the parent dashboard on success
      router.push('/parent/dashboard');
    } catch (err: any) {
      // Axios error handling
      if (err.response) {
        // The server responded with an error (e.g., "Invalid credentials")
        setError(err.response.data.message || 'Invalid email or password');
      } else {
        // Other errors (e.g., network error)
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <AuthLayout
      title="Login"
      subtitle="Login to access your account"
      illustrationUrl="/images/login-flow/login.png" // This path is correct
    >
      <form onSubmit={handleLogin} className="space-y-4">
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
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Error message will display here if login fails */}
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-center text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              className="rounded border-gray-300"
            />
            <label htmlFor="remember" className="text-gray-600">
              Remember me
            </label>
          </div>
          <Link href="/forgot-password">
            <span className="font-medium text-blue-600 hover:underline">
              Forgot Password?
            </span>
          </Link>
        </div>
        <Button type="submit" className="h-12 w-full">
          Login
        </Button>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or login with</span>
          </div>
        </div>
        <Button
          type="button"
          variant="dark"
          className="h-12 w-full border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="mr-2 size-5"
          />
          Login with Google
        </Button>
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?
          <Link href="/signup">
            <span className="font-medium text-blue-600 hover:underline">
              {' '}
              Sign up
            </span>
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
