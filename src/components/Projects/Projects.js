import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {
  SiApacheairflow,
  SiPowerbi,
  SiPandas,
} from "react-icons/si";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function Projects() {
  const lang = useLang();
  const t = translations[lang].projects;

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t.heading} <strong className="accent">{t.headingPurple} </strong>
        </h1>
        <p className="project-subtext">{t.subtext}</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/nhoxanboc4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/nhoxanboc4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/nhoxanboc4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/nhoxanboc4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Language Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in suicide prevention."
              ghLink="https://github.com/nhoxanboc4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/nhoxanboc4419/Face_And_Emotion_Detection"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              headerIcon={<SiApacheairflow />}
              headerColor="linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%)"
              isBlog={false}
              title={t.cards[0].title}
              description={t.cards[0].description}
              ghLink="https://github.com/nhoxanbocjn"
              techStack={["Python", "Airflow", "PostgreSQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              headerIcon={<SiPowerbi />}
              headerColor="linear-gradient(135deg, #1a0a00 0%, #3d1f00 100%)"
              isBlog={false}
              title={t.cards[1].title}
              description={t.cards[1].description}
              ghLink="https://github.com/nhoxanbocjn"
              techStack={["Power BI", "DAX", "PBI service", "PostgreSQL"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              headerIcon={<SiPandas />}
              headerColor="linear-gradient(135deg, #0a0a2e 0%, #150e5e 100%)"
              isBlog={false}
              title={t.cards[2].title}
              description={t.cards[2].description}
              ghLink="https://github.com/nhoxanbocjn"
              techStack={["Python", "Pandas", "MS SQL", "Metabase"]}
            />
          </Col>

        </Row> 
      </Container>
    </Container>
  );
}

export default Projects;
