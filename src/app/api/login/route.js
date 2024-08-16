import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../../utils/prisma";

export async function POST(request) {
  try {
    const requestBody = await request.json();
    const { email, password } = requestBody;

    // Check if the user exists
    const user = await prisma.userauth.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    // Check password validity
    const validPassword = await bcryptjs.compare(password, user.password || "");

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    // Create token data
    const tokenData = {
      userId: user.id,
      email: user.email,
      userType: user.userType, // Include userType in token data
    };

    // Create a JWT token
    const jwtToken = jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", jwtToken, { httpOnly: true });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
