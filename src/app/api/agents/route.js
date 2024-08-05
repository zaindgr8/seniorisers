import { connect } from "../../../utils/dbConnect";
import Agents from "../../../models/Agents";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const agentsData = await req.json();

  try {
    await connect();
    await Agents.create(agentsData);

    return NextResponse.json({
      msg: ["Data submitted successfully"],
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

export async function GET() {
  try {
    await connect();
    const agents = await Agents.find({});
    return NextResponse.json(agents);
  } catch (error) {
    return NextResponse.json({ msg: "Unable to fetch agent data.", error });
  }
}
