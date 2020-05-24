import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import List from "./components/List";

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  );
};
