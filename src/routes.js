import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserGeneratedList from "./Components/UserGeneratedList";
import Today from "./Components/Today";

import App from "./App";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/today">
          <Today />
        </Route>
        <Route exact path="/sub-list">
          <UserGeneratedList />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
