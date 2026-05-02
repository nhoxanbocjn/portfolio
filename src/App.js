import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog/Blog";
import Chatbot from "./components/Chatbot/Chatbot";
import { ThemeContext } from "./context/ThemeContext";
import { LangContext } from "./context/LangContext";

function App() {
  const [load, upadateLoad] = useState(true);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [lang, setLang] = useState(
    () => localStorage.getItem("lang") || "en"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

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
        <Router>
          <div className="App" data-theme={theme} id={load ? "no-scroll" : "scroll"}>
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              lang={lang}
              toggleLang={toggleLang}
            />
            <ScrollToTop />
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
            <Footer />
            <Chatbot />
          </div>
        </Router>
      </LangContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
