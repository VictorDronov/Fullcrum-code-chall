import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { createEstimate, labor, material } from "../../../utils/state";
import SaveButton from "./SaveButton";
import "./styles/index.scss";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { v4 as uuidv4 } from "uuid";

export interface MaterialProps {
  id?: string;
  material_name?: string;
  material_cost: number;
}
export interface LaborProps {
  id?: string;
  labor_name?: string;
  labor_cost: number;
}

export default function CostsForm(): React.ReactElement {
  const setCreate = useSetRecoilState(createEstimate);

  const [materialItems, setMaterial] = useRecoilState(material);
  const [laborItems, setLabor] = useRecoilState(labor);

  const formMaterial = useForm<MaterialProps>({
    initialValues: {
      material_name: "",
      material_cost: 0,
    },

    validate: {
      material_cost: (value) => (value > 0 ? null : "Invalid Entry"),
    },
  });

  const formLabor = useForm<LaborProps>({
    initialValues: {
      labor_name: "",
      labor_cost: 0,
    },

    validate: {
      labor_cost: (value) => (value > 0 ? null : "Invalid Entry"),
    },
  });

  const submitFormMaterials = (values: MaterialProps) => {
    setMaterial([
      ...materialItems,
      {
        id: uuidv4(),
        material_cost: values.material_cost,
        material_name: values.material_name,
      },
    ]);
    formMaterial.reset();
  };

  const submitFormLabor = (values: LaborProps) => {
    setLabor([
      ...laborItems,
      {
        id: uuidv4(),
        labor_cost: values.labor_cost,
        labor_name: values.labor_name,
      },
    ]);
    formLabor.reset();
  };

  return (
    <div className="form-wrapper">
      <form
        onSubmit={formMaterial.onSubmit((values) =>
          submitFormMaterials(values)
        )}
      >
        <div className="form-content">
          <TextInput
            placeholder="Lumber"
            required
            label="Material"
            {...formMaterial.getInputProps("material_name")}
          />
          <TextInput
            required
            label="Material Cost"
            {...formMaterial.getInputProps("material_cost")}
          />
        </div>
        <button type="submit">Add Material Line</button>
      </form>

      <form onSubmit={formLabor.onSubmit((values) => submitFormLabor(values))}>
        <div className="form-content">
          <TextInput
            placeholder="Carpenter"
            required
            label="Labor"
            {...formLabor.getInputProps("labor_name")}
          />
          <TextInput
            required
            label="Labor Cost"
            {...formLabor.getInputProps("labor_cost")}
          />
        </div>
        <button type="submit">Add Labor Line</button>
      </form>
      <SaveButton set={setCreate} />
    </div>
  );
}
