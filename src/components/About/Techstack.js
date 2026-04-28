import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPowerbi,
  SiApacheairflow,
  SiDbt,
  SiPandas,
  SiMicrosoftsqlserver,
  SiGooglesheets,
  SiMicrosoftexcel,
  SiMetabase,
  SiLooker,
  SiGooglecloud,
  SiAmazonaws,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
} from "react-icons/si";
// import Python from "../../Assets/TechIcons/Python.svg";
// import SQL from "../../Assets/TechIcons/SQL.svg";
// import Git from "../../Assets/TechIcons/Git.svg";
// import Docker from "../../Assets/TechIcons/Docker.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"24px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver fontSize={"24px"} />
        <div className="tech-icons-text">MSSQL Server</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApacheairflow fontSize={"24px"} />
        <div className="tech-icons-text">Airflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDbt fontSize={"24px"} />
        <div className="tech-icons-text">dbt</div>
      </Col>
            <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws fontSize={"24px"} />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud fontSize={"24px"} />
        <div className="tech-icons-text">GCP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize={"24px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLooker fontSize={"24px"} />
        <div className="tech-icons-text">Looker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMetabase fontSize={"24px"} />
        <div className="tech-icons-text">Metabase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas fontSize={"24px"} />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglesheets fontSize={"24px"} />
        <div className="tech-icons-text">Google Sheets</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel fontSize={"24px"} />
        <div className="tech-icons-text">Excel</div>
      </Col>
    </Row>
  );
}

export default Techstack;
