import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import api from "../api/index";

export const EventContext = createContext();

const EventContextProvider = (props) => {
  const [events, setEvents] = useState([]);

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

  const updateEvent = async () => {
    // const response = await api.put(`/edit-events/${id}`);
    // const { id, name, date, status } = response.data;
    // setEvents(
    //   events.map((event) => {
    //     return event.id === id ? { ...response.data } : event;
    //   })
    // );
  };

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

  return (
    <EventContext.Provider
      value={{ addEvent, deleteEvent, updateEvent, events, setEvents }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventContextProvider;
