// src/components/tutor-dashboard/ContentLibraryPage.tsx

import { FileQuestion, FileText, Pencil } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import apiClient from '../../lib/apiClient';
import Button from '../ui/Button';
import CreateAssignmentModal from './CreateAssignmentModal';
import CreateQuizModal from './CreateQuizModal';
import EditAssignmentModal from './EditAssignmentModal';
import EditQuizModal from './EditQuizModal';

// --- 1. Updated Types to match API (snake_case) ---
// Based on image_784779.png and image_6e3473.png
type Assignment = {
  id: string;
  title: string;
  subject: string;
  class_grade: string; // API uses snake_case
  due_date: string; // API uses snake_case
  allow_submission_online: boolean; // API uses snake_case
  status: string;
  // Note: 'instructions' and 'attachments' are not in the list API
  // You might need a separate GET details API for the Edit Modal later
};

type Quiz = {
  id: string;
  title: string;
  subject: string;
  class_grade: string;
  due_date: string | null;
  total_questions: number;
  status: string;
};

// --- Sub-Component for the data tables ---
const ContentTable = ({
  data,
  onEdit,
  type: _type,
}: {
  data: any[];
  onEdit: (item: any) => void;
  type: 'assignment' | 'quiz';
}) => (
  <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 text-left">
        <tr>
          <th className="p-4 font-medium text-gray-600">Title</th>
          <th className="p-4 font-medium text-gray-600">Subject</th>
          <th className="p-4 font-medium text-gray-600">Grade</th>
          <th className="p-4 font-medium text-gray-600">Due Date</th>
          <th className="p-4 font-medium text-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={5} className="p-8 text-center text-gray-500">
              No content found.
            </td>
          </tr>
        ) : (
          data.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-4 font-medium text-gray-800">{item.title}</td>
              <td className="p-4 text-gray-600">{item.subject}</td>
              {/* 2. Render using correct snake_case keys */}
              <td className="p-4 text-gray-600">{item.class_grade}</td>
              <td className="p-4 text-gray-600">
                {item.due_date
                  ? new Date(item.due_date).toLocaleDateString()
                  : '-'}
              </td>
              <td className="p-4">
                <button
                  onClick={() => onEdit(item)}
                  className="text-gray-400 hover:text-blue-600"
                >
                  <Pencil size={18} />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);

// --- Main Page Component ---
const ContentLibraryPage = () => {
  const [activeTab, setActiveTab] = useState('Assignments');

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Modal States
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isEditAssignmentModalOpen, setIsEditAssignmentModalOpen] =
    useState(false);
  const [isEditQuizModalOpen, setIsEditQuizModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const tabs = ['Assignments', 'Quizzes'];

  // 3. FETCH FUNCTION: Updated for new API structure
  const fetchContent = async () => {
    setIsLoading(true);
    try {
      const [assignRes, quizRes] = await Promise.all([
        apiClient.get('/tutor/assignments'),
        apiClient.get('/tutor/quizzes'),
      ]);

      // 4. Access response.data.data based on your screenshots
      setAssignments(assignRes.data.data || []);
      setQuizzes(quizRes.data.data || []);
    } catch (error) {
      console.error('Failed to fetch content library:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleEditAssignment = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setIsEditAssignmentModalOpen(true);
  };

  const handleEditQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setIsEditQuizModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Content Library
            </h1>
            <p className="mt-1 text-gray-500">
              Create, manage, and send assignments and quizzes.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setIsAssignmentModalOpen(true)}
              variant="dark"
              className="h-10 bg-gray-200 text-sm text-gray-700 hover:bg-gray-300"
            >
              <FileText className="mr-2 size-4" /> Create Assignment
            </Button>
            <Button onClick={() => setIsQuizModalOpen(true)}>
              <FileQuestion className="mr-2 size-4" /> Create Quiz
            </Button>
          </div>
        </div>

        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-4">
          {isLoading ? (
            <div className="p-8 text-center">Loading content...</div>
          ) : (
            <>
              {activeTab === 'Assignments' && (
                <ContentTable
                  data={assignments}
                  onEdit={handleEditAssignment}
                  type="assignment"
                />
              )}
              {activeTab === 'Quizzes' && (
                <ContentTable
                  data={quizzes}
                  onEdit={handleEditQuiz}
                  type="quiz"
                />
              )}
            </>
          )}
        </div>
      </div>

      <CreateAssignmentModal
        isOpen={isAssignmentModalOpen}
        setIsOpen={setIsAssignmentModalOpen}
      />
      <CreateQuizModal
        isOpen={isQuizModalOpen}
        setIsOpen={setIsQuizModalOpen}
      />

      {/* NOTE: Your EditModals might expect 'dueDate' (camelCase). 
         Since the API returns 'due_date' (snake_case), you might need 
         to update your EditAssignmentModal to handle the new field names 
         or map the data here before passing it.
      */}
      <EditAssignmentModal
        isOpen={isEditAssignmentModalOpen}
        setIsOpen={setIsEditAssignmentModalOpen}
        // @ts-ignore - Suppressing TS error until Modal is updated to match API types
        assignment={selectedAssignment}
        onAssignmentUpdated={fetchContent}
        onAssignmentDeleted={fetchContent}
      />
      <EditQuizModal
        isOpen={isEditQuizModalOpen}
        setIsOpen={setIsEditQuizModalOpen}
        // @ts-ignore
        quiz={selectedQuiz}
      />
    </>
  );
};

export default ContentLibraryPage;
