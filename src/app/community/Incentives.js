// components/Incentives.js
import { useState } from "react";

const Incentives = () => {
  const [activeTab, setActiveTab] = useState("current");

  const renderIncentives = (type) => (
    <div className="justify-between items-center p-4 border-blue-500 rounded-lg border-2 pt-4 shadow-sm mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b border-gray-300">DURATION</th>
                <th className="py-2 px-4 border-b border-gray-300">TITLE</th>
                <th className="py-2 px-4 border-b border-gray-300">VALUE</th>
                <th className="py-2 px-4 border-b border-gray-300">LIMITED</th>
                <th className="py-2 px-4 border-b border-gray-300">VIEWS</th>
                <th className="py-2 px-4 border-b border-gray-300">SHARED</th>
                <th className="py-2 px-4 border-b border-gray-300">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  There are no incentives
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "current"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("current")}
        >
          CURRENT
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "expired"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("expired")}
        >
          EXPIRED
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "add"
              ? "text-blue-500 border-b-2 border-blue-500"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("add")}
        >
          ADD
        </button>
      </div>

      {activeTab === "current" && (
        <div>
          <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded">
            + Add Incentive
          </button>
          <h2 className="text-lg font-semibold">Current Incentives</h2>
          {renderIncentives("current")}
          <h2 className="text-lg font-semibold mt-6">Upcoming Incentives</h2>
          {renderIncentives("upcoming")}
          <h2 className="text-lg font-semibold mt-6">SAVED Incentives</h2>
          {renderIncentives("SAVED Incentives")}
        </div>
      )}

      {activeTab === "expired" && (
        <div>
          <h2 className="text-lg font-semibold">Expired Incentives</h2>
          {renderIncentives("expired")}
        </div>
      )}

      {activeTab === "add" && (
        <div>
          <h2 className="text-lg font-semibold">Add New Incentive</h2>
          {/* Add Incentive Form goes here */}
        </div>
      )}
    </div>
  );
};

export default Incentives;
