// src/pages/login.tsx

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/landing/Footer';
import Button from '@/components/ui/Button';
import PasswordInput from '@/components/ui/PasswordInput';
import apiClient from '@/lib/apiClient';
import { useAuthStore } from '@/stores/useAuthStore';

const roles = ['Parent', 'Tutor', 'Admin'];

const LoginPage = () => {
  const [activeRole, setActiveRole] = useState(roles[0]);
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuthStore();
  const router = useRouter();

  const mainInputLabel = activeRole === 'Admin' ? 'Username' : 'Email';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    let endpoint = '';
    let payload = {};
    let dashboardUrl = '/';

    switch (activeRole) {
      case 'Parent':
        endpoint = '/auth/parent/login';
        payload = { email: emailOrUsername, password };
        dashboardUrl = '/parent/dashboard';
        break;
      case 'Tutor':
        endpoint = '/auth/tutor/login';
        payload = { email: emailOrUsername, password };
        dashboardUrl = '/tutor/dashboard';
        break;
      case 'Admin':
        endpoint = '/auth/admin/login';
        payload = { username: emailOrUsername, password };
        dashboardUrl = '/admin/dashboard';
        break;
    }

    try {
      const response = await apiClient.post(endpoint, payload);
      const { user, token } = response.data;

      login(user, token);
      router.push(dashboardUrl);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-white">

      {/* 🔵 HEADER FIXED AT TOP */}
      <NavBar />

      {/* 🔵 MAIN CONTENT CENTERED */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

          {/* Left Side Image */}
          <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-10">
            <img
              src="/images/login-flow/login.png"
              alt="Login Illustration"
              className="w-4/5 drop-shadow-lg"
            />
          </div>

          {/* Right Side Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back 👋</h2>
            <p className="text-gray-500 mb-6">Login to access your personalized dashboard</p>

            {/* Role Tabs */}
            <div className="flex mb-6 bg-gray-100 rounded-lg p-1 shadow-inner">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    setActiveRole(role);
                    setError(null);
                  }}
                  className={`w-full py-2 text-sm font-semibold rounded-md transition-all ${
                    activeRole === role
                      ? 'bg-white text-gray-900 shadow'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-5">

              <div>
                <label className="text-sm font-medium text-gray-700">{mainInputLabel}</label>
                <input
                  type="text"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  className="mt-1 w-full rounded-xl border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-blue-400"
                  placeholder={activeRole === 'Admin' ? 'admin_username' : 'TutorEdge@gmail.com'}
                  required
                />
              </div>

              <PasswordInput
                label="Password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <div className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-700 shadow-sm">
                  {error}
                </div>
              )}

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>

                <Link href="/forgot-password" className="text-blue-600 hover:underline font-medium">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" className="h-12 w-full text-lg rounded-xl shadow-md">
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                Don’t have an account?
                <Link href="/signup" className="text-blue-600 hover:underline font-semibold">
                  {' '}Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* 🔵 FOOTER FIXED AT BOTTOM */}
      <Footer />
    </div>
  );
};

export default LoginPage;
