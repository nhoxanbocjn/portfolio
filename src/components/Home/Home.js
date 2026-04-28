import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar_new.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
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

            <Col xs={12} md={4}>
              <Tilt>
                <img src={homeLogo} alt="home pic" className="img-fluid" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Container  fluid className="home-foot-section pt-0"  id = "home" >
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{t.findMe}</h1>
            <p>
              {t.connectPrefix}{" "}
              <span className="accent">{t.connectBold} </span>
              {t.connectSuffix}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nhoxanbocjn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nguyen-le-5b06b4252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Nguyen252845"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:letukhoinguyen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
