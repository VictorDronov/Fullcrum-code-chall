import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { createEstimate } from "../../../utils/state";
import { LaborProps, MaterialProps } from "../../forms/CostsForms/CostsForms";
import "./styles/index.scss";

export default function PreviousEstimates(): React.ReactElement {
  const [prev, setPrev] = useState<PrevProps>();
  const [num, setNum] = useState(1);

  const [created, setCreated] = useRecoilState(createEstimate);

  const info = window.localStorage.getItem(`Estimate: ${num}`);

  useEffect(() => {
    if (created === true) setCreated(false);
    if (info !== null) {
      setPrev(JSON.parse(info));
      setCreated(false);
    }
    if (num < 1) {
      setNum(1);
    }
  }, [created, info, num, setCreated]);

  return (
    <div className="prev-wrapper">
      <div className="prev-container">
        <h2>Previous Estimates</h2>
        {info === null ? (
          <div className="fill"></div>
        ) : (
          <>
            {prev?.material.map((item) => (
              <div className="prev-content">
                {item.id && (
                  <div className="content">
                    <h2>Material:&nbsp;</h2>
                    <p>{item.material_name}:&nbsp;</p>&nbsp;
                    <p>${item.material_cost}</p>
                  </div>
                )}
              </div>
            ))}
            {prev?.labor.map((item) => (
              <div className="prev-content">
                {item.id && (
                  <div className="content">
                    <h2>Labor:&nbsp;</h2>
                    <p>{item.labor_name}:&nbsp;</p>&nbsp;
                    <p>${item.labor_cost}</p>
                  </div>
                )}
              </div>
            ))}
            {num > 1 && (
              <button onClick={() => setNum((prev) => prev - 1)}>
                VIew Previous
              </button>
            )}
            {info !== null || num === 1 && (
              <button onClick={() => setNum((prev) => prev + 1)}>
                VIew Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

interface PrevProps {
  material: MaterialProps[];
  labor: LaborProps[];
}
