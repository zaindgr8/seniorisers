"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../community/Community-Sidebar";

import SectionHeader from "../../components/SectionHeader";
function page() {
  const [selectedFilters, setSelectedFilters] = useState({
    community: false,
    provider: false,
    users: false,
  });

  const toggleFilter = (filter) => {
    setSelectedFilters({
      ...selectedFilters,
      [filter]: !selectedFilters[filter],
    });
  };
  return (
    <>
      {" "}
      <Header />{" "}
      <div className="flex flex-col md:mt-10 md:flex-row">
        {" "}
        <Sidebar />{" "}
        <div className="flex flex-col md:mx-10">
          {" "}
          <SectionHeader title="Dashboard">
            {" "}
            <p>Company Name: [Insert Company Name]</p>{" "}
          </SectionHeader>{" "}
          <div className="p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="container mx-auto p-4">
              <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
                Invite Contacts
              </button>
              <h2 className="text-xl font-semibold mb-4">Connections</h2>

              <div className="flex items-center mb-4">
                <span className="mr-4 font-semibold">Filter By:</span>
                <label className="mr-4">
                  <input
                    type="checkbox"
                    checked={selectedFilters.community}
                    onChange={() => toggleFilter("community")}
                    className="mr-2"
                  />
                  Community
                </label>
                <label className="mr-4">
                  <input
                    type="checkbox"
                    checked={selectedFilters.provider}
                    onChange={() => toggleFilter("provider")}
                    className="mr-2"
                  />
                  Provider
                </label>
                <label className="mr-4">
                  <input
                    type="checkbox"
                    checked={selectedFilters.users}
                    onChange={() => toggleFilter("users")}
                    className="mr-2"
                  />
                  Users
                </label>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-2 px-4 border-b border-gray-300">
                        Status
                      </th>
                      <th className="py-2 px-4 border-b border-gray-300">
                        Business Name
                      </th>
                      <th className="py-2 px-4 border-b border-gray-300">
                        Contact Name
                      </th>
                      <th className="py-2 px-4 border-b border-gray-300">
                        Current Incentive
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center py-4 text-gray-500"
                      >
                        Looks like you need to make some connections.
                        <br />
                        <a href="#" className="text-blue-500">
                          Find Nearby Communities
                        </a>{" "}
                        |{" "}
                        <a href="#" className="text-blue-500">
                          Find Nearby Providers
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-gray-500">0 Selected</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
