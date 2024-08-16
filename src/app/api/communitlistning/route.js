import prisma from "../../../utils/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const businessDetails = await prisma.communityBusinessDetails.findMany({
      include: {
        businessInfo: true, // Include related CommunityBusinessinfo
      },
    });

    return NextResponse.json({ data: businessDetails });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const {
      dba,
      yearFounded,
      license,
      country,
      city,
      state,
      zip,
      units,
      website,
      image,
      primaryPhone,
      ext,
      cellPhone,
      fax,
      Corporation,
      Status,
      companyOverview,
      businessInfoId, // The ID of the related CommunityBusinessinfo
    } = reqBody;

    const newBusinessDetail = await prisma.communityBusinessDetails.create({
      data: {
        dba,
        yearFounded,
        license,
        country,
        city,
        state,
        zip,
        website,
        image,
        units,
        primaryPhone,
        ext,
        cellPhone,
        fax,
        Corporation,
        Status,
        companyOverview,
        businessInfo: {
          connect: { id: businessInfoId },
        },
      },
      include: {
        businessInfo: true, // Include related CommunityBusinessinfo
      },
    });

    return NextResponse.json({ data: newBusinessDetail });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
