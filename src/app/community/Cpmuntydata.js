"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link"; // Ensure you use this for internal linking

const Cpmuntydata = ({ communityId, userauthId }) => {
  const [agent, setAgent] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const swiperRef = useRef(null);
  const [propertyImages, setPropertyImages] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [communityName, setCommunityName] = useState("");
  const [website, setWebsite] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [address, setAddress] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [userName, setUserName] = useState(""); // Receiver's Name

  useEffect(() => {
    const fetchLoggedInUserId = async () => {
      try {
        const response = await axios.get("/api/getcookes");
        setLoggedInUserId(response.data.user.id);
      } catch (error) {
        console.error("Error fetching logged-in user ID:", error);
      }
    };
    fetchLoggedInUserId();
  }, []);

  useEffect(() => {
    const fetchAgent = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/communtyinfo/${communityId}/${userauthId}`
        );
        console.log("Response from API: ", response.data);

        if (response.data?.data) {
          const communityInfo = response.data?.data;
          setPropertyImages(communityInfo.propertyImages || []);
          setCommunityName(communityInfo.CommunityName);
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
          setUserName(communityInfo.userauth?.fullName || ""); // Store receiver's name
          setAgent(response.data.data);
        } else {
          console.warn("No agent data found.");
        }
      } catch (error) {
        console.error("Error fetching agent:", error);
      } finally {
        setLoading(false);
      }
    };

    if (communityId && userauthId) {
      fetchAgent();
    }
  }, [communityId, userauthId]);

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
        // Success toast message including the receiver's name (userName)
        toast.success(`Connection request sent successfully to ${userName}!`);
      } else {
        toast.error("Failed to send connection request.");
      }
    } catch (error) {
      console.error("Error sending connection request:", error);
      toast.error("Failed to send connection request.");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!agent) {
    return <p>No agent data available.</p>;
  }

  // Handle fullscreen mode for the Swiper
  const toggleFullScreen = () => {
    isFullScreen ? handleExitFullScreen() : handleFullScreen();
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

  // Function to render image slides
  const renderImageSlides = (images) =>
    images.map((imageObj) =>
      imageObj.image.map((image, index) => (
        <SwiperSlide key={`${imageObj.id}-${index}`}>
          <img
            src={image} // Using the base64 image string directly
            alt={`Image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      ))
    );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <ToastContainer />
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
          </div>

          <div className="mt-6 space-y-3">
            <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
              <Link href={website}>Visit Website</Link>
            </button>

            {loggedInUserId && agent.userauthId !== loggedInUserId ? (
              <button
                className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded"
                onClick={() => handleConnectionRequest(agent.userauthId)}
              >
                Send Connection Request
              </button>
            ) : (
              <p>You cannot send a connection request to yourself.</p>
            )}

            <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
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

export default Cpmuntydata;
