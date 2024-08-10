import React, { useState, useEffect } from "react";
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
  const [initialData, setInitialData] = useState({
    id: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/community_businessinfo?endpoint=business-info"
        );
        const latestEntry = response.data[response.data.length - 1];
        setInitialData({
          id: latestEntry._id,
        });
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (amenity) => {
    setSelectedAmenities((prevSelected) => ({
      ...prevSelected,
      [amenity]: !prevSelected[amenity],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedAmenityList = Object.keys(selectedAmenities).filter(
      (amenity) => selectedAmenities[amenity]
    );

    try {
      const response = await axios.post(
        "http://localhost:3000/api/community_businessinfo?endpoint=amenities",
        {
          amenities: selectedAmenityList,
          businessInfoId: initialData.id, // Using the fetched ID here
        }
      );

      if (response.status === 200) {
        toast.success("Amenities submitted successfully!");
      } else {
        toast.error("Failed to submit amenities.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting amenities.");
      console.error("Error:", error);
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
