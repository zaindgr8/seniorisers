import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed and imported
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  "Dining (Optional)",
  "Elevator",
];

const amenities3 = [
  "Emergency Call System",
  "Emergency Pendant",
  "Exercise Room",
  "Extended Congregate Care License",
  "Fireplace (Community)",
  "Furnished Units",
  "Game Room",
  "Handrails",
  "Health and Nutrition Classes",
];

const CheckboxAmenities = () => {
  const [selectedAmenities, setSelectedAmenities] = useState({});

  const handleCheckboxChange = (amenity) => {
    setSelectedAmenities((prev) => ({
      ...prev,
      [amenity]: !prev[amenity],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amenities = Object.keys(selectedAmenities).filter(
      (key) => selectedAmenities[key]
    );

    try {
      const response = await axios.post("/api/checkboxamenitIes", {
        amenities,
        businessInfoId: 1, // Replace with the actual businessInfoId
      });
      toast.success("Amenities created successfully!");
      setSelectedAmenities({});
    } catch (error) {
      toast.error("Failed to create amenities. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        <ToastContainer />
        <div>
          {amenities1.map((amenity, index) => (
            <Checkbox
              key={index}
              label={amenity}
              checked={selectedAmenities[amenity] || false}
              onChange={() => handleCheckboxChange(amenity)}
            />
          ))}
        </div>
        <div>
          {amenities2.map((amenity, index) => (
            <Checkbox
              key={index}
              label={amenity}
              checked={selectedAmenities[amenity] || false}
              onChange={() => handleCheckboxChange(amenity)}
            />
          ))}
        </div>
        <div>
          {amenities3.map((amenity, index) => (
            <Checkbox
              key={index}
              label={amenity}
              checked={selectedAmenities[amenity] || false}
              onChange={() => handleCheckboxChange(amenity)}
            />
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckboxAmenities;
