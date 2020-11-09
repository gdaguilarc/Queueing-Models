import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <HashRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );

  
}

const redirectToHome = () => <Redirect to="/" />;

export default App;
