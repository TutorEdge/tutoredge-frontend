import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// --- Data for the Footer Links ---
const footerLinkColumns = [
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Contact us", href: "/contact" },
      { name: "Vedantu Blog", href: "#" },
      { name: "News", href: "/news" },
    ],
  },
  {
    title: "Courses",
    links: [
      { name: "CBSE Tuitions", href: "/courses/cbse" },
      { name: "ICSE Tuitions", href: "/courses/icse" },
      { name: "JEE (Main & Advanced)", href: "/courses/jee" },
      { name: "NEET", href: "/courses/neet" },
    ],
  },
  {
    title: "Offline Centers",
    links: [
      { name: "Noida", href: "/centers/noida" },
      { name: "Prayagraj", href: "/centers/prayagraj" },
      { name: "Lucknow", href: "/centers/lucknow" },
      { name: "Kanpur", href: "/centers/kanpur" },
    ],
  },
];

const socialLinks = [
  { href: "#", icon: Facebook, "aria-label": "Facebook" },
  { href: "#", icon: Linkedin, "aria-label": "LinkedIn" },
  { href: "#", icon: Twitter, "aria-label": "Twitter" },
  { href: "#", icon: Youtube, "aria-label": "YouTube" },
];

// --- Main Component ---
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto max-w-6xl p-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              {/* 1. Increased the logo size */}
              <Image
                src="/images/logo.png"
                alt="TutorEdge Logo"
                width={150}
                height={40}
              />
              {/* 2. Removed the "TutorEdge" text span */}
            </Link>
          </div>

          {/* Link Columns */}
          {footerLinkColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold uppercase text-gray-300">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 transition-colors hover:text-white"
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
      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 p-6 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tutoredge.com. All rights reserved
          </p>
          <div className="flex gap-4 text-sm text-gray-400">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms and conditions
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social["aria-label"]}
                  href={social.href}
                  aria-label={social["aria-label"]}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <Icon className="size-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
