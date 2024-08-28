"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../Agent/Agent-sidebar";
import SectionHeader from "../../components/SectionHeader";

function Page() {
  const [formData, setFormData] = useState({
    UserauthId: null,
    fullName: "",
    jobTitle: "",
    startedInIndustry: "",
    aboutYou: "",
    education: "",
    profilePhoto: "",
    certificatesAndAwards: [],
  });

  const [filePreviews, setFilePreviews] = useState([]);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/signup", {
          method: "GET",
        });

        if (response.ok) {
          const userData = await response.json();
          setFormData((prevData) => ({
            ...prevData,
            UserauthId: userData.id,
            fullName: userData.fullName,
          }));
        } else {
          toast.error("Failed to fetch user data");
        }
      } catch (error) {
        toast.error("Error fetching user data");
      }
    };

    fetchUser();
  }, []);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const { name } = event.target;

    if (files && files.length > 0) {
      const fileReaders = [];
      const imagePreviews = [];
      const imageUrls = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        fileReaders.push(
          new Promise((resolve) => {
            reader.onloadend = () => {
              const result = reader.result;
              if (typeof result === "string") {
                imagePreviews.push(result);
                imageUrls.push(result);
              }
              resolve();
            };
            reader.readAsDataURL(file);
          })
        );
      }

      Promise.all(fileReaders).then(() => {
        if (name === "profilePhoto") {
          setProfilePhotoPreview(imageUrls[0]);
          setFormData((prevState) => ({
            ...prevState,
            profilePhoto: imageUrls[0],
          }));
        } else if (name === "certificatesAndAwards") {
          setFilePreviews((prev) => [...prev, ...imagePreviews]);
          setFormData((prevState) => ({
            ...prevState,
            certificatesAndAwards: [
              ...prevState.certificatesAndAwards,
              ...imageUrls,
            ],
          }));
        }
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.UserauthId) {
      toast.error("UserauthId is not set.");
      return;
    }

    try {
      const response = await fetch("/api/userProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("User Profile created successfully!");
      } else {
        toast.error("Failed to create user profile");
      }
    } catch (error) {
      toast.error("Error submitting the form");
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="flex flex-col md:mt-10 md:flex-row">
        <Sidebar />
        <div className="flex flex-col md:mx-10">
          <SectionHeader title="Dashboard">
            <p>Welcome, {formData.fullName}</p>
          </SectionHeader>
          <div className="p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <form
              className="bg-white rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="job-title"
                >
                  Job Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Job Title"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    setFormData({ ...formData, jobTitle: e.target.value })
                  }
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="started-in-industry"
                >
                  Started In Industry
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                  placeholder="Started In Industry"
                  value={formData.startedInIndustry}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startedInIndustry: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="about-you"
                >
                  About You
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  placeholder="About You"
                  value={formData.aboutYou}
                  onChange={(e) =>
                    setFormData({ ...formData, aboutYou: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="education"
                >
                  Education
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Education"
                  value={formData.education}
                  onChange={(e) =>
                    setFormData({ ...formData, education: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 mt-3 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="profile-photo"
                  >
                    Profile Photo
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="file"
                    name="profilePhoto"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                  {profilePhotoPreview && (
                    <img
                      src={profilePhotoPreview}
                      alt="Profile Photo"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                  )}
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="certificates"
                  >
                    Upload Certificates, Associations, Designations, and Awards
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    type="file"
                    name="certificatesAndAwards"
                    onChange={handleImageUpload}
                    multiple
                    accept="image/*"
                  />
                  <div>
                    {filePreviews.map((preview, index) => (
                      <img
                        key={index}
                        src={preview}
                        alt={`Certificate ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
