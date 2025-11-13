import { BookText, Calculator, Code2, Languages } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Button from '../ui/Button';

const kidsCourses = [
  {
    id: 1,
    title: 'Primary Section',
    classRange: 'Class 1 - 5',
    description: 'Unlock the Joy of Learning!',
    icon: BookText,
    colors: {
      bg: 'bg-rose-50',
      text: 'text-rose-600',
      iconBg: 'bg-rose-100',
    },
    justify: 'md:justify-self-end',
    link: '/kid-courses/primary-section',
  },
  {
    id: 2,
    title: 'Junior Section',
    classRange: 'Class 6 - 8',
    description: 'Build strong Academic Foundation!',
    icon: Languages,
    colors: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-600',
      iconBg: 'bg-yellow-100',
    },
    justify: 'md:justify-self-start',
    link: '/kid-courses/junior-section',
  },
  {
    id: 3,
    title: 'Computer Learning',
    classRange: 'Class 1 to 8',
    description: 'Learn computer in fun and Easy Way!',
    icon: Calculator,
    colors: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    justify: 'md:justify-self-end',
    link: '/kid-courses/computer-learning',
  },
  {
    id: 4,
    title: 'Spoken English & Communication Skills',
    classRange: 'Class 1 - 8',
    description: 'Speak Confidently and Express Freely!',
    icon: Code2,
    colors: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      iconBg: 'bg-purple-100',
    },
    justify: 'md:justify-self-start',
    link: '/kid-courses/spoken-english',
  },
];

const CoursesForKids = () => {
  return (
    <div id="kids-courses" className="mx-auto max-w-6xl p-6 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 lg:text-left">
        Courses for <span className="text-primary">Kids</span>
      </h2>

      <div className="relative">
        {/* Center image */}
        <div className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:z-10 lg:block lg:-translate-x-1/2 lg:-translate-y-1/2">
          <div className="relative size-80 overflow-hidden rounded-full border-8 border-white shadow-lg">
            <div className="absolute inset-0 -m-4 scale-110 rounded-full bg-pink-100/50"></div>
            <Image
              src="/images/kids-courses-center.png"
              alt="A happy child learning"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-36 gap-y-16 md:grid-cols-2">
          {kidsCourses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.id}
                className={`w-full max-w-sm rounded-2xl p-6 ${course.colors.bg} ${course.justify}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-1 shrink-0 rounded-lg p-2 ${course.colors.iconBg}`}
                  >
                    <Icon className={`size-8 ${course.colors.text}`} />
                  </div>
                  <div className="flex flex-col items-start">
                    <p className={`text-sm font-bold ${course.colors.text}`}>
                      {course.classRange}
                    </p>
                    <h3 className="my-1 text-xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                    <Link href={course.link}>
                      <Button variant="dark" className="mt-4">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CoursesForKids;
