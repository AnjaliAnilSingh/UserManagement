import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

export default mongoose.model("User", UserSchema);
