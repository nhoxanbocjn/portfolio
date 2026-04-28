import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home_main_img.png";
import Tilt from "react-parallax-tilt";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";


function Home2() {
  const lang = useLang();
  const t = translations[lang].home2;

  return (
    <Container fluid className="home-about-section pt-0" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description pt-0">
            <h1 style={{ fontSize: "2.6em" }}>
              {t.headingPre}{" "}
              <span className="accent">{t.headingPurple} </span>
              {t.headingPost}
            </h1>
            <p className="home-about-body">
              {t.intro}
              <br />
              <br />
              {t.skillsPrefix}
              <b className="accent"> {t.skillsBold} </b>
              {t.skillsSuffix}
              <br />
              <br />
              {t.interestsPrefix}
              <b className="accent"> {t.interestsBold} </b>
              {t.interestsSuffix}{" "}
              <b className="accent">Airflow</b>,{" "}
              <b className="accent">Dagster</b>, and{" "}
              <b className="accent">dbt</b>.
              <br />
              <br />
              {t.currentPrefix}{" "}
              <b className="accent">{t.currentRole}</b> {t.currentAt}{" "}
              <b className="accent">{t.currentCompany}</b>
              {t.currentSuffix}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
