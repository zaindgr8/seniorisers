"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const SponsorConnectionRequestForm = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Fetch all users and current user info
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch current user data from the cookie token
        const currentUserResponse = await axios.get("/api/getcookes");
        setCurrentUser(currentUserResponse.data.user);

        // Fetch all users
        const usersResponse = await axios.get("/api/signup");
        setUsers(usersResponse.data);
      } catch (error) {
        toast.error("Failed to fetch users");
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleSponsorRequest = async (targetUserId) => {
    try {
      await axios.post("/api/sponsorrequest", {
        sponsorId: currentUser.id, // The logged-in user's ID
        receiverId: targetUserId, // The target user's ID
        status: "PENDING", // Default status
      });
      toast.success("Sponsor connection request sent successfully!");
    } catch (error) {
      toast.error("Failed to send sponsor connection request");
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sponsor Connection Request</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-gray-100 p-4 rounded-md shadow-md flex justify-between items-center gap-10"
          >
            <span>
              {user.fullName} - {user.userType || "N/A"}
            </span>
            {user.id !== currentUser?.id && (
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                onClick={() => handleSponsorRequest(user.id)}
              >
                Sponsor
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SponsorConnectionRequestForm;
