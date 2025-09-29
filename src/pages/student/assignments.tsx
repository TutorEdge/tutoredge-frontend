import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function StudentAssignmentsPage() {
  return (
    <StudentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Assignments</h1>
      <div className="rounded-xl border bg-white p-6">
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <div>
              <div className="font-medium">Algebra Practice Set</div>
              <div className="text-sm text-gray-500">Due: 02 Oct</div>
            </div>
            <button className="rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">Submit</button>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <div className="font-medium">Reading Comprehension</div>
              <div className="text-sm text-gray-500">Due: 05 Oct</div>
            </div>
            <button className="rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">Submit</button>
          </li>
        </ul>
      </div>
    </StudentDashboardLayout>
  );
}



