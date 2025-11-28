import { Gem, History, Target } from 'lucide-react'; // Icons for the middle section
import Image from 'next/image';
import React from 'react';

// --- Mock Data for Team Members ---
const teamMembers = [
  {
    name: 'Priyanka Singh',
    role: 'Coordinator, Lucknow',
    imageUrl: '/images/team/priyanka.jpg',
  },
  {
    name: 'Shweta Gupta',
    role: 'Jr. Manager, Varanasi',
    qualification: 'MSc. Zoology',
    imageUrl: '/images/team/shweta.jpg',
  },
  {
    name: 'Ashwani K.',
    role: 'CFO',
    qualification: 'Btech in Information Technology',
    imageUrl: '/images/team/ashwani.jpg',
  },
  {
    name: 'Sushmita Srivastava',
    role: 'Director',
    qualification: 'BSc, MMC',
    imageUrl: '/images/team/sushmita.jpg',
  },
  {
    name: 'Sam Thomas',
    role: 'Co-Founder',
    qualification: 'Master Mariner in Merchant Navy',
    imageUrl: '/images/team/sam.jpg',
  },
];

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {' '}
      {/* Changed main background to white */}
      {/* --- Section 1: Introduction --- */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Text */}
          <div className="space-y-4 text-gray-700">
            <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
              A Professional Home Tutor at Your Service all across India.
            </h1>
            <p className="leading-relaxed">
              Are you looking to excel in your academics but require a
              one-to-one session from a reliable professional? Sometimes, all it
              takes is the right guidance and hence our tutors are very
              considerate and patient to ensure you&apos;re comfortable to learn
              at your own pace.
            </p>
            <p className="leading-relaxed">
              At TutorEdge, we aim to ensure our students excel in terms of
              Knowledge, Ideology and Performance. We offer to cater the
              educational requirements of students by bringing awareness of the
              latest examination patterns and sourcing them the latest study
              material accordingly.
            </p>
            <p className="leading-relaxed">
              We have built a team of highly qualified, dedicated and
              experienced faculty members. We envision a structure to chisel
              students out of the fragile minds of our generation into scholars
              and academicians that would act like a compass so to ensure their
              values are intact for the academic enhancement of the students, we
              provide them a Stress-free, friendly and healthy environment
              during classes.
            </p>
            <p className="font-semibold text-gray-800">
              &quot;Together we can reach for the Silver Lining&quot;
            </p>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative h-80 rounded-lg lg:h-96">
            {/* Simple representation - replace with actual images and positions */}
            <Image
              src="/images/about/collage-main.jpg"
              alt="Tutoring session"
              layout="fill"
              className="rounded-lg object-cover shadow-lg"
            />
            {/* Add smaller overlapping images here using absolute positioning if needed */}
          </div>
        </div>
      </section>
      {/* --- Section 2: Mission, Vision, Values --- */}
      <section className="relative bg-gray-100 py-20">
        {/* Background Image (Optional) */}
        {/* <Image src="/images/about/mission-bg.jpg" layout="fill" objectFit="cover" className="absolute inset-0 z-0 opacity-10" alt=""/> */}

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Column: Interactive Buttons (Static Representation) */}
            <div className="flex flex-col items-center gap-4 lg:items-start">
              <button className="flex w-full max-w-xs items-center gap-4 rounded-lg bg-teal-600 p-4 text-white shadow-md transition hover:bg-teal-700">
                <History size={24} />{' '}
                <span className="text-lg font-semibold">History</span>
              </button>
              <button className="flex w-full max-w-xs items-center gap-4 rounded-lg bg-slate-700 p-4 text-white shadow-md transition hover:bg-slate-800">
                <Target size={24} />{' '}
                <span className="text-lg font-semibold">Mission & Vision</span>
              </button>
              <button className="flex w-full max-w-xs items-center gap-4 rounded-lg bg-slate-500 p-4 text-white shadow-md transition hover:bg-slate-600">
                <Gem size={24} />{' '}
                <span className="text-lg font-semibold">Our Core Values</span>
              </button>
            </div>

            {/* Right Column: Text Content */}
            <div className="text-gray-700">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">
                To cater to our customers to attain their finish line.
              </h2>
              <p className="leading-relaxed">
                Our roadmap starts with our vision that is to be a leading
                learning platform logging the need for the availableness of our
                customers (Students/Tutors). In addition to ensuring a Healthy,
                Competitive and Learning environment bringing them closer to
                reaching their ambitions. Gradually we continually aim to
                contribute in making the world a better place and to bring
                education to each and every home around the country as
                &quot;KNOWLEDGE IS POWER&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- Section 3: Our Team --- */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
          Our Team
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-4 size-32 overflow-hidden rounded-full shadow-md">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600">{member.role}</p>
              {member.qualification && (
                <p className="mt-1 text-xs text-gray-500">
                  {member.qualification}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
