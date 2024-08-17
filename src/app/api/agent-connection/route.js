import prisma from "../../../utils/prisma"; // Adjust the import path based on your project structure
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    // Extract the token from cookies
    const token = request.cookies.get("token")?.value;
    console.log("token connction api", token);

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "No token found or invalid token" },
        { status: 401 }
      );
    }

    // Decode the token to get the logged-in user's ID
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const senderId = decoded.userId;
    console.log("decoded connction api", decoded);
    console.log("senderId connction api", senderId);
    // Get the receiverId and status from the request body
    const { receiverId, status } = await request.json();

    // Prevent sending a connection request to oneself
    if (senderId === receiverId) {
      return NextResponse.json(
        { error: "You cannot send a connection request to yourself." },
        { status: 400 }
      );
    }

    // Create the new connection request
    const newConnectionRequest = await prisma.agentConnectionRequest.create({
      data: {
        senderId,
        receiverId,
        status: status || "PENDING", // Default status to 'PENDING' if not provided
      },
    });

    return NextResponse.json(newConnectionRequest, { status: 201 });
  } catch (error) {
    console.error("Error creating connection request:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
