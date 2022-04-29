import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { labor, material, lineAdd } from "../../../utils/state";
import { InputLabel } from "../../atoms";
import "./styles/index.scss";

export default function CostsForm(): React.ReactElement {
  const [laborValue, setLabor] = useRecoilState<LaborFieldProps | null>(labor);
  const [materialValue, setMaterial] =
    useRecoilState<MaterialFieldProps | null>(material);
  const [added, setAdded] = useRecoilState(lineAdd);

  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const {
    handleSubmit: materialHandleSubmit,
    register: materialRegister,
    resetField: materialResetField,
    formState: { errors: materialErrors },
  } = useForm({ mode: "onChange" });

  //Makes sure only numbers are entered
  const pattern = /^[0-9]*$/;

  const submitMaterialLine = (data: MaterialFieldProps) => {
    if (data) {
      setMaterial(data);
      materialResetField("material_cost");
      materialResetField("material_name");
    }
  };

  const submitLaborLine = (data: LaborFieldProps) => {
    if (data) {
      setLabor(data);
      resetField("labor_name");
      resetField("labor_cost");
      setAdded(true);
    }
  };

  useEffect(() => {
    if (added === true && materialValue) {
      setMaterial(null);
    } else {
      setLabor(null);
    }
  }, [added, materialValue, laborValue, setLabor, setMaterial]);

  return (
    <div className="form-wrapper">
      <form onSubmit={materialHandleSubmit(submitMaterialLine)}>
        <div className="form-content">
          <InputLabel label="Material Type" />
          <input {...materialRegister("material_name")} />
          <InputLabel label="Material Cost" />
          <input
            {...materialRegister("material_cost", {
              valueAsNumber: true,
              validate: {
                checkMaterial: (value) => {
                  return pattern.test(value) || "Invalid entry";
                },
              },
            })}
          />
          {materialErrors.material && (
            <div className="message">
              <span className="red">*</span> {materialErrors.material.message}
            </div>
          )}
        </div>
        <button type="submit">Add Material Line</button>
      </form>

      <form onSubmit={handleSubmit(submitLaborLine)}>
        <div className="form-content">
          <InputLabel label="Labor Type" />
          <input {...register("labor_name", { validate: {} })} />
          <InputLabel label="Labor Cost" />
          <input
            {...register("labor_cost", {
              valueAsNumber: true,
              validate: {
                checkLabor: (value) => {
                  return pattern.test(value) || "Invalid entry";
                },
              },
            })}
          />
          {errors.labor && (
            <div className="message">
              <span className="red">*</span> {errors.labor.message}
            </div>
          )}
        </div>
        <button type="submit">Add Labor Line</button>
      </form>
    </div>
  );
}

export interface MaterialFieldProps {
  material_cost?: number;
  material_name?: string;
}
export interface LaborFieldProps {
  labor_cost?: number;
  labor_name?: string;
}
