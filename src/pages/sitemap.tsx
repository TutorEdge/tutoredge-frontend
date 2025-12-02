// src/pages/sitemap.tsx
import Link from 'next/link';
import React from 'react';
import {
  FaBook,
  FaUserGraduate,
  FaFileAlt,
  FaClipboardList,
  FaMapMarkerAlt,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaLightbulb,
  FaTags,
  FaUsers
} from 'react-icons/fa';
import NavBar from '@/components/navbar/NavBar';
import Footer from '@/components/landing/Footer';

const serviceTypes = [
  'Home Tutors',
  'Maths & Science Tutors',
  'Maths Tutors',
  'Female Tutors',
  'Best Tuition Bureau',
  'Private Tutors',
  'English Tutors'
];

const cities = ['Varanasi', 'Prayagraj', 'Lucknow'];

const cityImages: Record<string, string> = {
  Varanasi: '/images/varanasi.jpg',
  Prayagraj: '/images/prayagraj.jpg',
  Lucknow: '/images/lucknow.jpg',
  'Delhi NCR': '/images/delhi.jpg',
  Gurugram: '/images/gurugram.jpg',
  Jaipur: '/images/jaipur.jpg',
  Kanpur: '/images/kanpur.jpg',
  Kota: '/images/kota.jpg'
};

const generateSlug = (service: string, city: string) =>
  `${service.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')}-in-${city.toLowerCase()}`;

const serviceLinks = serviceTypes.flatMap((service) =>
  cities.map((city) => ({
    name: `${service} in ${city}`,
    href: `/services/${generateSlug(service, city)}`
  }))
);

const companyLinks = [
  { name: 'About Us', href: '/about', icon: <FaUserGraduate /> },
  { name: 'Contact Us', href: '/contact', icon: <FaEnvelope /> },
  { name: 'Privacy Policy', href: '/privacy-policy', icon: <FaFileAlt /> },
  { name: 'Refund & Cancellation', href: '/refund-policy', icon: <FaClipboardList /> },
  { name: 'Terms & Conditions', href: '/terms-and-conditions', icon: <FaFileAlt /> },
  { name: 'Blog', href: '/blog', icon: <FaLightbulb /> },
  { name: 'Sitemap', href: '/sitemap', icon: <FaClipboardList /> }
];

const offlineOffices = [
  { city: 'Varanasi', address: '123 Banaras Street, Varanasi' },
  { city: 'Prayagraj', address: '456 Allahabad Road, Prayagraj' },
  { city: 'Lucknow', address: '789 Lucknow Avenue, Lucknow' },
  { city: 'Delhi NCR', address: '101 Noida Sector 18, Noida' },
  { city: 'Gurugram', address: '202 MG Road, Gurugram' },
  { city: 'Jaipur', address: '303 Jaipur Street, Jaipur' },
  { city: 'Kanpur', address: '304 Kanpur Street, Kanpur' },
  { city: 'Kota', address: '303 Rajasthan Street, Kota' }
];

const faqLinks = [
  { question: 'How to choose the right tutor?', href: '/faq#choose-tutor' },
  { question: 'How to book a session?', href: '/faq#booking' },
  { question: 'What are the payment options?', href: '/faq#payment' },
  { question: 'Cancellation and refund process?', href: '/faq#refund' },
  { question: 'How to become a tutor?', href: '/faq#become-tutor' }
];

const SitemapPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />

      <main className="flex-grow p-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">TutorEdge Sitemap</h1>
        <p className="text-center text-gray-700 mb-12">
          Explore all our services, offices, resources, and company information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaBook /> Services
            </h2>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offline Offices */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaMapMarkerAlt /> Offline Offices
            </h2>
            <ul className="space-y-4">
              {offlineOffices.map((office) => (
                <li key={office.city} className="flex flex-col gap-2 border p-2 rounded-lg hover:bg-indigo-50 transition">
                  <div className="flex items-center gap-3">
                    {cityImages[office.city] && (
                      <img
                        src={cityImages[office.city]}
                        alt={office.city}
                        className="w-12 h-12 object-cover rounded-full shadow"
                      />
                    )}
                    <span className="font-medium text-indigo-600 text-lg">{office.city}</span>
                  </div>
                  <span className="text-gray-700">{office.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Services */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaGlobe /> Online Services
            </h2>
            <p className="text-gray-700">
              Accessible from anywhere in India. Book tutors online for personalized learning from the comfort of your home.
            </p>
          </div>

          {/* Company */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaUserGraduate /> Company
            </h2>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name} className="flex items-center gap-2">
                  <span className="text-indigo-500">{link.icon}</span>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs & Resources */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaLightbulb /> FAQs & Resources
            </h2>
            <ul className="space-y-2 text-gray-700">
              {faqLinks.map((faq) => (
                <li key={faq.question}>
                  <Link
                    href={faq.href}
                    className="text-gray-700 hover:text-indigo-600 hover:underline transition-colors"
                  >
                    {faq.question}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaEnvelope /> Contact & Social
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2"><FaPhone className="text-indigo-500" /> +91-XXXXXXXXXX</li>
              <li className="flex items-center gap-2"><FaEnvelope className="text-indigo-500" /> support@tutoredge.com</li>
              <li>Follow us on 
                <Link href="#" className="text-indigo-600 ml-1 hover:underline">Instagram</Link>, 
                <Link href="#" className="text-indigo-600 ml-1 hover:underline">LinkedIn</Link>, 
                <Link href="#" className="text-indigo-600 ml-1 hover:underline">YouTube</Link>
              </li>
              <li>Subscribe to our newsletter for latest updates</li>
            </ul>
          </div>

          {/* Promotions / Featured */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center gap-2">
              <FaTags /> Promotions / Featured
            </h2>
            <p className="text-gray-700">
              Check out our latest offers, featured courses, and trending tutors.
            </p>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Our Office Locations
          </h2>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1abcXYZ12345&hl=en" 
            width="100%" 
            height="450" 
            className="border-0"
            allowFullScreen
            loading="lazy"
            title="Office Locations Map"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;
