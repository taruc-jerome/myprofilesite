import React from "react";
import { Col, Row, Card} from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSublime,
  DiBootstrap,
  DiCss3,
  DiHeroku,
  DiHtml5,
  DiDatabase

} from "react-icons/di";
import {
  SiGitlab,
  SiVercel,
  SiExpress,
  SiPostman
} from "react-icons/si";

function Techstack() {
  return (
    <>
    <h1 id="iconcolor" style={{textAlign: 'center'}}> My Skills</h1>
    
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiJavascript1 id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Javascript
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>


      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiReact id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        ReactJS
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>




     <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiNodejs id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        NodeJS
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>


      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiMongodb id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        MongoDB
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>


       <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiSublime id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Sublime
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>


      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiGit id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Git
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiBootstrap id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Bootstrap
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>

      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiCss3 id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Css
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiHtml5 id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        HTML
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>

      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <SiExpress id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        ExpressJS
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiDatabase id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        NoSQL
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>

      
    </Row>

    <h1 id="iconcolor" style={{textAlign: 'center'}}> Tools</h1>
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <DiHeroku id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Heroku
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <SiPostman id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Postman
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>
      <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <SiVercel id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Vercel
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>
       <Col id="iconcolor" xs={4} md={2} className="tech-icons">
      <Card id="card-bg2" style={{textAlign: 'center',  marginTop: '25px'}}>
        <SiGitlab id= "marginleft" size="70px"/>
        <Card.Body>
        <Card.Subtitle id="iconcolor">
        Gitlab
        </Card.Subtitle>
        </Card.Body>
        </Card>
      </Col>


    </Row>
    </>
  );
}

export default Techstack;