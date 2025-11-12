import dynamic from "next/dynamic";

const BookingSuccess = dynamic(
  () => import("@/components/parent-dashboard/booking-success"),
  { ssr: false },
);

export default function BookingSuccessPage() {
  return <BookingSuccess />;
}
