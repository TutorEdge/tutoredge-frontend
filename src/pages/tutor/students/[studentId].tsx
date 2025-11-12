import { useRouter } from "next/router";
import React from "react";

// In a real app, you would fetch this data from your API based on the studentId
import { mockStudentsData } from "@/components/tutor-dashboard/MyStudentsPage"; // Assuming mock data is exported
import StudentDetailPage from "@/components/tutor-dashboard/StudentDetailPage";
import TutorDashboardLayout from "@/components/tutor-dashboard/TutorDashboardLayout";

const StudentDetail = () => {
  const router = useRouter();
  const { studentId } = router.query;

  // Find the specific student from your data source
  const student = mockStudentsData.find((s) => s.id === studentId);

  if (!student) {
    return (
      <TutorDashboardLayout>
        <p>Student not found.</p>
      </TutorDashboardLayout>
    );
  }

  return (
    <TutorDashboardLayout>
      <StudentDetailPage student={student} />
    </TutorDashboardLayout>
  );
};

export default StudentDetail;
