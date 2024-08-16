// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import Link from "next/link";

// const SeniorLivingProfile = () => {
//   const swiperRef = useRef(null);
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [propertyImages, setPropertyImages] = useState([]);
//   const [companyImages, setCompanyImages] = useState([]);
//   const [communityName, setCommunityName] = useState("");
//   const [website, setWebsite] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("/api/communtyinfo");
//         const result = await response.json();

//         if (result.data && result.data.length > 0) {
//           const communityInfo = result.data[0];
//           setCommunityName(communityInfo.CommunityName);
//           setPropertyImages(communityInfo.propertyImages || []);
//           setCompanyImages(communityInfo.companyImages || []);
//           setWebsite(communityInfo.website || "");
//         }
//       } catch (error) {
//         console.error("Error fetching community info:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const toggleFullScreen = () => {
//     if (isFullScreen) {
//       handleExitFullScreen();
//     } else {
//       handleFullScreen();
//     }
//   };

//   const handleFullScreen = () => {
//     if (swiperRef.current) {
//       const elem = swiperRef.current;
//       if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//       } else if (elem.webkitRequestFullscreen) {
//         elem.webkitRequestFullscreen();
//       } else if (elem.msRequestFullscreen) {
//         elem.msRequestFullscreen();
//       }
//       setIsFullScreen(true);
//     }
//   };

//   const handleExitFullScreen = () => {
//     if (
//       document.fullscreenElement ||
//       document.webkitFullscreenElement ||
//       document.msFullscreenElement
//     ) {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       } else if (document.webkitExitFullscreen) {
//         document.webkitExitFullscreen();
//       } else if (document.msExitFullscreen) {
//         document.msExitFullscreen();
//       }
//       setIsFullScreen(false);
//     }
//   };

//   const renderImageSlides = (images) =>
//     images.map((imageObj) =>
//       imageObj.image.map((image, index) => (
//         <SwiperSlide key={`${imageObj.id}-${index}`}>
//           <img
//             src={image} // Using the base64 image string directly
//             alt={`Image ${index + 1}`}
//             className="h-full w-full"
//           />
//         </SwiperSlide>
//       ))
//     );
//   console.log("companyImages", companyImages);

//   return (
//     <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row">
//       {/* Left: Image/Carousel Section */}
//       <div className="w-full md:w-2/3 relative">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           {communityName}
//         </h2>
//         <Swiper
//           modules={[Navigation]}
//           navigation
//           spaceBetween={10}
//           slidesPerView={1}
//           className="rounded-lg overflow-hidden"
//           ref={swiperRef}
//           onDoubleClick={toggleFullScreen}
//         >
//           {renderImageSlides(propertyImages)}
//         </Swiper>
//       </div>

//       {/* Right: Profile and Actions Section */}
//       <div className="w-full md:w-1/3 mt-4 md:mt-0 md:pl-4">
//         <div className="text-center">
//           <h3 className="text-lg font-semibold text-gray-800">
//             {communityName}
//           </h3>
//           <div className="flex justify-center">
//             {companyImages.map((imageObj) =>
//               imageObj.image.map((image, index) => (
//                 <img
//                   key={`${imageObj.id}-${index}`}
//                   src={image} // Using the base64 image string directly
//                   alt={`Company Image ${index + 1}`}
//                   className="rounded-xl"
//                   height={50}
//                   width={100}
//                 />
//               ))
//             )}
//           </div>
//         </div>

//         <div className="mt-6 space-y-3">
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             <Link href={website}>Visit Website</Link>
//           </button>
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Connect
//           </button>
//           <button className="w-full bg-yellow-500 text-white py-2 rounded flex items-center justify-center">
//             <span className="mr-2">💰</span> Sponsor
//           </button>
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Share
//           </button>
//           <button className="w-full hover:bg-yellow-500 bg-gray-200 text-gray-700 py-2 rounded">
//             Favorite
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SeniorLivingProfile;
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

export default function PaymentOptions() {
  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Accepted Credit Cards */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Accepted Credit Cards</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="visa" className="form-checkbox" />
            <label htmlFor="visa">
              <img src="/images/visa.png" alt="Visa" className="h-8" />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="mastercard" className="form-checkbox" />
            <label htmlFor="mastercard">
              <img
                src="/images/mastercard.png"
                alt="Mastercard"
                className="h-8"
              />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="amex" className="form-checkbox" />
            <label htmlFor="amex">
              <img
                src="/images/amex.png"
                alt="American Express"
                className="h-8"
              />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="discover" className="form-checkbox" />
            <label htmlFor="discover">
              <img src="/images/discover.png" alt="Discover" className="h-8" />
            </label>
          </div>
        </div>
      </div>

      {/* Online Payment Options */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Online Payment Options</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="paypal" className="form-checkbox" />
            <label htmlFor="paypal">
              <img src="/images/paypal.png" alt="PayPal" className="h-8" />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="applepay" className="form-checkbox" />
            <label htmlFor="applepay">
              <img src="/images/applepay.png" alt="Apple Pay" className="h-8" />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="skrill" className="form-checkbox" />
            <label htmlFor="skrill">
              <img src="/images/skrill.png" alt="Skrill" className="h-8" />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="venmo" className="form-checkbox" />
            <label htmlFor="venmo">
              <img src="/images/venmo.png" alt="Venmo" className="h-8" />
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="googlepay" className="form-checkbox" />
            <label htmlFor="googlepay">
              <img
                src="/images/googlepay.png"
                alt="Google Pay"
                className="h-8"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Other Payment Types */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Other Payment Types</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="cash" className="form-checkbox" />
            <label htmlFor="cash" className="text-sm">
              Cash
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="checks" className="form-checkbox" />
            <label htmlFor="checks" className="text-sm">
              Checks
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="moneyorder" className="form-checkbox" />
            <label htmlFor="moneyorder" className="text-sm">
              Money Order
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
