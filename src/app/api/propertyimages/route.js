import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const { images, businessInfoId } = await request.json(); // Parsing JSON payload

    const newPropertyImage = await prisma.propertyImages.create({
      data: {
        image: images, // Assuming `images` is an array of base64 strings
        businessInfo: {
          connect: { id: businessInfoId },
        },
      },
      include: {
        businessInfo: true,
      },
    });

    return NextResponse.json({ data: newPropertyImage });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
