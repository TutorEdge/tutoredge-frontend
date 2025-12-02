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
  price: number; // price per month
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
    price: 12000,
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
      price: Number(query.price) || 12000,
      experience: (query.experience as string) || '',
    });
  }, [query]);

  const filteredTutors = useMemo(() => {
    return allTutors.filter((tutor) => {
      const subjectPref = (query.subject as string) || '';
      const pricePref = Number(query.price) || 15000;
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
    <>
      {/* IMAGE BANNER
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1564683214969-813caedcf1d2?q=80&w=2070&auto=format"
          alt="Tutoring banner"
          className="w-full h-60 object-cover rounded-b-3xl shadow-md"
        />
      </div> */}

      <div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl shadow-xl p-10">
        <h3 className="text-3xl font-bold mb-8 text-gray-900">
          Your Best Tutor Matches ✨
        </h3>

        {/* FILTER SECTION */}
        <div className="mb-10 flex flex-wrap gap-6 items-center bg-gray-50 p-6 rounded-xl shadow-sm">
          <select
            value={filters.subject}
            onChange={(e) =>
              setFilters({ ...filters, subject: e.target.value })
            }
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
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
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
          >
            <option value="">All Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="2-5">2-5 years</option>
            <option value="5+">5+ years</option>
          </select>

          {/* PRICE RANGE */}
          <div className="flex items-center gap-2 flex-grow">
            <input
              type="range"
              min={500}
              max={12000}
              step={500}
              value={filters.price}
              onChange={(e) =>
                setFilters({ ...filters, price: Number(e.target.value) })
              }
              className="w-full accent-blue-600"
            />
            <span className="text-gray-700 font-semibold whitespace-nowrap">
              ₹{filters.price.toLocaleString()}/month
            </span>
          </div>

          <Button onClick={handleApplyFilters} variant="primary">
            Apply Filters
          </Button>
        </div>

        {/* TUTORS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {isLoading && <p>Loading tutors...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!isLoading && !error && filteredTutors.length === 0 && (
            <p className="text-gray-600">
              No tutors match your criteria. Try expanding your search.
            </p>
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
                price={`₹${tutor.price.toLocaleString()}/month`}
                avatarUrl={`https://avatar.vercel.sh/${tutor.email}`}
                onClick={() =>
                  router.push(`/find-tutor/profile/${tutor._id}`)
                }
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default TutorMatches;
