import { useRouter } from "next/router";
import React from "react";

const JuniorSection = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 rounded-xl bg-indigo-500 px-4 py-2 text-white transition hover:bg-indigo-600"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="mb-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-5 text-4xl font-extrabold text-indigo-600">
            🎓 Junior Section (Class 6th to 8th)
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            The Junior Section strengthens your child’s academic foundation with
            concept-based learning and analytical thinking. Lessons encourage
            logic, reasoning, and creativity, preparing students for higher
            grades through projects and practical examples.
          </p>
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src="/images/junior.png"
            alt="Junior Section"
            className="size-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Subjects */}
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold text-indigo-500">
          Subjects Covered:
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <strong>Mathematics:</strong> Algebra, Geometry, Mensuration
          </li>
          <li>
            <strong>Science:</strong> Physics, Chemistry, and Biology basics
          </li>
          <li>
            <strong>English:</strong> Grammar, Writing Skills, Literature
          </li>
          <li>
            <strong>Social Science:</strong> History, Civics, Geography
          </li>
          <li>
            <strong>Computer Basics:</strong> MS Office, Digital Awareness
          </li>
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-indigo-100 p-6 text-center shadow-md">
        <p className="text-lg font-semibold text-indigo-700">
          🚀 “Explore, question, and grow — that’s how knowledge blooms!”
        </p>
      </div>
    </div>
  );
};

export default JuniorSection;
