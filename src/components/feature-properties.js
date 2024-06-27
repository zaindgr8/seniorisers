import Link from 'next/link';
import React from 'react';
import FeaturesPropertiesData from "../data/features-properties.json"
export default async function FeaturesProperties() {
  return (
    <>
      {/* Start Featured Properties Section */}
      {/* Start Featured Properties Section */}
      <div className="py-5">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div className="bg-soft-primary d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                  Senior Communities
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Aged Cohousing
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Discover our vibrant senior citizens communities,
                  <br className="d-none d-lg-block" /> eager for your services
                  and expertise.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          {/* Start Card */}
          {FeaturesPropertiesData?.map((featuresProperty) => {
            return (
              <div
                className=" card mb-4 overflow-hidden bg-grey border-0 shadow rounded-3"
                data-aos="fade-up"
                data-aos-delay={300}
                key={featuresProperty.id}
              >
                <Link href="" className="card-link" />
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="bg-white col-lg-5 col-md-6 col-xl-3 position-relative">
                      <div className="card-image-hover overflow-hidden position-relative h-100">
                        {/* Start Image */}
                        <img
                          src={featuresProperty.img}
                          alt=""
                          className="h-100 w-100 object-fit-cover"
                        />
                        {/* /. End Image */}
                        {/* Start Tag */}
                    
                        {/*  /. End Tag */}
                      </div>
                    </div>
                    <div className="bg-white col-lg-7 col-md-6 col-xl-6 p-3 p-lg-4 p-md-3 p-sm-4">
                      <div className="d-flex flex-column h-100">
                        <div className="mb-4">
                          {/* Start Property Name */}
                          <h6 className="fs-23 mb-2">
                            {" "}
                            {featuresProperty.name}
                          </h6>
                          {/* /.End Property Name */}
                          <div className="fs-16">
                            <i className="fa-solid fa-location-dot" />
                            <span> {featuresProperty.location}</span>
                          </div>
                          {/* Start Property Description */}
                          <div className="mt-3">
                            {featuresProperty.description}
                          </div>
                          {/* /.End Property Description */}
                        </div>
                        {/* Start Card Property Facilities */}

                        {/* /. End Card Property Facilities */}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-xl-3 p-3 p-lg-4 p-md-3 p-sm-4">
                      <div className="row h-100 align-items-center justify-content-center gap-2">
                        {/* Start price */}
                        <div className="col col-xl-12">
                          <div className="text-blue-500 text-2xl bg-white flex justify-center items-center rounded-lg p-2">
                            Explore Now
                          </div>
                        </div>
                        {/* /.End price */}
                        {/* Start button */}

                        {/* /.End button */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* /.End Card */}
        </div>
      </div>
      {/* /.End Featured Properties Section */}
      {/* /.End Featured Properties Section */}
    </>
  );
}
async function getFeaturesProperties() {
  const res = await fetch('https://findhusly.vercel.app/api/features-properties')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}