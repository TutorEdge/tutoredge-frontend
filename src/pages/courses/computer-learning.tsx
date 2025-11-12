import React from "react";
import { useRouter } from "next/router";

const ComputerLearning = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-green-600 mb-5">
            💻 Computer Learning
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Introduce your child to the digital era! This section focuses on
            building computer literacy, creativity, and problem-solving skills.
            Learn the basics of coding, typing, file handling, and responsible
            internet usage.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/images/computer.png"
            alt="Computer Learning"
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Topics */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-green-500 mb-3">
          Topics Covered:
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>Introduction to Computers and Internet</li>
          <li>Typing and File Management Skills</li>
          <li>MS Office (Word, Excel, PowerPoint)</li>
          <li>Basics of Coding (Scratch / Python)</li>
          <li>Cyber Safety and Digital Ethics</li>
        </ul>
      </div>

      <div className="mt-10 bg-green-100 rounded-2xl p-6 text-center shadow-md">
        <p className="text-green-700 font-semibold text-lg">
          💡 “The future is digital — start exploring it today!”
        </p>
      </div>
    </div>
  );
};

export default ComputerLearning;
