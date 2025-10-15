import Image from 'next/image';
import Link from 'next/link';

type Tutor = {
  id: string;
  name: string;
  subject: string;
  experienceYears: number;
  rating: number;
  avatar: string;
  pricePerHour: number;
  location?: string;
};

type TutorCardProps = {
  tutor: Tutor;
};

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <div className="relative h-40 w-full">
        <Image
          src={tutor.avatar}
          alt={tutor.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-semibold">{tutor.name}</div>
            <div className="text-sm text-gray-600">{tutor.subject}</div>
            <div className="mt-1 text-xs text-gray-500">
              {tutor.experienceYears}+ yrs • {tutor.location || 'Online'}
            </div>
          </div>
          <div className="rounded-md bg-blue-50 px-2 py-1 text-sm font-semibold text-blue-700">
            {tutor.rating}★
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm text-gray-700">₹{tutor.pricePerHour}/hr</div>
          <div className="flex items-center gap-2">
            <Link
              href={`/book-demo/${tutor.id}`}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white"
            >
              Book demo
            </Link>
            <Link
              href={`/parent/tutor/${tutor.id}`}
              className="text-sm font-semibold text-blue-700"
            >
              View profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
