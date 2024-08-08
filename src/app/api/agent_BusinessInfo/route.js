import { connect } from "../../../utils/dbConnect";
import BusinessInfo from "../../../models/Agent-Business-info";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const businessInfoData = await req.json();

  try {
    await connect();
    await BusinessInfo.create(businessInfoData);

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
      return NextResponse.json({ msg: ["Unable to submit business data."] });
    }
  }
}

export async function GET() {
  try {
    await connect();
    const businessInfos = await BusinessInfo.find({});
    return NextResponse.json(businessInfos);
  } catch (error) {
    return NextResponse.json({ msg: "Unable to fetch business data.", error });
  }
}
