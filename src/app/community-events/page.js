"use client";
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../community/Community-Sidebar";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
const Page = () => {
  const [activeTab, setActiveTab] = useState("GENERAL");

  const renderContent = () => {
    switch (activeTab) {
      case "GENERAL":
        return (
          <>
            <div className="justify-between items-center p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                  + Add Event
                </button>
                <button className="ml-4 bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">
                  Refresh
                </button>
              </div>
              <div className="text-sm text-gray-600">
                Next email blast: 8/15/2024 (in 4 days)
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="w-full bg-gray-100">
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        DATE
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        EVENT NAME
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        TIME
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        ADDRESS
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        RSVP'S
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Example row */}
                    <tr>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        08/10/2024
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        Sample Event
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        2:00 PM
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        123 Main St
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">45</td>
                      <td className="py-2 px-4 text-sm text-blue-500 hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                    {/* More rows can be added here */}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
      case "TYPE":
        return (
          <div class="p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="flex justify-between items-center ">
              <button class="bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0V10h3a1 1 0 000-2h-3V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                Refresh
              </button>
              <div class="text-sm text-gray-600">
                Next email blast: 8/15/2024{" "}
                <span class="italic">(in 4 days)</span>
              </div>
            </div>

            <div class="mt-4 overflow-x-auto">
              <table class="min-w-full bg-white">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      DATE
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      EVENT NAME
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      LOCATION
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      TIME
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      ADDRESS
                    </th>
                    <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      OPTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="py-2 px-4 text-sm text-gray-600">08/10/2024</td>
                    <td class="py-2 px-4 text-sm text-gray-600">
                      Sample Event
                    </td>
                    <td class="py-2 px-4 text-sm text-gray-600">Location 1</td>
                    <td class="py-2 px-4 text-sm text-gray-600">2:00 PM</td>
                    <td class="py-2 px-4 text-sm text-gray-600">123 Main St</td>
                    <td class="py-2 px-4 text-sm text-blue-500 hover:underline cursor-pointer">
                      Edit
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "AMENITIES":
        return (
          <div className="p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="p-4">
              <div class="flex justify-between items-center ">
                <button class="bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v3H6a1 1 0 000 2h3v3a1 1 0 002 0V10h3a1 1 0 000-2h-3V5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Refresh
                </button>
                <div class="text-sm text-gray-600">
                  Next email blast: 8/15/2024{" "}
                  <span class="italic">(in 4 days)</span>
                </div>
              </div>

              <div class="mt-4 overflow-x-auto">
                <table class="min-w-full bg-white">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        DATE
                      </th>
                      <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        EVENT NAME
                      </th>
                      <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        LOCATION
                      </th>
                      <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        TIME
                      </th>
                      <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        ADDRESS
                      </th>
                      <th class="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        OPTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-2 px-4 text-sm text-gray-600">
                        08/10/2024
                      </td>
                      <td class="py-2 px-4 text-sm text-gray-600">
                        Sample Event
                      </td>
                      <td class="py-2 px-4 text-sm text-gray-600">
                        Location 1
                      </td>
                      <td class="py-2 px-4 text-sm text-gray-600">2:00 PM</td>
                      <td class="py-2 px-4 text-sm text-gray-600">
                        123 Main St
                      </td>
                      <td class="py-2 px-4 text-sm text-blue-500 hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "SPECIALTIES":
        return (
          <div className=" p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h2 class="text-xl font-semibold mb-4">Add Event</h2>
              <p class="text-gray-600 mb-4">
                Seniorplicity's email blast is distributed on the 1st & 15th of
                each month to all users within 20 miles of your zip code.
                <br />
                <span class="text-sm">
                  Next email blast occurs: 8/15/2024 (in 4 days)
                </span>
              </p>

              <form>
                <div class="mb-4">
                  <label
                    for="event-name"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="event-name"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label
                      for="event-date"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="event-date"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="start-time"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Start Time
                    </label>
                    <input
                      type="time"
                      id="start-time"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="end-time"
                      class="block text-sm font-medium text-gray-700"
                    >
                      End Time
                    </label>
                    <input
                      type="time"
                      id="end-time"
                      class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <label
                    for="repeat-event"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Repeat Event
                  </label>
                  <select
                    id="repeat-event"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Never</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div class="mb-4">
                  <label
                    for="event-details"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Event Details
                  </label>
                  <textarea
                    id="event-details"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                  ></textarea>
                </div>

                <div class="mb-4">
                  <label
                    for="event-url"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Event Url
                  </label>
                  <input
                    type="url"
                    id="event-url"
                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className=" flex  justify-around">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-6 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-12 w-12 text-gray-400 mb-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 16.828a4 4 0 105.656-5.656l-1.415 1.414a1 1 0 01-1.414-1.414l1.415-1.414A4 4 0 103.172 16.828zM16.828 3.172a4 4 0 10-5.656 5.656l1.415-1.414a1 1 0 011.414 1.414l-1.415 1.414a4 4 0 105.656-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-gray-600">Event Image</span>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div class="flex flex-col items-center justify-center border-dashed border-2 border-gray-300 p-6 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-12 w-12 text-gray-400 mb-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3.172 16.828a4 4 0 105.656-5.656l-1.415 1.414a1 1 0 01-1.414-1.414l1.415-1.414A4 4 0 103.172 16.828zM16.828 3.172a4 4 0 10-5.656 5.656l1.415-1.414a1 1 0 011.414 1.414l-1.415 1.414a4 4 0 105.656-5.656z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="text-gray-600">Event Image</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        );
      case "PRICING":
        return (
          <div>
            <PriceBox />
          </div>
        );
      case "PHOTOS":
        return (
          <div>
            <ImagesUpload />
          </div>
        );
      default:
        return null;
    }
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
          <div className="flex space-x-6 m-2 p-2 bg-gray-100 rounded-md shadow-sm">
            {" "}
            <Button
              isActive={activeTab === "GENERAL"}
              onClick={() => setActiveTab("GENERAL")}
            >
              {" "}
              YOUR EVENTS{" "}
            </Button>{" "}
            <Button
              isActive={activeTab === "TYPE"}
              onClick={() => setActiveTab("TYPE")}
            >
              {" "}
              YOU'RE ATTENDING{" "}
            </Button>{" "}
            <Button
              isActive={activeTab === "AMENITIES"}
              onClick={() => setActiveTab("AMENITIES")}
            >
              {" "}
              ALL EVENTS AROUND ME{" "}
            </Button>{" "}
            <Button
              isActive={activeTab === "SPECIALTIES"}
              onClick={() => setActiveTab("SPECIALTIES")}
            >
              {" "}
              ADD{" "}
            </Button>{" "}
          </div>{" "}
          <div className="mt-4">{renderContent()}</div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Page;
