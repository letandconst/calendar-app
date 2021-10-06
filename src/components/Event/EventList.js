import React, { useContext, useEffect } from "react";

import { EventContext } from "../../context/EventContext";

import { Link } from "react-router-dom";
import { Button } from "antd";

import EventCard from "../Event/EventCard";

const EventList = () => {
  const { events } = useContext(EventContext);
  useEffect(() => {}, [events]);

  return (
    <div>
      {events.map((event, i) => (
        <EventCard event={event} key={i} />
      ))}
      <Link to="/add-event">
        <Button className="">Add Event</Button>
      </Link>
    </div>
  );
};

export default EventList;
