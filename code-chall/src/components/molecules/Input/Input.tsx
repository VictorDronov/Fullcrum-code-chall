import React from "react";

import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
} from "react-hook-form";
import { InputProps } from "../../atoms";
import Input from "../../atoms/InputField/InputField";

export type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  rules?: RegisterOptions;
  register?: UseFormRegister<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
} & Omit<InputProps, "name">;

export const FormInput = <TFormValues extends Record<string, unknown>>({
  name,
  register,
  rules,
  errors,
  className,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className={className}>
      <Input name={name} {...props} {...(register && register(name, rules))} />
    </div>
  );
};
