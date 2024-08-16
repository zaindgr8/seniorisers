import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma"; // Adjust the path based on your project structure

export async function POST(request) {
  try {
    const {
      dba,
      yearFounded,
      license,
      country,
      city,
      state,
      zip,
      website,
      image,
      primaryPhone,
      ext,
      cellPhone,
      fax,
      Corporation,
      Status,
      companyOverview,
      agentbusinessInfoId, // This should reference an existing AgentBusinessinfo record
    } = await request.json();

    // Ensure the `agentbusinessInfoId` is provided
    if (!agentbusinessInfoId) {
      return NextResponse.json(
        { error: "agentbusinessInfoId is required" },
        { status: 400 }
      );
    }

    console.log("Request payload:", {
      dba,
      yearFounded,
      license,
      country,
      city,
      state,
      zip,
      website,
      image,
      primaryPhone,
      ext,
      cellPhone,
      fax,
      Corporation,
      Status,
      companyOverview,
      agentbusinessInfoId,
    });

    // Create the AgentBusinessDetails entry
    const agentBusinessDetails = await prisma.agentBusinessDetails.create({
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
        primaryPhone,
        ext,
        cellPhone,
        fax,
        Corporation,
        Status,
        companyOverview,
        agentbusinessInfo: {
          connect: { id: agentbusinessInfoId }, // Connects the record to an existing AgentBusinessinfo by id
        },
      },
    });

    console.log("Database entry created:", agentBusinessDetails);
    return NextResponse.json(agentBusinessDetails, { status: 201 });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
