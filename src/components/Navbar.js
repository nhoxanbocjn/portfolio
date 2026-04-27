import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  LuHome,
  LuUser,
  LuLayoutGrid,
  LuFileText,
  LuNewspaper,
  LuSun,
  LuMoon,
} from "react-icons/lu";
import TypingText from "./NavType";
import { useLang } from "../context/LangContext";
import translations from "../translations";

function NavBar({ theme, toggleTheme, lang, toggleLang }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const currentLang = useLang();
  const t = translations[currentLang].nav;

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span className="prompt">~ </span>
          <span>
            <TypingText text="nguy3n_l3" />
          </span>
          <span className="cursor-blink">█</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <LuHome style={{ marginBottom: "2px" }} /> {t.home}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <LuUser style={{ marginBottom: "2px" }} /> {t.about}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <LuLayoutGrid style={{ marginBottom: "2px" }} /> {t.projects}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <LuFileText style={{ marginBottom: "2px" }} /> {t.resume}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="http://blog.nhoxanboc.work/"
                onClick={() => updateExpanded(false)}
              >
                <LuNewspaper style={{ marginBottom: "2px" }} /> {t.knowledge}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="theme-btn">
              <Button
                onClick={toggleTheme}
                className="theme-btn-inner"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <LuSun style={{ fontSize: "1.2em" }} />
                ) : (
                  <LuMoon style={{ fontSize: "1.2em" }} />
                )}
              </Button>
            </Nav.Item>

            <Nav.Item className="lang-btn">
              <Button
                onClick={toggleLang}
                className="lang-btn-inner"
                aria-label="Toggle language"
              >
                <span className={lang === "en" ? "lang-active" : "lang-inactive"}>EN</span>
                <span className="lang-sep"> | </span>
                <span className={lang === "vi" ? "lang-active" : "lang-inactive"}>VI</span>
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
