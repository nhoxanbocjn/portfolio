import React from "react";
import { Container } from "react-bootstrap";
import Reveal from "../Reveal/Reveal";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function Experience() {
  const lang = useLang();
  const t = translations[lang].experience;

  return (
    <Container fluid className="exp-section" id="experience">
      <Container>
        <Reveal>
          <h1 className="project-heading">
            {t.heading} <strong className="accent">{t.headingAccent} </strong>
          </h1>
        </Reveal>

        <Reveal>
          <div className="exp-list">
            {t.jobs.map((job, i) => (
              <div className="exp-card" key={i}>
                <div className="exp-card-head">
                  <div>
                    <h2 className="exp-card-title">{job.title}</h2>
                    <span className="exp-card-company">{job.company}</span>
                  </div>
                  <span className="exp-card-period">{job.period}</span>
                </div>
                <div className="exp-card-groups">
                  {job.groups.map((group, gi) => (
                    <div className="exp-group" key={gi}>
                      <h3 className="exp-group-title">{group.title}</h3>
                      <ul className="exp-group-list">
                        {group.items.map((item, ii) => (
                          <li key={ii}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Container>
  );
}

export default Experience;
