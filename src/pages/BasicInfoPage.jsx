import React from 'react';
import { ChevronRight } from 'lucide-react';

const BasicInfoPage = ({ formData, handleInputChange, onNext }) => (
  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
    <h1 className="text-2xl font-bold mb-2">Become a Tutor at TutorEdge</h1>
    <p className="text-gray-600 mb-8">Upload documents & gather educational credentials on board</p>

    <div className="space-y-6">
      {/* Your existing BasicInfoPage content */}
    </div>

    <div className="flex justify-end mt-8">
      <button
        onClick={onNext}
        className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  </div>
);

export default BasicInfoPage;
