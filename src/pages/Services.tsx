import React from "react";
import avatar from "./../assets/img/logos/avatar.png";

const data = [
  {
    serviceIcon: <i className="fa-solid fa-code"></i>,
    serviceInfo: "Web Application Development",
  },
  {
    serviceIcon: <i className="fa-brands fa-sketch"></i>,
    serviceInfo: "Web and Apps Design",
  },
  {
    serviceIcon: <i className="fa-solid fa-vial-circle-check"></i>,
    serviceInfo: "Quality Assurance",
  },
  {
    serviceIcon: <i className="fa-solid fa-terminal"></i>,
    serviceInfo: "General Programming",
  },
  {
    serviceIcon: <i className="fa-solid fa-laptop-code"></i>,
    serviceInfo: "Custom Development",
  },
  {
    serviceIcon: <i className="fa-solid fa-magnifying-glass-chart"></i>,
    serviceInfo: "SEO Marketing",
  },
];

const Services = () => {
  let rightColumnStart = Math.round(data.length / 2);

  const renderServices = (side: string) =>
    data.map((service, index) => {
      if (side === "right") {
        if (index + 1 > rightColumnStart) {
          return (
            <div
            key={index}
              className={
                index % 2 === 0
                  ? "rightBackgroundRed service"
                  : "rightBackgroundBlue service"
              }
            >
              <div key={index} className="serviceInfo d-flex align-items-baseline">
                {service.serviceIcon}
                <h5>{service.serviceInfo}</h5>
              </div>
            </div>
          );
        }
      } else {
        if (!(index + 1 > rightColumnStart)) {
          return (
            <div
              className={
                index % 2 === 0
                  ? "leftBackgroundRed service"
                  : "leftBackgroundBlue service"
              }
            >
              <div className="serviceInfo d-flex align-items-baseline">
                {service.serviceIcon}
                <h5>{service.serviceInfo}</h5>
              </div>
            </div>
          );
        }
      }

      return<></>
    });

  return (
    <div id="services" className="container">
      <div className="row mt-5">
        <div className="row">
          <div className=" col-md-1">
            <h4>Services</h4>
          </div>
          <div className=" col-md-11">
            <hr />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-md-5 col-lg-5 leftServices d-flex flex-column justify-content-evenly">
            {renderServices("left")}
          </div>

          <div className="col-12col-md-2 col-lg-2 avatar">
            <figure>
              <img src={avatar} alt="" />
            </figure>
          </div>

          <div className="col-12 col-md-5 col-lg-5 rightServices d-flex flex-column justify-content-evenly">
            {renderServices("right")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
