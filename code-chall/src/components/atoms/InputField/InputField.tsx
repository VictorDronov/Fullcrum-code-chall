import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputType = "text";

export type InputProps = {
  id: string;
  name: string;
  label: string;
  type?: InputType;
  className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export default function Input({
  id,
  name,
  label,
  type = "text",
  className = "",
  placeholder,
  ...props
}: InputProps): React.ReactElement {
  return (
    <input
      id={id}
      ref={null}
      name={name}
      type={type}
      aria-label={label}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
}
