import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, ...otherPreops }) => (
  <button className="custom-button" {...otherPreops}>
    {" "}
    {children}
  </button>
);

export default CustomButton;
