import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useLang } from "../context/LangContext";
import translations from "../translations";

const SOCIAL_LINKS = [
  { href: "https://github.com/nhoxanbocjn", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/nguyen-le-5b06b4252/", Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://x.com/Nguyen252845", Icon: FaXTwitter, label: "X (Twitter)" },
  { href: "mailto:letukhoinguyen@gmail.com", Icon: SiGmail, label: "Email" },
];

function Footer() {
  const lang = useLang();
  const t = translations[lang].footer;
  const th = translations[lang].home;
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <Container fluid className="footer-social">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>{th.findMe}</h1>
              <p>
                {th.connectPrefix}{" "}
                <span className="accent">{th.connectBold} </span>
                {th.connectSuffix}
              </p>
              <ul className="home-about-social-links">
                {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                  <li key={label} className="social-icons">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="icon-colour home-social-icons"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>{t.designed}</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>
              {t.copyright} {year} {t.name}
            </h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                <li key={label} className="social-icons">
                  <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
