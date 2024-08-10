import mongoose from "mongoose";

// Community Amenities Schema
const CommunityamenitiesSchema = new mongoose.Schema({
  amenities: [{ type: String, required: true }],
  businessInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityBusinessinfo",
    required: true,
  },
});

const CommunityBusinessinfoSchema = new mongoose.Schema({
  CommunityName: { type: String, required: true },
  address: { type: String, required: true },
  communityType: [{ type: String, required: true }],
});

// Community Business Details Schema
const CommunityBusinessDetailsSchema = new mongoose.Schema({
  dba: { type: String, required: true },
  yearFounded: { type: String, required: true },
  license: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  website: { type: String, required: true },
  primaryPhone: { type: String, required: true },
  ext: { type: String, required: true },
  cellPhone: { type: String, required: true },
  fax: { type: String, required: true },
  Corporation: [{ type: String, required: true }],
  Status: [{ type: String, required: true }],
  companyOverview: { type: String, required: false },
  businessInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityBusinessinfo",
    required: true,
  },
});
const CompanyImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  businessInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityBusinessinfo",
    required: true,
  },
});
const PropertyImagesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  businessInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityBusinessinfo",
    required: true,
  },
});

export const PropertyImages =
  mongoose.models.PropertyImages ||
  mongoose.model("PropertyImages", PropertyImagesSchema);
export const CompanyImage =
  mongoose.models.CompanyImage ||
  mongoose.model("CompanyImage", CompanyImageSchema);

// Community Specialties Schema
const CommunitySpecialtiesSchema = new mongoose.Schema({
  specialties: [{ type: String, required: true }],
  businessInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityBusinessinfo",
    required: true,
  },
});

// Community Pricing Schema
const CommunityPricingSchema = new mongoose.Schema({
  pricing: [{ type: String, required: true }],
  payments: [{ type: String, required: true }],
  businessInfoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CommunityBusinessinfo",
    required: true,
  },
});

export const CommunityBusinessinfo =
  mongoose.models.CommunityBusinessinfo ||
  mongoose.model("CommunityBusinessinfo", CommunityBusinessinfoSchema);
export const Communityamenities =
  mongoose.models.Communityamenities ||
  mongoose.model("Communityamenities", CommunityamenitiesSchema);

export const CommunityBusinessDetails =
  mongoose.models.CommunityBusinessDetails ||
  mongoose.model("CommunityBusinessDetails", CommunityBusinessDetailsSchema);

export const CommunitySpecialties =
  mongoose.models.CommunitySpecialties ||
  mongoose.model("CommunitySpecialties", CommunitySpecialtiesSchema);

export const CommunityPricing =
  mongoose.models.CommunityPricing ||
  mongoose.model("CommunityPricing", CommunityPricingSchema);
