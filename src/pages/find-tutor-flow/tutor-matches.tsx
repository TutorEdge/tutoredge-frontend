// src/pages/find-tutor-flow/tutor-matches.tsx
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

import Button from '../../components/find-tutor-flow/Button';
import TutorCard from '../../components/find-tutor-flow/TutorCard';
import apiClient from '../../lib/apiClient';

interface ApiTutor {
  _id: string;
  fullName: string;
  email: string;
  subjects: string[];
  yearsOfExperience: number;
  price: number;
  rating: number;
  testimonial: string;
}

const TutorMatches: React.FC = () => {
  const router = useRouter();
  const { query } = router;

  const [allTutors, setAllTutors] = useState<ApiTutor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState({
    subject: '',
    price: 200,
    experience: '',
  });

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await apiClient.get('/parent/tutors');
        setAllTutors(response.data || []);
      } catch (err: any) {
        setError('Failed to fetch tutors. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTutors();
  }, []);

  useEffect(() => {
    setFilters({
      subject: (query.subject as string) || '',
      price: Number(query.price) || 200,
      experience: (query.experience as string) || '',
    });
  }, [query]);

  const filteredTutors = useMemo(() => {
    return allTutors.filter((tutor) => {
      const subjectPref = (query.subject as string) || '';
      const pricePref = Number(query.price) || 200;
      const expPref = (query.experience as string) || '';

      const matchesSubject = subjectPref
        ? tutor.subjects.includes(subjectPref)
        : true;

      const matchesPrice = tutor.price <= pricePref;

      const matchesExperience = () => {
        if (!expPref) return true;
        const exp = tutor.yearsOfExperience;
        switch (expPref) {
          case '0-1':
            return exp >= 0 && exp <= 1;
          case '2-5':
            return exp >= 2 && exp <= 5;
          case '5+':
            return exp > 5;
          default:
            return true;
        }
      };

      return matchesSubject && matchesPrice && matchesExperience();
    });
  }, [allTutors, query]);

  const handleApplyFilters = () => {
    router.push({
      pathname: router.pathname,
      query: { ...query, ...filters },
    });
  };

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '3rem auto',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 24,
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ marginBottom: 20 }}>Here are your best matches!</h3>

      <div
        style={{
          marginBottom: 24,
          display: 'flex',
          gap: 16,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <select
          value={filters.subject}
          onChange={(e) => setFilters({ ...filters, subject: e.target.value })}
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">All Subjects</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
        </select>

        <select
          value={filters.experience}
          onChange={(e) =>
            setFilters({ ...filters, experience: e.target.value })
          }
          style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">All Experience</option>
          <option value="0-1">0-1 years</option>
          <option value="2-5">2-5 years</option>
          <option value="5+">5+ years</option>
        </select>

        <input
          type="range"
          min={0}
          max={200}
          value={filters.price}
          onChange={(e) =>
            setFilters({ ...filters, price: Number(e.target.value) })
          }
          style={{ flexGrow: 1 }}
        />
        <span>Max Price: ${filters.price}</span>

        <Button onClick={handleApplyFilters} variant="primary">
          Apply Filters
        </Button>
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {isLoading && <p>Loading tutors...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!isLoading && !error && filteredTutors.length === 0 && (
          <p>No tutors match your criteria. Try expanding your search.</p>
        )}

        {!isLoading &&
          !error &&
          filteredTutors.map((tutor) => (
            <TutorCard
              key={tutor._id}
              id={tutor._id}
              name={tutor.fullName}
              profession={tutor.subjects[0] || 'Tutor'}
              rating={tutor.rating}
              reviews={0}
              description={
                tutor.testimonial ||
                `Experienced ${tutor.subjects[0] || 'Tutor'}`
              }
              avatarUrl={`https://avatar.vercel.sh/${tutor.email}`}
              onClick={() => router.push(`/find-tutor/profile/${tutor._id}`)}
            />
          ))}
      </div>
    </div>
  );
};

export default TutorMatches;
