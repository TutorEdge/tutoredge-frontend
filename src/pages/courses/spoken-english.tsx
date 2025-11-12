import React from "react";
import { useRouter } from "next/router";

const SpokenEnglish = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white p-10">
      {/* Back Button */}
      <button
        onClick={() => router.push("/courses")}
        className="mb-6 bg-yellow-500 text-white px-4 py-2 rounded-xl hover:bg-yellow-600 transition"
      >
        ← Back to Courses
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-yellow-600 mb-5">
            🗣️ Spoken English
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Speak confidently and express freely! This course helps children
            improve their pronunciation, listening, and speaking skills through
            interactive games, dialogues, and fun activities.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="/images/english.png"
            alt="Spoken English"
            className="w-64 h-64 object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Topics */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-yellow-500 mb-3">
          Topics Covered:
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-gray-700">
          <li>Basic Grammar and Vocabulary Building</li>
          <li>Daily Conversation Practice</li>
          <li>Public Speaking and Storytelling</li>
          <li>Listening and Pronunciation Improvement</li>
          <li>Confidence and Personality Development</li>
        </ul>
      </div>

      <div className="mt-10 bg-yellow-100 rounded-2xl p-6 text-center shadow-md">
        <p className="text-yellow-700 font-semibold text-lg">
          🌟 “Confidence grows when you find your voice — let’s speak up!”
        </p>
      </div>
    </div>
  );
};

export default SpokenEnglish;
