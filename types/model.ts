export interface Model {
  id: string;
  name: string;
  provider: string;
  accuracy: number | null;
  latencyMs: number | null;
  costPer1k: number | null;
  evaluatedAt: string | null;
}