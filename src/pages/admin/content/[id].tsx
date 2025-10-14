import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const ContentDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const content = {
    id: id as string,
    title: 'Mathematics Basics',
    type: 'Course',
    status: 'published',
    author: 'Dr. Smith',
    description: 'A comprehensive course covering basic mathematics concepts.',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-18',
    students: 45,
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Content Details</h1>
        <Link href="/admin/content">
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Back to Content
          </button>
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Content Information</h2>
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
            <h2 className="text-lg font-semibold mb-4">Statistics</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-600">Status</label>
                <p className="font-medium">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    content.status === 'published' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {content.status}
                  </span>
                </p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Created</label>
                <p className="font-medium">{new Date(content.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Last Updated</label>
                <p className="font-medium">{new Date(content.updatedAt).toLocaleDateString()}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Students Enrolled</label>
                <p className="font-medium">{content.students}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Edit Content
          </button>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
            Delete Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailPage;
