import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function CommunityType() {
  const selectedOptions = {
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
  };

  const [initialData, setInitialData] = useState({
    communityType: [],
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/communtyinfo");
        console.log("API Response:", response.data);
        const communityType = response.data[0]?.communityType || [];
        setInitialData((prevState) => ({
          ...prevState,
          communityType,
        }));
      } catch (error) {
        toast.error("Failed to fetch community type data.");
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const firstColumnOptions = Object.keys(selectedOptions).slice(0, 6);
  const secondColumnOptions = Object.keys(selectedOptions).slice(6);

  const isChecked = (option) => initialData.communityType.includes(option);

  return (
    <div className="p-6 bg-gray-50 rounded-lg border border-gray-300">
      <h2 className="text-xl text-center font-semibold mb-4">
        Select Community Type
      </h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {firstColumnOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name={option}
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isChecked(option)}
                  readOnly
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
                  className="form-checkbox h-5 w-5 text-blue-600"
                  checked={isChecked(option)}
                  readOnly
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CommunityType;
