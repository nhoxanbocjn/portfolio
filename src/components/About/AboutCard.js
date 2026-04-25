import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m{" "}
            <span className="purple">Le Tu Khoi Nguyen</span> from{" "}
            <span className="purple">Ho Chi Minh City, Vietnam</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Data Analyst</span> at{" "}
            <span className="purple">ShopeePay</span>.
            <br />I hold a Bachelor of{" "}
            <span className="purple">Management Information System</span> from{" "}
            <span className="purple">
              University of Economics Ho Chi Minh City (UEH)
            </span>{" "}
            — GPA: <span className="purple">3.73 / 4.0</span>.
            <br />
            <br />
            Outside of data, I love engaging in activities that keep me sharp
            and curious:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Data & Building Pipelines
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games & Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Places
            </li>
          </ul>

          <p className="purple">
            "Turn data into decisions that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Le Tu Khoi Nguyen</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
