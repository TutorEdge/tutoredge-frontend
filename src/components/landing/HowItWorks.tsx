import { CalendarCheck, CreditCard, MonitorPlay } from "lucide-react";
import React from "react";

import Button from "../ui/Button";

const stepsData = [
  {
    id: 1,
    icon: CalendarCheck,
    title: "Book a Demo",
    description: "Book a Free Demo Class with a Tutor.",
  },
  {
    id: 2,
    icon: MonitorPlay,
    title: "Join LIVE Demo Class",
    description: "Attend the demo class as scheduled.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Pay and Start",
    description: "Use TutorEdge SecurePay to pay and start your Classes.",
  },
];

const HowItWorks = () => {
  return (
    // 3. Changed max-w-5xl to max-w-6xl for consistency
    <div className="mx-auto max-w-6xl p-6 py-16">
      {/* 1. Removed 'text-center' to align the title to the left */}
      <h2 className="mb-16 text-3xl font-bold text-gray-800">
        How it <span className="text-primary">works!</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {stepsData.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* 2. Shortened the line to create space around the numbers */}
              {index < stepsData.length - 1 && (
                <div className="absolute left-[62%] top-5 hidden h-0.5 w-[90%] bg-gray-200 md:block" />
              )}

              {/* Numbered Circle (no changes needed here) */}
              <div className="relative z-10 flex size-10 items-center justify-center rounded-full bg-gray-100 font-bold text-gray-600">
                {step.id}
              </div>

              <div className="my-6 flex size-32 items-center justify-center rounded-full bg-teal-100">
                <Icon className="size-16 text-teal-500" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="max-w-xs text-gray-600">{step.description}</p>
            </div>
          );
        })}
      </div>

      {/* 3. Used flexbox to properly center the button */}
      <div className="mt-16 flex justify-center">
        <Button>Get Started!</Button>
      </div>
    </div>
  );
};

export default HowItWorks;
