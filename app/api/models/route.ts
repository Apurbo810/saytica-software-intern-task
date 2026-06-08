import { getModels } from "@/lib/model";

export async function GET() {
  const models = getModels();

  return Response.json(models);
}