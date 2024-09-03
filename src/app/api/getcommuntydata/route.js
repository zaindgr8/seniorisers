import prisma from "../../../utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 15;
  const offset = (page - 1) * limit;

  try {
    const communityBusinesses = await prisma.communityBusinessinfo.findMany({
      skip: offset,
      take: limit,
      include: {
        amenities: true,
        businessDetails: true,
        specialties: true,
        pricing: true,
        propertyImages: true,
        userauth: true,
      },
    });

    const total = await prisma.communityBusinessinfo.count();

    return NextResponse.json({
      data: communityBusinesses,
      total,
      page,
      limit,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
