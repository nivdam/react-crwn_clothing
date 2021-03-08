import React from "react";

import "./menu-item.style.scss";

const MenuItem = ({ title }) => (
  <article className="menu-item">
    <div className="content">
      <div className="title">{title}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </article>
);

export default MenuItem;
