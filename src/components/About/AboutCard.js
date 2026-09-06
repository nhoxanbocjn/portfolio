import React from "react";
import Card from "react-bootstrap/Card";
import { BsDiamondFill } from "react-icons/bs";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function AboutCard() {
  const lang = useLang();
  const t = translations[lang].about.bio;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t.intro}
          </p>

          <p style={{ textAlign: "justify" }}>
            {t.rolePrefix}{" "}
            <span className="accent">{t.role}</span> {t.roleAt}{" "}
            <span className="accent">{t.company}</span> {t.roleSuffix}{" "}
            {t.skillsPrefix}{" "}
            <span className="accent">{t.skillsBold}</span> {t.skillsSuffix}
          </p>

          <p style={{ textAlign: "justify" }}>
            {t.eduPrefix}{" "}
            <span className="accent">{t.eduDegree}</span> {t.eduFrom}{" "}
            <span className="accent">{t.eduSchool}</span> — GPA:{" "}
            <span className="accent">{t.gpa}</span>.
          </p>

          <p>{t.hobbiesIntro}</p>

          <ul>
            {t.hobbies.map((hobby, i) => (
              <li key={i} className="about-activity">
                <BsDiamondFill style={{ fontSize: "0.5em", verticalAlign: "middle", marginRight: "8px" }} className="accent" /> {hobby}
              </li>
            ))}
          </ul>

          <p className="accent">{t.quote}</p>
          <footer className="blockquote-footer">{t.author}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;