import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home_main_img.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section pt-0" id="about" >
      <Container>
        <Row>
          <Col md={8} className="home-about-description pt-0">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m an Analytics Engineer & Data Analyst passionate about
              transforming raw data into actionable insights that drive
              business decisions.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  SQL, Python, and Power BI{" "}
                </b>
              </i>
              — building dashboards, data pipelines, and analytical solutions
              at scale.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Data Engineering, Business Intelligence,{" "}
                </b>
              </i>
              and building reliable ETL/ELT workflows with tools like{" "}
              <b className="purple">Airflow</b>,{" "}
              <b className="purple">Dagster</b>, and{" "}
              <b className="purple">dbt</b>.
              <br />
              <br />
              Currently working as a Data Analyst at{" "}
              <b className="purple">ShopeePay Digital Wallet</b>, delivering
              data-driven value in fintech — from pipeline automation to A/B
              testing and customer segmentation.
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
