// pages/api/connection/send.js

import { NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const { senderId, receiverId } = await request.json();

    // Check if a request already exists between these two users
    const existingRequest = await prisma.connectionRequest.findFirst({
      where: {
        senderId,
        receiverId,
        status: "PENDING",
      },
    });

    if (existingRequest) {
      return NextResponse.json(
        { error: "Connection request already sent" },
        { status: 400 }
      );
    }

    const connectionRequest = await prisma.connectionRequest.create({
      data: {
        senderId,
        receiverId,
      },
    });

    return NextResponse.json(connectionRequest, { status: 201 });
  } catch (error) {
    console.error("Error creating connection request:", error);
    return NextResponse.json(
      { error: "An error occurred while creating the connection request" },
      { status: 500 }
    );
  }
}
export async function PATCH(request) {
  try {
    const { requestId, status } = await request.json();

    if (!["ACCEPTED", "DECLINED"].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const connectionRequest = await prisma.connectionRequest.update({
      where: { id: requestId },
      data: { status },
    });

    return NextResponse.json(connectionRequest, { status: 200 });
  } catch (error) {
    console.error("Error responding to connection request:", error);
    return NextResponse.json(
      { error: "An error occurred while responding to the connection request" },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  const { userId } = request.query;

  try {
    const connectionRequests = await prisma.connectionRequest.findMany({
      where: {
        OR: [{ senderId: parseInt(userId) }, { receiverId: parseInt(userId) }],
      },
      include: {
        sender: true,
        receiver: true,
      },
    });

    return NextResponse.json(connectionRequests, { status: 200 });
  } catch (error) {
    console.error("Error fetching connection requests:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching connection requests" },
      { status: 500 }
    );
  }
}
