import react, { Dispatch, SetStateAction } from "react";
import { useSetRecoilState } from "recoil";
import { totalLaborCost, totalMaterialCost } from "../../../utils/state";

export default function SaveButton({ set }: Buttonprops): react.ReactElement {
  const resetMaterial = useSetRecoilState(totalMaterialCost);
  const resetLabor = useSetRecoilState(totalLaborCost);
  const onSave = () => {
    resetLabor(0);
    resetMaterial(0);
    set(false);
  };

  return <button onClick={() => onSave()}>Save</button>;
}

interface Buttonprops {
  set: Dispatch<SetStateAction<boolean>>;
}
