import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";

// Mock Data for the tabs
const mockBookings = [
  {
    id: 1,
    subject: "Calculus I",
    date: "July 20, 2024",
    time: "2:00 PM",
    status: "Completed",
  },
  {
    id: 2,
    subject: "Organic Chemistry",
    date: "July 21, 2024",
    time: "10:00 AM",
    status: "Completed",
  },
];
const mockAssignments = [
  { id: 1, title: "Algebra Worksheet 2", status: "Graded", score: "95%" },
  { id: 2, title: "Physics Lab Report", status: "Submitted", score: "Pending" },
];
const mockQuizzes = [
  { id: 1, title: "Chapter 5 Biology Quiz", status: "Completed", score: "88%" },
];

// Define the type for a student
interface Student {
  id: string;
  name: string;
  grade: string;
}

interface StudentDetailPageProps {
  student: Student;
}

const StudentDetailPage: React.FC<StudentDetailPageProps> = ({ student }) => {
  const [activeTab, setActiveTab] = useState("Bookings");

  const tabs = ["Bookings", "Assignments", "Quizzes"];

  return (
    <div className="flex flex-col gap-6">
      {/* Student Header */}
      <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-sm md:flex-row md:items-center">
        <CircleUserRound className="size-24 shrink-0 text-gray-300" />
        <div className="grow">
          <h1 className="text-3xl font-bold text-gray-800">{student.name}</h1>
          <p className="text-gray-500">
            {student.grade} | Parent: Sarah Carter (sarah.carter@email.com)
          </p>
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

      {/* Tab Content */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        {activeTab === "Bookings" && (
          <table className="w-full text-sm">
            {/* Table for Bookings */}
            <thead className="text-left">
              <tr>
                <th className="p-2">Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="p-2">{b.subject}</td>
                  <td>{b.date}</td>
                  <td>{b.time}</td>
                  <td>{b.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === "Assignments" && (
          <table className="w-full text-sm">
            {/* Table for Assignments */}
            <thead className="text-left">
              <tr>
                <th className="p-2">Title</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {mockAssignments.map((a) => (
                <tr key={a.id} className="border-t">
                  <td className="p-2">{a.title}</td>
                  <td>{a.status}</td>
                  <td>{a.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {activeTab === "Quizzes" && (
          <table className="w-full text-sm">
            {/* Table for Quizzes */}
            <thead className="text-left">
              <tr>
                <th className="p-2">Title</th>
                <th>Status</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {mockQuizzes.map((q) => (
                <tr key={q.id} className="border-t">
                  <td className="p-2">{q.title}</td>
                  <td>{q.status}</td>
                  <td>{q.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StudentDetailPage;
