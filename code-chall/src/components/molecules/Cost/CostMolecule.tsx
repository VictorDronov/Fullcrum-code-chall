import React, { useEffect } from "react";
import { CostSlice } from "../../atoms";
import "./styles/index.scss";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  labor,
  lineAdd,
  material,
  prevLabor,
  prevMaterial,
  totalCost,
  totalLaborCost,
  totalMaterialCost,
} from "../../../utils/state";
import { getCost } from "../../../utils/helpers";
import {
  LaborFieldProps,
  MaterialFieldProps,
} from "../../forms/CostsForms/CostsForms";

export default function CostMolecule(): React.ReactElement {
  const laborValue = useRecoilValue<LaborFieldProps | null>(labor);
  const materialValue = useRecoilValue<MaterialFieldProps | null>(material);

  const [totalLabor, setTotalLabor] = useRecoilState(totalLaborCost);
  const [totalMaterial, setTotalMaterial] = useRecoilState(totalMaterialCost);
  const [total, setTotal] = useRecoilState(totalCost);

  const setPrevL = useSetRecoilState(prevLabor);
  const setPrevM = useSetRecoilState(prevMaterial);

  const [added, setAdded] = useRecoilState(lineAdd);

  useEffect(() => {
    if (materialValue) {
      setPrevM((prev) => [...prev, materialValue]);
      console.log(materialValue);
      setTotalMaterial((prev) => getCost(prev, materialValue.material_cost));
      setAdded(false);
    }
  }, [materialValue, setAdded, setPrevM, setTotalMaterial]);

  useEffect(() => {
    if (laborValue) {
      setPrevL((prev) => [...prev, laborValue]);
      setTotalLabor((prev) => getCost(prev, laborValue.labor_cost));
      setAdded(false);
    }
  }, [laborValue, setAdded, setPrevL, setTotalLabor]);

  useEffect(() => {
    if (laborValue) {
      setTotal((prev) => getCost(prev, laborValue.labor_cost));
    } else if (materialValue) {
      setTotal((prev) => getCost(prev, materialValue.material_cost));
    }
  }, [materialValue, laborValue]);

  return (
    <div className="cost-m-container">
      <h1>Costs</h1>
      <CostSlice costType="material" cost={totalMaterial} />
      <CostSlice costType="labor" cost={totalLabor} />
      <CostSlice costType="total" cost={total} />
    </div>
  );
}
