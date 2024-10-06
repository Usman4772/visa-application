import Visa from "@/models/visa";
import { connectDb } from "@/utils/connectDb";
import { NextResponse } from "next/server";

export async function POST(req) {
  connectDb();
  const { trackingNumber } = await req.json();
  if (!trackingNumber)
    return NextResponse.json(
      { messaeg: "No details found", success: false },
      { status: 400 }
    );
  try {
    const visa = await Visa.findOne({ trackingId: trackingNumber });
    console.log(visa);
    if (visa) {
      return NextResponse.json(
        {
          message: "Details found",
          success: true,
          data: {
            visa,
          },
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "No details found",
          success: false,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong ! Please try again",
        success: false,
      },
      { status: 500 }
    );
  }
}
