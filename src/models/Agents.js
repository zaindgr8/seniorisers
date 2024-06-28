import mongoose, { Schema } from "mongoose";

const agentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  agency: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  bio: { type: String, required: true },
  profilePicture: { type: String, required: true },
  socialMediaLinks: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Agent = mongoose.models.Agent || mongoose.model("Agent", agentSchema);

export default Agent;
