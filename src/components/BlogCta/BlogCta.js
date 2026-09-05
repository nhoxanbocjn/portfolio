import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LuPenLine, LuArrowUpRight } from "react-icons/lu";
import Reveal from "../Reveal/Reveal";
import { BLOG_URL } from "../../constants";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function BlogCta() {
  const lang = useLang();
  const t = translations[lang].blogCta;

  return (
    <Container fluid className="blog-cta-section" id="blog">
      <Container>
        <Reveal>
          <Row className="blog-cta-card" style={{ justifyContent: "center" }}>
            <Col md={10} lg={8} className="text-center">
              <div className="blog-cta-icon">
                <LuPenLine />
              </div>
              <h1 className="blog-cta-heading">
                {t.heading} <strong className="accent">{t.headingAccent}</strong>
              </h1>
              <p className="blog-cta-subtitle">{t.subtitle}</p>
              <a
                className="blog-cta-btn"
                href={BLOG_URL}
                target="_blank"
                rel="noreferrer"
              >
                {t.cta} <LuArrowUpRight />
              </a>
            </Col>
          </Row>
        </Reveal>
      </Container>
    </Container>
  );
}

export default BlogCta;
