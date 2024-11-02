import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "@/lib/auth";

export async function POST(request) {
  const body = await request.json();

  // Make that below if condition as your own backend api call to validate user
  if (body.username === "koray" && body.password === "123456") {
    const token = await new SignJWT({
      username: body.username,
      role: "admin", // Set your own roles
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("60s") // Set your own expiration time
      .sign(getJwtSecretKey());

    const response = NextResponse.json(
      { success: true, token },
      { status: 200, headers: { "content-type": "application/json" } }
    );

    return response;
  }

  return NextResponse.json({ success: false });
}
