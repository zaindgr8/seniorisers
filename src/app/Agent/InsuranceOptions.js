// components/InsuranceOptions.js

import { useState } from "react";

export default function InsuranceOptions() {
  const [insuranceOptions, setInsuranceOptions] = useState({
    allInsurance: false,
    dentalInsurance: false,
    longTermInsurance: false,
    medicaid: false,
    medicaidManaged: false,
    medicare: false,
    supplemental: false,
    visionInsurance: false,
    workersComp: false,
  });

  const handleToggle = (option) => {
    setInsuranceOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <div className="h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2">
      <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto p-4 ">
        {/* Left Column */}
        <div className="space-y-4">
          {[
            { id: "allInsurance", label: "All Insurance" },
            { id: "dentalInsurance", label: "Dental Insurance" },
            { id: "longTermInsurance", label: "Long Term Insurance" },
            { id: "medicaid", label: "Medicaid" },
            { id: "medicaidManaged", label: "Medicaid Managed" },
          ].map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={insuranceOptions[option.id]}
                    onChange={() => handleToggle(option.id)}
                    className="sr-only"
                  />
                  <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                      insuranceOptions[option.id]
                        ? "transform translate-x-6"
                        : ""
                    }`}
                  ></div>
                </div>
                <span className="ml-3 text-gray-700">{option.label}</span>
              </label>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {[
            { id: "medicare", label: "Medicare" },
            { id: "supplemental", label: "Supplemental" },
            { id: "visionInsurance", label: "Vision Insurance" },
            { id: "workersComp", label: "Workers Comp" },
          ].map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={insuranceOptions[option.id]}
                    onChange={() => handleToggle(option.id)}
                    className="sr-only"
                  />
                  <div className="block bg-gray-300 w-14 h-8 rounded-full"></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                      insuranceOptions[option.id]
                        ? "transform translate-x-6"
                        : ""
                    }`}
                  ></div>
                </div>
                <span className="ml-3 text-gray-700">{option.label}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
