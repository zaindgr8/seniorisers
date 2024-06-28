import dbConnect from "../../../utils/dbConnect";
import House from "../../../models/Old-Homes";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const houseData = await req.json();

  try {
    await dbConnect();
    await House.create(houseData);

    return NextResponse.json({
      msg: ["House data submitted successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to submit house data."] });
    }
  }
}
