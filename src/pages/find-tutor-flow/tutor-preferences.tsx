// src/pages/find-tutor-flow/tutor-preferences.tsx
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Button from '../../components/find-tutor-flow/Button';
import Checkbox from '../../components/find-tutor-flow/CheckBox';
import RadioGroup from '../../components/find-tutor-flow/RadioGroup';

const subjects = ['Math', 'Science', 'English', 'History', 'Social Science'];
const languages = ['English', 'Spanish', 'French', 'Mandarin'];
const timeSlots = ['Morning', 'Afternoon', 'Evening'];

const urgencyOptions = [
  { label: 'Within 24 hours', value: '24h' },
  { label: 'Within 1 week', value: '1w' },
  { label: 'Other & ASAP', value: 'other' },
];

const TutorPreferences: React.FC = () => {
  const router = useRouter();

  // Simplified state to be closer to what the API needs
  const [subject, setSubject] = useState('');
  const [language, setLanguage] = useState('');
  const [time, setTime] = useState('');

  const [scheduling, setScheduling] = useState<string[]>([]);
  const [urgency, setUrgency] = useState('');

  // Handle scheduling checkbox changes
  const handleSchedulingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setScheduling((prev) => [...prev, value]);
    } else {
      setScheduling((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleNext = () => {
    // 1. Create a query object with all the selected values
    const query = {
      subject,
      language,
      time,
      scheduling: scheduling.join(','), // Join array into a string
      urgency,
    };

    // 2. Navigate to the matches page with the query parameters
    router.push({
      pathname: '/find-tutor-flow/matches', // Make sure this is your page route
      query,
    });
  };

  return (
    <div
      style={{
        maxWidth: 520,
        margin: '4rem auto',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 24,
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      <h3 style={{ marginBottom: 24, textAlign: 'center' }}>
        Tell us what you&apos;re looking for
      </h3>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 8, fontWeight: 600 }}>
          Academic Needs
        </label>

        <select
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 16,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {subjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        {/* (Select for Language - I'm using your existing code) */}
        <select
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 16,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="" disabled>
            Select Language
          </option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        {/* (Select for Time - I'm using your existing code) */}
        <select
          style={{
            width: '100%',
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="" disabled>
            Select Time
          </option>
          {timeSlots.map((ts) => (
            <option key={ts} value={ts}>
              {ts}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 10, fontWeight: 600 }}>
          Scheduling & Location
        </label>
        {/* 3. Added 'value' to checkboxes */}
        <Checkbox
          label="Weekends"
          value="weekends"
          checked={scheduling.includes('weekends')}
          onChange={handleSchedulingChange}
        />
        <Checkbox
          label="Weekdays"
          value="weekdays"
          checked={scheduling.includes('weekdays')}
          onChange={handleSchedulingChange}
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'block', marginBottom: 10, fontWeight: 600 }}>
          Urgency
        </label>
        <RadioGroup
          name="urgency"
          options={urgencyOptions}
          selectedValue={urgency}
          onChange={setUrgency}
        />
      </div>

      <Button
        onClick={handleNext}
        variant="primary"
        style={{ width: '100%', marginTop: 10 }}
      >
        Find My Tutors
      </Button>
    </div>
  );
};

export default TutorPreferences;
