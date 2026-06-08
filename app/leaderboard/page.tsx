import Table from "@/components/table/table";
import ThemeSetter from "@/components/theme-setter";
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
      label: "Evaluated",
    },
  ] as const;

  return (
    <div className="min-h-screen bg-yellow-500/10 p-6">
      <ThemeSetter theme="cyberpunk" />

      <div className="mx-auto max-w-7xl rounded-2xl border border-yellow-500/20 bg-base-100 p-6 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-yellow-600">
          Model Leaderboard
        </h1>

        <Table
          data={models}
          columns={columns}
        />
      </div>
    </div>
  );
}
