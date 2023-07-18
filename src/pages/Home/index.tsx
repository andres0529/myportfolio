import { NavLink } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import "./style.css"
const Home = () => {
  return (
      <div id="home" className="container">
        <div className="col-12 col-md-lg-xl-8 ">
          <h4>Hi there!</h4>
          <h1>I'm Andres Correa</h1>
          <h5>Professional - Full Stack Developer</h5>
          <h6 className="glitch" data-text="I build things for the web.">
            I build things for the web.
          </h6>
          <NavLink to="/about" className="nav-link justify-content-center justify-content-lg-start">
            <CustomButton text="Who I am " size="large" icon ={ <i className="fa-solid fa-angle-right"></i>}/>
          </NavLink>
        </div>
      </div>
  );
};

export default Home;
