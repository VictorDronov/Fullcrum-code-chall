import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { labor, material, total } from "../../../utils/state";
import { Arrow, LaborEstimateItem, MaterialEstimateItem } from "../../atoms";
import "./styles/index.scss";

export default function EstimateItems(): React.ReactElement {
  const laborItems = useRecoilValue(labor);
  const materialItems = useRecoilValue(material);
  const totalCost = useRecoilValue(total);

  useEffect(() => {});

  const [showLabor, setShowLabor] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);

  return (
    <div className="cost-items-wrapper">
      <div className="cost-items-container">
        <h1>Estimate Costs</h1>
        <div>
          <div className="content">
            <div className={`content-title ${showMaterials && "hide"}`}>
              {/* This is to remove the initial state render */}
              <h2>Material: {materialItems.length - 1}</h2>
              <Arrow setShow={setShowMaterials} show={showMaterials} />
            </div>
            <div className="items-list">
              {showMaterials &&
                materialItems.map(({ material_cost, material_name, id }) => (
                  <>
                    {/* This is to remove the initial state render */}
                    {material_cost > 0 && (
                      <MaterialEstimateItem
                        cost={material_cost}
                        type={material_name}
                        id={id}
                      />
                    )}
                  </>
                ))}
            </div>
          </div>
          <div className="content">
            <div className={`content-title ${showLabor && "hide"}`}>
              <h2>Labor: {laborItems.length - 1}</h2>
              <Arrow setShow={setShowLabor} show={showLabor} />
            </div>
            <div className="items-wrapper">
              <div className="items-list">
                {showLabor &&
                  laborItems.map(({ labor_cost, labor_name, id }) => (
                    <>
                      {labor_cost > 0 && (
                        <LaborEstimateItem
                          cost={labor_cost}
                          type={labor_name}
                          id={id}
                        />
                      )}
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <h2>Total Cost: ${totalCost}</h2>
      </div>
    </div>
  );
}
