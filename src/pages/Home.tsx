import { NavLink } from "react-router-dom";
import CustomButton from "../components/CustomButton";
const Home = () => {
  return (
    <div id="home-background">
      <div id="home" className="container h-100">
        <div className="col-12 col-md-lg-xl-8 ">
          <h4>Hi there!</h4>
          <h1 className="mt-5">I'm Andres Correa</h1>
          <h5>Professional - FrontEnd Developer</h5>
          <h6 className="glitch" data-text="I build things for the web.">
            I build things for the web.
          </h6>
          <NavLink to="/About" className="nav-link mt-5">
            <CustomButton text="Who I am " size="large" icon ={ <i className="fa-solid fa-angle-right"></i>}/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
