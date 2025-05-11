// PACKAGES
import mongoose from "mongoose";

// CREATE ASYNC FUNCTION TO USE AWAIT WHILE CONNECTING TO MONGODB 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error: ", err);
        process.exit(1);  // EXIT ON FAILURE
    }
};

// EXPORT FUNCTION
export default connectDB;