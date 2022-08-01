import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import ProjectCard from "./Projectsea";
import Particle from "./Particle";

import capstone2 from "../assets/Projects/Capstone2.JPG";
import capstone1 from "../assets/Projects/Capstone1.JPG";
import capstone3 from "../assets/Projects/Capstone3.JPG";



export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container >
        <h1 id="iconcolor" style={{textAlign: 'center'}}>
          My Projects 
        </h1>
        <p style={{ color: "white", textAlign: 'center' }}>
          below are the most recent works that I have completed
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col  md={4}>
          
            <ProjectCard

              imgPath={capstone1}
              isBlog={false}
              title="My First Portfolio Page"
              description="My first capstone project with Zuitt.co. This project showcases what I have learned in coding HTML, CSS, and Bootstrap."
              ghLink="https://gitlab.com/batch-189taruc/s13-s14/capstone1"
              demoLink="https://taruc-jerome.github.io/webportfolio/"
            />
           
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capstone2}
              isBlog={false}
              title="E-commerce API"
              description="This project shows what I have learned in Database Design, Node.js, Express.js, NoSQL, MongoDB, and other skills for Back-End Web Development"
              ghLink="https://gitlab.com/batch-189taruc/capstone2/capstone"
              demoLink="https://immense-peak-78641.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={capstone3}
              isBlog={false}
              title="Mock E-commerce website"
              description="This project showcases my Full-Stack Development Skills. Collecting all learned skill in the bootcamp, plus using ReactJS. This is a mock Spice Market website, with the use of multiple reactjs packages."
              ghLink="https://gitlab.com/batch-189taruc/capstone3/taruc-ecommerce-app"
              demoLink="https://capstone3-taruc-ecommerce-app.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}
