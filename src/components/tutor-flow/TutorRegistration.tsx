// src/components/tutor-flow/TutorRegistration.tsx

import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import apiClient from '../../lib/apiClient';

// --- 1. UPDATED FORM TYPE ---
// Renamed fields to match the API payload
type TutorForm = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  // 'address' is not in the API screenshot, so I removed it.
  // Renamed 'expertise' to 'subjects'
  subjects: string;
  // Renamed 'teachingField' to 'classesTaught'
  classesTaught: string;
  languages: string;
  qualification: string;
  college: string;
  // Renamed 'experience' to 'yearsOfExperience'
  yearsOfExperience: string;
};

// --- 2. UPDATED DEFAULT FORM ---
const defaultForm: TutorForm = {
  fullName: '',
  email: '',
  password: '',
  phone: '',
  subjects: '', // Was 'expertise'
  classesTaught: '', // Was 'teachingField'
  languages: '',
  qualification: '',
  college: '',
  yearsOfExperience: '0', // Was 'experience'
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // --- 3. CORRECT DATA TRANSFORMATION ---
    // This part is crucial. It converts your form's simple
    // strings into the arrays and numbers the API requires.
    const apiPayload = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      qualification: formData.qualification,
      college: formData.college,
      // Split comma-separated strings into arrays
      // Added (|| '') to fix potential 'split' on undefined error
      subjects: (formData.subjects || '').split(',').map((s) => s.trim()),
      languages: (formData.languages || '').split(',').map((s) => s.trim()),
      classesTaught: (formData.classesTaught || '')
        .split(',')
        .map((s) => s.trim()),
      // Convert string 'experience' to a number
      yearsOfExperience: parseInt(formData.yearsOfExperience, 10) || 0,
    };

    try {
      // This sends the *correctly formatted* payload
      await apiClient.post('/auth/tutor/signup', apiPayload);

      // On success, navigate to verify-phone with the phone number
      router.push(`/tutor-flow/verify-phone?phone=${formData.phone}`);
    } catch (err: any) {
      // Now, this will show a more specific error if the backend provides one
      setError(
        err.response?.data?.message ||
          'An unknown error occurred. Please try again.',
      );
      setIsLoading(false);
    }
  };

  // --- FIX FOR 'no-nested-ternary' ---
  // This helper function replaces the nested ternary in the input's 'type' prop
  const getInputType = (key: keyof TutorForm): string => {
    if (key === 'password') {
      return 'password';
    }
    if (key === 'email') {
      return 'email';
    }
    if (key === 'yearsOfExperience') {
      return 'number';
    }
    return 'text';
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Become a Tutor at Tutoredge
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* --- 4. UPDATED INPUTS TO MATCH STATE --- */}
          {(
            [
              ['fullName', 'Full Name'],
              ['email', 'Email Address'],
              ['password', 'Password'],
              ['phone', 'Phone Number'],
              // Ask for comma-separated values so we can split them
              ['subjects', 'Subjects / Expertise (comma-separated)'],
              ['languages', 'Languages (comma-separated)'],
              ['classesTaught', 'Classes Taught (e.g., "Class 10, Class 12")'],
              ['qualification', 'Qualification'],
              ['college', 'College/University'],
              ['yearsOfExperience', 'Years of Experience'],
            ] as Array<[keyof TutorForm, string]>
          ).map(([key, label]) => (
            <div key={key}>
              <label className="mb-1 block font-medium">{label}</label>
              <input
                name={key}
                type={getInputType(key)} // --- USE THE HELPER FUNCTION HERE ---
                value={formData[key]}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={isLoading}
              />
            </div>
          ))}

          {/* Error message display */}
          {error && <p className="text-center text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            className={`w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 ${
              isLoading ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Next'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorRegistration;
