import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    // Get the token from cookies
    const token = request.cookies.get("token")?.value;
    console.log("token", token);

    if (!token || typeof token !== "string") {
      return NextResponse.json(
        { error: "No token found or invalid token" },
        { status: 401 }
      );
    }

    // Decode the token to get the user ID
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("decoded", decoded);

    const userauthId = decoded.userId;

    // Parse request body
    const {
      jobTitle,
      startedInIndustry,
      aboutYou,
      education,
      fullName,
      profilePhoto,
      certificatesAndAwards,
    } = await request.json();

    // Create a new user profile with the provided data
    const newUserProfile = await prisma.userProfile.create({
      data: {
        UserauthId: userauthId,
        jobTitle,
        fullName,
        startedInIndustry: startedInIndustry
          ? new Date(startedInIndustry)
          : null,
        aboutYou,
        education,
        profilePhoto,
        certificatesAndAwards,
      },
    });

    // Return a successful response
    return NextResponse.json(newUserProfile, { status: 201 });
  } catch (error) {
    console.error("Error creating user profile:", error);
    return NextResponse.json(
      { error: "Failed to create user profile" },
      { status: 500 }
    );
  }
}
