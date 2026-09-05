import React, { useEffect, useState } from "react";
import { SECTION_IDS, SECTION_NAV } from "../navSections";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

function SideNav() {
  const active = useScrollSpy(SECTION_IDS);
  const [visible, setVisible] = useState(false);
  const lang = useLang();
  const t = translations[lang].nav;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`side-nav${visible ? " side-nav-visible" : ""}`}
      aria-label="Section navigation"
    >
      {SECTION_NAV.map((item) => {
        const label = t[item.key];
        const isActive = !item.external && active === item.id;
        return (
          <a
            key={item.id}
            href={item.external ? item.href : `#${item.id}`}
            {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
            className={isActive ? "side-nav-active" : ""}
            aria-label={label}
            aria-current={isActive ? "true" : undefined}
          >
            <item.Icon size={20} />
            <span className="side-label">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default SideNav;
