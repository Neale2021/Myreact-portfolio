import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Nav(props) {
    return (
      <div>
        <Navbar expand="lg" bg="light" sticky="top">
          <NavLink className="nav-link" to="/">
            <div className="text-light">
              <h4 className="nav-title-font">Neale Philippe</h4>
              </div>
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink to="/About">
              <div className="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Portfolio">
              <div className="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact">
              <div className="nav-font text-light">Contact</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}


export default Nav;
