import { FileQuestion, FileText, Pencil } from 'lucide-react'; // <-- Added Pencil, removed MoreVertical
import React, { useState } from 'react';

import Button from '../ui/Button';
import CreateAssignmentModal from './CreateAssignmentModal';
import CreateQuizModal from './CreateQuizModal';
import EditAssignmentModal from './EditAssignmentModal'; // <-- 1. Import new modal
import EditQuizModal from './EditQuizModal'; // <-- 1. Import new modal

// --- Types (Copied from your new modal files for this page) ---
// These types are needed to manage the state of the selected item.
type Attachment = {
  id: string;
  fileName: string;
  url: string;
};

type Assignment = {
  id: string;
  title: string;
  subject: string;
  classGrade: string;
  instructions: string;
  attachments: Attachment[];
  dueDate: string; // 'YYYY-MM-DD'
  allowOnlineSubmissions: boolean;
};

type Question = {
  id: string;
  questionText: string;
  type: 'Multiple Choice' | 'True/False' | 'Short Answer';
  options?: string[];
  correctAnswerIndex?: number;
};

type Quiz = {
  id: string;
  title: string;
  subject: string;
  classGrade: string;
  instructions: string;
  questions: Question[];
};

// --- Mock Data (Updated to match new types) ---
const mockAssignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Algebra Worksheet 2',
    subject: 'Mathematics',
    classGrade: 'Grade 9',
    instructions: 'Please complete all problems on page 2.',
    attachments: [
      { id: 'att1', fileName: 'math_problems.pdf', url: '/files/math.pdf' },
      { id: 'att2', fileName: 'solutions.pdf', url: '/files/solutions.pdf' },
    ],
    dueDate: '2025-09-25',
    allowOnlineSubmissions: true,
  },
  {
    id: 'a2',
    title: 'Photosynthesis Lab Report',
    subject: 'Biology',
    classGrade: 'Grade 10',
    instructions: 'Follow the rubric attached.',
    attachments: [
      { id: 'att3', fileName: 'lab_rubric.pdf', url: '/files/rubric.pdf' },
    ],
    dueDate: '2025-09-22',
    allowOnlineSubmissions: true,
  },
];

const mockQuizzes: Quiz[] = [
  {
    id: 'q1',
    title: 'Chapter 5 Biology Quiz',
    subject: 'Biology',
    classGrade: 'Grade 10',
    instructions: '30 minutes, no notes.',
    questions: [
      {
        id: 'q1-1',
        questionText: 'What is the powerhouse of the cell?',
        type: 'Multiple Choice',
      },
      {
        id: 'q1-2',
        questionText: 'True or False: Plants are autotrophs.',
        type: 'True/False',
      },
    ],
  },
  {
    id: 'q2',
    title: 'Calculus Derivatives Test',
    subject: 'Mathematics',
    classGrade: 'Grade 12',
    instructions: 'Show your work.',
    questions: [
      {
        id: 'q2-1',
        questionText: 'What is the derivative of x^2?',
        type: 'Short Answer',
      },
      {
        id: 'q2-2',
        questionText: 'What is the derivative of sin(x)?',
        type: 'Short Answer',
      },
    ],
  },
];

// --- Sub-Component for the data tables (Updated) ---
const ContentTable = ({
  data,
  onEdit,
}: {
  data: any[];
  onEdit: (item: any) => void; // <-- 3. Accept handler
}) => (
  <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
    <table className="w-full text-sm">
      <thead className="bg-gray-50 text-left">
        <tr>
          <th className="p-4 font-medium text-gray-600">Title</th>
          <th className="p-4 font-medium text-gray-600">Subject</th>
          <th className="p-4 font-medium text-gray-600">Date Created</th>
          <th className="p-4 font-medium text-gray-600">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-t">
            <td className="p-4 font-medium text-gray-800">{item.title}</td>
            <td className="p-4 text-gray-600">{item.subject}</td>
            <td className="p-4 text-gray-600">
              {
                /* Use a real date field if available, like 'created' or 'dueDate' */
                item.created || item.dueDate
              }
            </td>
            <td className="p-4">
              {/* 3. Pass item to handler */}
              <button
                onClick={() => onEdit(item)}
                className="text-gray-400 hover:text-blue-600"
              >
                <Pencil size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- Main Page Component ---
const ContentLibraryPage = () => {
  const [activeTab, setActiveTab] = useState('Assignments');

  // State for Create Modals
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  // 2. Add state for Edit Modals
  const [isEditAssignmentModalOpen, setIsEditAssignmentModalOpen] =
    useState(false);
  const [isEditQuizModalOpen, setIsEditQuizModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] =
    useState<Assignment | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);

  const tabs = ['Assignments', 'Quizzes'];

  // 3. Create handlers to open edit modals
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

        {/* Tab Navigation */}
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

        {/* Conditionally render the table based on the active tab */}
        <div className="mt-4">
          {activeTab === 'Assignments' && (
            <ContentTable
              data={mockAssignments}
              onEdit={handleEditAssignment} // <-- 3. Pass handler
            />
          )}
          {activeTab === 'Quizzes' && (
            <ContentTable
              data={mockQuizzes}
              onEdit={handleEditQuiz} // <-- 3. Pass handler
            />
          )}
        </div>
      </div>

      {/* Create Modals */}
      <CreateAssignmentModal
        isOpen={isAssignmentModalOpen}
        setIsOpen={setIsAssignmentModalOpen}
      />
      <CreateQuizModal
        isOpen={isQuizModalOpen}
        setIsOpen={setIsQuizModalOpen}
      />

      {/* 4. Render the new Edit Modals */}
      <EditAssignmentModal
        isOpen={isEditAssignmentModalOpen}
        setIsOpen={setIsEditAssignmentModalOpen}
        assignment={selectedAssignment}
      />
      <EditQuizModal
        isOpen={isEditQuizModalOpen}
        setIsOpen={setIsEditQuizModalOpen}
        quiz={selectedQuiz}
      />
    </>
  );
};

export default ContentLibraryPage;
