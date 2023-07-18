import React, { useState } from "react";
import Project from "../components/Project";
import Skill from "../components/Skill";

const data = {
  skills: [
    {
      name: "HTML5",
      urlImage: require("./../assets/img/logos/html.svg").default,
    },
    {
      name: "Javascript",
      urlImage: require("./../assets/img/logos/javascript.svg").default,
    },
    {
      name: "ReactJS",
      urlImage: require("./../assets/img/logos/react.svg").default,
    },
    {
      name: "Angular",
      urlImage: require("./../assets/img/logos/angular.svg").default,
    },
    {
      name: "Redux",
      urlImage: require("./../assets/img/logos/redux.svg").default,
    },
    {
      name: "NextJS",
      urlImage: require("./../assets/img/logos/next.svg").default,
    },
    {
      name: "CSS",
      urlImage: require("./../assets/img/logos/css.svg").default,
    },
    {
      name: "Bootstrap",
      urlImage: require("./../assets/img/logos/bootstrap.svg").default,
    },

    {
      name: "Jest",
      urlImage: require("./../assets/img/logos/jest.svg").default,
    },
    {
      name: "GIT",
      urlImage: require("./../assets/img/logos/git.svg").default,
    },
  ],

  projects: [
    {
      name: "DAH",
      urlImage: require("./../assets/img/logos/dha.svg").default,
      urlRepo: "https://github.com/andres0529/Drive-Away-Hunger.git",
    },
    {
      name: "Georgian WIX",
      urlImage: require("./../assets/img/logos/georgianWix.svg").default,
      urlRepo: "https://github.com/andres0529/project2.git",
    },
    {
      name: "RHBlood",
      urlImage: require("./../assets/img/logos/rh.svg").default,
      urlRepo: "https://github.com/andres0529/rhblood.git",
    },
  ],

  experience: [
    {
      id: "conexcol",
      logoUrl: require("./../assets/img/logos/conexcol.svg").default,
      companyName: "Conexcol Cloud",
      position: "Support Engineer",
      date: "Feb 2010 - Nov 2016",
      description: `Conexcol is a company oriented to service infrastructure, in which I participate by performing the  tasks:`,
      tasks: [
        "Collaborated with the Design team to create new application features using React Js, Redux and Ant Design.",
        "Interfaced directly with customers to solve their technical issues through empathetic problem solving.",
        "Developed company website and customer orientation Deployed mail servers, SSL certificate installation, CAL license configuration, port manipulation and DNS records.",
        "Broke down and evaluated user problems, using test scripts, personal expertise and probing questions.",
      ],
    },
    {
      id: "paradigma",
      logoUrl: require("./../assets/img/logos/paradigma.svg").default,
      companyName: "Paradigma Solutions",
      position: "Web Developer",
      date: "Jul 2019 - Apr 2020",
      description: `Paradigma is a family of programmers dedicated to developing any type of software or web design that is required. Some of the tasks in which I had the opportunity to participate are:`,
      tasks: [
        "Maintenance and deployment of DOT NET NUKE components for <a href='https://argos-us.com/'>Argos pages </a> in Colombia, Honduras, USA and Guyanna",
        "Developed Single Page Apps (SPAs) using React Js, MaterialUI and ReactHooks.",
        "I collaborated in the creation of React components for the web application of <a href='https://www.contraloria.gov.co/es/web/guest/atencion-al-ciudadano/denuncias-y-otras-solicitudes-pqrd'>Contraloria Genral de la Nacion</a> using Jest and Huskey as testing frameworks and Redux for application state management",
        "developed some components in Angular CLI for the creation of the Kitchensink library, a library for internal use of the company for the development of applications",
      ],
    },
    {
      id: "globant",
      logoUrl: require("./../assets/img/logos/globant.svg").default,
      companyName: "Globant",
      position: "Web UI Developer",
      date: "Dec 2020 - Nov 2021",
      description: `Globant is a publicly traded software development agency focused on serving corporate clients worldwide. My role as a UI developer had several important tasks like:`,
      tasks: [
        "I collaborated in the migration of 2 applications in AngularJS to ReactJS, using technologies such as Redux, Hooks, Typescript, Recharts and I was in the complete life cycle of the project.",
        "Technologies such as StoryBookJS and Jest for unit tests were used for the development of each component, which allowed testing the components created before integration.",
        "The client for which we developed the migration is <a href='https://www.americancentury.com/home/'>American Century Investment</a> , with whom we had weekly meetings to show the progress of the project using the SCRUM methodology.",
      ],
    },
    {
      id: "bdo",
      logoUrl: require("./../assets/img/logos/bdo.svg").default,
      companyName: "BDO Canada",
      position: "Software and Web Developer, Intern",
      date: "May 2022 - Aug 2022",
      description: `BDO or Binder Dijker Otte is an international network of public accounting, tax, consulting and business advisory firms. Some of the tasks performed were:`,
      tasks: [
        "To give back and support communities in need, BDO Canada annually launches the <a href='https://www.bdo.ca/en-ca/about/people-values/drive-away-hunger/'>Drive Away Hunger</a> campaign with a goal to donate 1 million meals to food banks across Canada. For fundraising, the DAH application was developed from its design to its deployment.",

        "Complete creation of the Drive Away Hunger application, which is based on ReactJS components, React Router, Hooks, API Context, Bootstrap, Material UI as FrontEnd and ASP.NET 6 and SQL for the BackEnd",
      ],
    },
    {
      id: "otro",
      logoUrl: require("./../assets/img/logos/bdo.svg").default,
      companyName: "BDO Canada",
      position: "Software and Web Developer, Intern",
      date: "May 2022 - Aug 2022",
      description: `BDO or Binder Dijker Otte is an international network of public accounting, tax, consulting and business advisory firms. Some of the tasks performed were:`,
      tasks: [
        "To give back and support communities in need, BDO Canada annually launches the <a href='https://www.bdo.ca/en-ca/about/people-values/drive-away-hunger/'>Drive Away Hunger</a> campaign with a goal to donate 1 million meals to food banks across Canada. For fundraising, the DAH application was developed from its design to its deployment.",

        "Complete creation of the Drive Away Hunger application, which is based on ReactJS components, React Router, Hooks, API Context, Bootstrap, Material UI as FrontEnd and ASP.NET 6 and SQL for the BackEnd",
      ],
    },
    {
      id: "otro",
      logoUrl: require("./../assets/img/logos/bdo.svg").default,
      companyName: "BDO Canada",
      position: "Software and Web Developer, Intern",
      date: "May 2022 - Aug 2022",
      description: `BDO or Binder Dijker Otte is an international network of public accounting, tax, consulting and business advisory firms. Some of the tasks performed were:`,
      tasks: [
        "To give back and support communities in need, BDO Canada annually launches the <a href='https://www.bdo.ca/en-ca/about/people-values/drive-away-hunger/'>Drive Away Hunger</a> campaign with a goal to donate 1 million meals to food banks across Canada. For fundraising, the DAH application was developed from its design to its deployment.",

        "Complete creation of the Drive Away Hunger application, which is based on ReactJS components, React Router, Hooks, API Context, Bootstrap, Material UI as FrontEnd and ASP.NET 6 and SQL for the BackEnd",
      ],
    },
    {
      id: "otro",
      logoUrl: require("./../assets/img/logos/bdo.svg").default,
      companyName: "BDO Canada",
      position: "Software and Web Developer, Intern",
      date: "May 2022 - Aug 2022",
      description: `BDO or Binder Dijker Otte is an international network of public accounting, tax, consulting and business advisory firms. Some of the tasks performed were:`,
      tasks: [
        "To give back and support communities in need, BDO Canada annually launches the <a href='https://www.bdo.ca/en-ca/about/people-values/drive-away-hunger/'>Drive Away Hunger</a> campaign with a goal to donate 1 million meals to food banks across Canada. For fundraising, the DAH application was developed from its design to its deployment.",

        "Complete creation of the Drive Away Hunger application, which is based on ReactJS components, React Router, Hooks, API Context, Bootstrap, Material UI as FrontEnd and ASP.NET 6 and SQL for the BackEnd",
      ],
    },
    {
      id: "otro",
      logoUrl: require("./../assets/img/logos/bdo.svg").default,
      companyName: "BDO Canada",
      position: "Software and Web Developer, Intern",
      date: "May 2022 - Aug 2022",
      description: `BDO or Binder Dijker Otte is an international network of public accounting, tax, consulting and business advisory firms. Some of the tasks performed were:`,
      tasks: [
        "To give back and support communities in need, BDO Canada annually launches the <a href='https://www.bdo.ca/en-ca/about/people-values/drive-away-hunger/'>Drive Away Hunger</a> campaign with a goal to donate 1 million meals to food banks across Canada. For fundraising, the DAH application was developed from its design to its deployment.",

        "Complete creation of the Drive Away Hunger application, which is based on ReactJS components, React Router, Hooks, API Context, Bootstrap, Material UI as FrontEnd and ASP.NET 6 and SQL for the BackEnd",
      ],
    }
  ],
};

const Experience = () => {
  const [infoJob, setInfoJob] = useState(data.experience[0]);
  const [selectedButton, setSelectedButton] = useState(data.experience[0].id);

  // Method to enable the button once is clicked
  const handdlerButtons = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { target } = e;
    const id = (target as HTMLButtonElement).id;

    const info = data.experience.find((job) => {
      return job.id === id;
    });

    //if info is no undefined, then change the state
    if (info) {
      setSelectedButton(id);
      setInfoJob(info);
    }
  };

  return (
    <div id="experience" className="container">
      {/* <!-- container for title and line --> */}
      <div className="row mt-5">
        <div className="row">
          <div
            className="col-12 col-md-7 d-flex flex-column flex-md-row
                flex-lg-row"
          >
            <div className=" col-md-4">
              <h4>Experience and Skills</h4>
            </div>
            <div className=" col-md-9">
              <hr />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- container for Experience and Skills --> */}
      <div className="row mt-4">
        {/* <!--******************************** container for jobs ************************************--> */}
        <div className=" col-12 col-md-8">
          <div className="jobsContainer d-flex flex-column flex-md-row flex-lg-row row">
            <div className="job-btns col-12 col-md-3 d-flex flex-row flex-md-column ">
              {
                /* //****** Method to create Buttons accoridng to the data ****/
                data.experience.map((job) => {
                  return (
                    <button
                      id={job.id}
                      onClick={(e) => handdlerButtons(e)}
                      key={job.logoUrl}
                      type="button"
                      className={
                        job.id === selectedButton //checking if the state == id button
                          ? "btn btn-outline-secondary activeButton"
                          : "btn btn-outline-secondary"
                      }
                    >
                      {job.companyName}
                    </button>
                  );
                })
              }
            </div>
            <div className="col-12 col-md-9 job-info mt-3">
              <div className="d-flex headings">
                <div className="companyName">
                  <h5>{infoJob.companyName}</h5>
                  <span>{infoJob.position} / </span>
                  <span>{infoJob.date}</span>
                </div>
                <figure>
                  <img
                    className="w-100"
                    src={infoJob.logoUrl}
                    alt={infoJob.companyName}
                  />
                </figure>
              </div>

              <div className="jobDescription">
                <p className="mt-2">{infoJob.description}</p>
                <ul className="">
                  {infoJob.tasks.map((task) => (
                    <li key={task} className="mt-4">
                      {task}{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--******************************** container for skills and projkects ********************************--> */}
        <div className="col-12 col-md-4 skills-projects-bg">
          {/* <!-- container for skills --> */}
          <div className="skillsProjectsContainer">
            <div className="col-12 d-flex flex-column flex-md-row flex-lg-row align-items-md-center">
              <div className=" col-md-2">
                <h6 className="titleSkills">Skills</h6>
              </div>
              <div className=" col-md-9">
                <hr />
              </div>
            </div>
            <div className="d-flex flex-wrap skills ">
              {data.skills.map((skill) => (
                <Skill
                  key={skill.name}
                  name={skill.name}
                  urlImage={skill.urlImage}
                />
              ))}
            </div>
          </div>
          {/* <!-- container for projects --> */}
          <div className="skillsProjectsContainer mt-4">
            <div className="col-12 d-flex flex-column flex-md-row flex-lg-row align-items-md-center">
              <div className=" col-md-4">
                <h6 className="titleProjects">Some Projects</h6>
              </div>
              <div className=" col-md-8">
                <hr />
              </div>
            </div>
            <div className="d-flex flex-wrap projects">
              {data.projects.map((project) => (
                <Project
                  key={project.name}
                  name={project.name}
                  urlImage={project.urlImage}
                  urlRepo={project.urlRepo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
