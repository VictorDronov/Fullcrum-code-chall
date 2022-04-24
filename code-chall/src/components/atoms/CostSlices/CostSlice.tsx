import React from "react";
import { FaDollarSign, FaPallet, FaWrench } from "react-icons/fa";
import "./styles/index.scss";

export default function CostSlice({
  cost,
  costType,
}: ButtonProps): React.ReactElement {
  return (
    <div className="cost-container">
      {costType === "material" ? (
        <div className={`type ${costType}`}>
          <FaPallet />
        </div>
      ) : costType === "labor" ? (
        <div className={`type ${costType}`}>
          <FaWrench />
        </div>
      ) : (
        <div className={`type ${costType}`}>
          <FaDollarSign />
        </div>
      )}
      <div className="cost-content">
        <h2 className="cost-type">{costType} Cost</h2>
        <p>$: {cost}</p>
      </div>
    </div>
  );
}

interface ButtonProps {
  costType: "material" | "labor" | "total";
  cost?: number;
}
