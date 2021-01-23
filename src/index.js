import React from "react";
import ReactDOM from "react-dom";
import { HereosApp } from "./HereosApp";
import AppRouter from "./routers/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <HereosApp />
  </React.StrictMode>,
  document.getElementById("root")
);
