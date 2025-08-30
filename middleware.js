// middleware.js
import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import arcjet, { createMiddleware, detectBot, shield } from "@arcjet/next";
import { createUserIfNotExists } from "./lib/user";

// ✅ Arcjet polyfill (fixes localhost + Vercel issues)
try {
  const { performance } = require("node:perf_hooks");
  if (!globalThis.performance) {
    globalThis.performance = performance;
  }
} catch (err) {
  console.warn("performance polyfill failed:", err);
}

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Arcjet setup
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
    }),
  ],
});

// Clerk middleware
const clerk = clerkMiddleware(async (auth, req) => {
  const { userId, user, redirectToSignIn } = await auth();

  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }

  if (userId && user) {
    try {
      await createUserIfNotExists(user);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return NextResponse.next();
});

// ✅ Only Clerk in dev, Arcjet+Clerk in prod
export default process.env.NODE_ENV === "production"
  ? createMiddleware(aj, clerk)
  : clerk;

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
