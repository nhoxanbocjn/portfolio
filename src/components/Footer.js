import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { useLang } from "../context/LangContext";
import translations from "../translations";

const SOCIAL_LINKS = [
  { href: "https://github.com/nhoxanbocjn", Icon: AiFillGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/nguyen-le-5b06b4252/", Icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://x.com/Nguyen252845", Icon: FaXTwitter, label: "X (Twitter)" },
  { href: "mailto:letukhoinguyen@gmail.com", Icon: SiGmail, label: "Email" },
];

function Footer() {
  const lang = useLang();
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  return (
    <footer className="footer-wrap">
      <div className="footer">
        <div className="footer-group">
          <span className="footer-text">{t.designed}</span>
          <span className="footer-sep">•</span>
          <span className="footer-text">
            {t.copyright} {year} {t.name}
          </span>
          <span className="footer-sep">•</span>
          <ul className="footer-icons">
            {SOCIAL_LINKS.map(({ href, Icon, label }) => (
              <li key={label} className="social-icons">
                <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;