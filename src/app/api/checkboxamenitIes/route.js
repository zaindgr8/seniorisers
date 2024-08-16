import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const data = await request.json();

    const { amenities, businessInfoId } = data;

    if (!businessInfoId || !Array.isArray(amenities)) {
      return NextResponse.json(
        { error: "Invalid data provided" },
        { status: 400 }
      );
    }

    const newCommunityAmenities = await prisma.communityAmenities.create({
      data: {
        amenities: amenities,
        businessInfoId: businessInfoId,
      },
    });

    return NextResponse.json({ data: newCommunityAmenities }, { status: 201 });
  } catch (error) {
    console.error("Error creating community amenities:", error);
    return NextResponse.json(
      { error: "Failed to create community amenities" },
      { status: 500 }
    );
  }
}
