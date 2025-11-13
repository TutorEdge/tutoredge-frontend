import { useRouter } from 'next/router';
import React from 'react';

const ComputerLearning = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push('/#kids-courses')}
        className="mb-6 rounded-xl bg-green-500 px-4 py-2 text-white transition hover:bg-green-600"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="mb-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-5 text-4xl font-extrabold text-green-600">
            💻 Computer Learning
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Introduce your child to the digital era! This section focuses on
            building computer literacy, creativity, and problem-solving skills.
            Learn the basics of coding, typing, file handling, and responsible
            internet usage.
          </p>
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src="/images/kids-courses/computer.png"
            alt="Computer Learning"
            className="size-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Topics */}
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold text-green-500">
          Topics Covered:
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>Introduction to Computers and Internet</li>
          <li>Typing and File Management Skills</li>
          <li>MS Office (Word, Excel, PowerPoint)</li>
          <li>Basics of Coding (Scratch / Python)</li>
          <li>Cyber Safety and Digital Ethics</li>
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-green-100 p-6 text-center shadow-md">
        <p className="text-lg font-semibold text-green-700">
          💡 “The future is digital — start exploring it today!”
        </p>
      </div>
    </div>
  );
};

export default ComputerLearning;
