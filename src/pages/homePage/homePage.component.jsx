import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homePage.style.scss";

const HomePage = () => {
  return (
    <main className="homepage">
      <h1>Welcome to my Homepage 66</h1>

      <section className="directory-menu">
        <Directory />
      </section>
    </main>
  );
};

export default HomePage;
