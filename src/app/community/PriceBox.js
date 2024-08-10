import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "../../components/Checkbox";

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
  const [formData, setFormData] = useState({
    pricing: [],

    businessInfoId: "",
  });

  const [selectedPricing, setSelectedPricing] = useState({});
  const [selectedPayments, setSelectedPayments] = useState({});

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

  const handleCheckboxChange = (label, type) => {
    if (type === "pricing") {
      setSelectedPricing({
        ...selectedPricing,
        [label]: !selectedPricing[label],
      });
    } else if (type === "payment") {
      setSelectedPayments({
        ...selectedPayments,
        [label]: !selectedPayments[label],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedPricingOptions = Object.keys(selectedPricing).filter(
      (key) => selectedPricing[key]
    );
    const selectedPaymentOptions = Object.keys(selectedPayments).filter(
      (key) => selectedPayments[key]
    );

    const combinedData = {
      ...formData,
      pricing: selectedPricingOptions,
      payments: selectedPaymentOptions,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/community_businessinfo?endpoint=pricing",
        combinedData
      );
      if (response.status === 200) {
        toast.success(
          "Pricing and Payment data submitted successfully! Go to PHOTOS."
        );
      } else {
        toast.error("Failed to submit Pricing and Payment data.");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.msg || "Unable to submit data.";
      toast.error(errorMsg);
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-red-500">
            *Prices are currently hidden from public view.
          </p>
          {pricingOptions.map((option, index) => (
            <Checkbox
              key={index}
              label={option}
              checked={selectedPricing[option] || false}
              onChange={() => handleCheckboxChange(option, "pricing")}
            />
          ))}
        </div>
        <div>
          {paymentOptions.map((option, index) => (
            <Checkbox
              key={index}
              label={option}
              checked={selectedPayments[option] || false}
              onChange={() => handleCheckboxChange(option, "payment")}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default PriceBox;
