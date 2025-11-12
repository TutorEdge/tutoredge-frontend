import React from "react";

import ContentCard from "@/components/admin-dashboard/ContentCard";

const contentItems = [
  {
    id: "1",
    title: "Mathematics Basics",
    type: "Course",
    status: "published",
    author: "Dr. Smith",
    createdAt: "2024-01-15",
    students: 45,
  },
  {
    id: "2",
    title: "Physics Quiz",
    type: "Quiz",
    status: "draft",
    author: "Prof. Johnson",
    createdAt: "2024-01-10",
    students: 0,
  },
  {
    id: "3",
    title: "Chemistry Lab",
    type: "Assignment",
    status: "published",
    author: "Dr. Brown",
    createdAt: "2024-01-08",
    students: 23,
  },
];

const ContentManagementPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Content Management</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
          Create Content
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {contentItems.map((content) => (
          <ContentCard key={content.id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default ContentManagementPage;
