import React from "react";
import CourseLayout from "@/components/CourseLayout";

const SpokenEnglish: React.FC = () => {
  const content = {
    title: "🗣️ Spoken English & Communication Skills (Class 1st–8th)",
    subtitle: "Speak Confidently & Shine!",
    description:
      "Our Spoken English Program is designed for students from Class 1st to 8th to build fluency, improve communication skills, and develop personality for academic and social success.",
    banner: "/images/english-banner.jpg",
    sections: [
      {
        heading: "Primary Level (Class 1st–5th):",
        content: [
          "📖 Basic Vocabulary & Sentences: Learn simple words and sentence formation.",
          "💬 Speaking Practice: Everyday English conversations.",
          "📚 Storytelling & Reading Aloud: Confidence through fun exercises.",
          "🔊 Pronunciation & Phonics: Correct sounds and word formation.",
          "🎲 Interactive Activities: Role plays, games, and speaking exercises.",
        ],
      },
      {
        heading: "Junior Level (Class 6th–8th):",
        content: [
          "🧠 Advanced Vocabulary & Grammar: Expand word power and structure.",
          "🎤 Fluency & Expression: Speak confidently in discussions and presentations.",
          "🌟 Personality Development: Build confidence and positive body language.",
          "🗣️ Communication Skills: Group discussions, debates, and interviews.",
          "📺 Creative Speaking Projects: Storytelling, speeches, and presentations.",
        ],
      },
      {
        heading: "Why Choose Our Spoken English Program?",
        content: [
          "💬 Fluency Building: Speak English confidently in daily life.",
          "🌟 Personality Development: Boost self-expression and confidence.",
          "🎯 Interactive & Fun: Games and activities make learning enjoyable.",
          "🧩 Comprehensive Communication: Reading, speaking, and presentation skills.",
          "📈 Step-by-Step Learning: Tailored for beginners and advanced learners.",
        ],
      },
    ],
    cta: {
      text: "Start Speaking English Confidently – Enhance Communication & Personality Today!",
      button: "Book Now",
      link: "/tutor",
    },
  };

  return <CourseLayout {...content} />;
};

export default SpokenEnglish;
