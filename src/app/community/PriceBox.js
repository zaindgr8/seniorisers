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
  const [selectedPricing, setSelectedPricing] = useState({});
  const [selectedPayments, setSelectedPayments] = useState({});
  const [businessInfoId, setBusinessInfoId] = useState(null);

  useEffect(() => {
    const fetchBusinessInfo = async () => {
      try {
        const response = await axios.get("/api/communtyinfo");
        const latestEntry = response.data.data?.[response.data.data.length - 1];

        if (latestEntry && latestEntry.id) {
          setBusinessInfoId(latestEntry.id); // Assuming the ID is stored as `id`
        } else {
          throw new Error("No valid entry found in the response data.");
        }
      } catch (error) {
        console.error("Fetching error:", error);
        toast.error("Failed to fetch initial data.");
      }
    };

    fetchBusinessInfo();
  }, []);

  const handleCheckboxChange = (option, type) => {
    if (type === "pricing") {
      setSelectedPricing((prev) => ({
        ...prev,
        [option]: !prev[option],
      }));
    } else if (type === "payment") {
      setSelectedPayments((prev) => ({
        ...prev,
        [option]: !prev[option],
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pricing = Object.keys(selectedPricing).filter(
      (key) => selectedPricing[key]
    );
    const payments = Object.keys(selectedPayments).filter(
      (key) => selectedPayments[key]
    );

    try {
      const response = await fetch("/api/communitypricing", {
        method: "POST", // Specify the method as POST
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({
          pricing,
          payments,
          businessInfoId, // Use the dynamically fetched ID
        }),
      });

      if (response.ok) {
        toast.success("Pricing and payment options created successfully!");
        setSelectedPricing({});
        setSelectedPayments({});
      } else {
        toast.error(
          "Failed to create pricing and payment options. Please try again."
        );
      }
    } catch (error) {
      toast.error(
        "Failed to create pricing and payment options. Please try again."
      );
    }
  };

  console.log(selectedPayments);
  console.log(selectedPricing);

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
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
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PriceBox;
