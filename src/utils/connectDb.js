import mongoose from "mongoose";

export async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://usmanali477275:ISrg6SwbLpE05zQg@cluster0.fv6hh.mongodb.net/visa-app"
    );
    console.log("connected");
  } catch (error) {
    console.log("error", error);
  }
}
