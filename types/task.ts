export interface Task {
  id: string;
  title: string;
  projectId: string;
  projectName: string;
  clientId: string;
  assignedTo: string;
  status: "pending" | "in_progress" | "done" | "";
}