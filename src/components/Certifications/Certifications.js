import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

import sqlAdvancedCert from "../../Assets/Certifications/sql_advanced_certificate.jpg";
import sparkDeveloperCert from "../../Assets/Certifications/databricks_intro_spark.png";
import gh900 from "../../Assets/Certifications/gh900.jpg";
import fabrcDataEngineer from "../../Assets/Certifications/farbic_data_engineer.jpg";


// Add a new certificate by dropping its image into src/Assets/Certifications/,
// importing it above, and adding an entry here. The title/issuer/date text lives
// in src/translations/index.js under `certifications.cards` (same order as below).
const CERT_META = [
  {
    img: sqlAdvancedCert,
    // pdf: sqlAdvancedPdf,   // optional — link to the original PDF
    color: "linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%)",
  },
  {
    img: sparkDeveloperCert,
    // pdf: sparkDeveloperPdf,   // optional — link to the original PDF
    color: "linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%)",
  },
  {
    img: gh900,
    // pdf: gh900Pdf,   // optional — link to the original PDF
    color: "linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%)",
  },
  {
    img: fabrcDataEngineer,
    // pdf: fabrcDataEngineerPdf,   // optional — link to the original PDF
    color: "linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 100%)",
  }
];

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.4;

function Certifications() {
  const lang = useLang();
  const t = translations[lang].certifications;

  const [active, setActive] = useState(null); // index of cert in lightbox, or null
  const [zoom, setZoom] = useState(1);

  const openLightbox = (i) => {
    setActive(i);
    setZoom(1);
  };
  const closeLightbox = useCallback(() => setActive(null), []);

  const zoomIn = useCallback(
    () => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2))),
    []
  );
  const zoomOut = useCallback(
    () => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2))),
    []
  );
  const resetZoom = useCallback(() => setZoom(1), []);

  const go = useCallback(
    (dir) => {
      setActive((cur) => {
        if (cur === null) return cur;
        const next = (cur + dir + CERT_META.length) % CERT_META.length;
        return next;
      });
      setZoom(1);
    },
    []
  );

  // Keyboard controls while the lightbox is open.
  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "+" || e.key === "=") zoomIn();
      else if (e.key === "-") zoomOut();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, closeLightbox, go, zoomIn, zoomOut]);

  const onWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) zoomIn();
    else zoomOut();
  };

  const activeCert = active !== null ? CERT_META[active] : null;
  const activeCard = active !== null ? t.cards[active] : null;

  return (
    <Container fluid className="cert-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t.heading} <strong className="accent">{t.headingPurple} </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {CERT_META.map((meta, i) => (
            <Col key={i} md={4} className="cert-col">
              <button
                type="button"
                className="cert-card"
                onClick={() => openLightbox(i)}
                aria-label={`${t.view}: ${t.cards[i].title}`}
              >
                <div className="cert-thumb" style={{ background: meta.color }}>
                  <img src={meta.img} alt={t.cards[i].title} loading="lazy" />
                </div>
                <div
                  className="cert-preview"
                  style={{ background: meta.color }}
                  aria-hidden="true"
                >
                  <img src={meta.img} alt="" />
                </div>
                <div className="cert-card-body">
                  <h5 className="cert-card-title">{t.cards[i].title}</h5>
                  <p className="cert-card-issuer">{t.cards[i].issuer}</p>
                </div>
              </button>
            </Col>
          ))}
        </Row>
      </Container>

      {activeCert && (
        <div
          className="cert-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="cert-lb-close"
            onClick={closeLightbox}
            aria-label={t.close}
          >
            <AiOutlineClose />
          </button>

          {CERT_META.length > 1 && (
            <button
              type="button"
              className="cert-lb-nav cert-lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label={t.prev}
            >
              <IoChevronBack />
            </button>
          )}

          <figure
            className="cert-lb-figure"
            onClick={(e) => e.stopPropagation()}
            onWheel={onWheel}
          >
            <div className="cert-lb-stage">
              <img
                src={activeCert.img}
                alt={activeCard.title}
                className={`cert-lb-img${zoom > 1 ? " zoomed" : ""}`}
                style={{ transform: `scale(${zoom})` }}
                onClick={zoom > 1 ? resetZoom : zoomIn}
                draggable="false"
              />
            </div>
            <figcaption className="cert-lb-caption">
              <span className="cert-lb-title">{activeCard.title}</span>
              <span className="cert-lb-issuer">{activeCard.issuer}</span>
            </figcaption>
          </figure>

          {CERT_META.length > 1 && (
            <button
              type="button"
              className="cert-lb-nav cert-lb-next"
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label={t.next}
            >
              <IoChevronForward />
            </button>
          )}

          <div
            className="cert-lb-toolbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={zoomOut}
              disabled={zoom <= MIN_ZOOM}
              aria-label={t.zoomOut}
            >
              <AiOutlineMinus />
            </button>
            <span className="cert-lb-zoom-level">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={zoomIn}
              disabled={zoom >= MAX_ZOOM}
              aria-label={t.zoomIn}
            >
              <AiOutlinePlus />
            </button>
            {activeCert.pdf && (
              <a
                className="cert-lb-pdf"
                href={activeCert.pdf}
                target="_blank"
                rel="noreferrer"
              >
                <FiFileText /> {t.viewPdf}
              </a>
            )}
          </div>
        </div>
      )}
    </Container>
  );
}

export default Certifications;
