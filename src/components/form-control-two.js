"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

function Dropdown() {
  const [value, setValue] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [houses, setHouses] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/old-homes?search=${companyName}`);
      const data = await response.json();
      setHouses(data);
    } catch (error) {
      console.error("Error fetching house data:", error);
    }
  };

  const options = [
    { value: "1234", label: "1234" },
    { value: "5678", label: "5678" },
    { value: "9090", label: "9090" },
  ];
  const optionsTwo = [
    { value: "Las Vegas", label: "Las Vegas" },
    { value: "NewYork", label: "NewYork" },
    { value: "Washington", label: "Washington" },
  ];
  const optionsThree = [
    { value: "Texas", label: "Texas" },
    { value: "California", label: "California" },
  ];
  const customSelectStyle = {
    control: (provided) => ({
      ...provided,
      minHeight: "68px",
      borderRadius: "0.5rem",
      border: "0",
      boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.1)",
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: "2.25rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#0a73c0" : "white",
      color: state.isSelected ? "white" : "black",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <form className="row g-2 main-search" onSubmit={(e) => e.preventDefault()}>
      <div className="col-md-7 mb-[20vh]">
        <div className="row g-2">
          <div className="col-md-4">
            <div className="search-select ">
              <Select
                id="test"
                options={options}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                placeholder="ZIP"
                styles={customSelectStyle}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                options={optionsTwo}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                styles={customSelectStyle}
                placeholder="City"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="search-select">
              <Select
                options={optionsThree}
                defaultValue={value}
                onChange={setValue}
                isSearchable={true}
                styles={customSelectStyle}
                placeholder="State"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="search-input">
          <i className="fa-solid fa-magnifying-glass search-icon" />
          <input
            type="text"
            className="form-control"
            placeholder="Business Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <button
            className="btn btn-primary search-btn position-absolute top-50"
            onClick={handleSearch}
          >
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
      {/* Display fetched houses */}
      <div className="col-md-12">
        {houses.map((house) => (
          <div key={house._id}>
            <h3>{house.CompanyName}</h3>
            <p>{house.Address}</p>
            <p>
              {house.City}, {house.state} {house.Zip}
            </p>
          </div>
        ))}
      </div>
    </form>
  );
}

export default Dropdown;
