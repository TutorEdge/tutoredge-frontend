import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// import { useAuthStore } from '../../stores/useAuthStore'; // <-- 1. REMOVED: We are not logging in.
import Button from '../../components/find-tutor-flow/Button';
import InputField from '../../components/find-tutor-flow/InputField';
import apiClient from '../../lib/apiClient';

const CreateAccount: React.FC = () => {
  const router = useRouter();
  // const login = useAuthStore((state) => state.login); // <-- 2. REMOVED
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

    try {
      // 3. Call the parent signup API
      await apiClient.post('/auth/parent/signup', {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        phone: form.phone,
      });

      // 4. SUCCESS! The API call worked.
      // We don't need the response data. Just move to the next step.
      router.push('/find-tutor-flow/preferences');
    } catch (err: any) {
      // 5. This will now correctly show backend errors (like "Email already in use")
      setError(err.response?.data?.message || 'An unknown error occurred.');
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 420,
        margin: '6rem auto',
        padding: '2rem',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
        borderRadius: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <img
        alt="TutorEdge Illustration"
        src="/images/courseHighlightIllustration.png"
        width={80}
        style={{ marginBottom: 24 }}
      />
      <h2 style={{ marginBottom: 24 }}>Create your TutorEdge account</h2>

      <form onSubmit={handleSubmit}>
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
          placeholder="Email address"
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
          style={{ marginTop: 20 }}
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Next'}
        </Button>

        {error && (
          <p style={{ color: 'red', fontSize: 14, marginTop: 16 }}>{error}</p>
        )}
      </form>

      <p style={{ marginTop: 16, fontSize: 14 }}>
        Already have an account?{' '}
        <Link href="/login/" style={{ color: '#007bff', cursor: 'pointer' }}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default CreateAccount;
