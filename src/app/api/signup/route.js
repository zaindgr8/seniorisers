import prisma from "../../../utils/prisma"; // Adjust the import path if necessary
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { fullName, email, password, userType } = reqBody;

    // Check if user already exists
    const existingUser = await prisma.userauth.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUser = await prisma.userauth.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        userType,
      },
    });

    // Send verification email (this part is assumed and not shown)

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    // Fetch all users from the database
    const users = await prisma.userauth.findMany();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
