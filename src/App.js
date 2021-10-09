import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Body />
      </Container>
    </Router>
  );
}

export default App;

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
