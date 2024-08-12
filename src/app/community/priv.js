"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const SeniorLivingProfile = () => {
  const swiperRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [propertyImages, setPropertyImages] = useState([]);
  const [companyImages, setCompanyImages] = useState([]);
  const [communityName, setCommunityName] = useState("");
  const [website, setWebsite] = useState(""); // Corrected typo: 'weibite' to 'website'

  const fetchImages = async (endpoint, setImageState) => {
    try {
      const response = await fetch(
        `/api/community_businessinfo?endpoint=${endpoint}`
      );
      const result = await response.json();
      if (result.success) {
        setImageState(result.images);
      } else {
        console.error(`Error fetching ${endpoint}`);
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error);
    }
  };

  const fetchCommunityDetails = async () => {
    try {
      const response = await fetch(
        `/api/community_businessinfo?endpoint=business-details`
      );
      const result = await response.json();

      // Log the entire response to check its structure
      console.log("API Response:", result);

      if (Array.isArray(result) && result.length > 0) {
        setCommunityName(result[0].CommunityName || "Community Name");
        setWebsite(result[0].website || "#");
      } else {
        console.error("Error: No community details found in the response");
      }
    } catch (error) {
      console.error("Error fetching community details:", error);
    }
  };

  useEffect(() => {
    fetchImages("property-images", setPropertyImages);
    fetchImages("CompanyImage", setCompanyImages);
    fetchCommunityDetails();
  }, []);

  const toggleFullScreen = () => {
    if (isFullScreen) {
      handleExitFullScreen();
    } else {
      handleFullScreen();
    }
  };

  const handleFullScreen = () => {
    if (swiperRef.current) {
      const elem = swiperRef.current;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
      setIsFullScreen(true);
    }
  };

  const handleExitFullScreen = () => {
    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    ) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const renderImageSlides = (images) =>
    images.map((image) => (
      <SwiperSlide key={image._id}>
        <img
          src={`data:${image.contentType};base64,${Buffer.from(
            image.data
          ).toString("base64")}`}
          alt={image.name}
          className="h-full w-full"
        />
      </SwiperSlide>
    ));

  return (
    <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row">
      {/* Left: Image/Carousel Section */}
      <div className="w-full md:w-2/3 relative">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {communityName}
        </h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          className="rounded-lg overflow-hidden"
          ref={swiperRef}
          onDoubleClick={toggleFullScreen}
        >
          {renderImageSlides(propertyImages)}
        </Swiper>
      </div>

      {/* Right: Profile and Actions Section */}
      <div className="w-full md:w-1/3 mt-4 md:mt-0 md:pl-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            {communityName}
          </h3>
          <div className="flex justify-center">
            {companyImages.map((image) => (
              <img
                key={image._id}
                src={`data:${image.contentType};base64,${Buffer.from(
                  image.data
                ).toString("base64")}`}
                alt={image.name}
                className="rounded-xl"
                height={50}
                width={100}
              />
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
            <Link href={website}>Visit Website</Link>
          </button>
          <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
            Connect
          </button>
          <button className="w-full bg-yellow-500 text-white py-2 rounded flex items-center justify-center">
            <span className="mr-2">💰</span> Sponsor
          </button>
          <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
            Share
          </button>
          <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeniorLivingProfile;
