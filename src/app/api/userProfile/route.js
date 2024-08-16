import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      UserauthId,
      jobTitle,
      startedInIndustry,
      aboutYou,
      education,
      fullName,
      profilePhoto,
      certificatesAndAwards,
    } = body;

    // Create a new user profile with the provided data
    const newUserProfile = await prisma.userProfile.create({
      data: {
        UserauthId,
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
