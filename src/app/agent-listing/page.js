"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../Agent/Agent-sidebar";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import Communitylisting from "../Agent/agent-Listing";
import InsuranceOptions from "../Agent/InsuranceOptions";
import PaymentOptions from "../Agent/PaymentOptions";
import ImagesUpload from "../Agent/Uplode-Image";
const Page = () => {
  const [activeTab, setActiveTab] = useState("GENERAL");

  const renderContent = () => {
    switch (activeTab) {
      case "GENERAL":
        return <Communitylisting />;

      case "PHOTOS":
        return (
          <div>
            <ImagesUpload />
          </div>
        );
      case "Payment accept":
        return (
          <div>
            <PaymentOptions />
          </div>
        );

      case "insurance accept":
        return (
          <div>
            <InsuranceOptions />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col md:mt-10 md:flex-row">
        <Sidebar />
        <div className="flex flex-col md:mx-10">
          <SectionHeader title="Dashboard">
            <p>Company Name: [Insert Company Name]</p>
          </SectionHeader>
          <div className="flex space-x-6 m-2 p-2 bg-gray-100 rounded-md shadow-sm">
            <Button
              isActive={activeTab === "GENERAL"}
              onClick={() => setActiveTab("GENERAL")}
            >
              GENERAL
            </Button>

            <Button
              isActive={activeTab === "PHOTOS"}
              onClick={() => setActiveTab("PHOTOS")}
            >
              PHOTOS
            </Button>
            <Button
              isActive={activeTab === "Payment accept"}
              onClick={() => setActiveTab("Payment accept")}
            >
              Payment accept
            </Button>

            <Button
              isActive={activeTab === "insurance accept"}
              onClick={() => setActiveTab("insurance accept")}
            >
              insurance accept
            </Button>
          </div>
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
