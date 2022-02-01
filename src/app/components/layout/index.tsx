import React from "react";
import "./style.scss";
import ProgressSteps from "../progressSteps";

interface AuxProps {
  children: React.ReactNode;
}

export default ({ children }: AuxProps) => {
  return (
    <div className="container">
      {children}
      <ProgressSteps />
    </div>
  );
};
