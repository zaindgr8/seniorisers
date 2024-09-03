"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function AgentProfileCard() {
  const [profiles, setProfiles] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's ID
    const fetchLoggedInUserId = async () => {
      try {
        const response = await axios.get("/api/getcookes"); // Replace with your GET endpoint
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
        const [agentsResponse, profilesResponse] = await Promise.all([
          axios.get("/api/getagent"),
          axios.get("/api/userProfile"),
        ]);

        setAgents(
          Array.isArray(agentsResponse.data) ? agentsResponse.data : []
        );
        setProfiles(
          Array.isArray(profilesResponse.data?.data)
            ? profilesResponse.data.data
            : []
        );

        console.log("Agents:", agentsResponse.data);
        console.log("Profiles:", profilesResponse.data?.data);
      } catch (error) {
        console.error("Error fetching agents and profiles:", error);
      }
    };

    fetchAgentsAndProfiles();
  }, []);

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
    <>
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
                <div>{agent.businessType || "Business type not available"}</div>
                <p className="text-sm text-gray-500">
                  Services: {agent.services.join(", ")}
                </p>
                <div className="mt-4 flex justify-center">
                  {loggedInUserId && agent.userauthId !== loggedInUserId ? (
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                      onClick={() => handleConnectionRequest(agent.userauthId)}
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
    </>
  );
}
