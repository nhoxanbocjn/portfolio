import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Resume from "./components/Resume/ResumeNew";
import BlogCta from "./components/BlogCta/BlogCta";
import Footer from "./components/Footer";
import SideNav from "./components/SideNav/SideNav";
import BackToTop from "./components/BackToTop/BackToTop";
import Chatbot from "./components/Chatbot/Chatbot";
import { ThemeContext } from "./context/ThemeContext";
import { LangContext } from "./context/LangContext";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const toggleLang = () => {
    const next = lang === "en" ? "vi" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <div className="App" data-theme={theme}>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            lang={lang}
            toggleLang={toggleLang}
          />
          <main className="flex-grow-1">
            <Home />
            <About />
            <Projects />
            <Certifications />
            <Resume />
            <BlogCta />
          </main>
          <Footer />
          <SideNav />
          <BackToTop />
          <Chatbot />
        </div>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
