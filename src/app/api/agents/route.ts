import dbConnect from "../../../utils/dbConnect";
import Agents from "../../../models/Agents";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const agentsData = await req.json();

  try {
    await dbConnect();
    await Agents.create(agentsData);

    return NextResponse.json({
      msg: [" Data submitted successfully"],
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
      return NextResponse.json({ msg: ["Unable to submit agent data."] });
    }
  }
}
