import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/logos/logoPage.png"; // with import
import "./style.css";

const data = ["home", "about", "experience", "services", "contact"];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <figure>
          <img src={logo} alt="page" />
        </figure>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {data.map((item) => {
              return (
                <li className="nav-item" key={item}>
                  <NavLink to={item} className="nav-link">
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
