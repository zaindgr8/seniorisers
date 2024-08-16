import prisma from "../../../utils/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { pricing, payments, businessInfoId } = await request.json();

    // Log the incoming data to check what is being received
    console.log("Received data:", { pricing, payments, businessInfoId });

    const newCommunityPricing = await prisma.communityPricing.create({
      data: {
        pricing,
        payments,
        businessInfo: {
          connect: { id: parseInt(businessInfoId, 10) }, // Ensure ID is a number
        },
      },
    });

    return NextResponse.json({ data: newCommunityPricing }, { status: 201 });
  } catch (error) {
    console.error("Error creating community pricing:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
