import { atom } from "recoil";

export const lineAdd = atom<boolean>({
  key: " line_add",
  default: false,
});

export const materialCost = atom<number>({
  key: "material_cost",
  default: 0,
});

export const laborCost = atom<number>({
  key: "labor_cost",
  default: 0,
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
