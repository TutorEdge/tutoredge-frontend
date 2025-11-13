import React from 'react';

const stepsData = [
  {
    id: 1,
    img: 'images/how-it-works/demo.svg',
    title: '1 to 3 Tutors give a demo session to your child',
    color: 'bg-yellow-400',
  },
  {
    id: 2,
    img: 'images/how-it-works/selection.svg',
    title: 'Parents select the best tutor based on demo',
    color: 'bg-pink-400',
  },
  {
    id: 3,
    img: 'images/how-it-works/test.svg',
    title: 'Tutor conducts monthly test series on our platform',
    color: 'bg-blue-400',
  },
  {
    id: 4,
    img: 'images/how-it-works/analytics.svg',
    title: 'Student’s scorecard displayed on dashboard',
    color: 'bg-green-400',
  },
];

const HowItWorks = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-16 text-4xl font-extrabold text-gray-900">
        Our <span className="text-primary">Step-by-Step</span> Learning Process
      </h2>

      <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
        {stepsData.map((step, index) => (
          <div
            key={step.id}
            className={`relative flex w-full max-w-sm flex-col items-center justify-center rounded-3xl ${step.color} p-8 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl md:w-1/4`}
          >
            <div className="mb-4 flex justify-center">
              <img
                src={step.img}
                alt={step.title}
                className="size-32 object-contain drop-shadow-md"
              />
            </div>

            <p className="text-center text-lg font-semibold leading-snug text-white">
              {step.title}
            </p>

            {index < stepsData.length - 1 && (
              <div className="absolute right-[-45px] top-1/2 hidden h-1 w-10 -translate-y-1/2 bg-gray-300 md:block"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
