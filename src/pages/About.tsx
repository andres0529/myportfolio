import CustomButton from "../components/CustomButton";
import photo from "./../assets/img/me.jpg";

const data = {
  title: "About Me",
  button: "Resume",
  linkResume:
    "https://www.dropbox.com/s/at3djtjixix6lzk/AndresCorrea_Resume%20August-2022.pdf?dl=0",
};

const About = () => {
  return (
    <div id="about" className="container h-100 ">
      <div className="row mt-5">
        <div className=" col-md-6 col-lg-6 row">
          <div className=" col-md-3">
            <h4>{data.title}</h4>
          </div>
          <div className=" col-md-9">
            <hr />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className=" col-md-6 col-lg-6 d-flex justify-content-between flex-column paragraphs">
          <p>
            Hello, My name is Andres and I enjoy creating experiences and things
            on the Internet.
            <br /> I'm a systems engineer specializing in front-end development
            with more than 5 years of experience in the market, dedicated to
            creating beautiful interfaces for everything from simple open source
            applications to complex proprietary systems.
          </p>
          <p>
            I started in web programming because I consider myself a person
            passionate about technology, since I was a child I have always been
            fascinated by technological advances and programming languages. I
            remember taking my first steps in the world of development using
            some languages like AS400, visual Basica and c++, and since then I
            have been at the forefront of technology trying to learn more and
            more.
          </p>
          <p>
            I had the opportunity to work for some companies such as
            <a href="https://www.globant.com/"> Globant</a>,
            <a href="https://conexcol.net.co/"> Conexcol Cloud</a>,
            <a href="https://www.bdo.ca/en-ca/home/"> BDO Canada</a>, among
            others, using front-end development technologies for the use of some
            web projects. Experiences that have contributed to forging my
            career, which I am very grateful and motivated to continue growing
            professionally.
          </p>

          <a className="d-flex justify-content-center" href={"https://www.dropbox.com/s/gh5ksho3u0cn9d9/Resume-AndresCorrea-Oct-2022.pdf?dl=0"}>
           <CustomButton text="Resume" size="small" icon={<i className="fa-solid fa-angle-down"></i>} />
          </a>
        </div>
        <div className="col-5 col-md-lg-5 offset-md-lg-xl-1 d-flex justify-content-lg-end justify-content-center photo">
          <img src={photo} alt="Andres Correa" />
        </div>
      </div>
    </div>
  );
};

export default About;
