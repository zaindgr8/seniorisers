"use client";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Sidebar from "../community/Community-Sidebar";
import SectionHeader from "../../components/SectionHeader";
import Button from "../../components/Button";
const Page = () => {
  const [activeTab, setActiveTab] = useState("GENERAL");
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    repeatEvent: "Never",
    eventDetails: "",
    eventUrl: "",
  });

  // Fetch events when the component mounts or when the Refresh button is clicked
  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/event");
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Event added successfully!");
      // Clear the form or take other actions
      setFormData({
        eventName: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        repeatEvent: "Never",
        eventDetails: "",
        eventUrl: "",
      });
    } else {
      alert("Failed to add event.");
    }
  };
  const renderContent = () => {
    switch (activeTab) {
      case "GENERAL":
        return (
          <>
            <div className="justify-between w-full  items-center p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2  gap-4">
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

              <div className="mt-4 ">
                <table className=" bg-white">
                  <thead>
                    <tr className=" bg-gray-100">
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        EVENT NAME
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        DATE
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        START TIME
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        END TIME
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        REPEAT EVENT
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        EVENT URL
                      </th>
                      <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          {event.eventName}
                        </td>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          {new Date(event.eventDate).toLocaleDateString()}
                        </td>

                        <td className="py-2 px-4 text-sm text-gray-600">
                          {event.startTime}
                        </td>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          {event.endTime}
                        </td>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          {event.repeatEvent}
                        </td>
                        <td className="py-2 px-4 text-sm text-gray-600">
                          {event.eventUrl}
                        </td>
                        <td className="py-2 px-4 text-sm text-blue-500 hover:underline cursor-pointer">
                          Edit
                        </td>
                      </tr>
                    ))}
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
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case "AMENITIES":
        return (
          <div className="justify-between w-full  items-center p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2  gap-4">
            <div className="mt-4 ">
              <table className=" bg-white">
                <thead>
                  <tr className=" bg-gray-100">
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      EVENT NAME
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      DATE
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      START TIME
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      END TIME
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      REPEAT EVENT
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      EVENT URL
                    </th>
                    <th className="py-2 px-4 text-left text-sm font-medium text-gray-700">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        {event.eventName}
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        {new Date(event.eventDate).toLocaleDateString()}
                      </td>

                      <td className="py-2 px-4 text-sm text-gray-600">
                        {event.startTime}
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        {event.endTime}
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        {event.repeatEvent}
                      </td>
                      <td className="py-2 px-4 text-sm text-gray-600">
                        {event.eventUrl}
                      </td>
                      <td className="py-2 px-4 text-sm text-blue-500 hover:underline cursor-pointer">
                        Edit
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "SPECIALTIES":
        return (
          <div className=" p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Add Event</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="event-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Name
                  </label>
                  <input
                    type="text"
                    id="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="startTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Start Time
                    </label>
                    <input
                      type="time"
                      id="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="endTime"
                      className="block text-sm font-medium text-gray-700"
                    >
                      End Time
                    </label>
                    <input
                      type="time"
                      id="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="repeatEvent"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Repeat Event
                  </label>
                  <select
                    id="repeatEvent"
                    value={formData.repeatEvent}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Never</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="eventDetails"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Details
                  </label>
                  <textarea
                    id="eventDetails"
                    value={formData.eventDetails}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows="3"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="eventUrl"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Event Url
                  </label>
                  <input
                    type="url"
                    id="eventUrl"
                    value={formData.eventUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
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
