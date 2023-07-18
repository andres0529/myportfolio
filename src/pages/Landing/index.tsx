import React, { useEffect, useState } from "react";
import logo from "./../../assets/img/logoLanding.gif"; 
import "./style.css"

const Landing = () => {

  return (
    <div id="landingPage" className="bg-landing">
      <div className="text-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
