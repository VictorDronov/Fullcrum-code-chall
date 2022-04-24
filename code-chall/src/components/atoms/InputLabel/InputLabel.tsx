import React from "react";
import "./styles/index.scss";

const Label = ({ label }: LabelProps): React.ReactElement => {
  return <label className="label">{label}</label>;
};

export default Label;

export interface LabelProps {
  label?: string;
}
