import type { NextPage } from "next";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

type CompleteProfileForm = {
  bio: string;
  subject: string;
  method: "Online" | "Offline" | "Hybrid" | "";
  certifications: string;
};

const initialForm: CompleteProfileForm = {
  bio: "",
  subject: "",
  method: "",
  certifications: "",
};

const CompleteProfile: NextPage = () => {
  const [form, setForm] = useState<CompleteProfileForm>(initialForm);
  const [image, setImage] = useState<File | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value as any }));
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("bio", form.bio);
    payload.append("subject", form.subject);
    payload.append("method", form.method);
    payload.append("certifications", form.certifications);
    if (image) payload.append("profilePicture", image);

    alert("Profile saved successfully (mock)");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold">Complete Your Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">Short Bio</label>
            <textarea
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Write a short professional bio..."
              className="w-full rounded-md border p-3"
              rows={3}
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Upload Profile Picture
            </label>
            <input type="file" accept="image/*" onChange={handleFile} />
            {image && (
              <p className="mt-2 text-sm text-gray-600">{image.name}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Subject Specializations
            </label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Add subject specializations"
              className="w-full rounded-md border p-2"
            />
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Preferred Teaching Method
            </label>
            <select
              name="method"
              value={form.method}
              onChange={handleChange}
              className="w-full rounded-md border p-2"
            >
              <option value="">Select Method</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block font-medium">
              Certifications & Awards
            </label>
            <textarea
              name="certifications"
              value={form.certifications}
              onChange={handleChange}
              placeholder="Certifications & Awards"
              className="w-full rounded-md border p-3"
              rows={2}
            />
          </div>

          <button
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700"
            type="submit"
          >
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfile;
