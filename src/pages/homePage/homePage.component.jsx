import React from "react";
import MenuItem from "../../components/menu-item/menu-item.component";

import "./homePage.style.scss";

const HomePage = () => {
  return (
    <main className="homepage">
      <h1>Welcome to my Homepage</h1>

      <section className="directory-menu">
        <MenuItem title="HATS" />
        <MenuItem title="JACKETS" />
        <MenuItem title="SHOES" />
        <MenuItem title="WOMENS" />
        <MenuItem title="MENS" />
      </section>
    </main>
  );
};

export default HomePage;
