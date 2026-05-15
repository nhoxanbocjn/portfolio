import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {
  SiApacheairflow,
  SiPowerbi,
  SiPandas,
  SiBitcoin,
  SiReact,
} from "react-icons/si";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

const PROJECT_META = [
  {
    icon: <SiApacheairflow />,
    color: "linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%)",
    // ghLink: "https://github.com/nhoxanbocjn",
    techStack: ["Python", "Airflow", "PostgreSQL"],
  },
  {
    icon: <SiPowerbi />,
    color: "linear-gradient(135deg, #1a0a00 0%, #3d1f00 100%)",
    // ghLink: "https://github.com/nhoxanbocjn",
    techStack: ["Power BI", "DAX", "PBI service", "PostgreSQL"],
  },
  {
    icon: <SiPandas />,
    color: "linear-gradient(135deg, #0a0a2e 0%, #150e5e 100%)",
    // ghLink: "https://github.com/nhoxanbocjn",
    techStack: ["Python", "Pandas", "MS SQL", "Metabase"],
  },
  {
    icon: <SiBitcoin />,
    color: "linear-gradient(135deg, #1a1000 0%, #4d3000 100%)",
    demoLink: "https://crypto.nhoxanboc.work",
    techStack: ["React", "CoinGecko API", "RSI", "MACD"],
  },
  {
    icon: <SiReact />,
    color: "linear-gradient(135deg, #001a2e 0%, #003d5c 100%)",
    ghLink: "https://github.com/nhoxanbocjn/portfolio",
    // demoLink: "https://nhoxanboc.work",
    techStack: ["React", "Vercel", "React-Bootstrap"],
  },
];

function Projects() {
  const lang = useLang();
  const t = translations[lang].projects;
  const [view, setView] = useState("card");

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t.heading} <strong className="accent">{t.headingPurple} </strong>
        </h1>
        <p className="project-subtext">{t.subtext}</p>

        <div className="project-view-toggle">
          <button
            className={`view-toggle-btn${view === "card" ? " active" : ""}`}
            onClick={() => setView("card")}
            aria-label="Card view"
          >
            <LuLayoutGrid />
          </button>
          <button
            className={`view-toggle-btn${view === "list" ? " active" : ""}`}
            onClick={() => setView("list")}
            aria-label="List view"
          >
            <LuList />
          </button>
        </div>

        {view === "card" ? (
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {PROJECT_META.map((meta, i) => (
              <Col key={i} md={4} className="project-card">
                <ProjectCard
                  headerIcon={meta.icon}
                  headerColor={meta.color}
                  title={t.cards[i].title}
                  description={t.cards[i].description}
                  ghLink={meta.ghLink}
                  demoLink={meta.demoLink}
                  techStack={meta.techStack}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="project-list">
            {PROJECT_META.map((meta, i) => (
              <div key={i} className="project-list-item">
                <div
                  className="project-list-icon"
                  style={{ background: meta.color }}
                >
                  {meta.icon}
                </div>
                <div className="project-list-body">
                  <h5 className="project-list-title">{t.cards[i].title}</h5>
                  <p className="project-list-desc">{t.cards[i].description}</p>
                  <div className="project-tech-stack">
                    {meta.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                {(meta.ghLink || meta.demoLink) && (
                  <div className="project-list-actions" style={{ display: "flex", gap: "10px" }}>
                    {meta.ghLink && (
                      <Button
                        className="project-card-buttons"
                        variant="primary"
                        href={meta.ghLink}
                        target="_blank"
                      >
                        <BsGithub /> &nbsp; GitHub
                      </Button>
                    )}
                    {meta.demoLink && (
                      <Button
                        className="project-card-buttons"
                        variant="primary"
                        href={meta.demoLink}
                        target="_blank"
                      >
                        <CgWebsite /> &nbsp; Demo
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Projects;
