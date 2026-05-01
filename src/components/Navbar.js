import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiBriefcaseDuotone,
  PiReadCvLogoDuotone,
  PiNotepadDuotone,
  PiSunDuotone,
  PiMoonDuotone,
} from "react-icons/pi";
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
          <Nav className="ms-auto nav-icon-only" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => updateExpanded(false)}
                aria-label={t.home}
                data-tooltip={t.home}
              >
                <PiHouseDuotone size={22} />
                <span className="nav-label">{t.home}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                aria-label={t.about}
                data-tooltip={t.about}
              >
                <PiUserCircleDuotone size={22} />
                <span className="nav-label">{t.about}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                aria-label={t.projects}
                data-tooltip={t.projects}
              >
                <PiBriefcaseDuotone size={22} />
                <span className="nav-label">{t.projects}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                aria-label={t.resume}
                data-tooltip={t.resume}
              >
                <PiReadCvLogoDuotone size={22} />
                <span className="nav-label">{t.resume}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="http://blog.nhoxanboc.work/"
                onClick={() => updateExpanded(false)}
                aria-label={t.knowledge}
                data-tooltip={t.knowledge}
              >
                <PiNotepadDuotone size={22} />
                <span className="nav-label">{t.knowledge}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-divider" aria-hidden="true" />

            <Nav.Item>
              <Nav.Link
                as="button"
                className="nav-toggle-btn"
                onClick={toggleTheme}
                aria-label={t.theme}
                data-tooltip={t.theme}
              >
                {theme === "dark" ? (
                  <PiSunDuotone size={22} />
                ) : (
                  <PiMoonDuotone size={22} />
                )}
                <span className="nav-label">{t.theme}</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as="button"
                className="nav-toggle-btn nav-lang-btn"
                onClick={toggleLang}
                aria-label={t.language}
                data-tooltip={t.language}
              >
                <span className={lang === "en" ? "lang-active" : "lang-inactive"}>EN</span>
                <span className="lang-sep">|</span>
                <span className={lang === "vi" ? "lang-active" : "lang-inactive"}>VI</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
