// src/components/tutor-flow/TutorRegistration.tsx

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/landing/Footer';
import apiClient from '../../lib/apiClient';

import {
  User,
  Mail,
  Lock,
  Phone,
  BookOpen,
  Languages,
  GraduationCap,
  School,
  Clock,
} from 'lucide-react';

// ------------ FORM TYPE ------------
type TutorForm = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  subjects: string;
  classesTaught: string;
  languages: string;
  qualification: string;
  college: string;
  yearsOfExperience: string;
};

const defaultForm: TutorForm = {
  fullName: '',
  email: '',
  password: '',
  phone: '',
  subjects: '',
  classesTaught: '',
  languages: '',
  qualification: '',
  college: '',
  yearsOfExperience: '0',
};

const TutorRegistration: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<TutorForm>(defaultForm);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getInputType = (key: keyof TutorForm): string => {
    if (key === 'password') return 'password';
    if (key === 'email') return 'email';
    if (key === 'yearsOfExperience') return 'number';
    return 'text';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const apiPayload = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      qualification: formData.qualification,
      college: formData.college,
      subjects: (formData.subjects || '').split(',').map((s) => s.trim()),
      languages: (formData.languages || '').split(',').map((s) => s.trim()),
      classesTaught: (formData.classesTaught || '')
        .split(',')
        .map((s) => s.trim()),
      yearsOfExperience: parseInt(formData.yearsOfExperience, 10) || 0,
      
    };

    try {
      await apiClient.post('/auth/tutor/signup', apiPayload);
      router.push(`/tutor-flow/verify-phone?phone=${formData.phone}`);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong (Your are registered).');
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar />

      {/* 🔥 Attractive Background Section */}
      <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
         <img
  src="/images/teacher.jpg"
  className="absolute left-0 top-0 z-0 h-full opacity-20"
  alt="Background Teacher"
/>

        {/* Hero Section */}
        <div className="relative z-10 mx-auto max-w-5xl pt-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Become a Part of Tutoredge
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Join thousands of tutors shaping the future of education.  
            Inspire. Teach. Grow.
          </p>

          <div className="mt-8 flex justify-center">
                        <img
              src="/images/teacher.jpg"
              className="absolute left-0 top-0 z-0 h-full opacity-20"
              alt="Background Teacher"
            />
          </div>
        </div>

        {/* Main Form Card */}
        <div className="relative z-10 mx-auto mt-10 max-w-2xl rounded-2xl bg-white/90 p-10 shadow-xl backdrop-blur-md">
          <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800 bg-slate-500 rounded-lg">
            Tutor Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              ['fullName', 'Full Name', <User size={18} />],
              ['email', 'Email Address', <Mail size={18} />],
              ['password', 'Password', <Lock size={18} />],
              ['phone', 'Phone Number', <Phone size={18} />],
              ['subjects', 'Subjects (comma-separated)', <BookOpen size={18} />],
              ['languages', 'Languages (comma-separated)', <Languages size={18} />],
              ['classesTaught', 'Classes Taught', <BookOpen size={18} />],
              ['qualification', 'Qualification', <GraduationCap size={18} />],
              ['college', 'College / University', <School size={18} />],
              ['yearsOfExperience', 'Years of Experience', <Clock size={18} />],
            ].map(([key, label, icon]) => (
              <div key={key as string}>
                <label className="mb-1 block font-medium text-gray-700">
                  {label}
                </label>

                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-400">
                    {icon}
                  </span>

                  <input
                    name={key as string}
                    type={getInputType(key as keyof TutorForm)}
                    value={formData[key as keyof TutorForm]}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-10 py-2.5 focus:border-blue-600 focus:ring-2 focus:ring-blue-300"
                    required
                    disabled={isLoading}
                  />
                </div>
              </div>
            ))}

            {error && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}

            <button
              type="submit"
              className={`w-full rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-700 ${
                isLoading ? 'opacity-50' : ''
              }`}
            >
              {isLoading ? 'Submitting…' : 'Next'}
            </button>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="relative z-10 mx-auto mt-12 max-w-4xl pb-20">
          <h3 className="text-center text-xl font-semibold text-gray-800">
            Why Teach at Tutoredge?
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h4 className="font-semibold text-gray-700">📚 Teach Anywhere</h4>
              <p className="text-sm text-gray-500">
                Work from comfort of your home with flexible hours.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h4 className="font-semibold text-gray-700">💼 Grow Professionally</h4>
              <p className="text-sm text-gray-500">
                Enhance your teaching career with thousands of students.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h4 className="font-semibold text-gray-700">💰 Earn More</h4>
              <p className="text-sm text-gray-500">
                Premium compensation for skilled tutors.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TutorRegistration;
