import { Globe, MessageSquare, Signal, Video } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

// --- Data for the component ---
const statsData = [
  { value: '2.1+', unit: 'crore', description: 'hours of LIVE learning' },
  { value: '10+', unit: 'lakh', description: 'monthly youtube views' },
  { value: '25+', unit: 'lakh', description: 'doubts resolved on the app' },
  {
    value: '57+',
    unit: 'countries',
    description: 'where students take LIVE classes',
  },
];

const featuresData = [
  { text: 'Short animated videos', icon: Video, className: 'top-1/4 left-1/4' },
  { text: 'Daily LIVE classes', icon: Signal, className: 'top-1/2 right-0' },
  {
    text: 'Unlimited doubt solving',
    icon: MessageSquare,
    className: 'bottom-1/4 left-1/2',
  },
];

const avatarsData = [
  {
    src: '/images/avatars/avatar-1.jpg',
    className: 'top-10 right-1/4 h-12 w-12',
  },
  {
    src: '/images/avatars/avatar-2.jpg',
    className: 'top-1/3 left-10 h-16 w-16',
  },
  {
    src: '/images/avatars/avatar-3.jpg',
    className: 'top-1/2 left-1/2 h-10 w-10',
  },
  {
    src: '/images/avatars/avatar-4.jpg',
    className: 'bottom-1/4 right-1/4 h-14 w-14',
  },
];

// --- Main Component ---
const OurImpact = () => {
  return (
    // 1. Made this container 'relative' to position the background map
    <div className="relative mx-auto max-w-6xl overflow-hidden p-6 py-16">
      {/* 2. Placed the map here, positioned to cover the right half of the container */}
      <div className="absolute inset-y-0 left-1/2 right-0 z-0 opacity-30">
        <Image
          src="/images/india-map-dotted-blue.png"
          alt="Dotted world map background"
          fill
          style={{ objectFit: 'contain' }} // Changed back to 'contain'
        />
      </div>

      {/* The content grid now sits on top of the background map */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Stats */}
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">
              Impact. At <span className="text-primary">scale</span>
            </h2>
            <p className="mt-2 text-gray-600">
              Making education affordable and accessible across the globe
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {statsData.map((stat) => (
              <div key={stat.description}>
                <p className="text-4xl font-bold text-gray-900">
                  {stat.value}
                  <span className="text-3xl text-gray-700"> {stat.unit}</span>
                </p>
                <p className="mt-1 text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Map Visualization (items float on top of the background) */}
        <div className="relative min-h-[400px] w-full">
          {/* Floating Feature Callouts */}
          {featuresData.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.text}
                className={`absolute flex items-center gap-2 rounded-full bg-white p-2 pr-4 shadow-lg ${feature.className}`}
              >
                <div className="flex size-8 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="size-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {feature.text}
                </span>
              </div>
            );
          })}

          {/* Floating Avatars */}
          {avatarsData.map((avatar) => (
            <div
              key={avatar.src}
              className={`absolute overflow-hidden rounded-full border-2 border-white shadow-md ${avatar.className}`}
            >
              <Image
                src={avatar.src}
                alt="User avatar"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}

          {/* Your Company Logo */}
          <div
            className={`absolute bottom-1/3 right-1/4 flex items-center gap-2 rounded-full bg-white p-2 pr-4 shadow-lg`}
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-blue-100">
              <Globe className="size-5 text-blue-600" />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              TutorEdge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
