import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import ItsMyTrip from "./Mainpage/ItsMyTrip";

ReactDOM.render(
  <BrowserRouter>
    <App />
    {/* <ItsMyTrip/> */}
  </BrowserRouter>,
  document.getElementById("root")
);
