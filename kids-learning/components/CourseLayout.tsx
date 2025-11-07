import Image from "next/image";
import React from "react";

interface Section {
  heading: string;
  content: string[];
}

interface CTA {
  text: string;
  button: string;
  link: string;
}

interface CourseLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  banner: string;
  sections: Section[];
  cta: CTA;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({
  title,
  subtitle,
  description,
  banner,
  sections,
  cta,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Banner */}
      <div className="relative w-full h-72">
        <Image src={banner} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl mt-2">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-lg mb-8">{description}</p>

        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              {section.heading}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.content.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-blue-800 mb-4">{cta.text}</p>
          <button
            onClick={() => (window.location.href = cta.link)}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            {cta.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;
