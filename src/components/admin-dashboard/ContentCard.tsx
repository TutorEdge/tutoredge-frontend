import React from 'react';
import Link from 'next/link';

interface Content {
  id: string;
  title: string;
  type: string;
  status: string;
  author: string;
  createdAt: string;
  students: number;
}

interface ContentCardProps {
  content: Content;
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-gray-900 text-lg">{content.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${
          content.status === 'published' 
            ? 'bg-green-100 text-green-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {content.status}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>Type:</span>
          <span className="font-medium">{content.type}</span>
        </div>
        <div className="flex justify-between">
          <span>Author:</span>
          <span className="font-medium">{content.author}</span>
        </div>
        <div className="flex justify-between">
          <span>Created:</span>
          <span>{new Date(content.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Students:</span>
          <span className="font-medium">{content.students}</span>
        </div>
      </div>

      <div className="mt-4 flex space-x-2">
        <Link
          href={`/admin/content/${content.id}`}
          className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          View Details
        </Link>
        <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Edit
        </button>
      </div>
    </div>
  );
};

export default ContentCard;
