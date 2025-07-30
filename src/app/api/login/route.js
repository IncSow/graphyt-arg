import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const credentials = {
      N4V3T: "27052023",
      L4dySph0r14: "09012022",
    };

    if (credentials[username] && credentials[username] === password) {
      let redirectTo = "/error";
      let tokenValue = "";

      if (username === "N4V3T") {
        redirectTo = "/n4v3t";
        tokenValue =
          "5db896c7a102c4417aa8b9d60a98a769b76f07d48984ab067b38ac3e86f2f0b3";
      } else if (username === "L4dySph0r14") {
        redirectTo = "/l4dysph0r14";
        tokenValue =
          "2e34ab56bed3346deec445b0f1d41381b4c959d6a6165963c9bae36a68fd2264";
      }

      return NextResponse.json({
        success: true,
        redirect: redirectTo,
        token: tokenValue,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "Invalid credentials",
      },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 },
    );
  }
}
