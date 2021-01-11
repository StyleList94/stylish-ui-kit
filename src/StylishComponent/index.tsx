import React from "react";

import "./StylishComponent.scss";

type PropType = {
  theme?: "primary" | "secondary";
};

const StylishComponent: React.FC<PropType> = ({ theme = "primary" }) => {
  return (
    <div className={`container theme-${theme}`} data-testid="container">
      <p>Stylish React Package</p>
    </div>
  );
};

export default StylishComponent;
