import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { EventContext } from "../context/EventContext";

import EventList from "./Event/EventList";
import AddEvent from "./Event/AddEvent";
import EditEvent from "./Event/EditEvent";
import SingleEvent from "./Event/SingleEvent";

const Body = () => {
  const {
    addEvent,
    deleteEvent,
    search,
    searchResults,
    handleSearch,
    handleFilter,
    filteredEvents,
    events,
    updateEvent,
  } = useContext(EventContext);

  const allStatus = ["All", ...new Set(events.map((item) => item.status))];
  return (
    <>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <EventList
              {...props}
              events={search.length < 1 ? filteredEvents : searchResults}
              find={search}
              searchKeyword={handleSearch}
              button={allStatus}
              filterByStatus={handleFilter}
              handleRemove={deleteEvent}
            />
          )}
        />
        <Route
          path="/add-event"
          exact
          render={(props) => <AddEvent {...props} addNewEvent={addEvent} />}
        />
        <Route
          path="/edit-event/:id"
          render={(props) => (
            <EditEvent {...props} updateCurrentEvent={updateEvent} />
          )}
        />

        <Route path="/events/:id" component={SingleEvent} />
      </Switch>
    </>
  );
};

export default Body;
