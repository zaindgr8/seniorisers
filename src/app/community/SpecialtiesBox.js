import React, { useState, useEffect } from "react";
import axios from "axios";
import Checkbox from "../../components/Checkbox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const conditions1 = [
  "Select All",
  "ALS",
  "ALZHEIMER/DEMENTIA",
  "AMBULATORY PROBLEMS",
  "ARTHRITIS",
  "CANCER",
  "COLOSTOMY",
  "DEPRESSION",
];
const conditions2 = [
  "DISEASE",
  "EMPHYSEMA",
  "HEARING IMPAIRED",
  "HEART DISEASE",
  "HIGH CHOLESTEROL",
  "HYPERTENSION / HIGH BLOOD PRESSURE",
  "INCONTINENCE",
  "JOINT REPLACEMENT",
];
const conditions3 = [
  "MUSCULAR DEGENERATION",
  "OSTEOPOROSIS",
  "OTHER EYE DISORDER",
  "PARKINSONS",
  "RESPIRATORY DISEASE",
  "STROKE",
  "SURGICAL RECOVERY",
];

const SpecialtiesBox = () => {
  const [formData, setFormData] = useState({
    specialties: [],
    businessInfoId: "",
  });

  const [selectedSpecialties, setSelectedSpecialties] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/community_businessinfo?endpoint=business-info"
        );
        const latestEntry = response.data[response.data.length - 1];
        setFormData((prevData) => ({
          ...prevData,
          businessInfoId: latestEntry._id,
        }));
      } catch (error) {
        console.error("Fetching error:", error);
        toast.error("Failed to fetch the latest business info.");
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (label) => {
    if (label === "Select All") {
      const newSelections = {};
      const selectAllValue = !selectedSpecialties["Select All"];
      [...conditions1, ...conditions2, ...conditions3].forEach((condition) => {
        newSelections[condition] = selectAllValue;
      });
      setSelectedSpecialties(newSelections);
    } else {
      setSelectedSpecialties({
        ...selectedSpecialties,
        [label]: !selectedSpecialties[label],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const specialties = Object.keys(selectedSpecialties).filter(
      (key) => selectedSpecialties[key]
    );

    const combinedData = {
      ...formData,
      specialties,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/community_businessinfo?endpoint=specialties",
        combinedData
      );
      if (response.status === 200) {
        toast.success("Specialties data submitted successfully!");
      } else {
        toast.error("Failed to submit specialties.");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Unable to submit data.";
      toast.error(errorMsg);
      console.error("Error:", error);
    }
  };

  return (
    <div className="mt-6">
      <ToastContainer />
      <label className="block text-center text-lg font-medium text-gray-700">
        Specialties
      </label>
      <form onSubmit={handleSubmit}>
        <div className="border-blue-500 rounded-lg border-2 shadow-sm flex p-6 gap-4 md:flex-row flex-col">
          <div>
            {conditions1.map((condition, index) => (
              <Checkbox
                key={index}
                label={condition}
                checked={selectedSpecialties[condition] || false}
                onChange={() => handleCheckboxChange(condition)}
              />
            ))}
          </div>
          <div>
            {conditions2.map((condition, index) => (
              <Checkbox
                key={index}
                label={condition}
                checked={selectedSpecialties[condition] || false}
                onChange={() => handleCheckboxChange(condition)}
              />
            ))}
          </div>
          <div>
            {conditions3.map((condition, index) => (
              <Checkbox
                key={index}
                label={condition}
                checked={selectedSpecialties[condition] || false}
                onChange={() => handleCheckboxChange(condition)}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SpecialtiesBox;
