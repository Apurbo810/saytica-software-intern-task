"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import Table from "@/components/table/table";
import ThemeSetter from "@/components/theme-setter";
import { getTasks } from "@/lib/tasks";
import { Task } from "@/types/task";

type TaskStatus = Exclude<Task["status"], "">;

const initialTasks = getTasks();

const statusOptions: TaskStatus[] = [
  "pending",
  "in_progress",
  "done",
];

const statusLabels: Record<TaskStatus, string> = {
  pending: "Pending",
  in_progress: "In Progress",
  done: "Done",
};

const formatStatus = (status: Task["status"]) =>
  status ? statusLabels[status] : "Unknown";

export default function TaskBoard() {
  const [tasks, setTasks] =
    useState(initialTasks);

  const clientIds = useMemo(
    () =>
      Array.from(
        new Set(
          tasks.map((task) => task.clientId)
        )
      ),
    [tasks]
  );

  const annotators = useMemo(
    () =>
      Array.from(
        new Set(
          tasks.map(
            (task) => task.assignedTo
          )
        )
      ),
    [tasks]
  );

  const [selectedClientId, setSelectedClientId] =
    useState(clientIds[0] ?? "");

  const [
    selectedAnnotator,
    setSelectedAnnotator,
  ] = useState(annotators[0] ?? "");

  const updateStatus = (
    taskId: string,
    status: TaskStatus
  ) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, status }
          : task
      )
    );
  };

  const clientColumns = [
    {
      key: "title",
      label: "Title",
    },
    {
      key: "projectName",
      label: "Project",
    },
    {
      key: "status",
      label: "Status",
      render: (
        value: Task[keyof Task]
      ) =>
        formatStatus(
          value as Task["status"]
        ),
    },
    {
      key: "assignedTo",
      label: "Assigned To",
    },
  ] as const;

  const annotatorColumns = [
    {
      key: "title",
      label: "Title",
    },
    {
      key: "projectName",
      label: "Project",
    },
    {
      key: "status",
      label: "Status",
      render: (
        value: Task[keyof Task],
        row: Task
      ) => (
        <select
          className="select select-bordered select-sm w-full max-w-36"
          value={value as Task["status"]}
          onChange={(event) =>
            updateStatus(
              row.id,
              event.target
                .value as TaskStatus
            )
          }
        >
          {!value && (
            <option value="" disabled>
              Unknown
            </option>
          )}

          {statusOptions.map((status) => (
            <option
              key={status}
              value={status}
            >
              {statusLabels[status]}
            </option>
          ))}
        </select>
      ),
    },
    {
      key: "assignedTo",
      label: "Assigned To",
    },
  ] as const;

  const clientTasks = tasks.filter(
    (task) =>
      task.clientId === selectedClientId
  );

  const annotatorTasks = tasks.filter(
    (task) =>
      task.assignedTo ===
      selectedAnnotator
  );

  return (
  <div className="min-h-screen bg-base-200 p-6 text-base-content">
    <ThemeSetter theme="garden" />

    <Link
      href="/"
      className="btn btn-outline btn-sm mb-4"
    >
      Back Home
    </Link>

    <h1 className="mb-6 text-3xl font-bold">
      Task Board
    </h1>

    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Client */}
      <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-lg">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold">
            Client
          </h2>

          <select
            className="select select-bordered select-sm w-full sm:w-40"
            value={selectedClientId}
            onChange={(event) =>
              setSelectedClientId(
                event.target.value
              )
            }
          >
            {clientIds.map((clientId) => (
              <option
                key={clientId}
                value={clientId}
              >
                {clientId}
              </option>
            ))}
          </select>
        </div>

        <Table
          data={clientTasks}
          columns={clientColumns}
        />
      </div>

      {/* Annotator */}
      <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-lg">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold">
            Annotator
          </h2>

          <select
            className="select select-bordered select-sm w-full sm:w-44"
            value={selectedAnnotator}
            onChange={(event) =>
              setSelectedAnnotator(
                event.target.value
              )
            }
          >
            {annotators.map((annotator) => (
              <option
                key={annotator}
                value={annotator}
              >
                {annotator}
              </option>
            ))}
          </select>
        </div>

        <Table
          data={annotatorTasks}
          columns={annotatorColumns}
        />
      </div>
    </div>
  </div>
);
}
