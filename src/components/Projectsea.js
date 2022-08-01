import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { SiGitlab } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card id="column-bg">
      <Card.Img id="photo" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body >
        <Card.Title id="strongpurple2" style={{textAlign: 'center'}}>{props.title}</Card.Title>
        <Card.Text id="nav-text2" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <SiGitlab /> &nbsp;
          {props.isBlog ? "Blog" : "GitLab"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"View"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;