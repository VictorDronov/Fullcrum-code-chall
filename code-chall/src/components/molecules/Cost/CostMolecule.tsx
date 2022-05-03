import React, { useEffect } from "react";
import { CostSlice } from "../../atoms";
import "./styles/index.scss";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { labor, lineAdd, material, total } from "../../../utils/state";

export default function CostMolecule(): React.ReactElement {
  const laborValue = useRecoilValue(labor);
  const materialValue = useRecoilValue(material);
  const [totalCost, setTotal] = useRecoilState(total);

  const setAdded = useSetRecoilState(lineAdd);

  let sumMaterial = materialValue.reduce(function (prev, current) {
    return prev + +current.material_cost;
  }, 0);

  let sumlabor = laborValue.reduce(function (prev, current) {
    return prev + +current.labor_cost;
  }, 0);

  useEffect(() => {
    if ((sumMaterial > 0) || (sumlabor > 0)) {
      setTotal(sumMaterial + sumlabor);
    }
    setAdded(true);
  }, [materialValue, laborValue, setAdded, setTotal, sumMaterial, sumlabor]);

  return (
    <div className="cost-m-container">
      <h1>Costs</h1>
      <CostSlice costType="material" cost={sumMaterial} />
      <CostSlice costType="labor" cost={sumlabor} />
      <CostSlice costType="total" cost={totalCost} />
    </div>
  );
}
