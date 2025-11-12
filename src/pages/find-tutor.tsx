import dynamic from "next/dynamic";

const TutorSearchPage = dynamic(
  () => import("@/components/find-tutor/TutorSearchPage"),
  { ssr: false },
);

export default function FindTutorPage() {
  return <TutorSearchPage />;
}
