import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Bestfriend from "src/bestfriend/bestfriend";
import Home from "src/home/home";

type BodyProps = {
  //
};

class Body extends Component<BodyProps, any> {
  public render() {
    return (
        <Switch>
          <Route path="/bestfriends">
            <Bestfriend />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    );
  }
}

export default Body;
