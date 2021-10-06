import React from "react";
import styled from "styled-components";

import EventList from "../components/Event/EventList";

const Home = () => {
  return (
    <>
      <Container>
        <EventList />
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
