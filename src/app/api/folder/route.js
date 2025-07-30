import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { folderName, password, accessPath } = await request.json();

    const credentials = {
      Piraterie: {
        password: "Veryleakz",
        hash: "e13722d0e70d2650c5606950e8efef90e59a4bf3917e8e070fbfa9babbfcf13c",
      },
      Sacre: {
        password: "Gr4phyT34m",
        hash: "1caf6b426749aadceb76ce23632403c7e70a4a170e481e1f11754c3e5ad3fe6d",
      },
      Assume: {
        password: "05072025",
        hash: "437055bce6359b08622523cad83d040b11ce72bd3253f17488847b69446e1e6f",
      },
      Burnout: {
        password: "crASH",
        hash: "2ea873f7bc23abddf1a1ddfa762680769d7da9f8e72ac83fd151f7b72e7b4e05",
      },
    };

    const subRoute = credentials[folderName];
    const subPassword = subRoute?.password;

    if (subRoute && password == subPassword) {
      const redirectTo = `/${accessPath.toLowerCase()}/${folderName}`;
      const tokenValue = subRoute.hash;

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
