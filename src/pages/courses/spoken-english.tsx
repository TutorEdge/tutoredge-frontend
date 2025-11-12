import { useRouter } from "next/router";
import React from "react";

const SpokenEnglish = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 rounded-xl bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="mb-10 flex flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex-1">
          <h1 className="mb-5 text-4xl font-extrabold text-yellow-600">
            🗣️ Spoken English
          </h1>
          <p className="text-lg leading-relaxed text-gray-700">
            Speak confidently and express freely! This course helps children
            improve their pronunciation, listening, and speaking skills through
            interactive games, dialogues, and fun activities.
          </p>
        </div>

        <div className="flex flex-1 justify-center">
          <img
            src="/images/english.png"
            alt="Spoken English"
            className="size-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Topics */}
      <div className="rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-2xl font-semibold text-yellow-500">
          Topics Covered:
        </h2>
        <ul className="ml-6 list-disc space-y-3 text-gray-700">
          <li>Basic Grammar and Vocabulary Building</li>
          <li>Daily Conversation Practice</li>
          <li>Public Speaking and Storytelling</li>
          <li>Listening and Pronunciation Improvement</li>
          <li>Confidence and Personality Development</li>
        </ul>
      </div>

      <div className="mt-10 rounded-2xl bg-yellow-100 p-6 text-center shadow-md">
        <p className="text-lg font-semibold text-yellow-700">
          🌟 “Confidence grows when you find your voice — let’s speak up!”
        </p>
      </div>
    </div>
  );
};

export default SpokenEnglish;
