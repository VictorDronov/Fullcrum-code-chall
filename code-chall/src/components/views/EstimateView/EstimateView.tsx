import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { prevLabor, prevMaterial, totalCost } from "../../../utils/state";
import { CostsForm } from "../../forms";
import SaveButton from "../../forms/CostsForms/SaveButton";
import { CostMolecule } from "../../molecules";
import { EstimateTemplate } from "../../templates";
import "./styles/index.scss";

export default function EstimateView(): React.ReactElement {
  const methods = useForm();

  const labor = useRecoilValue(prevLabor);
  const material = useRecoilValue(prevMaterial);
  const total = useRecoilValue(totalCost);
  // TODO: ON SAVE CLICK TAKE THAT DATA PUT IT IN THE LOCAL STORAGE WITH A UNIQUE KEY AND CLEAR ALL PREV STATE

  const [create, setCreate] = useState(false);

  return (
    <EstimateTemplate>
      {!create ? (
        <h2 onClick={() => setCreate(true)}>Create Estimate</h2>
      ) : (
        <>
          <div className="estimate-container">
            <FormProvider {...methods}>
              <CostsForm />
            </FormProvider>
            <CostMolecule />
          </div>
          <SaveButton set={setCreate} />
        </>
      )}
      <div className="cost-items-container">
        Labor Items: {labor.length}
        <div>
          {labor.map(({ labor_cost }, i) => (
            <div key={i}>{labor_cost}</div>
          ))}
        </div>
        <div>
          Material Items: {material.length}
          <div>
            {material.map(({ material_cost }, i) => (
              <div key={i}>{material_cost}</div>
            ))}
          </div>
        </div>
        <h2>total:{total}</h2>
      </div>
    </EstimateTemplate>
  );
}
