import mongoose, { Schema } from "mongoose";

const houseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
  propertyType: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  squareFootage: { type: Number, required: true },
  lotSize: { type: Number, required: true },
  yearBuilt: { type: Number, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  sellerName: { type: String, required: true },
  sellerEmail: { type: String, required: true },
  sellerPhone: { type: String, required: true },
  parkingSpaces: { type: Number, required: true },
  images: [{ type: String }],
  videoUrl: { type: String },
  status: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const House = mongoose.models.House || mongoose.model("House", houseSchema);

export default House;
