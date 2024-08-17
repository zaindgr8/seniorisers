import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma"; // Ensure correct path

export async function POST(request) {
  try {
    // Extract the token from cookies
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
    const existingUser = await prisma.userauth.findUnique({
      where: { id: userauthId },
    });
    console.log("existingUser", existingUser);

    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Get the request data
    const { agentName, address, businessType, services } = await request.json();

    // Create the AgentBusinessinfo entry with the associated userauthId
    const agentBusinessinfo = await prisma.agentBusinessinfo.create({
      data: {
        agentName,
        address,
        businessType,
        services,
        userauthId, // Directly reference the foreign key
      },
    });

    return NextResponse.json(agentBusinessinfo);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    // Fetch all AgentBusinessinfo entries along with their related Userauth data
    const agentBusinessinfoList = await prisma.agentBusinessinfo.findMany({
      include: {
        agentBusiness: true,
        userauth: true,
      },
    });

    return NextResponse.json(agentBusinessinfoList);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
