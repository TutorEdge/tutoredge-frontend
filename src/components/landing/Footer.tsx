// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// --- Data Generation for Service Links (Logic Unchanged) ---

const serviceTypes = [
  'Home Tutors',
  'Maths & Science Tutors',
  'Maths tutors',
  'female tutor',
  'Best tuition bureau',
  'Private tutor',
  'English tutor',
  'Chemistry tutor',
  'Science tutors',
  'Best teacher',
  'Science & maths tutor',
  'Tuition bureau',
  'Female tutors',
  'CBSE & ICSE Tutors',
  'Best home tutor near me',
  'Home tuition for class 9 & class 10',
];

const cities = ['Varanasi', 'Prayagraj', 'Lucknow'];

const generateSlug = (service: string, city: string): string => {
  return `${service
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-$/, '')}-in-${city.toLowerCase()}`;
};

const serviceLinks = serviceTypes.flatMap((service) =>
  cities.map((city) => ({
    name: `${service} in ${city}`,
    href: `/services/${generateSlug(service, city)}`,
  })),
);

// Distribute the generated links into 3 columns
const linksPerColumn = Math.ceil(serviceLinks.length / 3);
const serviceColumns = [
  serviceLinks.slice(0, linksPerColumn),
  serviceLinks.slice(linksPerColumn, linksPerColumn * 2),
  serviceLinks.slice(linksPerColumn * 2),
];

const companyLinks = [
  { name: 'About us', href: '/about' },
  { name: 'Contact us', href: '/contact' },
  // { name: 'News', href: '/news' },
];

// --- Main Component ---
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl p-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo, Tagline, and Company Links */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="TutorEdge Logo"
                width={150}
                height={40}
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your partner in personalized learning.
            </p>

            {/* Company Links moved here */}
            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-gray-300 transition-colors hover:text-white hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2, 3, 4: Service Links */}
          {serviceColumns.map((links, index) => (
            <div key={index}>
              {/* Only show the "Services" title on the first service column (index 0).
                  For the others, use 'invisible' to keep the vertical alignment/spacing correct. */}
              <h3
                className={`text-sm font-semibold uppercase tracking-wider text-gray-400 ${index > 0 ? 'invisible sm:invisible lg:invisible' : ''}`}
              >
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors hover:text-white hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-700 bg-slate-800 p-8">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TutorEdge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
