import React from "react";
import { CostsForm } from "../../forms";
import { CostMolecule, EstimateItems } from "../../molecules";
import { EstimateTemplate } from "../../templates";
import "./styles/index.scss";

export default function EstimateView(): React.ReactElement {
  return (
    <EstimateTemplate>
      <div className="estimate-container">
        <div className="estimate-content">
          <CostMolecule />
          <EstimateItems />
        </div>
        <CostsForm />
      </div>
    </EstimateTemplate>
  );
}
