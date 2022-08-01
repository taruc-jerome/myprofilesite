import React from "react";
import { Col, Row, Card} from "react-bootstrap";

import {
  SiLinkedin,
  SiGmail
} from "react-icons/si";

function AboutMe() {


  return (
    <>
    <h6 id="iconcolor" style={{textAlign: 'center'}}> Please contact me thru the links below:</h6>
    
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card  id="card-bg2" style={{textAlign: 'left',  marginTop: '25px', cursor: "pointer"}}>
        <SiGmail onClick={() => window.location = 'mailto:taruc.jeromee@gmail.com'} id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor" style={{fontSize: '11px',paddingLeft: "10px",paddingRight: "10px"}}>
        taruc.jeromee@gmail.com
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>


      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card onClick={() => window.location = 'https://www.linkedin.com/in/jerome-taruc-aa4962110/'} id="card-bg2" style={{textAlign: 'center',  marginTop: '25px', cursor: "pointer"}}>
        <SiLinkedin id= "marginleft" size="70px" style={{paddingTop: '11px'}}/>
        <Card.Body>
        <Card.Subtitle id="iconcolor" style={{fontSize: '11px',paddingLeft: "10px",paddingRight: "10px", paddingTop: '10px', paddingBottom: '3px'}}>
        My Profile
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>

    </Row>
    </>
  );
}

export default AboutMe;