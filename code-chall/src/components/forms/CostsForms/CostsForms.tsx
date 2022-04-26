import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { laborCost, lineAdd, materialCost } from "../../../utils/state";
import { InputLabel } from "../../atoms";

export default function CostsForm(): React.ReactElement {
  const setLabor = useSetRecoilState(laborCost);
  const setMaterial = useSetRecoilState(materialCost);
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
    resetField: materialRestField,
    formState: { errors: materialErrors },
  } = useForm({ mode: "onChange" });

  //Makes sure only numbers are entered
  const pattern = /^[0-9]*$/;

  const submitMaterialLine = (data: FormProps) => {
    if (data.material) {
      setMaterial(data.material);
      materialRestField("material");
      setAdded(true);
    }
  };

  const submitLaborLine = (data: FormProps) => {
    if (data.labor) {
      setLabor(data.labor);
      resetField("labor");
      setAdded(true);
    }
  };

  useEffect(() => {
    if (laborCost && added) {
      setLabor(0);
      setAdded(false);
    } else if (materialCost && added) {
      setLabor(0);
      setAdded(false);
    }
  }, [added, setAdded, setLabor]);

  return (
    <>
      <form onSubmit={materialHandleSubmit(submitMaterialLine)}>
        <div>
          <InputLabel label="Material Cost" />
          <input
            {...materialRegister("material", {
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
        <div>
          <InputLabel label="Labor Cost" />
          <input
            {...register("labor", {
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
    </>
  );
}

interface FormProps {
  material?: number;
  labor?: number;
}
