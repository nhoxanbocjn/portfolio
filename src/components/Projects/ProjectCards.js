import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      ) : (
        <div
          className="project-card-icon-header"
          style={{ background: props.headerColor || "linear-gradient(135deg, #1a1a2e, #16213e)" }}
        >
          {props.headerIcon}
        </div>
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto", paddingTop: "14px" }}>
          {props.techStack && props.techStack.length > 0 && (
            <div className="project-tech-stack" style={{ justifyContent: "center", marginBottom: "12px" }}>
              {props.techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            {!props.isBlog && props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank" className="project-card-buttons">
                <BsGithub /> &nbsp; GitHub
              </Button>
            )}
            {!props.isBlog && props.demoLink && (
              <Button
                className="project-card-buttons"
                variant="primary"
                href={props.demoLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
