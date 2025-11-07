import React from "react";
import Link from "next/link";
import { BookOpen, Laptop, MessageSquare, GraduationCap } from "lucide-react";

const courses = [
  {
    title: "📚 Primary Section (Class 1st–5th)",
    desc: "Unlock the joy of learning with fun and interactive lessons!",
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    href: "/courses/primary",
  },
  {
    title: "🎓 Junior Section (Class 6th–8th)",
    desc: "Build strong foundations & excel academically.",
    icon: <GraduationCap className="w-10 h-10 text-yellow-600" />,
    href: "/courses/junior",
  },
  {
    title: "💻 Computer Learning (Class 1st–8th)",
    desc: "Learn computers in a fun & easy way!",
    icon: <Laptop className="w-10 h-10 text-purple-600" />,
    href: "/courses/computer",
  },
  {
    title: "🗣️ Spoken English & Communication",
    desc: "Speak confidently & shine in every situation!",
    icon: <MessageSquare className="w-10 h-10 text-pink-600" />,
    href: "/courses/english",
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <h1 className="text-5xl font-bold text-center text-blue-700 mb-10">
        🌈 Personalized Learning Journey for Kids (Class 1st–8th)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {courses.map((course, i) => (
          <Link key={i} href={course.href}>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
              <div className="flex items-center space-x-4 mb-4">
                {course.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {course.title}
                </h2>
              </div>
              <p className="text-gray-600">{course.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
