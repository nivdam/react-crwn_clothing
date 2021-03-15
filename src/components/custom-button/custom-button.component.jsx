import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...orherProps }) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "is--google_sign_in" : ""}`}
    {...orherProps}
  >
    {children}
  </button>
);

export default CustomButton;
