import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    loginTime: { type: Date, default: Date.now },
    logoutTime: { type: Date },
    ipAddress: { type: String },
  },
  { timestamps: true }
);

export const Session = mongoose.model("Session", sessionSchema);
