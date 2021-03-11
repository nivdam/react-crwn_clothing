import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as BrandLogo } from "../../assets/images/crown.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/" aria-label="logo" title="Home">
      <BrandLogo className="logo" aria-hidden="true" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
