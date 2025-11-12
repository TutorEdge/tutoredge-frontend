import React from "react";
import { useRouter } from "next/router";

const JuniorSection = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 bg-indigo-500 text-white px-4 py-2 rounded-xl hover:bg-indigo-600 transition"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-5">
            🎓 Junior Section (Class 6th to 8th)
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            The Junior Section strengthens your child’s academic foundation with
            concept-based learning and analytical thinking. Lessons encourage
            logic, reasoning, and creativity, preparing students for higher
            grades through projects and practical examples.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/images/junior.png"
            alt="Junior Section"
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Subjects */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-indigo-500 mb-3">
          Subjects Covered:
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li><strong>Mathematics:</strong> Algebra, Geometry, Mensuration</li>
          <li><strong>Science:</strong> Physics, Chemistry, and Biology basics</li>
          <li><strong>English:</strong> Grammar, Writing Skills, Literature</li>
          <li><strong>Social Science:</strong> History, Civics, Geography</li>
          <li><strong>Computer Basics:</strong> MS Office, Digital Awareness</li>
        </ul>
      </div>

      <div className="mt-10 bg-indigo-100 rounded-2xl p-6 text-center shadow-md">
        <p className="text-indigo-700 font-semibold text-lg">
          🚀 “Explore, question, and grow — that’s how knowledge blooms!”
        </p>
      </div>
    </div>
  );
};

export default JuniorSection;
