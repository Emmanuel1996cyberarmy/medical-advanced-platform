import React from 'react';

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-sm p-12 shadow-lg flex flex-col items-center">
        <div className="w-12 h-12 mb-4">
          <svg
            className="animate-spin"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="stroke-gray-200"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            />
            <circle
              className="stroke-blue-600"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray="126"
              strokeDashoffset="90"
            />
          </svg>
        </div>
        <p className="text-xl text-gray-900">Sending Quote...</p>
      </div>
    </div>
  );
};

export default LoadingOverlay;