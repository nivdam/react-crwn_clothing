import React from "react";
import "./homePage.style.scss";

const HomePage = () => {
  return (
    <main className="homepage">
      <h1>Welcome to my Homepage</h1>

      <section className="directory-menu">
        <article className="menu-item">
          <div className="content">
            <div className="title">HATS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </article>
        <article className="menu-item">
          <div className="content">
            <div className="title">JACKETS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </article>
        <article className="menu-item">
          <div className="content">
            <div className="title">SHOES</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </article>
        <article className="menu-item">
          <div className="content">
            <div className="title">WOMENS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </article>
        <article className="menu-item">
          <div className="content">
            <div className="title">MENS</div>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </article>
      </section>
    </main>
  );
};

export default HomePage;
