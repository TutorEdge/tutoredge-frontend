// import Image from 'next/image';
// import React from 'react';

// --- Data for the Offerings ---
// Storing data in an array makes the component clean, scalable, and easy to manage.
// const offeringsData = [
//   {
//     title: 'Class 9',
//     description: 'Tutoring for Class 9 students.',
//     imageUrl: '/images/offerings/class-9.png', // Placeholder image path
//   },
//   {
//     title: 'Class 10',
//     description: 'Tutoring for Class 10 students.',
//     imageUrl: '/images/offerings/class-10.png',
//   },
//   {
//     title: 'Class 11',
//     description: 'Tutoring for Class 11 students.',
//     imageUrl: '/images/offerings/class-11.png',
//   },
//   {
//     title: 'Class 12',
//     description: 'Tutoring for Class 12 students.',
//     imageUrl: '/images/offerings/class-12.png',
//   },
//   {
//     title: 'Competitive Exams',
//     description: 'Preparation for JEE, NEET, and more.',
//     imageUrl: '/images/offerings/jee-neet.png',
//   },
//   {
//     title: 'Coding Classes',
//     description: 'Learn to code with personalized guidance.',
//     imageUrl: '/images/offerings/coding.png',
//   },
//   {
//     title: 'Skill Development',
//     description: 'Courses in public speaking and writing.',
//     imageUrl: '/images/offerings/skills.png',
//   },
//   {
//     title: 'Language Learning',
//     description: 'Master new languages with expert tutors.',
//     imageUrl: '/images/offerings/language.png',
//   },
// ];

// // --- Main Component ---
// const OurOfferings = () => {
//   return (
//     <div className="mx-auto max-w-6xl p-6">
//       <h2 className="mb-8 text-3xl font-bold text-gray-800">
//         Explore Our <span className="text-primary">Offerings</span>
//       </h2>

//       {/* Responsive Grid for the Offering Cards */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {offeringsData.map((offering) => (
//           <div
//             key={offering.title}
//             className="overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
//           >
//             {/* Image Container */}
//             <div className="relative aspect-video w-full">
//               <Image
//                 src={offering.imageUrl}
//                 alt={offering.title}
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 className="transition-transform duration-300 group-hover:scale-105" // Optional hover effect
//               />
//             </div>

//             {/* Text Content */}
//             <div className="p-4">
//               <h3 className="mb-1 text-lg font-bold text-gray-900">
//                 {offering.title}
//               </h3>
//               <p className="text-sm text-gray-600">{offering.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurOfferings;
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// // // --- Updated Offerings Data ---
// const offeringsData = [
//   {
//     title: "Primary (Class 1st–5th)",
//     description:
//       "Qualified home tutors for all subjects. Personal attention, concept-based learning & better results.",
//     imageUrl: "/images/primary.png",
//     link: "/tutor",
//   },
//   {
//     title: "Class 6th–8th",
//     description:
//       "All subjects home tuition by qualified and experienced tutors.",
//     imageUrl: "/images/junior.png",
//     link: "/tutor",
//   },
//   {
//     title: "Class 9",
//     description: "Tutoring for Class 9 students.",
//     imageUrl: "/images/offerings/class-9.png",
//     link: "/tutor",
//   },
//   {
//     title: "Class 10",
//     description: "Tutoring for Class 10 students.",
//     imageUrl: "/images/offerings/class-10.png",
//     link: "/tutor",
//   },
//   {
//     title: "Class 11",
//     description: "Tutoring for Class 11 students.",
//     imageUrl: "/images/offerings/class-11.png",
//     link: "/tutor",
//   },
//   {
//     title: "Class 12",
//     description: "Tutoring for Class 12 students.",
//     imageUrl: "/images/offerings/class-12.png",
//     link: "/tutor",
//   },
//   {
//     title: "JEE / NEET",
//     description:
//       "Preparation for JEE, NEET, and other competitive exams with top tutors.",
//     imageUrl: "/images/offerings/jee-neet.png",
//     link: "/tutor",
//   },
//   {
//     title: "Computer / Programming",
//     description: "Learn coding with personalized one-on-one guidance.",
//     imageUrl: "/images/offerings/coding.png",
//     link: "/tutor",
//   },
//   {
//     title: "SST / Commerce",
//     description:
//       "Expert tutors for Social Science, Commerce, and related subjects.",
//     imageUrl: "/images/primary.png",
//     link: "/tutor",
//   },
//   {
//     title: "Competitive Exams",
//     description:
//       "Preparation for competitive exams like JEE, NEET, and more.",
//     imageUrl: "/images/primary.png",
//     link: "/tutor",
//   },
//   {
//     title: "Skill Development",
//     description:
//       "Courses in communication, public speaking, and creative writing.",
//     imageUrl: "/images/offerings/skills.png",
//     link: "/tutor",
//   },
//   {
//     title: "Language Learning",
//     description: "Master new languages with expert tutors.",
//     imageUrl: "/images/offerings/language.png",
//     link: "/tutor",
//   },
// ];

// const OurOfferings = () => {
//   return (
//     <section className="mx-auto max-w-7xl p-6">
//       <h2 className="mb-8 text-3xl font-bold text-gray-800 text-left">
//         Explore Our <span className="text-blue-600">Offerings</span>
//       </h2>

//       {/* Responsive Grid for Offering Cards */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {offeringsData.map((offering) => (
//           <div
//             key={offering.title}
//             className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
//           >
//             {/* Image */}
//             <div className="relative aspect-video w-full">
//               <Image
//                 src={offering.imageUrl}
//                 alt={offering.title}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//               />
//             </div>

//             {/* Text Content */}
//             <div className="flex flex-col justify-between flex-grow p-4">
//               <div>
//                 <h3 className="mb-1 text-lg font-bold text-gray-900">
//                   {offering.title}
//                 </h3>
//                 <p className="text-sm text-gray-600">
//                   {offering.description}
//                 </p>
//               </div>

//               {/* Book Now Button */}
//               <Link href={offering.link}>
//                 <button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
//                   Book Now →
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurOfferings;

import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Updated Offerings Data ---
const offeringsData = [
  {
    title: "Class 1st–5th",
    description:
      "Qualified home tutors for all subjects. Personal attention, concept-based learning & better results.",
    imageUrl: "/images/primary.png",
    link: "/tutor",
  },
  {
    title: "Class 6th–8th",
    description:
      "All subjects home tuition for Class 6th to 8th students by experienced tutors to strengthen academic foundations.",
    imageUrl: "/images/offerings/middle.png",
    link: "/tutor",
  },
  {
    title: "Class 9th–10th",
    description:
      "Comprehensive subject-wise guidance for Class 9 & 10 students with exam-oriented preparation.",
    imageUrl: "/images/offerings/high.png",
    link: "/tutor",
  },
  {
    title: "Class 11th–12th",
    description:
      "Focused learning for senior secondary students. Build strong fundamentals for boards and beyond.",
    imageUrl: "/images/offerings/higher.png",
    link: "/tutor",
  },
  {
    title: "IIT-JEE",
    description:
      "Expert mentors for JEE Mains & Advanced with conceptual clarity and result-driven preparation.",
    imageUrl: "/images/offerings/iit-jee.png",
    link: "/tutor",
  },
  {
    title: "NEET",
    description:
      "Specialized guidance for NEET aspirants to excel in Physics, Chemistry, and Biology.",
    imageUrl: "/images/offerings/neet.png",
    link: "/tutor",
  },
  {
    title: "Computer / Programming",
    description:
      "Learn programming and modern technologies with personalized one-on-one coding sessions.",
    imageUrl: "/images/offerings/coding.png",
    link: "/tutor",
  },
  {
    title: "SST / Commerce",
    description:
      "Subject experts for Social Science and Commerce stream to ensure concept mastery.",
    imageUrl: "/images/offerings/sst.png",
    link: "/tutor",
  },
  {
    title: "Skill Development",
    description:
      "Courses in communication, public speaking, leadership, and creative writing.",
    imageUrl: "/images/offerings/skills.png",
    link: "/tutor",
  },
  {
    title: "Language Learning",
    description:
      "Master new languages such as English, French, and more with fluent-speaking tutors.",
    imageUrl: "/images/offerings/english.png",
    link: "/tutor",
  },
];

const OurOfferings: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Heading */}
      <h2 className="mb-10 text-center text-3xl font-extrabold text-gray-800 sm:text-4xl">
        Explore Our <span className="text-blue-600">Offerings</span>
      </h2>

      {/* Offerings Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {offeringsData.map((offering) => (
          <div
            key={offering.title}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-48 w-full sm:h-52 md:h-56">
              <Image
                src={offering.imageUrl}
                alt={offering.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="flex grow flex-col justify-between p-5">
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 sm:text-xl">
                  {offering.title}
                </h3>
                <p className="text-sm text-gray-600 sm:text-base">
                  {offering.description}
                </p>
              </div>

              {/* Book Now Button */}
              <Link href={offering.link} className="mt-4">
                <button
                  type="button"
                  className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                >
                  Book Now →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOfferings;
