import { Star, Upload } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

import Button from "../ui/Button";

// --- Mock Data (to be replaced by API data) ---
const mockTutorData = {
  fullName: "Dr. Amelia Carter",
  email: "amelia.carter@email.com",
  imageUrl: "/images/tutors/tutor-4.jpg",
  bio: "Passionate and experienced educator with a PhD in Physics specializing in quantum mechanics. I believe in making complex topics accessible and engaging for all students.",
  subjects: "Physics, Calculus I, Organic Chemistry",
  languages: "English, Spanish",
  classesTaught: "Grade 9 to 12, University Level",
  experience: "10+",
  qualifications: "PhD in Physics",
  college: "Massachusetts Institute of Technology (MIT)",
};

const mockReviews = [
  {
    id: 1,
    studentName: "Ethan Carter",
    rating: 5,
    date: "July 21, 2024",
    comment:
      "Dr. Carter is an amazing calculus tutor! My son's grades have improved dramatically.",
  },
  {
    id: 2,
    studentName: "Olivia Bennett",
    rating: 5,
    date: "July 19, 2024",
    comment: "Excellent at explaining complex topics in organic chemistry.",
  },
];

// --- Sub-Component for the "Edit Profile" Tab ---
const EditProfileTab = () => {
  // State for all form fields
  const [formData, setFormData] = useState(mockTutorData);
  // State for image uploading
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Generic handler for all text inputs, textareas, and selects
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for when a user selects a new profile picture
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Handler for the main "Save Changes" button
  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    // --- FOR THE BACKEND TEAM ---
    // This is where you'll send the data to the API
    // console.log("Submitting form data:", formData);
    if (selectedFile) {
      // console.log("Uploading new profile picture:", selectedFile.name);
      // const uploadData = new FormData();
      // uploadData.append('profilePhoto', selectedFile);
      // await fetch('/api/tutor/profile/photo', { method: 'POST', body: uploadData });
    }
    // await fetch('/api/tutor/profile', { method: 'PUT', body: JSON.stringify(formData) });
    alert("Profile changes saved! (Simulated)");
  };

  return (
    <form onSubmit={handleSaveChanges} className="flex flex-col gap-8">
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="flex flex-col items-center gap-6 sm:flex-row">
          <div className="relative size-24 shrink-0">
            <Image
              src={previewUrl || formData.imageUrl}
              alt="Profile Photo"
              layout="fill"
              className="rounded-full object-cover"
            />
          </div>
          <div className="grow text-center sm:text-left">
            <h2 className="text-xl font-bold text-gray-800">
              {formData.fullName}
            </h2>
            <p className="text-sm text-gray-500">{formData.email}</p>
            <div className="mt-3 flex justify-center gap-2 sm:justify-start">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              <Button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                variant="primary"
                className="h-9 px-4 text-sm"
              >
                <Upload className="mr-2 size-4" /> Change Photo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">
          Teaching Expertise
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="subjects"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Subjects you teach
            </label>
            <input
              id="subjects"
              name="subjects"
              type="text"
              value={formData.subjects}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="languages"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Languages
            </label>
            <input
              id="languages"
              name="languages"
              type="text"
              value={formData.languages}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="classesTaught"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Classes/Grades Taught
            </label>
            <input
              id="classesTaught"
              name="classesTaught"
              type="text"
              value={formData.classesTaught}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="experience"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Years of Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300"
            >
              <option>0-1 years</option>
              <option>1-3 years</option>
              <option>3-5 years</option>
              <option>5-10 years</option>
              <option>10+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">
          Professional Background
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="qualifications"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Qualifications
            </label>
            <input
              id="qualifications"
              name="qualifications"
              type="text"
              value={formData.qualifications}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="college"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              College/University
            </label>
            <input
              id="college"
              name="college"
              type="text"
              value={formData.college}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-300"
            />
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="bio"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Public Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows={5}
              className="w-full rounded-lg border-gray-300"
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
};

// --- Sub-Component for the "My Reviews" Tab ---
const MyReviewsTab = () => (
  <div className="space-y-6">
    {mockReviews.map((review) => (
      <div key={review.id} className="rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`size-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="mt-3 text-gray-700">{review.comment}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p className="font-medium">{review.studentName}</p>
            <p>{review.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// --- Main Page Component ---
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const tabs = ["Edit Profile", "My Reviews"];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        <p className="mt-1 text-gray-500">
          Manage your public profile and view student reviews.
        </p>
      </div>

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

      <div>
        {activeTab === "Edit Profile" && <EditProfileTab />}
        {activeTab === "My Reviews" && <MyReviewsTab />}
      </div>
    </div>
  );
};

export default ProfilePage;
