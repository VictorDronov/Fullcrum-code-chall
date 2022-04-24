import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CostsForm } from "../../forms";
import { CostMolecule } from "../../molecules";
import { EstimateTemplate } from "../../templates";

export default function EstimateView(): React.ReactElement {
  const methods = useForm();

  return (
    <EstimateTemplate>
      <FormProvider {...methods}>
        <CostsForm />
      </FormProvider>
      <CostMolecule />
    </EstimateTemplate>
  );
}
