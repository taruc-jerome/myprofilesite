import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import laptopImg from "../assets/aboutme.svg";
import workExperience from "../assets/workexperience.svg";

function About() {
  return (
    <Container className="about-section">
      
      <Container >
        <Row  style={{ justifyContent: "center", padding: "10px" }}>
          <Col 
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 id="nav-text" style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong id="strongpurple">Me</strong>
            </h1>
            <Card id="card-bg">
      <Card.Body >

        <blockquote >
          <p id="nav-text" style={{ textAlign: "center" }}>
            Hi , I am <span >Jerome Taruc </span>
            from <span > Bulacan, Philippines.</span>
            <br />I completed the MERN stack coding bootcamp in <a href="https://zuitt.co/">Zuitt.co.</a> I decided to do a career shift from being a Loans/Compliance processing officer.
            <br />
            <br />
            Outside of work, I do enjoy:
          </p>
          <ul id="nav-text">
            <li className="about-activity">
               Classical, Metal, Surf music
            </li>
            <li className="about-activity">
               Reading books (about cosmic horror, etc)
            </li>
            <li className="about-activity">
               Biking, and playing computer games.
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      {/*2nd part*/}
    <Row  style={{ justifyContent: "center", padding: "10px" }}>
    <Col
            md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={workExperience} alt="about" className="img-fluid" />
          </Col>
          <Col 
            md={7}
            style={{
              justifyContent: "right",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >

            <h1 id="nav-text" style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: 'right'}}>
              Work <strong id="strongpurple">Experience</strong>
            </h1>
            <Card id="card-bg">
      <Card.Body >
        <Card.Subtitle id="nav-text">
        Credit Assessor/Loans Compliance Officer
        </Card.Subtitle>
        <Card.Subtitle id="nav-text">
       Car and Mortgage Department
        </Card.Subtitle>
        <Card.Text>
          <ul id="nav-text">
            <li>
               Senior/SME to both departments
            </li>
            <li>
               6 years 9 months of service
            </li>
            <li>
               Company: Firstmac Pty Ltd (firstmac.com.au)
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          
        </Row>
        
      </Container>
    </Container>
  );
}

export default About;