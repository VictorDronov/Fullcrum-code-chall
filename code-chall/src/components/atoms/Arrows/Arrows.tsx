import { Dispatch, SetStateAction } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function UpArrow({
  setShow,
  show,
}: ArrowProps): React.ReactElement {
  return (
    <>
      {show ? (
        <FaAngleUp onClick={() => setShow(!show)} size={25} />
      ) : (
        <FaAngleDown onClick={() => setShow(!show)} size={25} />
      )}
    </>
  );
}

interface ArrowProps {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}
