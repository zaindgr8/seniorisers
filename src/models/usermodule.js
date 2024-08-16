import mongoose from "mongoose";

// Basic User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  userType: {
    type: String,
    required: [
      true,
      "Please specify if you are a community member or an agent",
    ],
    enum: ["community member", "agent"],
  },
});

// Extended User Profile Schema
const userProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  jobTitle: {
    type: String,
    required: false,
  },
  startedInIndustry: {
    type: Date,
    required: false,
  },
  aboutYou: {
    type: String,
    required: false,
  },
  education: {
    type: String,
    required: false,
  },
  profilePhoto: [
    {
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
    },
  ],
  certificatesAndAwards: [
    {
      name: {
        type: String,
        required: false,
      },
      data: {
        type: Buffer,
        required: false,
      },
      contentType: {
        type: String,
        required: false,
      },
    },
  ],
});

// Models
const User = mongoose.models.User || mongoose.model("User", userSchema);
const UserProfile =
  mongoose.models.UserProfile ||
  mongoose.model("UserProfile", userProfileSchema);

export { User, UserProfile };
