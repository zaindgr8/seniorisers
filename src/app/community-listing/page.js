"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../community/Community-Sidebar";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
import Communitylisting from "../community/Community-Listing";
import GetCommunityType from "../community/Get-Community-Type";
import CheckboxAmenitIes from "../community/CheckboxAmenitIes";
import SpecialtiesBox from "../community/SpecialtiesBox";
import PriceBox from "../community/PriceBox";
import ImagesUpload from "../community/ImagesUpload";
const Page = () => {
  const [activeTab, setActiveTab] = useState("GENERAL");

  const renderContent = () => {
    switch (activeTab) {
      case "GENERAL":
        return <Communitylisting />;
      case "TYPE":
        return <GetCommunityType />;
      case "AMENITIES":
        return (
          <div>
            <CheckboxAmenitIes />
          </div>
        );
      case "SPECIALTIES":
        return (
          <div>
            <SpecialtiesBox />
          </div>
        );
      case "PRICING":
        return (
          <div>
            <PriceBox />
          </div>
        );
      case "PHOTOS":
        return (
          <div>
            <ImagesUpload />
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
              isActive={activeTab === "TYPE"}
              onClick={() => setActiveTab("TYPE")}
            >
              TYPE
            </Button>
            <Button
              isActive={activeTab === "AMENITIES"}
              onClick={() => setActiveTab("AMENITIES")}
            >
              AMENITIES
            </Button>
            <Button
              isActive={activeTab === "SPECIALTIES"}
              onClick={() => setActiveTab("SPECIALTIES")}
            >
              SPECIALTIES
            </Button>
            <Button
              isActive={activeTab === "PRICING"}
              onClick={() => setActiveTab("PRICING")}
            >
              PRICING
            </Button>
            <Button
              isActive={activeTab === "PHOTOS"}
              onClick={() => setActiveTab("PHOTOS")}
            >
              PHOTOS
            </Button>
          </div>
          <div className="mt-4">{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Page;
