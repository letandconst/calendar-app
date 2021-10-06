import React, { useContext, useEffect, useRef } from "react";

import { EventContext } from "../../context/EventContext";

import { Link } from "react-router-dom";
import { Button } from "antd";

import EventCard from "../Event/EventCard";

const EventList = (props) => {
  const { events } = useContext(EventContext);
  const searchInput = useRef("");
  useEffect(() => {}, [events]);

  const getSearch = () => {
    props.searchKeyword(searchInput.current.value);
  };

  const renderEvents = props.events.map((event) => {
    return <EventCard event={event} key={event.id} />;
  });
  return (
    <div>
      <div class="search">
        <input
          type="text"
          ref={searchInput}
          placeholder="Search "
          value={props.find}
          onChange={getSearch}
        />
      </div>
      <div>
        {renderEvents.length > 0 ? renderEvents : "No Events available"}
      </div>
      <Link to="/add-event">
        <Button className="">Add Event</Button>
      </Link>
    </div>
  );
};

export default EventList;
