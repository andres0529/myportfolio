import React, { useState } from "react";
import Project from "../../components/Project";
import Skill from "../../components/Skill";
import "./style.css";
import tailwind from "./../../assets/img/logos/tailwind.png";
import express from "./../../assets/img/logos/express.png";
import node from "./../../assets/img/logos/node.png";
import vue from "./../../assets/img/logos/vue.png";
import material from "./../../assets/img/logos/material.png";
import net from "./../../assets/img/logos/net.png";
import php from "./../../assets/img/logos/php.png";
import mongo from "./../../assets/img/logos/mongo.png";
import github from "./../../assets/img/logos/github.png";

const data = {
  skills: [
    {
      name: "HTML5",
      urlImage: require("./../../assets/img/logos/html.svg").default,
    },
    {
      name: "CSS",
      urlImage: require("./../../assets/img/logos/css.svg").default,
    },
    {
      name: "Material UI",
      urlImage: material,
    },
    {
      name: "Bootstrap",
      urlImage: require("./../../assets/img/logos/bootstrap.svg").default,
    },
    {
      name: "Tailwind CSS",
      urlImage: tailwind,
    },

    {
      name: "Javascript",
      urlImage: require("./../../assets/img/logos/javascript.svg").default,
    },
    {
      name: "ReactJS",
      urlImage: require("./../../assets/img/logos/react.svg").default,
    },
    {
      name: "VueJS",
      urlImage: vue,
    },
    {
      name: "NextJS",
      urlImage: require("./../../assets/img/logos/next.svg").default,
    },
    {
      name: "Redux",
      urlImage: require("./../../assets/img/logos/redux.svg").default,
    },

    {
      name: "Node JS",
      urlImage: node,
    },
    {
      name: "Express JS",
      urlImage: express,
    },
    {
      name: "Mongo DB",
      urlImage: mongo,
    },
    {
      name: ".NET MVC",
      urlImage: net,
    },
    {
      name: "PHP",
      urlImage: php,
    },

    {
      name: "GIT",
      urlImage: require("./../../assets/img/logos/git.svg").default,
    },
    {
      name: "GitHub",
      urlImage: github,
    },
    {
      name: "Jest",
      urlImage: require("./../../assets/img/logos/jest.svg").default,
    },
  ],

  projects: [
    {
      name: "DAH",
      urlImage: require("./../../assets/img/logos/dha.svg").default,
      urlRepo: "https://github.com/andres0529/Drive-Away-Hunger.git",
    },
    {
      name: "Georgian WIX",
      urlImage: require("./../../assets/img/logos/georgianWix.svg").default,
      urlRepo: "https://github.com/andres0529/project2.git",
    },
    {
      name: "RHBlood",
      urlImage: require("./../../assets/img/logos/rh.svg").default,
      urlRepo: "https://github.com/andres0529/rhblood.git",
    },
  ],

  experience: [
    {
      id: "bdo",
      logoUrl: require("./../../assets/img/logos/bdo.svg").default,
      companyName: "BDO Canada",
      position: "Software Developer",
      date: "May 2022 - Present",
      description: `Contributing as a Software Developer at BDO Canada, an international network of public accounting, tax, consulting, and business advisory firms. Engaged in projects to enhance internal processes and community outreach.`,
      tasks: [
        "Led the end-to-end development of the annual [Drive Away Hunger]campaign application. Utilized ReactJS components, React Router, Hooks, API Context, Bootstrap, and Material UI for frontend. Employed ASP.NET 6 and SQL for the backend.",
        "Played a pivotal role in the creation of a partner management system using Blazor and ASP.NET, contributing to optimized partner interactions.",
        "Drove the development of an internal process management application. Leveraged Tailwind CSS, ReactJS, and Microsoft Azure authentication. Implemented Git-based continuous deployment.",
      ],
    },
    {
      id: "globant",
      logoUrl: require("./../../assets/img/logos/globant.svg").default,
      companyName: "Globant",
      position: "Web UI Developer",
      date: "Dec 2020 - Nov 2021",
      description:
        "As a Web UI Developer at Globant, a globally recognized software development agency, I contributed to various aspects of client projects with a focus on delivering exceptional user interfaces. Key responsibilities included:",
      tasks: [
        "Led the migration of two AngularJS applications to ReactJS, orchestrating the complete project lifecycle. Leveraged modern technologies such as Redux, Hooks, Typescript, and Recharts to ensure seamless transition.",
        "Championed the adoption of best practices by utilizing StorybookJS and Jest for comprehensive unit testing. This approach facilitated rigorous testing of individual components prior to integration.",
        "Collaborated closely with our client, American Century Investment, to ensure project alignment and success. Regular SCRUM methodology-driven meetings were conducted to showcase project progress and gather feedback.",
        "Incorporated Tailwind CSS into UI development workflows, streamlining styling and enhancing the efficiency of the design process.",
      ],
    },
    {
      id: "paradigma",
      logoUrl: require("./../../assets/img/logos/paradigma.svg").default,
      companyName: "Paradigma Solutions",
      position: "Web Developer",
      date: "Jul 2019 - Apr 2020",
      description:
        "As a Web Developer at Paradigma Solutions, a dynamic team of programmers specializing in diverse software and web design projects, I actively contributed to various tasks and projects, including:",
      tasks: [
        "Took charge of maintaining and deploying DOT NET NUKE components for Argos Colombia pages across multiple international locations including Colombia, Honduras, USA, and Guyana.",
        "Developed engaging Single Page Apps (SPAs) using ReactJS, employing a stack that included MaterialUI and ReactHooks for a modern user experience.",
        "Contributed significantly to the creation of robust React components for web applications. Employed testing frameworks such as Jest and Husky, alongside Redux for effective application state management.",
        "Participated in the development of components within the Angular CLI framework. These components were integrated into the Kitchensink library, an internal resource for application development within the company.",
        "Contributed to a collaborative and innovative development environment, consistently meeting project goals and driving excellence in software solutions.",
      ],
    },
    {
      id: "conexcol",
      logoUrl: require("./../../assets/img/logos/conexcol.svg").default,
      companyName: "Conexcol Cloud",
      position: "Support Engineer",
      date: "Feb 2010 - Nov 2016",
      description:
        "As a Support Engineer at Conexcol Cloud, a company focused on infrastructure services, I contributed by engaging in a variety of tasks and responsibilities, including:",
      tasks: [
        "Collaborated seamlessly with the Design team to develop innovative application features using technologies such as ReactJS, Redux, and Ant Design. This collaborative approach ensured the delivery of exceptional user experiences.",
        "Demonstrated excellent problem-solving skills and strong technical acumen while directly engaging with customers to troubleshoot and resolve their technical issues, fostering positive client relationships.",
        "Led the development and deployment of the company's website, showcasing the range of services offered. Additionally, managed complex technical aspects including mail server deployment, SSL certificate installation, CAL license configuration, port manipulation, and DNS record management.",
        "Exemplified meticulous attention to detail while analyzing and diagnosing user problems. Employed test scripts, personal expertise, and strategic questioning to pinpoint and resolve issues effectively.",
        "Contributed to a dynamic and supportive team environment, leveraging a strong foundation in WordPress and PHP to enhance web development capabilities.",
        "During my tenure, I consistently met and exceeded performance expectations, actively contributing to the company's reputation for delivering high-quality technical solutions.",
      ],
    },
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
            <div className="mobile-arrows">
              <span>
                <i className="fa-solid fa-arrow-left-long fa-beat-fade fa-2xs"></i>
              </span>
              <span>
                <i className="fa-solid fa-arrow-right-long fa-beat-fade fa-2xs"></i>
              </span>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
