"use client";

import { useState } from "react";

export default function AgentForm() {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    agency: "",
    licenseNumber: "",
    bio: "",
    profilePicture: "",
    socialMediaLinks: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/agents", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFormData(initialFormData);
    }
  };

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
                List Yourself as an Agent
              </div>

              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize text-white">
                Enter Agent Details
              </h2>

              <div className="sub-title fs-16 text-white">
                Provide the necessary details to list yourself as an agent on
                our platform.
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="row g-4 align-items-end newslatter-form">
                {Object.keys(initialFormData).map((field) => (
                  <div className="col-sm-6" key={field}>
                    <div className="form-group">
                      <label className="text-white bg-primary fw-semibold">
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent"
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                ))}
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn text-white btn-lg btn-light "
                  >
                    Submit
                  </button>
                </div>
                {success && (
                  <div className="col-12 text-center text-white text-success mt-3">
                    Agent listed successfully!
                  </div>
                )}
                {error && (
                  <div className="col-12 text-center text-danger mt-3">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
