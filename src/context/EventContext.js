import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/index";

export const EventContext = createContext();

const EventContextProvider = (props) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await api.get("/events");
      setEvents(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    const getAllEvents = async () => {
      const allContacts = await fetchEvents();
      if (allContacts) setEvents(allContacts);
    };

    getAllEvents();
  }, []);

  useEffect(() => {}, [events]);

  const addEvent = async (name, selectedDate, selectedStatus) => {
    try {
      const req = {
        id: uuidv4(),
        name,
        date: selectedDate.toString(),
        status: selectedStatus,
      };

      const res = await api.post("/events", req);

      setEvents([...events, res.data]);
      console.log(events);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEvent = async () => {};

  const deleteEvent = async (id) => {
    try {
      if (window.confirm("Are you sure you want to delete this event?")) {
        await api.delete(`/events/${id}`);
      }

      setEvents(events.filter((event) => event.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilter = (button) => {
    if (button === "All") {
      // change filtered events array instead of the events array itself
      setFilteredEvents(events);
      return;
    }

    const filteredData = events.filter((item) => item.status === button);
    setFilteredEvents(filteredData);
    console.log(filteredData);
  };

  const handleSearch = (search) => {
    setSearch(search);
    if (search !== "") {
      const newEventList = events.filter((event) => {
        return Object.values(event)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newEventList);
    } else {
      setSearchResults(events);
    }
  };
  return (
    <EventContext.Provider
      value={{
        addEvent,
        deleteEvent,
        updateEvent,
        events,
        setEvents,
        handleFilter,
        handleSearch,
        filteredEvents,
        searchResults,
        search,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
