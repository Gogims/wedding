import React from "react";
import { Route, Switch } from "react-router-dom";

import Destination from "src/destination/destination";
import Gallery from "src/gallery/gallery";
import Gift from "src/gift/gift";
import Home from "src/home/home";
import Rsvp from "src/rsvp/rsvp";
import Transportation from "src/transportation/transportation";

export const Body: React.FC = () => {
  return (
    <Switch>
      <Route path="/rsvp">
        <Rsvp />
      </Route>
      <Route path="/gallery">
        <Gallery />
      </Route>
      <Route path="/transportation">
        <Transportation />
      </Route>
      <Route path="/destination">
        <Destination />
      </Route>
      <Route path="/gift">
        <Gift />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default Body;
