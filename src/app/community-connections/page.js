"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Page = () => {
  const [receivedConnections, setReceivedConnections] = useState([]);

  useEffect(() => {
    const fetchReceivedConnections = async () => {
      try {
        const response = await axios.get("/api/agent-connection?role=receiver");
        setReceivedConnections(response.data);
      } catch (error) {
        console.error("Error fetching received connections:", error);
      }
    };

    fetchReceivedConnections();
  }, []);

  const handleApprove = async (connectionId) => {
    try {
      const response = await axios.put(
        `/api/agent-connection/${connectionId}`,
        {
          status: "ACCEPTED",
        }
      );

      if (response.status === 200) {
        toast.success("Connection approved successfully!");

        // Update the state to reflect the change
        setReceivedConnections((prevConnections) =>
          prevConnections.map((connection) =>
            connection.id === connectionId
              ? { ...connection, status: "ACCEPTED" }
              : connection
          )
        );
      } else {
        toast.error("Failed to approve connection.");
      }
    } catch (error) {
      console.error("Error approving connection:", error);
      toast.error("Failed to approve connection.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Received Connections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {receivedConnections.map((connection) => (
          <div
            key={connection.id}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold">
              {connection.sender.fullName}
            </h2>
            <p className="text-gray-600">Status: {connection.status}</p>
            {connection.status === "PENDING" && (
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                onClick={() => handleApprove(connection.id)}
              >
                Approve
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
