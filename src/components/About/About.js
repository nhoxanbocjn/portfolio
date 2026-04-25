import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function About() {
  const lang = useLang();
  const t = translations[lang].about;

  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={8}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1
                style={{ fontSize: "2.1em", paddingBottom: "20px" }}
                id="about"
              >
                {t.title}{" "}
                <strong className="purple">{t.titlePurple}</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={4}
              style={{ paddingTop: "50px", paddingBottom: "50px" }}
              className="about-img"
            >
              <Tilt>
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
          <h1 className="project-heading">
            {t.skillsTitle}{" "}
            <strong className="purple">{t.skillsTitlePurple} </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">{t.toolsTitle}</strong>{" "}
            {t.toolsTitlePurple}
          </h1>
          <Toolstack />
        </Container>
      </Container>
    </>
  );
}

export default About;
