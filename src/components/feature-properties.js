"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function FeaturesProperties() {
  const [featuresProperties, setFeaturesProperties] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/getcommuntydata");
        const result = await response.json();
        if (result.data) {
          setFeaturesProperties(result.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Senior Communities
                </div>
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Aged Cohousing
                </h2>
                <div className="sub-title fs-16">
                  Discover our vibrant senior citizens communities,
                  <br className="d-none d-lg-block" /> eager for your services
                  and expertise.
                </div>
              </div>
            </div>
          </div>
          {featuresProperties.map((featuresProperty) => (
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
                          Explore Now
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
    </>
  );
}
