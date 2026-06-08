import { getTasks } from "@/lib/tasks";

export async function GET() {
  const tasks = getTasks();

  return Response.json(tasks);
}