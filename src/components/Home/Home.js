import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatar_new.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";
import Tilt from "react-parallax-tilt";


function Home() {
  return (
    <section>
      <Container fluid className="home-about-section" id="about">
        <Particle />
        <Container className="home-about-description">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 , textAlign: "center"  }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ padding: 15, textAlign: "center" }}>
                I'M
                <strong className="main-name"> 𝓝𝑮𝓤𝓨𝓔𝓝 𝑳𝓔

                </strong>
              </h1>

              <div style={{ padding: 15, textAlign: "center" }}>
                <Type  />
              </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20 }} >
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid" 
                />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nhoxanbocjn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nguyen-le-5b06b4252/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/Nguyen252845"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:letukhoinguyen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
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
