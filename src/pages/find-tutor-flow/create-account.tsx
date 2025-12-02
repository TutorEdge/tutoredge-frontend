import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/landing/Footer';
import Button from '@/components/find-tutor-flow/Button';
import InputField from '@/components/find-tutor-flow/InputField';
import apiClient from '@/lib/apiClient';

const CreateAccount: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
console.log('Form data being sent:', form); // ✅ Here
    try {
      await apiClient.post('/auth/parent/signup', {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        phone: form.phone,
      });

      router.push('/find-tutor-flow/preferences');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An unknown error occurred.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full opacity-30 translate-x-1/4 translate-y-1/4"></div>

      {/* Header */}
      <NavBar />

      <div className="flex flex-1 items-center justify-center px-4 py-12">
        {/* Card */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 relative z-10">
          
          {/* Logo/Illustration */}
          <div className="flex justify-center mb-6">
            <img
              src="/images/logo1.png" // Change to a modern vector illustration
              alt="TutorEdge logo"
              className="w-32"
            />
          </div>

          {/* Title */}
          <h1 className="text-center text-3xl font-bold text-purple-700 mb-2">
            Join TutorEdge Today!
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Find the perfect tutors and unlock your learning potential.
          </p>

          {/* Feature Badges */}
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">Verified Tutors</span>
            <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">Flexible Timings</span>
            <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">Affordable Prices</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              type="text"
              disabled={isLoading}
            />
            <InputField
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              type="email"
              disabled={isLoading}
            />
            <InputField
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              type="password"
              disabled={isLoading}
            />
            <InputField
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              type="tel"
              disabled={isLoading}
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-4 text-lg rounded-xl shadow-md"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Get Started'}
            </Button>

            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link href="/login/">
              <span className="text-purple-600 hover:underline cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateAccount;
