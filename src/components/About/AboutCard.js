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
            {t.greeting}{" "}
            <span className="accent">Nguyen Le</span> {t.from}{" "}
            <span className="accent">Ho Chi Minh City, Vietnam</span>.
            <br />
            {t.workPrefix}{" "}
            <span className="accent">{t.workRole}</span> {t.workAt}{" "}
            <span className="accent">ShopeePay</span>
            {t.workSuffixPre}{" "}
            <span className="accent">Data Engineer</span>{" "}
            {t.workSuffixPost}
            <br />
            {t.eduPrefix}{" "}
            <span className="accent">{t.eduDegree}</span> {t.eduFrom}{" "}
            <span className="accent">{t.eduSchool}</span> — GPA:{" "}
            <span className="accent">{t.gpa}</span>.
            <br />
            <br />
            {t.hobbiesIntro}
          </p>

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
