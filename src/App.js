import React, { Component } from "react";
import "./App.css";

import ShankarHoc from "./HOC/WrappedComponents/ShankarHoc";
import KukuHoc from "./HOC/WrappedComponents/KukuHoc";
import NikkuHoc from "./HOC/WrappedComponents/NikkuHoc";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Copy from "./components/Copy";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <div className="container">
          <Switch>
            <Route path="/shan" component={ShankarHoc} />
            <Route path="/kuk" component={KukuHoc} />
            <Route path="/nik" component={NikkuHoc} />
          </Switch>
          <Copy />
        </div>
      </Router>
    </div>
  );
}

export default App;
