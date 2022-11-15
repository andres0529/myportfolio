import React from "react";
import CustomButton from "../components/CustomButton/index";

const Contact = () => {
  return (
    <div id="contact" className="container h-100 ">
      <div className="row">
        <div className="row mt-5">
          <div className=" col-md-2 ">
            <h4>Get In Touch!</h4>
          </div>
          <div className=" col-md-10">
            <hr />
          </div>
        </div>
        <div className="row mt-3 mainContent">
          <div className="col-12 col-md-6 col-lg-6 leftSide">
            <div className="containerInfo">
              <div className="mt-4 mail">
                <h4>E-mail address</h4>
                <span>andrescorrea.m@hotmail.com</span>
              </div>
              <div className="mt-4 phone">
                <h4>Let's talk</h4>
                <span>(+1)6475098502</span>
              </div>
              <div className="mt-4 socialIcons">
                <h4>Social Networks</h4>
                <ul className="d-flex">
                  <li>
                    <a href="https://www.linkedin.com/in/andres-correa-moreno/">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/andres0529"><i className="fa-brands fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://www.hackerrank.com/andrescorrea_m"><i className="fa-brands fa-hackerrank"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 rightSide">
            <h3>Send Me A Message</h3>
            <form action="https://formspree.io/f/meqdlgay" method="post">
              <fieldset>
                <div>
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" name="name" required />
                </div>
                <div className="mt-2">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" required />
                </div>
                <div className="mt-2">
                  <label htmlFor="message">What can we help you with?</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
              </fieldset>
              <div className="text-center">
                <button type="submit">
                  <CustomButton
                    text="Send"
                    icon={<i className="fa-solid fa-paper-plane"></i>}
                    size="small"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
