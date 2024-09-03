"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const Page = ({ params }) => {
  const { id } = params;
  const swiperRef = useRef(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [propertyImages, setPropertyImages] = useState([]);
  const [companyImages, setCompanyImages] = useState([]);
  const [communityName, setCommunityName] = useState("");
  const [website, setWebsite] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [address, setAddress] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [userName, setUserName] = useState("");
  const [communityConnect, setCommunityConnect] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's ID
    const fetchLoggedInUserId = async () => {
      try {
        const response = await axios.get("/api/getcookies"); // Corrected endpoint name
        setLoggedInUserId(response.data.user.id);
      } catch (error) {
        console.error("Error fetching logged-in user ID:", error);
      }
    };

    fetchLoggedInUserId();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/communtyinfo?id=${id}`);
        const result = await response.json();

        if (result.data) {
          const communityInfo = result.data;

          setCommunityName(communityInfo.CommunityName);
          setPropertyImages(communityInfo.propertyImages || []);
          setCompanyImages(communityInfo.companyImages || []);
          setWebsite(communityInfo.businessDetails[0]?.website || "");
          setCompanyOverview(
            communityInfo.businessDetails[0]?.companyOverview || ""
          );
          setAddress(communityInfo.address || "");
          setAmenities(
            communityInfo.amenities?.map((amenity) => amenity.amenities) || []
          );
          setPhoneNumber(communityInfo.businessDetails[0]?.primaryPhone || "");
          setLicenseNumber(communityInfo.businessDetails[0]?.license || "");
          setCompanyLogo(communityInfo.businessDetails[0]?.image || "");
          setUserName(communityInfo.userauth?.fullName || "");
          setCommunityConnect(communityInfo.communityConnect || []);
        }
      } catch (error) {
        console.error("Error fetching community info:", error);
      }
    };

    fetchData();
  }, [id]);

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
    images.map((imageObj) =>
      imageObj.image.map((image, index) => (
        <SwiperSlide key={`${imageObj.id}-${index}`}>
          <img
            src={image} // Using the base64 image string directly
            alt={`Image ${index + 1}`}
            className="h-full w-full"
          />
        </SwiperSlide>
      ))
    );

  const handleConnectionRequest = async (receiverId) => {
    if (!loggedInUserId) {
      alert("Please create an account to send a connection request.");
      return;
    }

    try {
      const response = await axios.post("/api/community-connection", {
        receiverId,
        status: "PENDING",
      });

      if (response.status === 201) {
        toast.success("Connection request sent successfully!");
      } else {
        toast.error("Failed to send connection request.");
      }
    } catch (error) {
      console.error("Error sending connection request:", error);
      toast.error("Failed to send connection request.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
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
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-100 w-100 object-cover"
            />
            <p>{userName}</p>
            <div className="flex justify-center">
              {companyImages.map((imageObj) =>
                imageObj.image.map((image, index) => (
                  <img
                    key={`${imageObj.id}-${index}`}
                    src={image}
                    alt={`Company Image ${index + 1}`}
                    className="rounded-xl"
                    height={50}
                    width={100}
                  />
                ))
              )}
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
              <Link href={website}>Visit Website</Link>
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {communityConnect.length > 0 ? (
                communityConnect.map((agent) => (
                  <div
                    key={agent.id}
                    className="p-4 border rounded-lg shadow-md bg-white"
                  >
                    <div className="mt-4 flex justify-center">
                      {loggedInUserId && agent.userauthId !== loggedInUserId ? (
                        <button
                          className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded"
                          onClick={() =>
                            handleConnectionRequest(agent.userauthId)
                          }
                        >
                          Send Connection Request
                        </button>
                      ) : (
                        !loggedInUserId && (
                          <button
                            className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded"
                            onClick={() =>
                              alert(
                                "Please create an account to send a connection request."
                              )
                            }
                          >
                            Send Connection Request
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p>No Community Connect found.</p>
              )}
            </div>

            <button className="w-full bg-yellow-500 text-white py-2 rounded flex items-center justify-center">
              <span className="mr-2">💰</span> Sponsor
            </button>
            <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Company Overview Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          About Us {communityName}
        </h3>
        <p className="text-gray-600">{companyOverview}</p>
      </div>

      {/* More Information Section */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          More Information
        </h3>
        <div className="space-y-2">
          <p>
            <strong>Address:</strong> {address}
          </p>
          <p>
            <strong>Phone:</strong> {phoneNumber}
          </p>
          <p>
            <strong>License #:</strong> {licenseNumber}
          </p>
          <div>
            <strong>Amenities:</strong>
            <ul className="list-disc list-inside ml-4">
              {amenities.flat().map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
