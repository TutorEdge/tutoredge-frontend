// src/pages/tutor-flow/complete-profile.jsx
import { useState } from "react";

export default function CompleteProfile() {
  const [formData, setFormData] = useState({
    bio: "",
    subject: "",
    method: "",
    certifications: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Complete Your Profile</h2>

        <div className="space-y-4">
          <textarea
            name="bio"
            placeholder="Write a short professional bio..."
            className="w-full border rounded-md p-3"
            rows={3}
            onChange={handleChange}
          />

          <div>
            <label className="block mb-1 font-medium">
              Upload Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <input
            name="subject"
            placeholder="Add subject specializations"
            className="w-full border p-2 rounded-md"
            onChange={handleChange}
          />

          <div>
            <label className="block mb-1 font-medium">
              Preferred Teaching Method
            </label>
            <select
              name="method"
              className="w-full border p-2 rounded-md"
              onChange={handleChange}
            >
              <option value="">Select Method</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Hybrid</option>
            </select>
          </div>

          <textarea
            name="certifications"
            placeholder="Certifications & Awards"
            className="w-full border rounded-md p-3"
            rows={2}
            onChange={handleChange}
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
}
