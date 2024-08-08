import React, { useState } from "react";
import Checkbox from "../../components/Checkbox"; // Ensure the import path is correct

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
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheckboxChange = (label) => {
    if (label === "Select All") {
      const newSelections = {};
      const selectAllValue = !selectedOptions["Select All"];
      [...conditions1, ...conditions2, ...conditions3].forEach((condition) => {
        newSelections[condition] = selectAllValue;
      });
      setSelectedOptions(newSelections);
    } else {
      setSelectedOptions({
        ...selectedOptions,
        [label]: !selectedOptions[label],
      });
    }
  };

  return (
    <div className="h-full p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        {conditions1.map((condition, index) => (
          <Checkbox
            key={index}
            label={condition}
            checked={selectedOptions[condition] || false}
            onChange={() => handleCheckboxChange(condition)}
          />
        ))}
      </div>
      <div>
        {conditions2.map((condition, index) => (
          <Checkbox
            key={index}
            label={condition}
            checked={selectedOptions[condition] || false}
            onChange={() => handleCheckboxChange(condition)}
          />
        ))}
      </div>
      <div>
        {conditions3.map((condition, index) => (
          <Checkbox
            key={index}
            label={condition}
            checked={selectedOptions[condition] || false}
            onChange={() => handleCheckboxChange(condition)}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialtiesBox;
