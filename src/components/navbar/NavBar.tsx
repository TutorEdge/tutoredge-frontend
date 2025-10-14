import Image from 'next/image';
import Link from 'next/link';

// Data for navigation links
const navLinks = [
  { href: '/subjects', label: 'Subjects' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
];

const NavBar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] px-10 py-3">
      {/* 2. Replace the SVG and h2 with the Image component */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png" // Path from the public folder
          alt="TutorEdge Logo" // Important for accessibility
          width={150} // The width of your logo
          height={40} // The height of your logo
        />
      </Link>

      <div className="flex flex-1 items-center justify-end gap-8">
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#111518] transition-colors hover:text-[#177ccf]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link
            href="/parent/dashboard"
            className="flex h-10 items-center rounded-xl bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white hover:opacity-90"
          >
            Parent Dashboard
          </Link>
          <button className="h-10 rounded-xl bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white">
            Find a Tutor
          </button>
          <button className="h-10 rounded-xl bg-[#f0f2f4] px-4 text-sm font-bold leading-normal tracking-[0.015em] text-[#111518]">
            Become a Tutor
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
