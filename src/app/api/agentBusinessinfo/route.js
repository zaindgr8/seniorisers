import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const { agentName, address, businessType, services } = await request.json();
    console.log("Request payload:", {
      agentName,
      address,
      businessType,
      services,
    });

    // Create the AgentBusinessinfo entry
    const agentBusinessinfo = await prisma.agentBusinessinfo.create({
      data: {
        agentName, // Corrected field name
        address,
        businessType,
        services,
      },
    });

    console.log("Database entry created:", agentBusinessinfo);
    return NextResponse.json(agentBusinessinfo);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    // Fetch all AgentBusinessinfo entries along with their related AgentBusinessDetails
    const agentBusinessinfoList = await prisma.agentBusinessinfo.findMany({
      include: {
        agentBusiness: true, // Include related AgentBusinessDetails
      },
    });

    console.log("Fetched AgentBusinessinfo entries:", agentBusinessinfoList);
    return NextResponse.json(agentBusinessinfoList);
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
