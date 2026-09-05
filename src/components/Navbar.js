import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LuExternalLink } from "react-icons/lu";
import {
  PiSunDuotone,
  PiMoonDuotone,
} from "react-icons/pi";
import TypingText from "./NavType";
import { SECTION_IDS, SECTION_NAV } from "./navSections";
import useScrollSpy from "../hooks/useScrollSpy";
import { useLang } from "../context/LangContext";
import translations from "../translations";

function NavBar({ theme, toggleTheme, lang, toggleLang }) {
  const [expand, updateExpanded] = useState(false);
  const [scrolled, updateScrolled] = useState(false);
  const active = useScrollSpy(SECTION_IDS);
  const currentLang = useLang();
  const t = translations[currentLang].nav;

  useEffect(() => {
    const handler = () => updateScrolled(window.scrollY >= 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeMenu = () => updateExpanded(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand={false}
      className={scrolled ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <span className="prompt">~ </span>
          <span>
            <TypingText text="nguy3n_l3" />
          </span>
          <span className="cursor-blink">█</span>
        </Navbar.Brand>

        <div className="page-controls">
          <Nav.Link
            as="button"
            className="control-btn"
            onClick={toggleTheme}
            aria-label={t.theme}
            data-tooltip={t.theme}
          >
            {theme === "dark" ? (
              <PiSunDuotone size={20} />
            ) : (
              <PiMoonDuotone size={20} />
            )}
          </Nav.Link>

          <Nav.Link
            as="button"
            className="control-btn control-lang"
            onClick={toggleLang}
            aria-label={t.language}
            data-tooltip={t.language}
          >
            <span className={lang === "en" ? "lang-active" : "lang-inactive"}>EN</span>
            <span className="lang-sep">|</span>
            <span className={lang === "vi" ? "lang-active" : "lang-inactive"}>VI</span>
          </Nav.Link>
        </div>

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
          <Nav className="ms-auto nav-icon-only">
            {SECTION_NAV.map((item) => {
              const label = t[item.key];
              return (
                <Nav.Item key={item.id}>
                  <Nav.Link
                    href={item.external ? item.href : `#${item.id}`}
                    {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    onClick={closeMenu}
                    aria-label={label}
                    data-tooltip={label}
                    className={!item.external && active === item.id ? "nav-link-active" : ""}
                  >
                    <item.Icon size={22} />
                    <span className="nav-label">
                      {label}
                      {item.external && (
                        <LuExternalLink size={13} className="ms-1 external-icon" />
                      )}
                    </span>
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
