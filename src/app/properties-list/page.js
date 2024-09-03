"use client";
import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import GooglePropertyMapsComponent from "../../components/property-map";
import Link from "next/link";

export default function PropertyList() {
  const [featuresProperties, setFeaturesProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    zip: "",
    city: "",
    state: "",
    businessName: "",
  });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/getcommuntydata?page=${page}&limit=${limit}`
        );
        const result = await response.json();
        if (result.data) {
          setFeaturesProperties(result.data);
          setFilteredProperties(result.data); // Initially display all properties
          setTotal(result.total);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [page, limit]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = featuresProperties;

      if (filters.zip) {
        filtered = filtered.filter((property) =>
          property.businessDetails.some((detail) =>
            detail.zip?.includes(filters.zip)
          )
        );
      }

      if (filters.city) {
        filtered = filtered.filter((property) =>
          property.businessDetails.some((detail) =>
            detail.city?.toLowerCase().includes(filters.city.toLowerCase())
          )
        );
      }

      if (filters.state) {
        filtered = filtered.filter((property) =>
          property.businessDetails.some((detail) =>
            detail.state?.toLowerCase().includes(filters.state.toLowerCase())
          )
        );
      }

      if (filters.businessName) {
        filtered = filtered.filter((property) =>
          property.CommunityName?.toLowerCase().includes(
            filters.businessName.toLowerCase()
          )
        );
      }

      setFilteredProperties(filtered);
    };

    applyFilters();
  }, [filters, featuresProperties]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const totalPages = Math.ceil(total / limit);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Layout>
      <div className="main-content">
        {/* Header Section */}
        <div className="border-bottom py-3">
          <div className="container">
            <div className="row gy-2 gx-4 gx-md-5">
              <h4 className="col-auto fs-18 fw-semibold mb-0 page-title text-capitalize">
                Communities
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium mb-0">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link
                      href="/property-details"
                      className="text-decoration-none"
                    >
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Communities List
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="py-5">
          <div className="container py-4">
            <div className="search-form__wrap z-1 position-relative mb-5 properties-search">
              <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow">
                <div className="relative w-1/4">
                  <select
                    name="zip"
                    className="w-full appearance-none border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters.zip}
                    onChange={handleFilterChange}
                  >
                    <option value="">ZIP</option>
                  </select>
                </div>

                <div className="relative w-1/4">
                  <select
                    name="city"
                    className="w-full appearance-none border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters.city}
                    onChange={handleFilterChange}
                  >
                    <option value="">City</option>
                  </select>
                </div>

                <div className="relative w-1/4">
                  <select
                    name="state"
                    className="w-full appearance-none border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={filters.state}
                    onChange={handleFilterChange}
                  >
                    <option value="">State</option>
                  </select>
                </div>

                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-2/4">
                  <input
                    type="text"
                    name="businessName"
                    className="w-full outline-none bg-transparent"
                    placeholder="Business Name"
                    value={filters.businessName}
                    onChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="d-flex flex-wrap align-items-center mb-4 gap-2">
              <h5 className="fw-semibold text-capitalize mb-0 col">
                {filteredProperties.length} Results For All Listings
              </h5>
            </div>

            <div className="row g-4">
              <div className="col-xl-6">
                <div className="rounded-4 map-list overflow-hidden">
                  <GooglePropertyMapsComponent />
                </div>
              </div>
              <div className="col-xl-6">
                {filteredProperties.map((featuresProperty) => (
                  <div
                    className="mb-4 overflow-hidden bg-grey border-0 shadow rounded-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                    key={featuresProperty.id}
                  >
                    <Link
                      href={`/community-details/${featuresProperty.id}`}
                      className="card-link"
                    />
                    <div className="card-body p-0">
                      <div className="g-0 row">
                        <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                          <div className="card-image-hover overflow-hidden position-relative h-100">
                            <img
                              src={
                                featuresProperty.propertyImages[0]?.url ||
                                "/assets/my_imgs/agent.jpg"
                              }
                              alt=""
                              className="h-100 w-100 object-fit-cover"
                            />
                          </div>
                        </div>
                        <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                          <div className="d-flex flex-column h-100">
                            <div className="mb-4">
                              <h6 className="fs-23 mb-2">
                                {featuresProperty.CommunityName}
                              </h6>
                              <div className="fs-16">
                                <i className="fa-solid fa-location-dot" />
                                <span> {featuresProperty.address}</span>
                              </div>
                              <div className="mt-3">
                                {featuresProperty.businessDetails[0]
                                  ?.companyOverview || "No overview available."}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xl-3 p-3 p-lg-4 p-md-3 p-sm-4">
                          <div className="row h-100 align-items-center justify-content-center gap-2">
                            <div className="col col-xl-12">
                              <div className="text-blue-500 text-2xl bg-white flex justify-center items-center rounded-lg p-2">
                                More details
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Section */}
            <nav className="align-items-center border-top d-flex flex-wrap justify-content-center justify-content-sm-between pagination mt-5">
              <ul className="list-unstyled m-0 pages mt-3">
                <li className={page === 1 ? "active" : ""}>
                  <button onClick={() => handlePageChange(1)}>1</button>
                </li>
                {page > 1 && page <= totalPages && (
                  <li>
                    <button onClick={() => handlePageChange(page - 1)}>
                      Previous
                    </button>
                  </li>
                )}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNum) => (
                    <li
                      key={pageNum}
                      className={page === pageNum ? "active" : ""}
                    >
                      <button onClick={() => handlePageChange(pageNum)}>
                        {pageNum}
                      </button>
                    </li>
                  )
                )}
                {page < totalPages && (
                  <li>
                    <button onClick={() => handlePageChange(page + 1)}>
                      Next
                    </button>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}
