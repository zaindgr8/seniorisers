"use client";
import Header from "../../components/Header";
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const businessTypes = {
  "Adult Day Care": [
    "Alzheimer’s and Dementia",
    "Medical",
    "Social",
    "Specialized",
  ],
  Attorney: [
    "Wills",
    "Trust Administration",
    "Special needs trusts",
    "Probate",
    "Medicaid Planning",
    "Estate tax and gifting",
    "Estate Planning",
  ],
  "Chiropractor/Pain Management": [
    "Musculoskeletal Chiropractor",
    "Traditional Chiropractor",
  ],
  "Construction/Maintenance": [
    "Air Conditioning and Heating",
    "Carpentry",
    "Carpet Cleaning",
    "Carpet Install",
    "Concrete Work",
    "Drywall",
    "Electrical",
    "Estate Sales",
    "Exterior Doors",
    "Exterminator",
    "Fireplace Repair",
    "Flooring",
    "Framing",
    "General Contractor",
    "Handicap Modification",
    "Handyman",
    "Home modification",
    "Home Repair",
    "Interior Doors",
    "Irrigation",
    "Irrigation and Well Drilling",
    "Landscaping",
    "Lawn Spray and Fertilization",
    "Locksmith",
    "Maintenance",
    "Painting",
    "Paving",
    "Plastering",
    "Pool Cleaner",
    "Pool Repair",
    "Ramps",
    "Roofing",
    "Security",
    "Septic",
    "Sheet Metal Work",
    "Snow Removal",
    "Siding",
    "Special Trade Contractors",
    "Stonework",
    "Tile Setting",
    "Trash Removal",
    "Tree Services",
    "Water Damage",
    "Windows",
  ],
  "Counseling Services": [
    "Family",
    "Grief",
    "Individual",
    "Licensed Clinical Social Worker",
    "Geriatric",
    "Mental Health",
    "Pastoral",
    "Stress",
  ],
  Dentist: [
    "Endodontist",
    "General Dentist",
    "Oral Surgeon",
    "Orthodontist",
    "Pathologist",
    "Pediatric",
    "Periodontist",
    "Prosthodontist",
  ],
  Entertainment: ["Dancing", "Games", "Instrumental", "Singing", "Magic"],
  "Family Center": ["Others"],
  "Financial Planning and Organization": [
    "Bill Payment",
    "Existing Medical Bills",
    "Household Financial Management",
    "Medicaid",
    "Medicare",
    "Medicare Supplemental",
    "Reverse Mortgage",
    "Social Security Benefits Planning",
    "Veterans Benefits",
  ],
  "Funeral Home": [
    "At-Need",
    "Burial",
    "Cemetery",
    "Cremation",
    "Headstone",
    "Insurance",
    "Mausoleum",
    "Pre-Arrangements",
    "Pre-Planning",
    "Vault",
  ],
  "Furniture Store": ["New", "Rent to Own", "Rental", "Used"],
  Hearing: ["Clinical Audiologists", "Hearing Aids", "Repair"],
  "Home Accessibility Modifications": [
    "Bathroom",
    "Doorways and Doors",
    "Handrails",
    "Lifts and Hoists",
    "Ramps",
  ],
  "Home Health Care": [
    "Non-Medical",
    "Medical",
    "Meal Preparation",
    "Live-In Home Care",
    "Geriatric Care Management",
    "Agency",
    "Adult Day Care",
  ],
  "Home Safety Monitoring": ["Alarms", "Audio", "Bracelets", "Cameras"],
  Hospice: ["Others"],
  Insurance: [
    "General",
    "Health",
    "Home",
    "Life",
    "Medicare",
    "Medicare Advantage",
    "Medicare Supplemental",
    "Supplemental",
    "Travel",
  ],
  "Medical Equipment and Supplies (DME)": [
    "Incontinent Supplies",
    "Manual Wheelchairs",
    "Medical Products",
    "Oxygen",
    "Power Wheelchairs",
    "Respiratory Equipment",
    "Walker",
  ],
  "Medical Imaging/X-Ray": ["Non-Portable", "Portable"],
  "Moving/Relocation Services": [
    "Auctioneer",
    "Downsizing",
    "Services",
    "Estate Sales",
    "Movers",
    "Relocation Move Manager and Organizer",
  ],
  "Network Group": ["Others"],
  "NON-PROFIT SENIOR RELATED": ["Others"],
  Nurses: ["Others"],
  Nutritionist: [
    "Food Labeling",
    "Corporate Wellness",
    "Food Products",
    "Public Health",
    "Regulatory Affairs",
  ],
  Pharmacy: ["Bubble Wrapping", "Delivery", "Infusion", "Retail"],
  Physicians: [
    "Allergy and Immunology",
    "Anesthesiology",
    "Dermatology",
    "Diagnostic Radiology",
    "Emergency Medicine",
    "Family Medicine",
    "Internal Medicine",
    "Medical Genetics",
    "Neurology",
    "Nuclear Medicine",
    "Obstetrics and Gynecology",
    "Ophthalmology",
    "Pathology",
    "Pediatrics",
    "Physical Medicine and Rehabilitation",
    "Preventive Medicine",
    "Psychiatry",
    "Radiation Oncology",
    "Surgery",
    "Urology",
    "Others",
  ],
  Psychology: [
    "Alzheimer’s Disease",
    "Anger Management",
    "Behavioral",
    "Cerebrovascular Diseases",
    "Depression",
    "Eldercare",
    "Frontotemporal Dementias",
    "Geriatric Psychiatry",
    "Grief",
    "Memory Disorder",
    "Mood Disorders",
    "Navigating a Chronic Illness",
    "Neuropsychiatric Complications of Movement Disorder",
    "Neuropsychology",
    "Ph.D.",
    "Psychiatrist",
    "Psychologist",
    "Stress",
  ],
  "Real Estate": [
    "Agent",
    "Broker",
    "Broker Associate",
    "Buyer",
    "Commercial",
    "Investor",
    "Management",
    "Owner",
    "Property Management",
    "Realtor",
    "Rental",
    "Residential",
    "Seller",
  ],
  Rehabilitation: ["Others"],
  "Religious Books and Gift Store": ["Others"],
  "Senior Discount Providers": ["Others"],
  Therapy: [
    "Massage Therapist",
    "Medication Therapy Management",
    "Occupational Therapy",
    "Physical Therapy",
    "Speech",
  ],
  Transportation: [
    "Airplane",
    "Ambulance Transportation",
    "Private Transportation",
    "Shuttle Transportation",
  ],
  Vendors: ["Others"],
  Vision: [
    "Ophthalmologist",
    "Optometrist",
    "Orthopedic Surgeon (Orthopedist)",
    "Vision Products & Services",
  ],
};

export default function AgentFormInitial() {
  const [formData, setFormData] = useState({
    agentName: "", // Correct field name
    address: "",
    businessType: "",
    services: [],
  });
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const handleBusinessChange = (e) => {
    setSelectedBusiness(e.target.value);
    setSelectedServices([]); // Reset services when business type changes
    setFormData({ ...formData, businessType: e.target.value }); // Update formData with businessType
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    const newSelectedServices = selectedServices.includes(value)
      ? selectedServices.filter((service) => service !== value)
      : [...selectedServices, value];
    setSelectedServices(newSelectedServices);
    setFormData({ ...formData, services: newSelectedServices }); // Update formData with selected services
  };

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData); // Check the payload here
    try {
      const response = await axios.post("/api/agentBusinessinfo", formData);
      console.log("Response data:", response.data);
      toast.success("Data submitted successfully!");
      router.push("/agent-listing");
    } catch (error) {
      console.error("Submission error:", error); // Log the entire error object for more details
      const errorMsg =
        error.response?.data?.error || "Unable to submit business data.";
      toast.error(errorMsg);
    }
  };
  console.log(selectedBusiness);
  console.log(selectedServices);

  return (
    <>
      <Header />
      <div className="newslatter position-relative overflow-hidden">
        <div className="container p-4 mt-10 position-relative z-1">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-black">
                  Let's Get Started!
                </h2>
                <div className="sub-title fs-16 text-black">
                  Please enter your business name, address, and type
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
                      <label className="text-black fw-semibold">
                        Business Name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name="agentName" // Corrected field name
                        value={formData.agentName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-black fw-semibold">Address</label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="businessType"
                        className="text-black fw-semibold"
                      >
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        value={selectedBusiness}
                        onChange={handleBusinessChange}
                        className="form-control bg-transparent"
                      >
                        <option value="">Select a business type</option>
                        {Object.keys(businessTypes).map((businessType) => (
                          <option key={businessType} value={businessType}>
                            {businessType}
                          </option>
                        ))}
                      </select>
                    </div>

                    {selectedBusiness && (
                      <div className="">
                        <label
                          htmlFor="services"
                          className="text-black fw-semibold"
                        >
                          Services (Check all that apply)
                        </label>
                        <div id="services" className="mt-2 space-y-2">
                          {businessTypes[selectedBusiness].map((service) => (
                            <div
                              key={service}
                              className="flex items-start space-x-2"
                            >
                              <input
                                id={service}
                                name="services"
                                type="checkbox"
                                value={service}
                                checked={selectedServices.includes(service)}
                                onChange={handleServiceChange}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                htmlFor={service}
                                className="text-sm text-gray-700"
                              >
                                {service}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn text-black btn-lg btn-light"
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
