import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/logos/logoPage.png"; // with import
import "./style.css";

const data = ["home", "about", "experience", "contact"];

const Navbar = () => {
  const [toggler, setToggler] = useState("");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" onMouseLeave={()=>setToggler("")}>
      <div className="container">
        <figure>
          <NavLink to="/home">
            <img src={logo} alt="page" />
          </NavLink>
        </figure>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setToggler("show")}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${toggler}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {data.map((item) => {
              return (
                <li className="nav-item" key={item}>
                  <NavLink
                    to={item}
                    className="nav-link"
                    onClick={() => setToggler("")}
                  >
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
