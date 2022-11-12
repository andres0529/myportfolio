import React, { useEffect, useState } from "react";
import logo from "./../assets/img/logoLanding.gif"; // with import

const Landing = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(true);
    }, 8000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div id="landingPage" className="bg-landing">
      <div className="text-center">
        <h1>Welcome to my site</h1>
        <span className="span1">Fresh Constructor, </span>
        <span className="span2">Original Programmer</span>
        {/* if the variable is true, show the img */}
        {showLogo && (
          <div>
            <img src={logo} alt="logo" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
