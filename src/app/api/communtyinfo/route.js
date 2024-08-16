import prisma from "../../../utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const communityBusinesses = await prisma.communityBusinessinfo.findMany({
      include: {
        amenities: true,
        businessDetails: true,
        specialties: true,
        pricing: true,
        propertyImages: true,
      },
    });

    return NextResponse.json({ data: communityBusinesses });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      CommunityName,
      address,
      communityType,
      businessDetails,
      amenities,
      specialties,
      pricing,
      propertyImages,
    } = reqBody;

    const newCommunityBusiness = await prisma.communityBusinessinfo.create({
      data: {
        CommunityName,
        address,
        communityType,
        businessDetails: {
          create: businessDetails,
        },
        amenities: {
          create: amenities,
        },
        specialties: {
          create: specialties,
        },
        pricing: {
          create: pricing,
        },
        propertyImages: {
          create: propertyImages,
        },
      },
      include: {
        amenities: true,
        businessDetails: true,
        specialties: true,
        pricing: true,
        propertyImages: true,
      },
    });

    return NextResponse.json({ data: newCommunityBusiness });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
