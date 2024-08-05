import { connect } from "../../../utils/dbConnect";
import House from "../../../models/Old-Homes";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connect();
    const houses = await House.find({});
    return NextResponse.json(houses);
  } catch (error) {
    return NextResponse.json({ msg: "Unable to fetch house data.", error });
  }
}
