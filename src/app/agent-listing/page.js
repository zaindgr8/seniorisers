"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Agent-Sidebar";
import InputField from "../../components/InputField";
import SectionContainer from "../../components/SectionContainer";
import SectionHeader from "../../components/SectionHeader";
import UploadField from "../../components/UploadField";
import Checkbox from "../../components/Checkbox";
const page = () => {
  const [initialData, setInitialData] = useState({
    businessName: "",
    address: "",
    businessType: "",
  });

  const [formData, setFormData] = useState({
    dba: "",
    yearFounded: "",
    license: "",
    country: "",
    city: "",
    state: "",
    zip: "",
    website: "",
    primaryPhone: "",
    ext: "",
    callPhone: "",
    fax: "",
    services: "",
    companyOverview: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/agent_BusinessInfo");
        const latestEntry = response.data[response.data.length - 1]; // Get the latest entry
        setInitialData({
          businessName: latestEntry.businessName,
          address: latestEntry.address,
          businessType: latestEntry.businessType,
        });
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Updated ${name}:`, value); // Log the updated value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const combinedData = { ...initialData, ...formData };
    console.log("Submitting data:", combinedData); // Confirm formData here
    try {
      const response = await axios.post(
        "/api/agent_BusinessInfo",
        combinedData
      );
      console.log("Response:", response);
      toast.success("Data submitted successfully!");
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
      <div className="flex flex-col md:mt-10 md:flex-row">
        <Sidebar />
        <div className="flex flex-col">
          <SectionHeader title="Dashboard">
            <p>Company Name: {initialData.businessName}</p>
          </SectionHeader>
          <SectionHeader title="Business Profile">
            <button className="pt-0.5">Business Profile</button>
          </SectionHeader>
          <SectionContainer title="Basic Information">
            <form onSubmit={handleSubmit} className="m-2">
              <div className="flex flex-wrap justify-center gap-2">
                <InputField
                  label="Business Name"
                  id="business_name"
                  placeholder="Business Name"
                  name="businessName"
                  value={initialData.businessName}
                  readOnly
                />
                <InputField
                  label="DBA"
                  id="dba"
                  placeholder="DBA"
                  name="dba"
                  value={formData.dba}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-12">
                <InputField
                  label="Year Founded"
                  id="year_founded"
                  placeholder="Year Founded"
                  name="yearFounded"
                  value={formData.yearFounded}
                  onChange={handleChange}
                />
                <InputField
                  label="License"
                  id="license"
                  placeholder="License"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-12">
                <InputField
                  label="Business Type"
                  id="business_type"
                  placeholder="Business Type"
                  name="businessType"
                  value={initialData.businessType}
                  readOnly
                />
                <InputField
                  label="Services"
                  id="services"
                  placeholder="Services"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                />
              </div>
              <div className="md:mx-20  gap-60 mt-3 flex">
                <div>
                  <h1 className=" pb-2">Corporation Type</h1>
                  <Checkbox
                    id="disabled-checkbox1"
                    label="Disabled checkbox"
                    disabled
                  />
                  <Checkbox
                    id="disabled-checkbox2"
                    label="Disabled checkbox"
                    disabled
                  />
                </div>
                <div>
                  <h1 className=" pb-2">Status</h1>
                  <Checkbox
                    id="disabled-checkbox3"
                    label="Disabled checkbox"
                    disabled
                  />
                  <Checkbox
                    id="disabled-checkbox4"
                    label="Disabled checkbox"
                    disabled
                  />
                </div>
              </div>
              <SectionContainer title="Contact Information">
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <InputField
                    label="Address"
                    id="address"
                    placeholder="Address"
                    name="address"
                    value={initialData.address}
                    readOnly
                  />
                  <InputField
                    label="Website"
                    id="website"
                    placeholder="Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <InputField
                    label="Country"
                    id="country"
                    placeholder="Country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <InputField
                    label="City"
                    id="city"
                    placeholder="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <InputField
                    label="State"
                    id="state"
                    placeholder="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Zip"
                    id="zip"
                    placeholder="Zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                  <InputField
                    label="Primary Phone"
                    id="primary_phone"
                    placeholder="Primary Phone"
                    name="primaryPhone"
                    value={formData.primaryPhone}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Ext."
                    id="ext"
                    placeholder="Ext."
                    name="ext"
                    value={formData.ext}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Call Phone"
                    id="call_phone"
                    placeholder="Call Phone"
                    name="callPhone"
                    value={formData.callPhone}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Fax"
                    id="fax"
                    placeholder="Fax"
                    name="fax"
                    value={formData.fax}
                    onChange={handleChange}
                  />
                </div>
              </SectionContainer>
              <SectionContainer title="External Website">
                <div className="grid md:grid-flow-row gap-2 grid-flow-col">
                  <InputField label="Link" id="link1" placeholder="Link" />
                  <InputField label="Link" id="link2" placeholder="Link" />
                  <InputField label="Link" id="link3" placeholder="Link" />
                  <InputField label="Link" id="link4" placeholder="Link" />
                </div>
              </SectionContainer>
              <SectionContainer title="Company Overview">
                <div className="flex flex-wrap -mx-3">
                  <UploadField label="Company Logo" id="upload-logo" />
                  <div className="w-full md:w-3/4 px-3 mb-4">
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="company-overview"
                    >
                      Company Overview
                    </label>
                    <textarea
                      id="company-overview"
                      rows="5"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="companyOverview"
                      value={formData.companyOverview}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 w-24 rounded"
                >
                  Submit
                </button>
              </SectionContainer>
            </form>
          </SectionContainer>
        </div>
      </div>
      <footer className="py-4">
        <div className="text-center">
          © 2023 Seniorisers - All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default page;
