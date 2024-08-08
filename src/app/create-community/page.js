"use client";
import Header from "../../components/Header";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CommunityType from "../community/Community-Type";
export default function AgentFormInitial() {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    businessType: "",
  });

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Updated ${name}:`, value); // Log the updated value
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData); // Confirm formData here
    try {
      const response = await axios.post("/api/agent_BusinessInfo", formData);
      console.log("Response:", response);
      toast.success("Data submitted successfully!");

      // Navigate to the second page
      router.push("/community-listing"); // Replace 'secondPage' with your actual route
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg =
        error.response?.data?.msg || "Unable to submit business data.";
      toast.error(errorMsg);
    }
  };

  return (
    <>
      <Header />
      <div className="newslatter position-relative overflow-hidden">
        <div className="container p-4 mt-10 position-relative z-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className=" text-center mb-5">
                <h2 className="h1 fw-semibold mb-3    text-black">
                  Let's Get Started!
                </h2>
                <div className="sub-title fs-16   text-black">
                  Please enter your Community name, address, and type
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="row g-4 align-items-end newslatter-form">
                  <div className="space-y-8">
                    <div className="form-group">
                      <label className="text-black bg-transparent fw-semibold">
                        Community Name
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="bg-transparent text-black fw-semibold">
                        Address
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <CommunityType />
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn bg-gray-50 text-black btn-lg btn-light"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
