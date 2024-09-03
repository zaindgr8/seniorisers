"use client";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import AgentProfileCard from "../../components/AgentProfileCard";
export default function AgentList() {
  const [profiles, setProfiles] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  const [filters, setFilters] = useState({
    zip: "",
    city: "",
    state: "",
    businessName: "",
  });

  useEffect(() => {
    const fetchLoggedInUserId = async () => {
      try {
        const response = await axios.get("/api/getcookes");
        setLoggedInUserId(response.data.user.id);
      } catch (error) {
        console.error("Error fetching logged-in user ID:", error);
      }
    };

    fetchLoggedInUserId();
  }, []);

  useEffect(() => {
    const fetchAgentsAndProfiles = async () => {
      try {
        const queryParams = new URLSearchParams(filters).toString();
        const [agentsResponse, profilesResponse] = await Promise.all([
          axios.get(`/api/agentBusinessinfo?${queryParams}`),
          axios.get("/api/userProfile"),
        ]);

        setAgents(agentsResponse.data || []);
        setProfiles(profilesResponse.data?.data || []);

        console.log("Agents:", agentsResponse.data);
        console.log("Profiles:", profilesResponse.data?.data);
      } catch (error) {
        console.error("Error fetching agents and profiles:", error);
      }
    };

    fetchAgentsAndProfiles();
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleConnectionRequest = async (receiverId) => {
    if (!loggedInUserId) {
      alert("Please create an account to send a connection request.");
      return;
    }

    try {
      const response = await axios.post("/api/agent-connection", {
        receiverId,
        status: "PENDING",
      });

      if (response.status === 201) {
        toast.success("Connection request sent successfully!");
      } else {
        toast.error("Failed to send connection request.");
      }
    } catch (error) {
      console.error("Error sending connection request:", error);
      toast.error("Failed to send connection request.");
    }
  };

  return (
    <Layout>
      <div className="main-content mb-4">
        <div className="border-bottom py-3">
          <div className="container">
            <div className="row gy-2 gx-4 ">
              <h4 className="col-auto fs-18 fw-semibold  page-title text-capitalize">
                Meet Our Agents
              </h4>
              <div className="border-start col-auto">
                <ol className="align-items-center breadcrumb fw-medium ">
                  <li className="breadcrumb-item d-flex align-items-center">
                    <Link href="/" className="text-decoration-none">
                      <i className="fa-solid fa-house-chimney-crack fs-18" />
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item d-flex align-items-center active"
                    aria-current="page"
                  >
                    Agents
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container pt-4">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="section-header text-center">
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                    Meet Our{" "}
                    <span className="underline position-relative text-primary">
                      Agents
                    </span>
                  </h2>
                  <div className="sub-title fs-16">
                    Our guests always travel the world in style. Mention
                    @Kempinski
                    <br className="d-none d-lg-block" /> on Instagram for a
                    chance to be featured!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 mx-20  p-4 ">
          <div className="relative w-1/4">
            <select
              name="zip"
              className="w-full appearance-none border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFilterChange}
              value={filters.zip}
            >
              <option value="">ZIP</option>
              {/* Add more options here */}
            </select>
          </div>

          <div className="relative w-1/4">
            <select
              name="city"
              className="w-full appearance-none border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFilterChange}
              value={filters.city}
            >
              <option value="">City</option>
              {/* Add more options here */}
            </select>
          </div>

          <div className="relative w-1/4">
            <select
              name="state"
              className="w-full appearance-none border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFilterChange}
              value={filters.state}
            >
              <option value="">State</option>
              {/* Add more options here */}
            </select>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg p-3 w-2/4">
            <input
              type="text"
              name="businessName"
              className="w-full outline-none bg-transparent"
              placeholder="Business Name"
              onChange={handleFilterChange}
              value={filters.businessName}
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m0-4h.01M21 12c0-4.418-3.582-8-8-8S5 7.582 5 12s3.582 8 8 8 8-3.582 8-8z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <ToastContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {agents.map((agent) => {
            const profile = profiles.find((p) => p.id === agent.userauthId);

            return (
              <div
                key={agent.id}
                className="p-4 border rounded-lg shadow-md bg-white"
              >
                <div className="agent-card text-center">
                  <div className="avatar rounded-circle p-1 border border-primary">
                    <Link
                      href={`/agent-profile/${profile?.id || agent.userauthId}`}
                    >
                      <img
                        src={
                          profile?.UserProfile[0]?.profilePhoto ||
                          "/assets/my_imgs/agent.jpg"
                        }
                        alt={profile?.fullName || agent.agentName}
                        className="avatar-img rounded-circle"
                        onError={(e) => {
                          console.error("Error loading image:", e.target.src);
                          e.target.src = "/assets/my_imgs/agent.jpg";
                        }}
                      />
                    </Link>
                    <div className="align-items-center avatar-badge bg-primary d-flex justify-content-center position-absolute rounded-circle text-white">
                      <i className="fas fa-medal" />
                    </div>
                  </div>
                  <h5 className="mt-3 mb-1">
                    <Link
                      href={`/agent-profile/${profile?.id || agent.userauthId}`}
                    >
                      {profile?.fullName || agent.agentName}
                    </Link>
                  </h5>
                  <div>
                    {agent.businessType || "Business type not available"}
                  </div>
                  <p className="text-sm text-gray-500">
                    Services: {agent.services.join(", ")}
                  </p>
                  <div className="mt-4 flex justify-center">
                    {loggedInUserId && agent.userauthId !== loggedInUserId ? (
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                        onClick={() =>
                          handleConnectionRequest(agent.userauthId)
                        }
                      >
                        Send Connection Request
                      </button>
                    ) : (
                      !loggedInUserId && (
                        <button
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md"
                          onClick={() =>
                            alert(
                              "Please create an account to send a connection request."
                            )
                          }
                        >
                          Send Connection Request
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row g-4 justify-content-center">
          <AgentProfileCard />
        </div>
      </div>
    </Layout>
  );
}
