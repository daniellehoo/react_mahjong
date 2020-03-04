import React, { useState } from "react";
import logo from "./logo.svg";
import data from "./data.js";
import {Main, Child} from "./Main.js";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:id" children={<Child />} />
          <Route path="/" children={<Main />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;