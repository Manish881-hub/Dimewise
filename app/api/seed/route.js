import { seedTransactions } from "@/actions/seed";

export const dynamic = "force-dynamic";

export async function GET() {
  const result = await seedTransactions();
  return Response.json(result);
}
