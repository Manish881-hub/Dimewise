import { db } from "./prisma";

export async function createUserIfNotExists(clerkUser) {
  try {
    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { clerkUserId: clerkUser.id },
    });

    if (existingUser) {
      return existingUser;
    }

    // Create new user if doesn't exist
    const newUser = await db.user.create({
      data: {
        clerkUserId: clerkUser.id,
        email: clerkUser.emailAddresses[0].emailAddress,
        name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
        imageUrl: clerkUser.imageUrl,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}