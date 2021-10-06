import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  return (
    <Router>
      <Header />
      <Body />
    </Router>
  );
}

export default App;
