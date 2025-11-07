import React from "react";
import CourseLayout from "@/components/CourseLayout";

const ComputerLearning: React.FC = () => {
  const content = {
    title: "💻 Computer Learning (Class 1st–8th)",
    subtitle: "Learn Computers in a Fun & Easy Way!",
    description:
      "Our Computer Learning Program is designed for students from Class 1st to 8th, helping them gain essential digital skills, coding knowledge, and technological confidence for the future.",
    banner: "/images/computer-banner.jpg",
    sections: [
      {
        heading: "Primary Level (Class 1st–5th):",
        content: [
          "🖥️ Basics of Computers: Understanding parts of a computer, keyboard, mouse, and screen.",
          "⌨️ Typing Skills: Fun and interactive typing practice.",
          "🎨 MS Paint & Creativity Tools: Drawing, coloring, and creating digital art.",
          "🌐 Basic Digital Literacy: Safe internet use, introduction to educational apps.",
          "🎮 Fun Learning Apps: Games and activities to boost logical thinking.",
        ],
      },
      {
        heading: "Junior Level (Class 6th–8th):",
        content: [
          "💻 Advanced Computer Basics: MS Word, PowerPoint, and Excel fundamentals.",
          "👨‍💻 Coding for Beginners: Learn Scratch for logical thinking and fun projects.",
          "🐍 Introduction to Python: Basic syntax, loops, and mini projects.",
          "🌍 Digital Skills: Internet research, presentation, and file management.",
          "🚀 Project-Based Learning: Create small apps, animations, and games.",
        ],
      },
      {
        heading: "Why Choose Our Computer Learning Program?",
        content: [
          "🧠 Hands-On Practice: Interactive lessons with real-time exercises.",
          "💪 Skill Building: Typing, coding, and digital literacy for future readiness.",
          "🎮 Fun & Engaging: Gamified learning keeps students motivated.",
          "🧩 Project-Oriented: Learn by doing with creative projects.",
          "🛡️ Safe & Guided: Technology learning in a supervised environment.",
        ],
      },
    ],
    cta: {
      text: "Start Your Digital Journey Today – Learn, Code, and Create!",
      button: "Book Now",
      link: "/tutor",
    },
  };

  return <CourseLayout {...content} />;
};

export default ComputerLearning;
