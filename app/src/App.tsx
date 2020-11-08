import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={() => <></>} />
      </Switch>
    </HashRouter>
  );

  
}

const redirectToHome = () => <Redirect to="/" />;

export default App;
