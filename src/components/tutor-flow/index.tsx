import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import type { ChangeEvent, FormEvent } from "react";

type TutorForm = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  teachingField: string;
  expertise: string;
  languages: string;
  qualification: string;
  college: string;
  experience: string;
};

const defaultForm: TutorForm = {
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
};

const TutorRegistration: NextPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<TutorForm>(defaultForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: call backend to create tutor application or save to session/localStorage
    // Example: save to sessionStorage so later pages can read it
    try {
      sessionStorage.setItem("tutorApplication", JSON.stringify(formData));
    } catch {
      /* ignore for environments without sessionStorage */
    }
    router.push("/tutor-flow/verify-phone");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Become a Tutor at Tutoredge
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {(
            [
              ["fullName", "Full Name"],
              ["email", "Email Address"],
              ["password", "Password"],
              ["phone", "Phone Number"],
              ["address", "Address"],
              ["teachingField", "Teaching Field"],
              ["expertise", "Subjects / Expertise"],
              ["languages", "Languages"],
              ["qualification", "Qualification"],
              ["college", "College/University"],
              ["experience", "Years of Experience"],
            ] as Array<[keyof TutorForm, string]>
          ).map(([key, label]) => (
            <div key={key}>
              <label className="block mb-1 font-medium">{label}</label>
              <input
                name={key}
                type={key === "password" ? "password" : key === "email" ? "email" : "text"}
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
};

export default TutorRegistration;
