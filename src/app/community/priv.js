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
  const [website, setWebsite] = useState("");
  const [companyOverview, setCompanyOverview] = useState("");
  const [address, setAddress] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [userName, setUserName] = useState(""); // Added state for the user's full name
  const [communtyconnect, setCommuntyconnect] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  useEffect(() => {
    // Fetch the logged-in user's ID
    const fetchLoggedInUserId = async () => {
      try {
        const response = await axios.get("/api/getcookes"); // Replace with your GET endpoint
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
        const response = await fetch("/api/communtyinfo");
        const result = await response.json();
        setCommuntyconnect(response.data?.data || []);
        if (result.data && result.data.length > 0) {
          const communityInfo = result.data[0];
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
          setUserName(communityInfo.userauth?.fullName || ""); // Set the user's full name
        }
      } catch (error) {
        console.error("Error fetching community info:", error);
      }
    };

    fetchData();
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
      // If user is not logged in, show an alert message
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
            <p>{userName}</p> {/* Display the user's full name */}
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
              {communtyconnect.length > 0 ? (
                agents.map((agent) => (
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
                <p>No Community Name found.</p>
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

export default SeniorLivingProfile;

// // "use client";
// // import { useState } from "react";

// // const businessTypes = {
// //   "Adult Day Care": [
// //     "Alzheimer’s and Dementia",
// //     "Medical",
// //     "Social",
// //     "Specialized",
// //   ],
// //   Attorney: [
// //     "Wills",
// //     "Trust Administration",
// //     "Special needs trusts",
// //     "Probate",
// //     "Medicaid Planning",
// //     "Estate tax and gifting",
// //     "Estate Planning",
// //   ],
// //   "Chiropractor/Pain Management": [
// //     "Musculoskeletal Chiropractor",
// //     "Traditional Chiropractor",
// //   ],
// //   "Construction/Maintenance": [
// //     "Air Conditioning and Heating",
// //     "Carpentry",
// //     "Carpet Cleaning",
// //     "Carpet Install",
// //     "Concrete Work",
// //     "Drywall",
// //     "Electrical",
// //     "Estate Sales",
// //     "Exterior Doors",
// //     "Exterminator",
// //     "Fireplace Repair",
// //     "Flooring",
// //     "Framing",
// //     "General Contractor",
// //     "Handicap Modification",
// //     "Handyman",
// //     "Home modification",
// //     "Home Repair",
// //     "Interior Doors",
// //     "Irrigation",
// //     "Irrigation and Well Drilling",
// //     "Landscaping",
// //     "Lawn Spray and Fertilization",
// //     "Locksmith",
// //     "Maintenance",
// //     "Painting",
// //     "Paving",
// //     "Plastering",
// //     "Pool Cleaner",
// //     "Pool Repair",
// //     "Ramps",
// //     "Roofing",
// //     "Security",
// //     "Septic",
// //     "Sheet Metal Work",
// //     "Snow Removal",
// //     "Siding",
// //     "Special Trade Contractors",
// //     "Stonework",
// //     "Tile Setting",
// //     "Trash Removal",
// //     "Tree Services",
// //     "Water Damage",
// //     "Windows",
// //   ],
// //   "Counseling Services": [
// //     "Family",
// //     "Grief",
// //     "Individual",
// //     "Licensed Clinical Social Worker",
// //     "Geriatric",
// //     "Mental Health",
// //     "Pastoral",
// //     "Stress",
// //   ],
// //   Dentist: [
// //     "Endodontist",
// //     "General Dentist",
// //     "Oral Surgeon",
// //     "Orthodontist",
// //     "Pathologist",
// //     "Pediatric",
// //     "Periodontist",
// //     "Prosthodontist",
// //   ],
// //   Entertainment: ["Dancing", "Games", "Instrumental", "Singing", "Magic"],
// //   "Family Center": ["Others"],
// //   "Financial Planning and Organization": [
// //     "Bill Payment",
// //     "Existing Medical Bills",
// //     "Household Financial Management",
// //     "Medicaid",
// //     "Medicare",
// //     "Medicare Supplemental",
// //     "Reverse Mortgage",
// //     "Social Security Benefits Planning",
// //     "Veterans Benefits",
// //   ],
// //   "Funeral Home": [
// //     "At-Need",
// //     "Burial",
// //     "Cemetery",
// //     "Cremation",
// //     "Headstone",
// //     "Insurance",
// //     "Mausoleum",
// //     "Pre-Arrangements",
// //     "Pre-Planning",
// //     "Vault",
// //   ],
// //   "Furniture Store": ["New", "Rent to Own", "Rental", "Used"],
// //   Hearing: ["Clinical Audiologists", "Hearing Aids", "Repair"],
// //   "Home Accessibility Modifications": [
// //     "Bathroom",
// //     "Doorways and Doors",
// //     "Handrails",
// //     "Lifts and Hoists",
// //     "Ramps",
// //   ],
// //   "Home Health Care": [
// //     "Non-Medical",
// //     "Medical",
// //     "Meal Preparation",
// //     "Live-In Home Care",
// //     "Geriatric Care Management",
// //     "Agency",
// //     "Adult Day Care",
// //   ],
// //   "Home Safety Monitoring": ["Alarms", "Audio", "Bracelets", "Cameras"],
// //   Hospice: ["Others"],
// //   Insurance: [
// //     "General",
// //     "Health",
// //     "Home",
// //     "Life",
// //     "Medicare",
// //     "Medicare Advantage",
// //     "Medicare Supplemental",
// //     "Supplemental",
// //     "Travel",
// //   ],
// //   "Medical Equipment and Supplies (DME)": [
// //     "Incontinent Supplies",
// //     "Manual Wheelchairs",
// //     "Medical Products",
// //     "Oxygen",
// //     "Power Wheelchairs",
// //     "Respiratory Equipment",
// //     "Walker",
// //   ],
// //   "Medical Imaging/X-Ray": ["Non-Portable", "Portable"],
// //   "Moving/Relocation Services": [
// //     "Auctioneer",
// //     "Downsizing",
// //     "Services",
// //     "Estate Sales",
// //     "Movers",
// //     "Relocation Move Manager and Organizer",
// //   ],
// //   "Network Group": ["Others"],
// //   "NON-PROFIT SENIOR RELATED": ["Others"],
// //   Nurses: ["Others"],
// //   Nutritionist: [
// //     "Food Labeling",
// //     "Corporate Wellness",
// //     "Food Products",
// //     "Public Health",
// //     "Regulatory Affairs",
// //   ],
// //   Pharmacy: ["Bubble Wrapping", "Delivery", "Infusion", "Retail"],
// //   Physicians: [
// //     "Allergy and Immunology",
// //     "Anesthesiology",
// //     "Dermatology",
// //     "Diagnostic Radiology",
// //     "Emergency Medicine",
// //     "Family Medicine",
// //     "Internal Medicine",
// //     "Medical Genetics",
// //     "Neurology",
// //     "Nuclear Medicine",
// //     "Obstetrics and Gynecology",
// //     "Ophthalmology",
// //     "Pathology",
// //     "Pediatrics",
// //     "Physical Medicine and Rehabilitation",
// //     "Preventive Medicine",
// //     "Psychiatry",
// //     "Radiation Oncology",
// //     "Surgery",
// //     "Urology",
// //     "Others",
// //   ],
// //   Psychology: [
// //     "Alzheimer’s Disease",
// //     "Anger Management",
// //     "Behavioral",
// //     "Cerebrovascular Diseases",
// //     "Depression",
// //     "Eldercare",
// //     "Frontotemporal Dementias",
// //     "Geriatric Psychiatry",
// //     "Grief",
// //     "Memory Disorder",
// //     "Mood Disorders",
// //     "Navigating a Chronic Illness",
// //     "Neuropsychiatric Complications of Movement Disorder",
// //     "Neuropsychology",
// //     "Ph.D.",
// //     "Psychiatrist",
// //     "Psychologist",
// //     "Stress",
// //   ],
// //   "Real Estate": [
// //     "Agent",
// //     "Broker",
// //     "Broker Associate",
// //     "Buyer",
// //     "Commercial",
// //     "Investor",
// //     "Management",
// //     "Owner",
// //     "Property Management",
// //     "Realtor",
// //     "Rental",
// //     "Residential",
// //     "Seller",
// //   ],
// //   Rehabilitation: ["Others"],
// //   "Religious Books and Gift Store": ["Others"],
// //   "Senior Discount Providers": ["Others"],
// //   Therapy: [
// //     "Massage Therapist",
// //     "Medication Therapy Management",
// //     "Occupational Therapy",
// //     "Physical Therapy",
// //     "Speech",
// //   ],
// //   Transportation: [
// //     "Airplane",
// //     "Ambulance Transportation",
// //     "Private Transportation",
// //     "Shuttle Transportation",
// //   ],
// //   Vendors: ["Others"],
// //   Vision: [
// //     "Ophthalmologist",
// //     "Optometrist",
// //     "Orthopedic Surgeon (Orthopedist)",
// //     "Vision Products & Services",
// //   ],
// // };

// // export default function BusinessTypeSelector() {
// //   const [selectedBusiness, setSelectedBusiness] = useState("");
// //   const [selectedServices, setSelectedServices] = useState([]);

// //   const handleBusinessChange = (e) => {
// //     setSelectedBusiness(e.target.value);
// //     setSelectedServices([]); // Reset services when business type changes
// //   };

// //   const handleServiceChange = (e) => {
// //     const value = e.target.value;
// //     setSelectedServices((prev) =>
// //       prev.includes(value)
// //         ? prev.filter((service) => service !== value)
// //         : [...prev, value]
// //     );
// //   };

// //   return (
// //     <div className="p-4">
// //       <label
// //         htmlFor="businessType"
// //         className="block text-sm font-medium text-gray-700"
// //       >
// //         Business Type
// //       </label>
// //       <select
// //         id="businessType"
// //         value={selectedBusiness}
// //         onChange={handleBusinessChange}
// //         className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
// //       >
// //         <option value="">Select a business type</option>
// //         {Object.keys(businessTypes).map((businessType) => (
// //           <option key={businessType} value={businessType}>
// //             {businessType}
// //           </option>
// //         ))}
// //       </select>

// //       {selectedBusiness && (
// //         <div className="mt-4">
// //           <label
// //             htmlFor="services"
// //             className="block text-sm font-medium text-gray-700"
// //           >
// //             Services (Check all that apply)
// //           </label>
// //           <div id="services" className="mt-2 space-y-2">
// //             {businessTypes[selectedBusiness].map((service) => (
// //               <div key={service} className="flex items-start">
// //                 <input
// //                   id={service}
// //                   name="services"
// //                   type="checkbox"
// //                   value={service}
// //                   checked={selectedServices.includes(service)}
// //                   onChange={handleServiceChange}
// //                   className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// //                 />
// //                 <label htmlFor={service} className="ml-3 text-sm text-gray-700">
// //                   {service}
// //                 </label>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// components/PaymentOptions.js
// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AgentList = () => {
//   const [agents, setAgents] = useState([]);
//   const [loggedInUserId, setLoggedInUserId] = useState(null);

//   useEffect(() => {
//     // Fetch the logged-in user's ID
//     const fetchLoggedInUserId = async () => {
//       try {
//         const response = await axios.get("/api/getcookes"); // Replace with your GET endpoint
//         setLoggedInUserId(response.data.user.id);
//       } catch (error) {
//         console.error("Error fetching logged-in user ID:", error);
//       }
//     };

//     fetchLoggedInUserId();
//   }, []);

//   useEffect(() => {
//     const fetchAgents = async () => {
//       try {
//         const response = await axios.get("/api/agentBusinessinfo");
//         setAgents(response.data);
//       } catch (error) {
//         console.error("Error fetching agents:", error);
//       }
//     };

//     fetchAgents();
//   }, []);

//   const handleConnectionRequest = async (receiverId) => {
//     if (!loggedInUserId) {
//       // If user is not logged in, show an alert message
//       alert("Please create an account to send a connection request.");
//       return;
//     }

//     try {
//       const response = await axios.post("/api/agent-connection", {
//         receiverId,
//         status: "PENDING",
//       });

//       if (response.status === 201) {
//         toast.success("Connection request sent successfully!");
//       } else {
//         toast.error("Failed to send connection request.");
//       }
//     } catch (error) {
//       console.error("Error sending connection request:", error);
//       toast.error("Failed to send connection request.");
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Agent List</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {agents.map((agent) => (
//           <div
//             key={agent.id}
//             className="p-4 border rounded-lg shadow-md bg-white"
//           >
//             <h2 className="text-xl font-semibold">{agent.agentName}</h2>
//             <p className="text-gray-600">{agent.address}</p>
//             <p className="text-sm text-gray-500">
//               {agent.businessType} | Services: {agent.services.join(", ")}
//             </p>
//             <div className="mt-4 flex justify-center">
//               {loggedInUserId && agent.userauthId !== loggedInUserId ? (
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
//                   onClick={() => handleConnectionRequest(agent.userauthId)}
//                 >
//                   Send Connection Request
//                 </button>
//               ) : (
//                 !loggedInUserId && (
//                   <button
//                     className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md"
//                     onClick={() =>
//                       alert(
//                         "Please create an account to send a connection request."
//                       )
//                     }
//                   >
//                     Send Connection Request
//                   </button>
//                 )
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AgentList;
