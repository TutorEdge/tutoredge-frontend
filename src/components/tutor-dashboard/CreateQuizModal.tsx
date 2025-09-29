import { Dialog } from '@headlessui/react';
import { Plus, Trash2, X } from 'lucide-react';
import React, { useState } from 'react';

import Button from '../ui/Button';

interface CreateQuizModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Type for a single question
type Question = {
  id: number;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
};

const CreateQuizModal: React.FC<CreateQuizModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        id: Date.now(),
        questionText: '',
        options: ['', '', '', ''],
        correctAnswerIndex: 0,
      },
    ]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-white p-6">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-bold text-gray-800">
              Create New Quiz
            </Dialog.Title>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-gray-400 hover:text-gray-700" />
            </button>
          </div>

          <div className="mt-6 max-h-[70vh] space-y-4 overflow-y-auto pr-2">
            {/* Quiz Details Form */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Quiz Title
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>

            <hr className="my-4" />

            {/* Dynamic Question Builder */}
            <h3 className="font-semibold text-gray-800">Questions</h3>
            {questions.map((q, qIndex) => (
              <div key={q.id} className="rounded-lg border bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Question {qIndex + 1}</p>
                  <button onClick={() => removeQuestion(q.id)}>
                    <Trash2 className="size-4 text-gray-400 hover:text-red-600" />
                  </button>
                </div>
                <textarea
                  placeholder="Enter your question here..."
                  rows={2}
                  className="mt-2 w-full rounded-lg border-gray-300"
                ></textarea>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {q.options.map(
                    (
                      _opt,
                      oIndex, // <-- FIX IS HERE
                    ) => (
                      <div key={oIndex} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name={`q${q.id}-correct`}
                          value={oIndex}
                        />
                        <input
                          type="text"
                          placeholder={`Option ${oIndex + 1}`}
                          className="w-full rounded-md border-gray-300 text-sm"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
            <Button
              type="button"
              onClick={addQuestion}
              variant="dark"
              className="bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              <Plus className="mr-2 size-4" /> Add Question
            </Button>
          </div>

          <div className="mt-6 flex justify-end gap-2 border-t pt-4">
            <Button
              type="button"
              variant="dark"
              onClick={() => setIsOpen(false)}
              className="bg-gray-200 text-gray-700 hover:bg-gray-300"
            >
              Cancel
            </Button>
            <Button type="submit">Create Quiz</Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CreateQuizModal;
