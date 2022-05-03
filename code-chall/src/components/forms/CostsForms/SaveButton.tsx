import react, { Dispatch, SetStateAction, useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { useStickyState } from "../../../utils/helpers";
import { labor, material, total } from "../../../utils/state";

export default function SaveButton({ set }: Buttonprops): react.ReactElement {
  const [count, setCount] = useStickyState(0, "count");

  const [prevEstimate, setEstimate] = useStickyState(
    { material: ["", 0], labor: ["", 0], total: 0 },
    `Estimate: ${count}`
  );
  const totalCost = useRecoilValue(total);
  const materialValue = useRecoilValue(material);
  const laborValue = useRecoilValue(labor);

  const resetLabor = useResetRecoilState(labor);
  const resetMaterial = useResetRecoilState(material);
  const resetTotal = useResetRecoilState(total);

  const onSave = () => {
    setEstimate({
      material: materialValue,
      labor: laborValue,
      total: totalCost,
    });
    setCount(count + 1);
    set(false);
  };

  useEffect(() => {
    if (prevEstimate) {
      resetLabor();
      resetMaterial();
      resetTotal();
    }
  }, [prevEstimate, resetLabor, resetMaterial, resetTotal]);

  return <button onClick={() => onSave()}>Save</button>;
}

interface Buttonprops {
  set: Dispatch<SetStateAction<boolean>>;
}
