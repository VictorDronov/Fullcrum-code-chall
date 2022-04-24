import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Input } from "../../molecules";
import { laborCost, materialCost } from "../../../utils/state";

export default function CostsForm(): React.ReactElement {
  const [labor, setLabor] = useRecoilState(laborCost);
  const [material, setMaterial] = useRecoilState(materialCost);

  const { handleSubmit, reset, register } = useForm();

  const submitLaborLine = (data: any) => {
    console.log(data);
    // setLabor(data);
    // reset();
  };

  const submitMaterialLine = (data: any) => {
    console.log(data);
    // setMaterial(data);
    // reset();
  };

  useEffect(() => {});
  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Input id="labor" label="Material Cost" {...register("material")} />
        <button type="submit">Add Line</button>
      </form>
      <form onSubmit={handleSubmit(submitLaborLine)}>
        <div>
          <Input id="labor" {...register("labor")} label="Labor Cost" />
        </div>
        <button>Add Line</button>
      </form>
    </>
  );
}
