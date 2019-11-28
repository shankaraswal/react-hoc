import React, { Component } from "react";

import { NavLink, Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink to="/shan" className="nav-link">
                  Shan
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/kuk" className="nav-link">
                  Kuku
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nik" className="nav-link">
                  Nikku
                </NavLink>
              </li>
            </ul>
          </div>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
