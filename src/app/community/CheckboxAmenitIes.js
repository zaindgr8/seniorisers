import React, { useState } from "react";
import Checkbox from "../../components/Checkbox"; // Ensure the import path is correct

const amenities1 = [
  "24 Hour On-site Certified Licensed Staff",
  "24 Hour On-Site Staff",
  "3 Nutritious Meals a day",
  "Alarmed Interior",
  "Arts & Crafts Center",
  "Barber Shop",
  "Bariatric Care",
  "Basic Cable Available",
  "Basic Cable Included",
];
const amenities2 = [
  "Beauty Salon",
  "Billiard Lounge",
  "Church Services",
  "Companion Rooms",
  "Computer Labs",
  "Courtyard",
  "Daily Activities",
  "Dining(Optional)",
  "Elevator",
];
const amenities3 = [
  "Emergency Call System",
  "Emergency Pendant",
  "Exercise Room",
  "Extended Congregate Care License",
  "Fireplace(Community)",
  "Furnished Units",
  "Game Room",
  "Handrails",
  "Health and Nutrition Classes",
];

const CheckboxAmenitIes = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleCheckboxChange = (label) => {
    setSelectedOptions({
      ...selectedOptions,
      [label]: !selectedOptions[label],
    });
  };

  return (
    <div className="  p-4 h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        {amenities1.map((amenity, index) => (
          <Checkbox
            key={index}
            label={amenity}
            checked={selectedOptions[amenity] || false}
            onChange={() => handleCheckboxChange(amenity)}
          />
        ))}
      </div>
      <div>
        {amenities2.map((amenity, index) => (
          <Checkbox
            key={index}
            label={amenity}
            checked={selectedOptions[amenity] || false}
            onChange={() => handleCheckboxChange(amenity)}
          />
        ))}
      </div>
      <div>
        {amenities3.map((amenity, index) => (
          <Checkbox
            key={index}
            label={amenity}
            checked={selectedOptions[amenity] || false}
            onChange={() => handleCheckboxChange(amenity)}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxAmenitIes;
