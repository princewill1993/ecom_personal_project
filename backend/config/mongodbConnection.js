import mongoose from "mongoose";

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_STRINGS);
    console.log("Database connection successful");
  } catch (error) {
    console.log(error);
  }
}

export { connectToDatabase };
