import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
export async function POST(req) {
  const data = await req.json();
  const adminEmail = "imran@admin.com";
  const { email, password } = data;
  if (email !== adminEmail)
    return NextResponse.json(
      {
        message: "Admin not found",
        success: false,
      },
      { status: 404 }
    );
  const correctPass = decryptPass(password);
  if (!correctPass)
    return NextResponse.json(
      {
        message: "Wrong password",
        success: false,
      },
      { status: 404 }
    );

  const token =
    "tk-2b$10$ACpF2pQirbycHdHZuUuBE.kAnHgklUDASqxLqyAdAF8lG8YmYaSp6";
  cookies().set("jwt-token", token);
  return NextResponse.json(
    {
      message: "Login successfull",
      success: true,
      data: {
        token,
      },
    },
    { status: 200 }
  );
}

async function decryptPass(pass) {
  const adminPass =
    "$2b$10$ACpF2pQirbycHdHZuUuBE.kAnHgklUDASqxLqyAdAF8lG8YmYaSp6";

  const decryptedPass = await bcrypt.compare(pass, adminPass);
  return decryptedPass;
}
