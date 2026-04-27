import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

const darkTheme = {
  level0: "#1a1a2e",
  level1: "#0d4a5e",
  level2: "#0a7fa0",
  level3: "#0fb8d4",
  level4: "#15cfe0",
};

const lightTheme = {
  level0: "#e4e8f4",
  level1: "#a8c5e0",
  level2: "#5b9cc7",
  level3: "#2070a8",
  level4: "#0066a8",
};

function Github() {
  const theme = useTheme();
  const lang = useLang();
  const t = translations[lang].github;

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: theme === "light" ? "#1a1a2e" : "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {t.headingPre} <strong className="accent">{t.headingAccent}</strong>
      </h1>
      <GitHubCalendar
        username="nhoxanbocjn"
        year={2026}
        blockSize={30}
        blockMargin={10}
        fontSize={20}
        theme={theme === "light" ? lightTheme : darkTheme}
      />
    </Row>
  );
}

export default Github;
