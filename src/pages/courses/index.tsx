// pages/courses/index.tsx
import { useRouter } from "next/router";
import React from "react";

const CoursesForKids = () => {
  const router = useRouter();

  const courses = [
    {
      title: "📚 Primary Section (Class 1st to 5th)",
      desc: "Unlock the joy of learning with fun and activity-based lessons!",
      color: "from-pink-400 to-pink-600",
      route: "/courses/primary-section",
      image: "/images/primary.png",
    },
    {
      title: "🎓 Junior Section (Class 6th to 8th)",
      desc: "Enhance logical thinking and concept clarity through engaging study modules.",
      color: "from-indigo-400 to-indigo-600",
      route: "/courses/junior-section",
      image: "/images/junior.png",
    },
    {
      title: "💻 Computer Learning",
      desc: "Discover the digital world with coding, computers, and logic building.",
      color: "from-green-400 to-green-600",
      route: "/courses/computer-learning",
      image: "/images/computer.png",
    },
    {
      title: "🗣️ Spoken English",
      desc: "Boost your communication confidence with interactive sessions.",
      color: "from-yellow-400 to-yellow-600",
      route: "/courses/spoken-english",
      image: "/images/english.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-5xl font-extrabold text-blue-700">
          🌈 Courses for Kids
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Fun-filled learning experiences designed to build strong foundations
          for young learners.
        </p>
      </div>

      <div className="grid justify-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`relative bg-gradient-to-br ${course.color} overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex flex-col items-center p-6 text-center text-white">
              <div className="mb-4 flex size-24 items-center justify-center rounded-full bg-white bg-opacity-30">
                <span className="text-5xl">{course.title.split(" ")[0]}</span>
              </div>
              <h2 className="mb-2 text-xl font-bold">{course.title}</h2>
              <p className="mb-5 text-sm">{course.desc}</p>

              {/* 🧭 Explore button navigates to the route */}
              <button
                onClick={() => router.push(course.route)}
                className="rounded-xl bg-white px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Explore →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesForKids;
