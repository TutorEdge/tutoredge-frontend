import React from "react";
import { useRouter } from "next/router";

const PrimarySection = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
        {/* Left Section (Text) */}
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-pink-600 mb-5">
            📚 Primary Section (Class 1st to 5th)
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Unlock the joy of learning! Our Primary Section is specially
            designed for young learners to build a strong foundation in all
            subjects through interactive lessons and fun activities.  
            We aim to make learning an exciting experience that develops
            creativity, curiosity, and confidence.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/primary.png"
            alt="Primary Section"
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Subject List */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-pink-500 mb-3">
          Subjects Covered:
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>
            <strong>English:</strong> Reading, Writing, Grammar, Vocabulary, and Storytelling
          </li>
          <li>
            <strong>Hindi:</strong> Grammar, Vocabulary, Creative Writing
          </li>
          <li>
            <strong>Mathematics:</strong> Numbers, Shapes, Problem Solving, Logical Thinking
          </li>
          <li>
            <strong>Science:</strong> Curiosity-based experiments and observations
          </li>
          <li>
            <strong>Social Studies:</strong> People, Places, Nature, and Culture
          </li>
          <li>
            <strong>Art & Craft:</strong> Drawing, Painting, and Creative Projects
          </li>
        </ul>
      </div>

      {/* Bottom Fun Note */}
      <div className="mt-10 bg-pink-100 rounded-2xl p-6 text-center shadow-md">
        <p className="text-pink-700 font-semibold text-lg">
          🌟 “Learning is fun when curiosity meets creativity!” 🌟
        </p>
      </div>
    </div>
  );
};

export default PrimarySection;
