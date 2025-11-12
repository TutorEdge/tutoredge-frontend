import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ContentDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const content = {
    id: id as string,
    title: "Mathematics Basics",
    type: "Course",
    status: "published",
    author: "Dr. Smith",
    description: "A comprehensive course covering basic mathematics concepts.",
    createdAt: "2024-01-15",
    updatedAt: "2024-01-18",
    students: 45,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Content Details</h1>
        <Link href="/admin/content">
          <button className="rounded-lg bg-gray-100 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-200">
            Back to Content
          </button>
        </Link>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-semibold">Content Information</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Title</label>
                <p className="font-medium">{content.title}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Type</label>
                <p className="font-medium">{content.type}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Author</label>
                <p className="font-medium">{content.author}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Description</label>
                <p className="font-medium">{content.description}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Statistics</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <p className="font-medium">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      content.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {content.status}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Created</label>
                <p className="font-medium">
                  {new Date(content.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Updated</label>
                <p className="font-medium">
                  {new Date(content.updatedAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">
                  Students Enrolled
                </label>
                <p className="font-medium">{content.students}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
            Edit Content
          </button>
          <button className="rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700">
            Delete Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailPage;
