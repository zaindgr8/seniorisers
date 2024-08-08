import React from "react";

const UploadField = ({ label, id }) => {
  return (
    <div className="w-full md:w-1/4 px-3 mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              aria-hidden="true"
              className="w-10 h-10 mb-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16V12m0 0l5-5m-5 5h3m4 0v4m0 0h4m-4 0l5 5m-5-5H4m16-6H4m4-4v12m4 4H4"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload photo</span>
            </p>
          </div>
          <input id={id} type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default UploadField;
