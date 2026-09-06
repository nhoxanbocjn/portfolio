import React from "react";
import { Container } from "react-bootstrap";
import Reveal from "../Reveal/Reveal";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Github from "../About/Github";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function Skills() {
  const lang = useLang();
  const t = translations[lang].skills;
  const about = translations[lang].about;

  return (
    <Container fluid className="skills-section" id="skills">
      <Container>
        <Reveal>
          <h1 className="project-heading">
            {t.heading} <strong className="accent">{t.headingAccent} </strong>
          </h1>
        </Reveal>

        <Techstack />

        <Reveal>
          <h1 className="project-heading">
            {about.toolsTitle}{" "}
            <strong className="accent">{about.toolsTitlePurple} </strong>
          </h1>
        </Reveal>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default Skills;
