import React from 'react';
import { X, Check } from 'lucide-react';

const SuccessNotification = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  
  return (
    <div className='bg-black bg-opacity-50 z-50'>
        <div className="fixed inset-x-0 top-[50%] mx-auto max-w-md bg-white rounded-lg shadow-lg  border-l-4 border-green-600 p-4 flex items-center justify-between z-60">
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-1 rounded-md">
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <p className="font-medium text-gray-900">RFQ ID sent successfully!</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
    </div>
  );
};

export default SuccessNotification;