import React, { useEffect } from "react";
import { CostSlice } from "../../atoms";
import "./styles/index.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  laborCost,
  materialCost,
  totalCost,
  totalLaborCost,
  totalMaterialCost,
} from "../../../utils/state";

export default function CostMolecule(): React.ReactElement {
  const totalMaterial = useRecoilValue(totalMaterialCost);
  const totalLabor = useRecoilValue(laborCost);
  const total = useRecoilValue(totalCost);
  const [labor, setLabor] = useRecoilState(totalLaborCost);
  const [material, setMaterila] = useRecoilState(laborCost);

  const incBy = (labor: number) => () => {
    setLabor((prev) => prev + labor);
  };

  useEffect(() => {
    console.log(
      "TotalM",
      totalMaterial,
      "Labor",
      labor,
      "material",
      material,
      "total",
      total
    );
  }, [labor, material, total, totalMaterial]);

  // Change first 0 of cost to state cost tpyes
  return (
    <div className="cost-m-container">
      <h1>Calculations</h1>
      <CostSlice costType="material" cost={totalMaterial} />
      <CostSlice costType="labor" cost={labor} />
      <CostSlice costType="total" cost={total} />
    </div>
  );
}
