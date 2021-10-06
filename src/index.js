import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";
import EventContextProvider from "./context/EventContext";
ReactDOM.render(
  <React.StrictMode>
    <EventContextProvider>
      <App />
    </EventContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
