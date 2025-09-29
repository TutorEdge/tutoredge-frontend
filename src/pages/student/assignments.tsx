import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

const assignments = [
  { id: 1, title: 'Algebra Practice Set', due: '02 Oct', status: 'Pending' },
  { id: 2, title: 'Reading Comprehension', due: '05 Oct', status: 'Pending' },
  { id: 3, title: 'Physics Worksheet', due: '07 Oct', status: 'Submitted' },
];

export default function StudentAssignmentsPage() {
  return (
    <StudentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Assignments</h1>
      <div className="overflow-hidden rounded-xl border bg-white">
        <div className="grid grid-cols-4 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
          <div>Title</div>
          <div>Due</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>
        {assignments.map((a) => (
          <div key={a.id} className="grid grid-cols-4 items-center px-4 py-3 text-sm text-gray-700">
            <div className="font-medium">{a.title}</div>
            <div>{a.due}</div>
            <div>
              <span className={`rounded-md px-2 py-1 ${a.status === 'Submitted' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>{a.status}</span>
            </div>
            <div className="text-right">
              <button className="rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">{a.status === 'Submitted' ? 'View' : 'Submit'}</button>
            </div>
          </div>
        ))}
      </div>
    </StudentDashboardLayout>
  );
}



