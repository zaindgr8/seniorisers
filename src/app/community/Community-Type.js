import React, { useState } from "react";
function CommunityType() {
  const [selectedOptions, setSelectedOptions] = useState({
    "55+ Community": false,
    "Community Center for Seniors": false,
    "Group Home/Residential Care Home": false,
    "Independent Living/Senior Community": false,
    "Memory Care Community": false,
    "Skilled Nursing Facility/Nursing Home": false,
    "Assisted Living Community": false,
    "Continuing Care Retirement Community": false,
    Hospital: false,
    "Long-Term Care Acute Care Hospital": false,
    "Rehab License": false,
    "Transitional Care Hospital": false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: checked,
    });
  };

  const firstColumnOptions = Object.keys(selectedOptions).slice(0, 6);
  const secondColumnOptions = Object.keys(selectedOptions).slice(6);
  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-300  ">
      <h2 className="text-xl  text-center justify-center font-semibold mb-4">
        Select Community Type
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {firstColumnOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={option}
                checked={selectedOptions[option]}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div>
          {secondColumnOptions.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={option}
                checked={selectedOptions[option]}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityType;
