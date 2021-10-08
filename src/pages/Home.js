import React, { useState, useContext } from "react";
import styled from "styled-components";

import EventList from "../components/Event/EventList";
import { EventContext } from "../context/EventContext";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { events, setEvents } = useContext(EventContext);

  const [filteredEvents, setFilteredEvents] = useState(events);

  // const allStatus = ["All", ...new Set(events.map((item) => item.status))];
  // const [filterButtons, setFilteredButtons] = useState(allStatus);
  const allStatus = ["All", ...new Set(events.map((item) => item.status))];
  const [filterButtons, setFilteredButtons] = useState(allStatus);

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

  // const handleFilter = (button) => {
  //   if (button === "All") {
  //     setEvents(events);
  //     return;
  //   }

  //   // const filteredData = events.filter((item) => item.status === button);
  //   // setEvents(filteredData);
  //   const filteredData = events.filter((item) => item.status === button);
  //   setFilteredEvents(filteredData);
  // };

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
  return (
    <>
      <Container>
        <EventList
          find={search}
          searchKeyword={handleSearch}
          filterByStatus={handleFilter}
          button={allStatus}
          events={search.length < 1 ? filteredEvents : searchResults}
        />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
   
    .ant-row {
      padding: 20px;
      background-color: #FBE7C6;
    }
   
    .ant-col{
      background:#fff;
    }
    .ant-col > div{
      display:flex;
    }
    .ant-statistic, .ant-col {
      padding:10px 20px;
    }
    .ant-col > span {
      margin: 10px 15px;
    }
   
 
    
  }
`;
