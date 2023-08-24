import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton/index";
import avatar from "./../assets/img/logos/avatar2.png";
import linkedin from "./../assets/img/logos/linkedin.png";
import github from "./../assets/img/logos/github.png";
import instagram from "./../assets/img/logos/instagram.png";
import phone from "./../assets/img/logos/phone.png";
import email from "./../assets/img/logos/email.png";

const Contact = () => {
  const navigate = useNavigate();
  // variable state to save the data
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  //variable state to manage errors
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    message: false,
  });

  //use the Hook useRef for submit the form once is done
  const formulary = useRef<HTMLFormElement>(null);

  //******method to handle submit button*****
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    let states = isError;

    // //if name is empty
    if (!info.name) {
      states = { ...states, name: true };
    } else {
      states = { ...states, name: false };
    }

    //if message is empty
    if (!info.message) {
      states = { ...states, message: true };
    } else {
      states = { ...states, message: false };
    }

    // // if emai is wrong based on the Regex
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(info.email)) {
      states = { ...states, email: true };
    } else {
      states = { ...states, email: false };
    }

    setIsError(states);

    //If formulary is NOT undefined and there is not any true in the object isError, then submit()
    if (formulary.current && !Object.values(states).includes(true)) {
      navigate("/about");
      formulary.current.submit();
    }
  };

  return (
    <div id="contact" className="container">
      <div className="row container-form">
        <div className="row mt-5">
          <div className=" col-md-2 ">
            <h4>Get In Touch!</h4>
          </div>
          <div className=" col-md-10">
            <hr />
          </div>
        </div>
        <div className="row mt-5 mainContent">
          <div className="col-12 col-md-6 col-lg-6 leftSide">
            <figure className="avatar">
              <img src={avatar} alt="me" />
            </figure>
            <ul className="d-flex justify-content-evenly align-items-center flex-column">
              <li className="d-flex align-items-center">
                <figure className="w-25">
                  <img src={phone} alt="" />
                </figure>
                <span className="w-75">+1 (647) 509 8502</span>
              </li>
              <li className="d-flex align-items-center">
                <figure className="w-25">
                  <img src={email} alt="" />
                </figure>
                <span className="w-75">andrescorrea.m@hotmail.com</span>
              </li>
              <li className="d-flex align-items-center">
                <figure className="w-25">
                  <img src={linkedin} alt="" />
                </figure>
                <a href="https://www.linkedin.com/in/andres-correa-moreno/" className="w-75">
                  <span className="w-75">andres-correa-moreno</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <figure className="w-25">
                  <img src={github} alt="" />
                </figure>
                <a href="https://github.com/andres0529" className="w-75">
                  <span className="w-75"> andre0529</span>
                </a>
              </li>
              <li className="d-flex align-items-center">
                <figure className="w-25">
                  <img src={instagram} alt="" />
                </figure>
                <a href="https://www.instagram.com/andres0529/" className="w-75">
                  <span className="w-75"> andre0529</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-6 rightSide pt-4">
            <h3>Send Me A Message</h3>
            <form
              className=""
              action="https://formspree.io/f/meqdlgay"
              method="post"
              ref={formulary}
            >
              <fieldset>
                <div>
                  {isError.name && <span>Required field</span>}
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Type your name..."
                    onChange={(e) => setInfo({ ...info, name: e.target.value })}
                  />
                </div>
                <div className="mt-2">
                  {isError.email && <span>Invalid format</span>}
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="@"
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                  />
                </div>
                <div className="mt-2 pt-1">
                  {isError.message && <span>Required field</span>}
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type you message..."
                    onChange={(e) =>
                      setInfo({ ...info, message: e.target.value })
                    }
                  />
                </div>
              </fieldset>
              <div className="text-center">
                <button onClick={(e) => handleSubmit(e)}>
                  <CustomButton
                    text="Send"
                    icon={<i className="fa-solid fa-paper-plane" />}
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
