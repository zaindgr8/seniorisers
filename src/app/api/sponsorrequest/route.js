import prisma from "../../../utils/prisma"; // Adjust the import path based on your project structure
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    // Retrieve the token from cookies
    const token = request.cookies.get("token")?.value;
    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "No token found or invalid token" },
        { status: 401 }
      );
    }

    // Decode the token to get the user ID
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const sponsorId = decoded.userId; // Assuming `userId` is stored in the token

    // Validate that the user exists
    const user = await prisma.userauth.findUnique({
      where: { id: sponsorId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Parse the request body to get sponsor connection details
    const { receiverId, status } = await request.json();

    if (!receiverId) {
      return NextResponse.json(
        { error: "Receiver ID is required" },
        { status: 400 }
      );
    }

    // Create the sponsor connection request
    const newSponsorConnection = await prisma.sponsorConnectionRequest.create({
      data: {
        sponsorId,
        receiverId,
        status: status || "PENDING", // Default status to 'PENDING'
      },
    });

    // Return the created sponsor connection request as a response
    return NextResponse.json(newSponsorConnection, { status: 201 });
  } catch (error) {
    console.error("Error creating sponsor connection request:", error);
    return NextResponse.json(
      { error: "Failed to create sponsor connection request" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;
    console.log("token", token);

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "No token found or invalid token" },
        { status: 401 }
      );
    }

    // Decode the token to get user ID
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("decoded", decoded);

    const userauthId = decoded.userId; // Assuming userId is stored in the token
    console.log("userauthId", userauthId);

    // Validate that the user exists
    const user = await prisma.userauth.findUnique({
      where: { id: userauthId },
    });
    console.log("existingUser", user);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Fetch sponsor connection requests for the logged-in user
    const sponsorConnections = await prisma.sponsorConnectionRequest.findMany({
      where: {
        receiverId: userauthId, // Only get sponsor requests where current user is the receiver
      },
      include: {
        sponsor: true,
      },
    });

    // Return the current user and the sponsor connections
    return NextResponse.json({ user, sponsorConnections }, { status: 200 });
  } catch (error) {
    console.error("Error retrieving sponsor connection requests:", error);
    return NextResponse.json(
      { error: "Failed to retrieve sponsor connection requests" },
      { status: 500 }
    );
  }
}
