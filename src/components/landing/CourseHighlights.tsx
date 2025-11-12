import Image from "next/image";
import React from "react";

import Button from "../ui/Button"; // Assuming Button is in components/ui/

// --- Data for the component ---
const mathsCourses = [
  {
    title: "Abacus",
    imageUrl: "/images/abacusImage.png",
  },

  {
    title: "Vedic Maths",
    imageUrl: "/images/VedicMathsImage.png",
  },
];

const tutoringCards = [
  {
    title: "CBSE",
    description: "Personalised tutoring for CBSE curriculum.",
    imageUrl: "/images/cbseImage.png",
  },
  {
    title: "ICSE",
    description: "Personalised tutoring for ICSE curriculum.",
    imageUrl: "/images/icseImage.png",
  },
  {
    title: "JEE",
    description: "Personalised tutoring for JEE preparation.",
    imageUrl: "/images/jeeImage.png",
  },
  {
    title: "Coding",
    description: "Personalised coding lessons for all levels.",
    imageUrl: "/images/codingImage.png",
  },
];

// --- Main Component ---
const CourseHighlights = () => {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">
        Course <span className="text-primary">Highlights</span>
      </h1>

      <div className="relative">
        {/* Main Banner (Green) */}
        <div className="relative overflow-hidden rounded-2xl bg-teal-500 p-12 pb-24 text-white">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="z-10">
              <h2 className="mb-2 text-4xl font-bold">Explore our</h2>
              <h2 className="mb-6 text-4xl font-bold">Maths courses</h2>
              <Button variant="dark">Join Now</Button>
            </div>
            <div className="flex gap-6">
              {mathsCourses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-xl bg-white p-6 text-center shadow-lg"
                >
                  <h3 className="mb-4 text-lg font-semibold text-gray-800">
                    {course.title}
                  </h3>
                  <div className="relative h-24 w-40 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={course.imageUrl}
                      alt={`${course.title} learning`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personalized Tutoring Section (White Card) */}
        <div className="relative z-10 mx-auto -mt-20 w-11/12 rounded-2xl bg-white p-8 shadow-xl">
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Personalized <span className="text-primary">One-to-One</span>{" "}
              Tutoring
            </h2>
            <div className="relative h-28 w-48">
              <Image
                src="/images/courseHighlightIllustration.png"
                alt="Tutoring illustration"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tutoringCards.map((card) => (
              <div
                key={card.title}
                className="overflow-hidden rounded-xl bg-gray-50 p-4 shadow-md"
              >
                <div className="relative mx-auto h-40 w-full">
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-md"
                  />
                </div>
                <div className="pt-4 text-center">
                  <h3 className="mb-2 font-bold text-gray-800">{card.title}</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {card.description}
                  </p>
                  <Button className="w-full">Find Personal Tutor</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;
