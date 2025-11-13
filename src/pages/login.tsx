// src/pages/login.tsx

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';
import AuthLayout from '@/layouts/AuthLayout';
import apiClient from '@/lib/apiClient'; // Import your API client
import { useAuthStore } from '@/stores/useAuthStore';

// 1. Define our roles
const roles = ['Parent', 'Tutor', 'Admin'];

const LoginPage = () => {
  // 2. Add state for the active tab
  const [activeRole, setActiveRole] = useState(roles[0]); // Default to Parent

  // 3. Rename state to be generic
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const { login } = useAuthStore();
  const router = useRouter();

  // 4. Create a dynamic label for the first input
  const mainInputLabel = activeRole === 'Admin' ? 'Username' : 'Email';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    let endpoint = '';
    let payload = {};
    let dashboardUrl = '/';

    // 5. Configure API call based on the active role
    switch (activeRole) {
      case 'Parent':
        endpoint = '/auth/parent/login';
        payload = { email: emailOrUsername, password };
        dashboardUrl = '/parent/dashboard'; // As seen in login.tsx
        break;
      case 'Tutor':
        endpoint = '/auth/tutor/login'; // Assuming this is the endpoint
        payload = { email: emailOrUsername, password };
        dashboardUrl = '/tutor/dashboard'; // As seen in NavBar.tsx
        break;
      case 'Admin':
        endpoint = '/auth/admin/login'; // From API docs
        // Use 'username' key as required by the API
        payload = { username: emailOrUsername, password };
        dashboardUrl = '/admin/dashboard'; // As seen in NavBar.tsx
        break;
      default:
        setError('Invalid role selected');
        setIsLoading(false);
        return;
    }

    try {
      // 6. Call the dynamic endpoint with the correct payload
      const response = await apiClient.post(endpoint, payload);
      const { user, token } = response.data;

      // 7. Check if we got the expected data
      if (!user || !token) {
        throw new Error('Invalid login response from server.');
      }

      login(user, token);
      router.push(dashboardUrl); // Go to the correct dashboard
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message || 'Invalid credentials');
      } else {
        setError('Login failed. Please try again.');
      }
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Login"
      subtitle="Login to access your account"
      illustrationUrl="/images/login-flow/login.png"
    >
      {/* 8. Add Tabs for Role Selection */}
      <div className="mb-4 flex w-full rounded-lg bg-gray-100 p-1">
        {roles.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => {
              setActiveRole(role);
              setError(null); // Clear errors on tab switch
            }}
            className={`w-full rounded-md py-2 text-sm font-medium transition-colors
              ${
                activeRole === role
                  ? 'bg-white text-gray-800 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }
            `}
          >
            {role}
          </button>
        ))}
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          {/* 9. Use the dynamic label */}
          <label className="text-sm font-medium text-gray-700">
            {mainInputLabel}
          </label>
          <input
            // 10. Use 'text' type for flexibility (handles email or username)
            type="text"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="mt-1 w-full rounded-lg border-gray-300 py-3"
            placeholder={
              activeRole === 'Admin' ? 'admin_username' : 'john.doe@gmail.com'
            }
            required
            disabled={isLoading}
          />
        </div>
        <PasswordInput
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />

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
              disabled={isLoading}
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

        <Button type="submit" className="h-12 w-full" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>

        {/* ... (Rest of your form, e.g., 'Or login with' and social buttons) ... */}

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
