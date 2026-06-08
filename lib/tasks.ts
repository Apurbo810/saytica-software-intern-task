import tasks from "@/data/tasks.json";
import { Task } from "@/types/task";

export const getTasks = (): Task[] => {
  return tasks.map((task) => ({
    ...task,

    title: task.title.trim(),

    assignedTo: task.assignedTo ?? "Unassigned",

    status: (task.status?.trim() || "") as Task["status"],
  }));
};