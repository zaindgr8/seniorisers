import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../utils/prisma";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log("reqBody", reqBody);

    const { token, password } = reqBody;

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as {
      userId: string;
    };
    console.log("decoded", decoded);

    const user = await prisma.userauth.findUnique({
      where: { id: parseInt(decoded.userId) },
    });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    console.log("hashedPassword", hashedPassword);

    await prisma.userauth.update({
      where: { id: parseInt(decoded.userId) },
      data: { password: hashedPassword },
    });

    return NextResponse.json({ message: "Password set  successful" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
