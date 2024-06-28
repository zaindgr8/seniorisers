"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPanel() {
  const [houses, setHouses] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [housesResponse, agentsResponse] = await Promise.all([
          axios.get("/api/old-homes"),
          axios.get("/api/agents"),
        ]);
        setHouses(housesResponse.data);
        setAgents(agentsResponse.data);
      } catch (error) {
        setError("Unable to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="bg-primary newslatter position-relative py-5 mx-3 mx-xl-5 rounded-4 position-relative overflow-hidden">
      <div className="container p-4 position-relative z-1">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div
              className="section-header text-center mb-5"
              data-aos="fade-down"
            >
              <div className="bg-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-primary">
                Manage Listings
              </div>
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                Property and Agent Listings
              </h2>
              <div className="sub-title fs-16 text-white">
                View and manage all property and agent listings on our platform.
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <h3 className="text-white pb-4">Property Listings</h3>
            {houses.length > 0 ? (
              <div className="row g-4 align-items-end newslatter-form">
                {houses.map((house) => (
                  <div key={house._id} className="col-md-6">
                    <div className="card h-100 bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-primary">
                          {house.title}
                        </h5>
                        <p className="card-text">{house.description}</p>
                        <p className="card-text">
                          <strong>Address:</strong> {house.address},{" "}
                          {house.city}, {house.state}, {house.zipCode},{" "}
                          {house.country}
                        </p>
                        <p className="card-text">
                          <strong>Price:</strong> {house.price} {house.currency}
                        </p>
                        <p className="card-text">
                          <strong>Bedrooms:</strong> {house.bedrooms}
                        </p>
                        <p className="card-text">
                          <strong>Bathrooms:</strong> {house.bathrooms}
                        </p>
                        <p className="card-text">
                          <strong>Square Footage:</strong> {house.squareFootage}
                        </p>
                        <p className="card-text">
                          <strong>Lot Size:</strong> {house.lotSize}
                        </p>
                        <p className="card-text">
                          <strong>Year Built:</strong> {house.yearBuilt}
                        </p>
                        <p className="card-text">
                          <strong>Parking Spaces:</strong> {house.parkingSpaces}
                        </p>
                        <p className="card-text">
                          <strong>Seller:</strong> {house.sellerName} -{" "}
                          {house.sellerEmail} - {house.sellerPhone}
                        </p>
                        <p className="card-text">
                          <strong>Status:</strong> {house.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-white">No properties found.</div>
            )}

            <h3 className="text-white mt-5 pb-4">Agent Listings</h3>
            {agents.length > 0 ? (
              <div className="row g-4 align-items-end newslatter-form">
                {agents.map((agent) => (
                  <div key={agent._id} className="col-md-6">
                    <div className="card h-100 bg-light">
                      <div className="card-body">
                        <h5 className="card-title text-primary">
                          {agent.name}
                        </h5>
                        <p className="card-text">
                          <strong>Email:</strong> {agent.email}
                        </p>
                        <p className="card-text">
                          <strong>Phone:</strong> {agent.phone}
                        </p>
                        <p className="card-text">
                          <strong>Agency:</strong> {agent.agency}
                        </p>
                        <p className="card-text">
                          <strong>License Number:</strong> {agent.licenseNumber}
                        </p>
                        <p className="card-text">
                          <strong>Bio:</strong> {agent.bio}
                        </p>
                        <p className="card-text">
                          <strong>Profile Picture:</strong>{" "}
                          {agent.profilePicture}
                        </p>
                        <p className="card-text">
                          <strong>Social Media Links:</strong>{" "}
                          {agent.socialMediaLinks}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-white">No agents found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
