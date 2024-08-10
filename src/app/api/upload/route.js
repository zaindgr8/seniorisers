import { Image } from "../../../models/Community-Business-Details";

import { connectionString } from "../../../utils/dbConnect";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    await mongoose.connect(connectionString);

    const data = await request.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);

    const newImage = new Image({
      name: file.name,
      data: buffer,
      contentType: file.type,
    });
    await newImage.save();

    return NextResponse.json({
      response: "Successfully Uploaded",
      success: true,
    });
  } catch (error) {
    console.log(error);
    Response.json({ response: "Failed", success: false });
  }
};
export const GET = async () => {
  try {
    await mongoose.connect(connectionString);

    const images = await Image.find().select("name data contentType");
    return NextResponse.json({ success: true, images });
  } catch (error) {
    NextResponse.json({ success: false, error: "Failed" });
  }
};
