import { useRouter } from "next/router";
import React from "react";

const PrimarySection = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 rounded-xl bg-pink-500 px-4 py-2 text-white transition hover:bg-pink-600"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="mb-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
        {/* Left Section (Text) */}
        <div className="flex-1">
          <h1 className="mb-5 text-4xl font-extrabold text-pink-600">
            📚 Primary Section (Class 1st to 5th)
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Unlock the joy of learning! Our Primary Section is specially
            designed for young learners to build a strong foundation in all
            subjects through interactive lessons and fun activities. We aim to
            make learning an exciting experience that develops creativity,
            curiosity, and confidence.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="flex flex-1 justify-center">
          <img
            src="/images/primary.png"
            alt="Primary Section"
            className="size-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Subject List */}
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold text-pink-500">
          Subjects Covered:
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>
            <strong>English:</strong> Reading, Writing, Grammar, Vocabulary, and
            Storytelling
          </li>
          <li>
            <strong>Hindi:</strong> Grammar, Vocabulary, Creative Writing
          </li>
          <li>
            <strong>Mathematics:</strong> Numbers, Shapes, Problem Solving,
            Logical Thinking
          </li>
          <li>
            <strong>Science:</strong> Curiosity-based experiments and
            observations
          </li>
          <li>
            <strong>Social Studies:</strong> People, Places, Nature, and Culture
          </li>
          <li>
            <strong>Art & Craft:</strong> Drawing, Painting, and Creative
            Projects
          </li>
        </ul>
      </div>

      {/* Bottom Fun Note */}
      <div className="mt-10 rounded-2xl bg-pink-100 p-6 text-center shadow-md">
        <p className="text-lg font-semibold text-pink-700">
          🌟 “Learning is fun when curiosity meets creativity!” 🌟
        </p>
      </div>
    </div>
  );
};

export default PrimarySection;
