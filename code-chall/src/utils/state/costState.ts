import { atom } from "recoil";
import {
  LaborFieldProps,
  MaterialFieldProps,
} from "../../components/forms/CostsForms/CostsForms";

export const lineAdd = atom<boolean>({
  key: " line_add",
  default: false,
});

export const material = atom<MaterialFieldProps | null>({
  key: "material_cost",
  default: null,
});

export const labor = atom<LaborFieldProps | null>({
  key: "labor_cost",
  default: null,
});

export const totalCost = atom<number>({
  key: "total_cost",
  default: 0,
});

export const totalMaterialCost = atom<number>({
  key: "total_material",
  default: 0,
});

export const totalLaborCost = atom<number>({
  key: "total_labor",
  default: 0,
});

export const prevLabor = atom<LaborFieldProps[]>({
  key: "prev_labor_cost",
  default: [],
});

export const prevMaterial = atom<MaterialFieldProps[]>({
  key: "prev_material_cost",
  default: [],
});

export const prevTotalCost = atom<number>({
  key: "prev_total_cost",
  default: 0,
});
