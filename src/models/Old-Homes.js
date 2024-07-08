import mongoose, { Schema } from "mongoose";

const houseSchema = new Schema({
  Type: { type: String, required: true },
  DateAdded: { type: String, required: true },
  CompanyName: { type: String, required: true },
  Address: { type: String, required: true },
  City: { type: String, required: true },
  state: { type: String, required: true },
  Zip: { type: String, required: true },
  SellerEmail: { type: String },
});

const House = mongoose.models.House || mongoose.model("House", houseSchema);

export default House;
