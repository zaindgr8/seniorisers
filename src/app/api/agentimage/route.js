import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const { images, agentbusinessInfoId } = await request.json(); // Parsing JSON payload

    console.log("Received images:", images);
    console.log("Received agentbusinessInfoId:", agentbusinessInfoId);

    if (!agentbusinessInfoId) {
      throw new Error("agentbusinessInfoId is required but was not provided.");
    }

    const newPropertyImage = await prisma.agentImage.create({
      data: {
        image: images, // Assuming `images` is an array of base64 strings
        agentbusinessInfo: {
          connect: { id: agentbusinessInfoId }, // Make sure this matches your schema
        },
      },
      include: {
        agentbusinessInfo: true,
      },
    });

    return NextResponse.json({ data: newPropertyImage });
  } catch (error) {
    console.error("Error creating property image:", error); // Log the full error
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
