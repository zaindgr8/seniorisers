import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const data = await request.json();

    const createdSpecialty = await prisma.communitySpecialties.create({
      data: {
        specialties: data.specialties,
        businessInfoId: parseInt(data.businessInfoId),
      },
    });

    return NextResponse.json({
      message: "Specialty added successfully!",
      createdSpecialty,
    });
  } catch (error) {
    console.error("Error creating specialty:", error);
    return NextResponse.json(
      { message: "Error creating specialty", error },
      { status: 500 }
    );
  }
}
