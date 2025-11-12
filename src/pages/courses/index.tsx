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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-3">
          🌈 Courses for Kids
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Fun-filled learning experiences designed to build strong foundations
          for young learners.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 justify-center">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className={`relative bg-gradient-to-br ${course.color} rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-2xl`}
          >
            <div className="p-6 text-white flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl">{course.title.split(" ")[0]}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{course.title}</h2>
              <p className="text-sm mb-5">{course.desc}</p>

              {/* 🧭 Explore button navigates to the route */}
              <button
                onClick={() => router.push(course.route)}
                className="bg-white text-blue-700 font-semibold px-4 py-2 rounded-xl hover:bg-blue-100 transition"
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
