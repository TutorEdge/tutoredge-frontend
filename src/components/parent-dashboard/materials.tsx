import ParentDashboardLayout from '@/layouts/ParentDashboardLayout';

const materials = [
  { id: 1, name: 'Algebra Basics - PDF', type: 'PDF', status: 'Available' },
  { id: 2, name: 'Triangles Lecture', type: 'Video', status: 'New' },
  {
    id: 3,
    name: 'Weekly Practice Sheet',
    type: 'Worksheet',
    status: 'Available',
  },
];

export default function StudentMaterialsPage() {
  return (
    <ParentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Study Materials</h1>
      <div className="overflow-hidden rounded-xl border bg-white">
        <div className="grid grid-cols-4 border-b bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
          <div>Name</div>
          <div>Type</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>
        {materials.map((m) => (
          <div
            key={m.id}
            className="grid grid-cols-4 items-center px-4 py-3 text-sm text-gray-700"
          >
            <div className="font-medium">{m.name}</div>
            <div>{m.type}</div>
            <div>
              <span
                className={`rounded-md px-2 py-1 ${m.status === 'New' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}
              >
                {m.status}
              </span>
            </div>
            <div className="text-right">
              <button className="rounded-md bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </ParentDashboardLayout>
  );
}
