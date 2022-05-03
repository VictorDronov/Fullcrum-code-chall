import React from "react";
import "./styles/index.scss";
import EasyEdit from "react-easy-edit";
import { useRecoilState } from "recoil";
import { material } from "../../../utils/state";

export default function MaterialEstimateItem({
  id,
  cost,
  type,
}: ItemsProps): React.ReactElement {
  const [materialItems, setMaterial] = useRecoilState(material);

  const updateItems = (value: number) =>
    materialItems.map((item) => {
      const itemId = id;
      if (item.id === itemId) {
        const update = {
          ...item,
          material_cost: value,
        };
        return update;
      }
      return item;
    });

  const save = (value: number) => {
    setMaterial(updateItems(value));
  };

  return (
    <div className="item">
      <div>
        {type}: $
        <EasyEdit
          type="number"
          onSave={save}
          value={Number(cost)}
          onValidate={(value: number) => {
            return value > 0;
          }}
          validationMessage={"Value must be a number and greater than one"}
        />
      </div>
    </div>
  );
}

interface ItemsProps {
  id: string | undefined;
  type: string | undefined;
  cost: number | undefined;
}
