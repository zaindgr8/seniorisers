import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
import { connect } from "../../../utils/dbConnect";
import {
  CommunityBusinessDetails,
  CommunitySpecialties,
  CommunityPricing,
  Communityamenities,
  CommunityBusinessinfo,
  CompanyImage,
  PropertyImages, // Import the PropertyImages model
} from "../../../models/Community-Business-Details";
import { NextResponse } from "next/server";

async function handlePostRequest(req, model) {
  const data = await req.json();

  try {
    await connect();
    const document = await model.create(data);

    return NextResponse.json({
      msg: "Data submitted successfully",
      success: true,
      data: document,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map((err) => err.message);
      return NextResponse.json({ msg: errorList });
    } else {
      console.error(`Error creating document:`, error);
      return NextResponse.json({
        msg: "Unable to submit data.",
        error,
      });
    }
  }
}

async function handleGetRequest(model) {
  try {
    await connect();
    const documents = await model.find({});
    return NextResponse.json(documents);
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json({ msg: "Unable to fetch data.", error });
  }
}
async function handlePropertyGetRequest(model) {
  try {
    await connect();
    const documents = await model.find({});
    return NextResponse.json({
      success: true,
      images: documents, // Wrap the results in the 'images' field
    });
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json({ msg: "Unable to fetch data.", success: false });
  }
}

async function handleImagePostRequest(req) {
  try {
    await connect();

    const data = await req.formData();
    const file = data.get("file");
    const businessInfoId = data.get("businessInfoId");

    if (!file || !businessInfoId) {
      return NextResponse.json({
        success: false,
        msg: "File and businessInfoId are required.",
      });
    }

    const bufferData = await file.arrayBuffer();
    const buffer = Buffer.from(bufferData);

    const newImage = new CompanyImage({
      name: file.name,
      data: buffer,
      contentType: file.type,
      businessInfoId: new ObjectId(businessInfoId),
    });

    await newImage.save();

    return NextResponse.json({
      response: "Successfully Uploaded",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ response: "Failed", success: false });
  }
}

async function handleMultipleImagesPostRequest(req) {
  try {
    await connect();

    const data = await req.formData();
    const files = data.getAll("files"); // Get all the files
    const businessInfoId = data.get("businessInfoId");

    if (!files || files.length === 0 || !businessInfoId) {
      return NextResponse.json({
        success: false,
        msg: "Files and businessInfoId are required.",
      });
    }

    // Process each file and save it to the database
    const imageDocuments = await Promise.all(
      files.map(async (file) => {
        const bufferData = await file.arrayBuffer();
        const buffer = Buffer.from(bufferData);

        const newImage = new PropertyImages({
          name: file.name,
          data: buffer,
          contentType: file.type,
          businessInfoId: new ObjectId(businessInfoId),
        });

        return newImage.save();
      })
    );

    return NextResponse.json({
      response: "Successfully Uploaded",
      success: true,
      data: imageDocuments,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ response: "Failed", success: false });
  }
}

async function handleImageGetRequest() {
  try {
    await connect();
    const images = await CompanyImage.find({});
    return NextResponse.json({
      success: true,
      images,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json({
      msg: "Unable to fetch images.",
      success: false,
    });
  }
}

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");

  switch (endpoint) {
    case "business-details":
      return handlePostRequest(req, CommunityBusinessDetails);
    case "specialties":
      return handlePostRequest(req, CommunitySpecialties);
    case "pricing":
      return handlePostRequest(req, CommunityPricing);
    case "amenities":
      return handlePostRequest(req, Communityamenities);
    case "business-info":
      return handlePostRequest(req, CommunityBusinessinfo);
    case "CompanyImage":
      return handleImagePostRequest(req);
    case "property-images":
      return handleMultipleImagesPostRequest(req);
    default:
      return NextResponse.json({ msg: "Invalid endpoint." }, { status: 400 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");

  switch (endpoint) {
    case "business-details":
      return handleGetRequest(CommunityBusinessDetails);
    case "specialties":
      return handleGetRequest(CommunitySpecialties);
    case "pricing":
      return handleGetRequest(CommunityPricing);
    case "amenities":
      return handleGetRequest(Communityamenities);
    case "business-info":
      return handleGetRequest(CommunityBusinessinfo);
    case "CompanyImage":
      return handleImageGetRequest();
    case "property-images":
      return handlePropertyGetRequest(PropertyImages); // Ensure that this returns { success: true, images: [ ... ] }
    default:
      return NextResponse.json({ msg: "Invalid endpoint." }, { status: 400 });
  }
}
