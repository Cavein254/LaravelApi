import React from "react";
import ReactDOM from "react-dom";
import Routes from './Routes'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
