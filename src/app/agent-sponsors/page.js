"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../community/Community-Sidebar";
import SectionHeader from "../../components/SectionHeader";

function ProfilePage() {
  const [receivedSponsors, setReceivedSponsors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        // Fetch current user data from the cookie token
        const currentUserResponse = await axios.get("/api/getcookes");
        setCurrentUser(currentUserResponse.data.user);

        // Fetch sponsor connection requests
        const response = await axios.get("/api/sponsorrequest");

        // Filter received sponsors for the current user
        const received = response.data.sponsorConnections.filter(
          (sponsor) => sponsor.receiverId === currentUserResponse.data.user.id
        );
        setReceivedSponsors(received);
      } catch (error) {
        console.error("Failed to fetch sponsors", error);
      }
    };

    fetchSponsors();
  }, []);

  return (
    <>
      <Header />
      <div className="flex flex-col md:mt-10 md:flex-row">
        <Sidebar />
        <div className="flex flex-col md:mx-10">
          <SectionHeader title="Dashboard">
            <p>Company Name: [Insert Company Name]</p>
          </SectionHeader>
          {receivedSponsors.length > 0 ? (
            <div className="p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="container mx-auto p-4">
                <h2 className="text-xl font-semibold mb-4">
                  Received Sponsors
                </h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-2 px-4 border-b border-gray-300">
                          Sender Name
                        </th>
                        <th className="py-2 px-4 border-b border-gray-300">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {receivedSponsors.map((sponsor) => (
                        <tr key={sponsor.id}>
                          <td className="py-2 px-4 border-b border-gray-300">
                            {sponsor.sponsor.fullName}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-300">
                            {sponsor.status}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No sponsors received yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
