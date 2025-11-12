import { FileQuestion, FileText, MoreVertical } from "lucide-react";
import React, { useState } from "react";

import Button from "../ui/Button";
import CreateAssignmentModal from "./CreateAssignmentModal"; // Import the new modals
import CreateQuizModal from "./CreateQuizModal";

const mockAssignments = [
  {
    id: "a1",
    title: "Algebra Worksheet 2",
    subject: "Mathematics",
    created: "2025-09-15",
  },
  {
    id: "a2",
    title: "Photosynthesis Lab Report",
    subject: "Biology",
    created: "2025-09-10",
  },
  {
    id: "a3",
    title: "Essay on The Great Gatsby",
    subject: "English",
    created: "2025-09-05",
  },
];

const mockQuizzes = [
  {
    id: "q1",
    title: "Chapter 5 Biology Quiz",
    subject: "Biology",
    created: "2025-09-12",
  },
  {
    id: "q2",
    title: "Calculus Derivatives Test",
    subject: "Mathematics",
    created: "2025-09-08",
  },
];

// --- Sub-Component for the data tables ---
const ContentTable = ({ data }: { data: any[] }) => (
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
            <td className="p-4 text-gray-600">{item.created}</td>
            <td className="p-4">
              <button className="text-gray-400 hover:text-gray-700">
                <MoreVertical size={18} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ContentLibraryPage = () => {
  const [activeTab, setActiveTab] = useState("Assignments");
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const tabs = ["Assignments", "Quizzes"];

  return (
    <>
      {" "}
      {/* Use a fragment to wrap the page and the modals */}
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
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* --- THIS IS THE MISSING PART --- */}
        {/* Conditionally render the table based on the active tab */}
        <div className="mt-4">
          {activeTab === "Assignments" && (
            <ContentTable data={mockAssignments} />
          )}
          {activeTab === "Quizzes" && <ContentTable data={mockQuizzes} />}
        </div>
        {/* ------------------------------- */}
      </div>
      {/* Modals are rendered here but are invisible until their state is true */}
      <CreateAssignmentModal
        isOpen={isAssignmentModalOpen}
        setIsOpen={setIsAssignmentModalOpen}
      />
      <CreateQuizModal
        isOpen={isQuizModalOpen}
        setIsOpen={setIsQuizModalOpen}
      />
    </>
  );
};

export default ContentLibraryPage;
