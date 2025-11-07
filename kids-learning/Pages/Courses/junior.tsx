import React from "react";
import CourseLayout from "@/components/CourseLayout";

const JuniorSection: React.FC = () => {
  const content = {
    title: "🎓 Junior Section (Class 6th–8th)",
    subtitle: "Build Strong Foundations & Excel Academically!",
    description:
      "Our Junior Section is designed for students of Class 6th to 8th, focusing on conceptual clarity, logical reasoning, and skill development to prepare them for higher academics and competitive exams.",
    banner: "/images/junior-banner.jpg",
    sections: [
      {
        heading: "All Subjects Covered:",
        content: [
          "🧮 Mathematics: Numbers, Algebra, Geometry, Mensuration, Data Handling, Problem Solving",
          "🔬 Science: Physics, Chemistry, Biology, Experiments, and Conceptual Understanding",
          "📘 English: Reading, Writing, Grammar, Comprehension, Vocabulary",
          "🌍 Social Science: History, Geography, Civics, Economics",
          "📝 Hindi: Grammar, Essay Writing, Comprehension, Creative Writing",
        ],
      },
      {
        heading: "Skill Development Modules:",
        content: [
          "📊 Concept Building in Maths & Science – strengthen fundamentals and problem-solving skills.",
          "🏆 Olympiad Preparation – practice tests and competitive exam strategies.",
          "🧠 Logical Thinking & Reasoning – puzzles, brain teasers, and analytical exercises.",
          "💻 Coding for Kids – Scratch & Python basics through fun projects.",
          "📚 Study Skills & Exam Preparation – effective study techniques and revision strategies.",
        ],
      },
      {
        heading: "Why Choose This Section?",
        content: [
          "🎯 Interactive & Concept-Based Learning: Designed for clarity and engagement.",
          "🚀 Competitive Edge: Olympiad and reasoning skill focus.",
          "💻 Coding Exposure: Early programming knowledge for logical thinking.",
          "📝 Exam Ready: Build study habits, preparation, and confidence.",
        ],
      },
    ],
    cta: {
      text: "Explore, Learn, and Excel! Begin Your Journey Towards Academic Success Today!",
      button: "Book Now",
      link: "/tutor",
    },
  };

  return <CourseLayout {...content} />;
};

export default JuniorSection;
