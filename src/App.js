import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shop.component";
import signInSignUpPage from "./pages/signIn-signUpPage/signIn-signUpPage.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
