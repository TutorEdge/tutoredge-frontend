import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    try {
      sessionStorage.setItem("tutorApplication", JSON.stringify(formData));
    } catch {
      console.warn("SessionStorage unavailable");
    }

    router.push("/tutor-flow/verify-phone");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-semibold">
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
              <label className="mb-1 block font-medium">{label}</label>
              <input
                name={key}
                type={
                  key === "password"
                    ? "password"
                    : key === "email"
                      ? "email"
                      : "text"
                }
                value={formData[key]}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default TutorRegistration;
