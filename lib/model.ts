import models from "@/data/models.json";
import { Model } from "@/types/model";

export const getModels = (): Model[] => {
  return models.map((model) => ({
    ...model,

    name: model.name.trim(),

    provider: model.provider
      ? model.provider.charAt(0).toUpperCase() +
        model.provider.slice(1).toLowerCase()
      : "Unknown",

    accuracy: model.accuracy ?? null,
    latencyMs: model.latencyMs ?? null,
    costPer1k: model.costPer1k ?? null,
    evaluatedAt: model.evaluatedAt ?? null,
  }));
};