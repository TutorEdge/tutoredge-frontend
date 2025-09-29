import Image from 'next/image';
import React from 'react';

// --- Data for the Featured Tutors ---
// In a real project, this data would come from your backend API.
const tutorsData = [
  {
    id: 1,
    name: 'Emily Carter',
    specialty: 'Math Tutor',
    description: 'Math, 5 years experience, 100+ students',
    imageUrl: '/images/tutors/tutor-1.jpg', // Placeholder image path
  },
  {
    id: 2,
    name: 'Liam Harper',
    specialty: 'Science Tutor',
    description: 'Science, 4 years experience, 80+ students',
    imageUrl: '/images/tutors/tutor-2.jpg',
  },
  {
    id: 3,
    name: 'Ava Bennett',
    specialty: 'English Tutor',
    description: 'English, 6 years experience, 120+ students',
    imageUrl: '/images/tutors/tutor-3.jpg',
  },
  {
    id: 4,
    name: 'Owen Foster',
    specialty: 'History Tutor',
    description: 'History, 3 years experience, 60+ students',
    imageUrl: '/images/tutors/tutor-4.jpg',
  },
];

// --- Main Component ---
const FeaturedTutors = () => {
  return (
    <div className="mx-auto max-w-6xl p-6 py-16">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Featured <span className="text-primary">Tutors</span>
      </h2>

      {/* Responsive Grid for the Tutor Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {tutorsData.map((tutor) => (
          <div
            key={tutor.id}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={tutor.imageUrl}
                alt={`Photo of ${tutor.name}`}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">
                {tutor.name} - {tutor.specialty}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{tutor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTutors;
