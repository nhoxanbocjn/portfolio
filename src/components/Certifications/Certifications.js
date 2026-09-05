import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import Reveal from "../Reveal/Reveal";
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
// importing it above, and adding an entry here. The title/issuer/time text lives
// in src/translations/index.js under `certifications.cards` (same order as below).
const CERT_META = [
  {
    img: sqlAdvancedCert,
    // pdf: sqlAdvancedPdf,   // optional — link to the original PDF
  },
  {
    img: sparkDeveloperCert,
    // pdf: sparkDeveloperPdf,   // optional — link to the original PDF
  },
  {
    img: gh900,
    // pdf: gh900Pdf,   // optional — link to the original PDF
  },
  {
    img: fabrcDataEngineer,
    // pdf: fabrcDataEngineerPdf,   // optional — link to the original PDF
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
    <Container fluid className="cert-section" id="certifications">
      <Container>
        <Reveal>
          <h1 className="project-heading">
            {t.heading} <strong className="accent">{t.headingPurple} </strong>
          </h1>
        </Reveal>
        <Reveal>
          <div className="cert-list">
            {CERT_META.map((meta, i) => (
              <button
                key={i}
                type="button"
                className="cert-row"
                onClick={() => openLightbox(i)}
                aria-label={`${t.view}: ${t.cards[i].title}`}
              >
                <span className="cert-row-time">{t.cards[i].time}</span>
                <span className="cert-row-info">
                  <span className="cert-row-title">{t.cards[i].title}</span>
                  <span className="cert-row-issuer">{t.cards[i].issuer}</span>
                </span>
                <span className="cert-row-thumb">
                  <img src={meta.img} alt={t.cards[i].title} loading="lazy" />
                </span>
              </button>
            ))}
          </div>
        </Reveal>
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
