import StudentDashboardLayout from '@/layouts/StudentDashboardLayout';

export default function StudentProfilePage() {
  return (
    <StudentDashboardLayout>
      <h1 className="mb-4 text-2xl font-bold">Profile</h1>
      <form className="space-y-4 rounded-xl border bg-white p-6">
        <div>
          <label className="mb-1 block text-sm font-medium">Name</label>
          <input className="w-full rounded-md border px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Class</label>
          <input className="w-full rounded-md border px-3 py-2" placeholder="e.g. 8" />
        </div>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Save changes</button>
      </form>
    </StudentDashboardLayout>
  );
}



