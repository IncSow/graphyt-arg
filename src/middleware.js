import { NextResponse } from "next/server";
const ROUTE_TOKEN_MAP = {
  Burnout: "2ea873f7bc23abddf1a1ddfa762680769d7da9f8e72ac83fd151f7b72e7b4e05",
  Sacre: "1caf6b426749aadceb76ce23632403c7e70a4a170e481e1f11754c3e5ad3fe6d",
  Piraterie: "e13722d0e70d2650c5606950e8efef90e59a4bf3917e8e070fbfa9babbfcf13c",
  Assume: "437055bce6359b08622523cad83d040b11ce72bd3253f17488847b69446e1e6f",
};

const AGENT_TOKEN = {
  "/n4v3t": "5db896c7a102c4417aa8b9d60a98a769b76f07d48984ab067b38ac3e86f2f0b3",
  "/l4dysph0r14":
    "2e34ab56bed3346deec445b0f1d41381b4c959d6a6165963c9bae36a68fd2264",
};

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isAsh = pathname.startsWith("/l4dysph0r14");
  const agentName = isAsh ? "/l4dysph0r14" : "/n4v3t";

  const agentToken = request.cookies.get(agentName)?.value;
  if (!agentToken || agentToken != AGENT_TOKEN[agentName]) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const pathParts = pathname.split("/");
  const subroute = pathParts[2];

  const subRouteToken = ROUTE_TOKEN_MAP[subroute];
  if (subroute && subRouteToken) {
    const tokenValue = request.cookies.get(subroute)?.value;
    if (!tokenValue == subRouteToken) {
      return NextResponse.redirect(new URL(agentName, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/l4dysph0r14/:path*", "/n4v3t/:path*"],
};
