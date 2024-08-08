import React, { useState } from "react";
import Checkbox from "../../components/Checkbox"; // Ensure the import path is correct

const pricingOptions = [
  "Display to Public",
  "$0 - $499/month",
  "$500 - $1,499/month",
  "$1,500 - $2,499/month",
  "$2,500 - $3,499/month",
  "$3,500 - $4,499/month",
  "$4,500 - $5,499/month",
  "$5,500 - $6,499/month",
  "$6,500 - $7,499/month",
  "$7,500 - $8,499/month",
  "$8,500 - $10,000/month",
];

const paymentOptions = [
  "Long-Term Insurance",
  "Medicaid",
  "Medicare",
  "Private Pay",
  "Social Security",
  "Veterans Benefits",
];

const PriceBox = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheckboxChange = (label) => {
    setSelectedOptions({
      ...selectedOptions,
      [label]: !selectedOptions[label],
    });
  };

  return (
    <div className="h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p className="text-red-500">
          *Prices are currently hidden from public view.
        </p>
        {pricingOptions.map((option, index) => (
          <Checkbox
            key={index}
            label={option}
            checked={selectedOptions[option] || false}
            onChange={() => handleCheckboxChange(option)}
          />
        ))}
      </div>
      <div>
        {paymentOptions.map((option, index) => (
          <Checkbox
            key={index}
            label={option}
            checked={selectedOptions[option] || false}
            onChange={() => handleCheckboxChange(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceBox;
