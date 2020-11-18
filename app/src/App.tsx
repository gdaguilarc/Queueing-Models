import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import ServerOne from './components/MM1'
import ServerK from './components/MMsK'

function App() {
  return (
    <HashRouter>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/mm1" component={ServerOne} />
        <Route exact path="/mms" component={ServerOne} />
        <Route exact path="/mmk" component={ServerK} />
        <Route exact path="/mg1" component={ServerOne} />
      </Switch>
    </HashRouter>
  );

  
}

const redirectToHome = () => <Redirect to="/" />;

export default App;
