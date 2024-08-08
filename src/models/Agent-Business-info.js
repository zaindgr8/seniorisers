import mongoose from "mongoose";

const BusinessInfoSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  dba: { type: String, required: true },
  yearFounded: { type: String, required: true },
  license: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  website: { type: String, required: true },
  primaryPhone: { type: String, required: true },
  ext: { type: String, required: true },
  callPhone: { type: String, required: true },
  fax: { type: String, required: true },
});

export default mongoose.models.BusinessInfo ||
  mongoose.model("BusinessInfo", BusinessInfoSchema);
