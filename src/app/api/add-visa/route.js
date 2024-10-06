import Visa from "@/models/visa";
import { connectDb } from "@/utils/connectDb";
import { NextResponse } from "next/server";

export async function POST(req) {
  connectDb();
  const data = await req.json();
  const { trackingId, visaNumber } = data;
  const visa = await Visa.findOne({ trackingId, visaNumber });
  if (visa) {
    return NextResponse.json(
      { message: "Visa already exists", success: false },
      { status: 400 }
    );
  }
  if (!data)
    return NextResponse.json(
      {
        message: "Please provide all details",
        success: false,
      },
      { status: 400 }
    );

  try {
    const visa = await Visa.create(data);
    return NextResponse.json(
      { message: "Details added successfully !", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong Please try again !", success: true },
      { status: 500 }
    );
  }
}
