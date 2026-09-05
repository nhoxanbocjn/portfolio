import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/CV.PDF";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Reveal from "../Reveal/Reveal";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const lang = useLang();
  const t = translations[lang].resume;

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages: total }) {
    setNumPages(total);
  }

  return (
    <Container fluid className="resume-section" id="resume">
      <Container>
        <Reveal>
          <h1 className="project-heading">
            {t.heading} <strong className="accent">{t.headingAccent}</strong>
          </h1>
        </Reveal>

        <Row className="resume">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center flex-column align-items-center"
          >
            {Array.from({ length: numPages || 0 }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t.download}
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
