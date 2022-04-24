import React, { HTMLProps } from "react";
import "./styles/index.scss";
// We should allow the field technicians to create a new
// estimate, add/edit line items, and show a total as the estimate is built. Hitting “Create
// Estimate” will begin your mission and “Save” will mark the end of your mission.

export default function EstimateTemplate({
  className,
  children,
  ...props
}: React.PropsWithChildren<HTMLProps<HTMLDivElement>>): React.ReactElement {
  return (
    <div className="template-wrapper">
      <div className={`template-container ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
}
