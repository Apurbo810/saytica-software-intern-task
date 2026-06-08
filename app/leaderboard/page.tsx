import Table from "@/components/table/table";
import { getModels } from "@/lib/model";

export default function Leaderboard() {
  const models = getModels();

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "provider",
      label: "Provider",
    },
    {
      key: "accuracy",
      label: "Accuracy",
    },
    {
      key: "latencyMs",
      label: "Latency",
    },
    {
      key: "costPer1k",
      label: "Cost",
    },
    {
      key: "evaluatedAt",
      label: "evaluated",
    },
  ] as const;

  return (
    <div className="flex flex-1 flex-col p-6">
      <h1 className="mb-6 text-2xl font-bold">
        Model Leaderboard
      </h1>

      <Table
        data={models}
        columns={columns}
      />
    </div>
  );
}