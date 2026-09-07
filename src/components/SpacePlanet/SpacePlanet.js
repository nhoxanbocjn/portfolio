import React, { useEffect, useRef } from "react";
import { SECTION_IDS } from "../navSections";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

import earth from "../../Assets/Planets/earth.svg";
import jupiter from "../../Assets/Planets/jupiter.svg";
import mars from "../../Assets/Planets/mars.svg";
import saturn from "../../Assets/Planets/saturn.svg";
import mercury from "../../Assets/Planets/mercury.svg";
import neptune from "../../Assets/Planets/neptune.svg";
import sun from "../../Assets/Planets/sun.svg";

import hoiAn from "../../Assets/Landmarks/hoi_an.jpg";
import eiffel from "../../Assets/Landmarks/eiffel.jpg";
import bigBen from "../../Assets/Landmarks/bigben.jpg";
import matterhorn from "../../Assets/Landmarks/matterhorn.jpg";
import windmill from "../../Assets/Landmarks/windmill.jpg";
import pisa from "../../Assets/Landmarks/pisa.jpg";
import pyramid from "../../Assets/Landmarks/pyramid.jpg";

const PLANETS = {
  about: { img: sun, effect: "sun" },
  skills: { img: mercury, effect: "mercury" },
  experience: { img: earth, effect: "earth" },
  projects: { img: mars, effect: "mars" },
  certifications: { img: jupiter, effect: "jupiter" },
  resume: { img: saturn, effect: "saturn" },
  knowledge: { img: neptune, effect: "neptune" },
};

const LANDMARKS = {
  about: { img: hoiAn, effect: "hoian" },
  skills: { img: eiffel, effect: "eiffel" },
  experience: { img: bigBen, effect: "bigben" },
  projects: { img: matterhorn, effect: "matterhorn" },
  certifications: { img: windmill, effect: "windmill" },
  resume: { img: pisa, effect: "pisa" },
  knowledge: { img: pyramid, effect: "pyramid" },
};

const PARALLAX = 0.06;

function SpacePlanet({ version = "planet" }) {
  const active = useScrollSpy(SECTION_IDS);
  const lang = useLang();
  const labels = translations[lang][version === "planet" ? "planet" : "landmark"];

  const wrapRef = useRef(null);
  const set = version === "planet" ? PLANETS : LANDMARKS;
  const item = set[active] || set.about;

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!wrapRef.current) return;
        const drift = window.scrollY * PARALLAX;
        wrapRef.current.style.setProperty("--drift", `${drift}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={`space-planet space-planet--${version}`} ref={wrapRef} aria-hidden="true">
      <div className="space-planet-inner">
        <img key={item.effect} src={item.img} alt="" className={`space-planet-img img-${item.effect}`} />
        <span className="space-planet-label">{labels[active]}</span>
      </div>
    </div>
  );
}

export default SpacePlanet;