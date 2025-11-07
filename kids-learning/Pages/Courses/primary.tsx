import React from "react";
import CourseLayout from "@/components/CourseLayout";

const PrimarySection: React.FC = () => {
  const content = {
    title: "📚 Primary Section (Class 1st–5th)",
    subtitle: "Unlock the Joy of Learning!",
    description:
      "Our Primary Section is specially designed for young learners to build a strong foundation in all key subjects with fun, interactive, and activity-based learning.",
    banner: "/images/primary-banner.jpg",
    sections: [
      {
        heading: "All Subjects Covered:",
        content: [
          "📘 English: Reading, Writing, Grammar, Vocabulary, Storytelling",
          "📝 Hindi: Grammar, Vocabulary, Creative Writing, Poetry",
          "🧮 Mathematics: Numbers, Operations, Fractions, and Fun with Numbers",
          "🌿 EVS: Plants, Animals, Experiments, and Our Surroundings",
          "💻 Computer Basics: MS Paint, Typing, and Fun Learning Apps",
        ],
      },
      {
        heading: "Skill Development Modules:",
        content: [
          "📖 Reading & Writing Skills – comprehension and storytelling.",
          "✍️ Handwriting Improvement – cursive and neatness exercises.",
          "💬 Basic Spoken English – role plays and vocabulary building.",
          "🔢 Fun with Numbers – puzzles, quizzes, and math tricks.",
          "🔬 Science through Activities – experiments and hands-on learning.",
        ],
      },
      {
        heading: "Why Choose This Section?",
        content: [
          "🎥 Interactive Learning: Videos, quizzes, and worksheets.",
          "🎯 Activity-Based: Hands-on learning to make concepts stick.",
          "🧠 Skill Enhancement: Communication, logical thinking, and creativity.",
          "🎉 Fun & Engaging: Games, stories, and enjoyable lessons.",
        ],
      },
    ],
    cta: {
      text: "Start Your Child’s Learning Adventure Today! Explore, Learn, and Grow!",
      button: "Book Now",
      link: "/tutor",
    },
  };

  return <CourseLayout {...content} />;
};

export default PrimarySection;
