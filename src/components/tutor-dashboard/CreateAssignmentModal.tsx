import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import React from "react";

import Button from "../ui/Button";

interface CreateAssignmentModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const CreateAssignmentModal: React.FC<CreateAssignmentModalProps> = ({
  isOpen,
  setIsOpen,
}) => {
  // State for form inputs would go here

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // API call to create assignment would go here
    // console.log('Creating assignment...');
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white p-6">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-xl font-bold text-gray-800">
              Create New Assignment
            </Dialog.Title>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-700"
            >
              <X />
            </button>
          </div>
          <Dialog.Description className="mt-1 text-sm text-gray-500">
            Fill out the details below and attach any necessary files.
          </Dialog.Description>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Assignment Title
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Instructions
              </label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border-gray-300"
              ></textarea>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Attach File (PDF, DOCX)
              </label>
              <input
                type="file"
                className="mt-1 w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Due Date
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border-gray-300"
              />
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="dark"
                onClick={() => setIsOpen(false)}
                className="bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Cancel
              </Button>
              <Button type="submit">Create Assignment</Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default CreateAssignmentModal;
