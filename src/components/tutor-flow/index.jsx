// src/pages/tutor-flow/index.jsx
import { useState } from "react";
import { useRouter } from "next/router";

export default function TutorRegistration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    teachingField: "",
    expertise: "",
    languages: "",
    qualification: "",
    college: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to backend
    router.push("/tutor-flow/verify-phone");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Become a Tutor at Tutoredge
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.entries({
            fullName: "Full Name",
            email: "Email Address",
            password: "Password",
            phone: "Phone Number",
            address: "Address",
            teachingField: "Teaching Field",
            expertise: "Subjects / Expertise",
            languages: "Languages",
            qualification: "Qualification",
            college: "College/University",
            experience: "Years of Experience",
          }).map(([key, label]) => (
            <div key={key}>
              <label className="block mb-1 font-medium">{label}</label>
              <input
                type={
                  key === "password"
                    ? "password"
                    : key === "email"
                    ? "email"
                    : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
