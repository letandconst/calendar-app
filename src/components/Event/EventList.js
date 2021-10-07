import React, { useContext, useEffect, useRef, useState } from "react";
import { EventContext } from "../../context/EventContext";
import EventCard from "../Event/EventCard";
import { Link } from "react-router-dom";
import { Button } from "antd";
import FilterButton from "../Buttons/FilterButton";
import styled from "styled-components";
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
    <>
      <SearchWrapper>
        <div className="search">
          <input
            type="text"
            ref={searchInput}
            placeholder="Search "
            value={props.find}
            onChange={getSearch}
          />
        </div>
        <div className="filter">
          <FilterButton button={props.button} filter={props.filterByStatus} />
        </div>
      </SearchWrapper>
      <div>
        {renderEvents.length > 0 ? renderEvents : "No Events available"}
      </div>
      <Link to="/add-event">
        <Button className="btn-primary">Add Event</Button>
      </Link>
    </>
  );
};

export default EventList;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  @media(max-width:576px){
    display:inline-block;
    margin:0 auto;
    
  }
  .search input {
    width: 720px;
    outline:none;
    padding:5px;
  }
  .filter button {
    margin-left: 5px;
    padding:5px 20px;
    border-radius:5px;
    background-color:#A0E7E5;
    cursor:pointer;
    color: #000;
    border:none;
      &:hover{
        background-color:#B4F8C8;
      }
    }
  .ant-btn .btn-success{
    background-color: #198754;
    border-color: #198754;
  }
 
    @media(max-width:576px){
      .search input{
        margin:10px 0;
        width:100%;
        
      }
`;
