import { useMemo, useState } from 'react';

import TutorCard from './TutorCard';

const MOCK_TUTORS = [
  {
    id: 'ananya',
    name: 'Ananya Gupta',
    subject: 'Mathematics',
    experienceYears: 6,
    rating: 4.9,
    avatar: '/images/tutors/tutor-1.jpg',
    pricePerHour: 600,
    location: 'Delhi',
  },
  {
    id: 'rahul',
    name: 'Rahul Mehta',
    subject: 'Physics',
    experienceYears: 5,
    rating: 4.8,
    avatar: '/images/tutors/tutor-2.jpg',
    pricePerHour: 550,
    location: 'Mumbai',
  },
  {
    id: 'sneha',
    name: 'Sneha Iyer',
    subject: 'Chemistry',
    experienceYears: 7,
    rating: 4.7,
    avatar: '/images/tutors/tutor-3.jpg',
    pricePerHour: 500,
    location: 'Bengaluru',
  },
];

export default function TutorSearchPage() {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('');
  const [city, setCity] = useState('');
  const [minRating, setMinRating] = useState(0);

  const filtered = useMemo(() => {
    return MOCK_TUTORS.filter(
      (t) =>
        (!query || t.name.toLowerCase().includes(query.toLowerCase())) &&
        (!subject || t.subject === subject) &&
        (!city ||
          (t.location || '').toLowerCase().includes(city.toLowerCase())) &&
        t.rating >= minRating,
    );
  }, [query, subject, city, minRating]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h1 className="text-2xl font-bold">Find a Tutor</h1>
          <p className="text-gray-600">Search and book a free demo session.</p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <input
            className="rounded-md border px-3 py-2"
            placeholder="Search by name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="rounded-md border px-3 py-2"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">All Subjects</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
          </select>
          <input
            className="rounded-md border px-3 py-2"
            placeholder="City (optional)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="rounded-md border px-3 py-2"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
          >
            <option value={0}>Any rating</option>
            <option value={4}>4★ and up</option>
            <option value={4.5}>4.5★ and up</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {filtered.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}
