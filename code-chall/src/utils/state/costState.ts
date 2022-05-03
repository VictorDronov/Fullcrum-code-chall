import { atom } from "recoil";
import {
  LaborProps,
  MaterialProps,
} from "../../components/forms/CostsForms/CostsForms";

// Keeping track

export const updated = atom<boolean>({
  key: "item_update",
  default: false,
});

export const createEstimate = atom<boolean>({
  key: "new_estiamte",
  default: false,
});

export const lineAdd = atom<boolean>({
  key: "line_add",
  default: false,
});

/// Costs below

export const labor = atom<LaborProps[]>({
  key: "labor",
  default: [{ labor_cost: 0, id: "", labor_name: "" }],
});

export const material = atom<MaterialProps[]>({
  key: "material",
  default: [{ material_cost: 0, id: "", material_name: "" }],
});

export const total = atom<number>({
  key: "total",
  default: 0,
});


