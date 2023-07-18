import CustomButton from "../../components/CustomButton";
import photo from "./../../assets/img/me.jpg";
import "./style.css";

const data = {
  title: "About Me",
  button: "Resume",
  linkResume:
    "https://www.dropbox.com/s/at3djtjixix6lzk/AndresCorrea_Resume%20August-2022.pdf?dl=0",
};

const About = () => {
  return (
    <div id="about" className="container">
      <div className="row mt-5">
        <div className=" col-md-12 col-lg-6 row">
          <div className=" col-md-3">
            <h4>{data.title}</h4>
          </div>
          <div className=" col-md-9">
            <hr />
          </div>
        </div>
      </div>
      <div className="row mt-4 flex-wrap-reverse">
        <div className="preferably-square col-md-12  col-lg-6 d-flex justify-content-between flex-column paragraphs">
          <p>
            Hello, my name is Andres, and I have a genuine passion for creating
            captivating experiences and innovative solutions on the Internet. As
            a highly skilled systems engineer, I specialize in front-end
            development and have accumulated over 6 years of valuable industry
            experience. My focus lies in crafting visually stunning interfaces
            for a wide range of projects, from simple open-source applications
            to complex proprietary systems.
          </p>
          <p>
            My journey into web programming stems from my deep-rooted passion
            for technology. From a young age, I have been captivated by
            technological advancements and programming languages. I distinctly
            remember taking my first steps in the world of development,
            exploring languages such as AS400, Visual Basic, and C++. Since
            then, I have remained at the forefront of technology, continuously
            expanding my knowledge and pushing boundaries.
          </p>
          <p>
            Throughout my career, I have had the privilege of working with
            renowned companies such as
            <a href="https://www.globant.com/"> Globant</a>,
            <a href="https://conexcol.net.co/"> Conexcol Cloud</a>,
            <a href="https://www.paradigmasolutions.com/">
              Paradigma Solutions
            </a>
            , and
            <a href="https://www.bdo.ca/en-ca/home/"> BDO Canada</a>; 
            These experiences have provided me with exposure to cutting-edge
            front-end development technologies and have played a pivotal role in
            shaping my professional growth. Moreover, I have also gained
            valuable experience working with backend technologies in BDO, which
            has broadened my skill set and enabled me to consider myself as a
            proficient full stack developer.
          </p>
          <p>
            If you are seeking a dedicated and experienced full stack developer
            with a passion for leveraging the latest technologies, I would be
            thrilled to connect and explore how I can contribute to your
            projects. Let's create remarkable experiences together!"
          </p>
          <a
            className="d-flex justify-content-center"
            href={
              "https://www.dropbox.com/s/gh5ksho3u0cn9d9/Resume-AndresCorrea-Oct-2022.pdf?dl=0"
            }
          >
            <div className="mt-1">
              <CustomButton
                text="Resume"
                size="small"
                icon={<i className="fa-solid fa-angle-down"></i>}
              />
            </div>
          </a>
        </div>
        <div className="col-5 col-md-12 col-lg-5 offset-md-lg-xl-1 d-flex justify-content-lg-end justify-content-center photo">
          <img src={photo} alt="Andres Correa" className="preferably-square" />
        </div>
      </div>
    </div>
  );
};

export default About;
