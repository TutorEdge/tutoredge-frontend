import ParentDashboardLayout from '@/layouts/ParentDashboardLayout';

export default function AddStudentPage() {
  return (
    <ParentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Add New Student</h1>
      <form className="space-y-4 rounded-xl border bg-white p-6">
        <div>
          <label className="mb-1 block text-sm font-medium">Student Name</label>
          <input
            className="w-full rounded-md border px-3 py-2"
            placeholder="Full name"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium">Class</label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="e.g. 6"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">Board</label>
            <input
              className="w-full rounded-md border px-3 py-2"
              placeholder="CBSE/ICSE/State"
            />
          </div>
        </div>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          Add Student
        </button>
      </form>
    </ParentDashboardLayout>
  );
}
