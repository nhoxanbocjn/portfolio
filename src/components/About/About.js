import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Reveal from "../Reveal/Reveal";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";
import Github from "./Github";

function About() {
  const lang = useLang();
  const t = translations[lang].about;

  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Reveal>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={8}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t.title}{" "}
                <strong className="accent">{t.titlePurple}</strong>
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
        </Reveal>

        <Reveal>
          <h1 className="project-heading">
            {t.skillsTitle}{" "}
            <strong className="accent">{t.skillsTitlePurple} </strong>
          </h1>
          <Techstack />
        </Reveal>

        <Reveal>
          <h1 className="project-heading">
            <strong className="accent">{t.toolsTitle}</strong>{" "}
            {t.toolsTitlePurple}
          </h1>
          <Toolstack />
        </Reveal>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
