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
import { getCost } from "../../../utils/helpers";

export default function CostMolecule(): React.ReactElement {
  const [totalLabor, setTotalLabor] = useRecoilState(totalLaborCost);
  const labor = useRecoilValue(laborCost);

  const [totalMaterial, setTotalMaterial] = useRecoilState(totalMaterialCost);
  const material = useRecoilValue(materialCost);

  const [total, setTotal] = useRecoilState(totalCost);

  useEffect(() => {
    if (labor) setTotalLabor((prev) => getCost(prev, labor));
    else if (material) setTotalMaterial((prev) => getCost(prev, material));
    else return;
  }, [labor, material, setTotalLabor, setTotalMaterial]);

  useEffect(() => {
    if (labor) {
      setTotal((prev) => getCost(prev, labor));
    } else if (material) {
      setTotal((prev) => getCost(prev, material));
    }
  }, [labor, material, setTotal]);

  // Change first 0 of cost to state cost tpyes
  return (
    <div className="cost-m-container">
      <h1>Calculations</h1>
      <CostSlice costType="material" cost={totalMaterial} />
      <CostSlice costType="labor" cost={totalLabor} />
      <CostSlice costType="total" cost={total} />
    </div>
  );
}
