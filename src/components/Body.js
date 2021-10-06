import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import AddEvent from "./Event/AddEvent";
import EditEvent from "./Event/EditEvent";
import SingleEvent from "./Event/SingleEvent";
const Body = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-event" component={AddEvent} />
        <Route path="/edit-event/:id" component={EditEvent} />
        <Route path="/events/:id" component={SingleEvent} />
      </Switch>
    </>
  );
};

export default Body;
