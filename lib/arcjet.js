import arcjet, { tokenBucket } from "@arcjet/next";

// Only initialize Arcjet in production
const aj = process.env.NODE_ENV === "production"
  ? arcjet({
      key: process.env.ARCJET_KEY,
      characteristics: ["userId"], // Track based on Clerk userId
      rules: [
        tokenBucket({
          mode: "LIVE",
          refillRate: 10,
          interval: 3600,
          capacity: 10,
        }),
      ],
    })
  : (handler) => handler; // Pass-through in development

export default aj;
