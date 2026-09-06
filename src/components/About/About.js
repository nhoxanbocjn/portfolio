import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Reveal from "../Reveal/Reveal";
import Aboutcard from "./AboutCard";
import Type from "./Type";
import avatarImg from "../../Assets/avatar_new.png";
import homeImg from "../../Assets/home_main_img.png";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function About() {
  const lang = useLang();
  const t = translations[lang].about;
  const home = translations[lang].home;

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

              <div className="home-header" style={{ textAlign: "left" }}>
                <h1 style={{ fontSize: "2.4em" }}>
                  {home.greeting}{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <div style={{ fontSize: "1.2em", marginBottom: "20px" }}>
                  <Type />
                </div>
              </div>

              <Aboutcard />
            </Col>
            <Col
              md={4}
              style={{ paddingTop: "50px", paddingBottom: "50px" }}
              className="about-img"
            >
              <Tilt>
                <img src={avatarImg} alt="avatar" className="img-fluid" />
              </Tilt>
              <Tilt>
                <img src={homeImg} alt="avatar alt" className="img-fluid about-img-alt" />
              </Tilt>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </Container>
  );
}

export default About;
