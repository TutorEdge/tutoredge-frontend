import dynamic from "next/dynamic";

const Payments = dynamic(
  () => import("@/components/parent-dashboard/payments"),
  { ssr: false },
);

export default function PaymentsPage() {
  return <Payments />;
}
