import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar_new.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function Home() {
  const lang = useLang();
  const t = translations[lang].home;

  return (
    <section style={{ position: "relative" }}>
      <Particle />
      <Container fluid className="home-section" id="home">
        <Container className="home-about-description">
          <Row>
            <Col xs={12} md={8} className="home-header">
              <h1
                style={{ paddingBottom: 10, textAlign: "center" }}
                className="heading"
              >
                {t.greeting}{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1
                className="heading-name"
                style={{ padding: 10, textAlign: "center" }}
              >
                {t.iam}
                <strong className="main-name" style={{ fontStyle: "italic" }}>
                  {" "}
                  NGUYEN LE
                </strong>
              </h1>

              <div style={{ padding: 10, textAlign: "center" }}>
                <Type />
              </div>
            </Col>

            <Col xs={12} md={4} className="hero-avatar">
              <Tilt>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
