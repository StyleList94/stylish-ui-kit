import React from "react";

import "./StylishComponent.scss";

const StylishComponent: React.FC = () => {
  return (
    <div className="container" data-testid="container">
      <p>Stylish React Package</p>
    </div>
  );
};

export default StylishComponent;
