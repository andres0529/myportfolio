import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton/index";

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
      formulary.current.submit()
    }
  };

  return (
    <div id="contact" className="container">
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
                  <label htmlFor="name">Name</label>{" "}
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
                  <label htmlFor="email">Email</label>{" "}
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
                  <label htmlFor="message">What can we help you with?</label>{" "}
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
