import React, { useState, useContext } from "react";
import styled from "styled-components";

import EventList from "../components/Event/EventList";
import { EventContext } from "../context/EventContext";

const Home = () => {
  const { events } = useContext(EventContext);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    <>
      <Container>
        <EventList
          find={search}
          searchKeyword={handleSearch}
          events={search.length < 1 ? events : searchResults}
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
      background: #ececec;
    }
    .ant-col{
      background:#fff;
      
    }
    .ant-statistic, .ant-col {
      padding:0 20px;
    }
    .ant-col > span{
      margin: 10px 15px;
    }
 
    
  }
`;
