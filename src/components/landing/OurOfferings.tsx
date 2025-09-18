import Image from 'next/image';
import React from 'react';

// --- Data for the Offerings ---
// Storing data in an array makes the component clean, scalable, and easy to manage.
const offeringsData = [
  {
    title: 'Class 9',
    description: 'Tutoring for Class 9 students.',
    imageUrl: '/images/offerings/class-9.png', // Placeholder image path
  },
  {
    title: 'Class 10',
    description: 'Tutoring for Class 10 students.',
    imageUrl: '/images/offerings/class-10.png',
  },
  {
    title: 'Class 11',
    description: 'Tutoring for Class 11 students.',
    imageUrl: '/images/offerings/class-11.png',
  },
  {
    title: 'Class 12',
    description: 'Tutoring for Class 12 students.',
    imageUrl: '/images/offerings/class-12.png',
  },
  {
    title: 'Competitive Exams',
    description: 'Preparation for JEE, NEET, and more.',
    imageUrl: '/images/offerings/jee-neet.png',
  },
  {
    title: 'Coding Classes',
    description: 'Learn to code with personalized guidance.',
    imageUrl: '/images/offerings/coding.png',
  },
  {
    title: 'Skill Development',
    description: 'Courses in public speaking and writing.',
    imageUrl: '/images/offerings/skills.png',
  },
  {
    title: 'Language Learning',
    description: 'Master new languages with expert tutors.',
    imageUrl: '/images/offerings/language.png',
  },
];

// --- Main Component ---
const OurOfferings = () => {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">
        Explore Our <span className="text-primary">Offerings</span>
      </h2>

      {/* Responsive Grid for the Offering Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {offeringsData.map((offering) => (
          <div
            key={offering.title}
            className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="relative aspect-video w-full">
              <Image
                src={offering.imageUrl}
                alt={offering.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 group-hover:scale-105" // Optional hover effect
              />
            </div>

            {/* Text Content */}
            <div className="p-4">
              <h3 className="mb-1 text-lg font-bold text-gray-900">
                {offering.title}
              </h3>
              <p className="text-sm text-gray-600">{offering.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOfferings;
