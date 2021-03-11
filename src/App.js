import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shop.component";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
