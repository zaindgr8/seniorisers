"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
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
    <form
      className="row mb-5 overflow-hidden g-2 main-search"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="col-md-7 mb-[20vh]">
        <div className="row g-2">
          <div className="col-md-4">
            <div className="search-select ">
              <Select
                id="test"
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
      <div className="col-md-12  mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(houses) && houses.length > 0 ? (
          houses.map((house) => (
            <div className=" card mb-4   bg-grey border-0 shadow rounded-3">
              <Link href="" className="card-link" />
              <div className="card-body p-0">
                <div className="g-0 row">
                  <div className="bg-white col-lg-5 col-md-6 col-xl-5 position-relative">
                    <div className="card-image-hover  position-relative h-100">
                      <img
                        src="assets/img/properties/02.jpg"
                        alt=""
                        className="h-100 w-100 object-fit-cover"
                      />

                      <div className="bg-primary card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                        Community Center
                      </div>
                    </div>
                  </div>
                  <div className="bg-white col-lg-7 col-md-6 col-xl-7 p-3 p-lg-4 p-md-3 p-sm-4">
                    <div className="d-flex flex-column h-100">
                      <div className="mb-4">
                        <div className="d-flex align-items-end card-property-price flex-row gap-1 mb-2">
                          <h2 className="m-0 fw-semibold text-primary"></h2>
                          <div> </div>
                        </div>

                        <h6 className="fs-23 mb-2">{house.CompanyName}</h6>

                        <div className="fs-16">
                          <i className="fa-solid fa-location-dot" />
                          <span>{house.Address}</span>
                        </div>

                        <div className="mt-3">
                          Reach out to the community service center today and
                          submit your application as a service provider.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No houses found.
          </p>
        )}
      </div>
    </form>
  );
}

export default Dropdown;
