import React, { Fragment, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { arrProjects } from "./ProjectsArray";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Project.css";

const Project = () => {
  AOS.init();
  return (
    <Fragment>
      <div className="projects">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h2 className="my-3 fs-1 h3">Projects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                tempore officiis suscipit saepe at vero odio minus
              </p>
            </div>
          </div>
          {arrProjects.map((project) => (
            <div
              className="col-md-4"
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Card className="shadow my-3 mx-1 Primary">
                <Card.Body>
                  <Card.Img variant="top" src={project.img} />
                  <div className="crad_text pt-3">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.desc}</Card.Text>
                    <div className="mb-3 lang_images">
                      {project.languages.map((img, ind) => (
                        <img src={img} className="img-fluid px-2" key={ind} />
                      ))}
                    </div>
                    <div className="d-flex">
                      <Button
                        variant="btn code"
                        href={project.github}
                        target="_blank"
                      >
                        Github
                      </Button>
                      <Button
                        variant="btn demo"
                        href={project.link}
                        target="_blank"
                        className="mx-3"
                      >
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Project;
