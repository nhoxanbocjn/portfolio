import React, { useState, useEffect, useRef } from "react";
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
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blog from "./components/Blog/Blog";
import Certifications from "./components/Certifications/Certifications";
import Chatbot from "./components/Chatbot/Chatbot";
import { ThemeContext } from "./context/ThemeContext";
import { LangContext } from "./context/LangContext";

const PAGE_ORDER = [
  "/",
  "/about",
  "/project",
  "/resume",
  "/certifications",
  "/blog",
];

function AnimatedRoutes() {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [direction, setDirection] = useState("next");

  // Compute direction as a side effect (after commit), not during render.
  // Mutating a ref during render is unsafe under StrictMode / concurrent
  // rendering — it can run twice per navigation in dev and desync the
  // prev/curr comparison.
  useEffect(() => {
    const prevIndex = PAGE_ORDER.indexOf(prevPathRef.current);
    const currIndex = PAGE_ORDER.indexOf(location.pathname);

    setDirection(
      prevIndex === -1 || currIndex === -1 || currIndex >= prevIndex
        ? "next"
        : "prev"
    );

    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    // overflow: hidden here keeps the flipping page contained even if
    // this component is ever nested in a scrollable panel — belt and
    // suspenders alongside the global overflow-x: hidden on body.
    <div className="book-container">
      <div
        key={location.pathname}
        className={`page-book ${direction === "next" ? "page-enter-right" : "page-enter-left"
          }`}
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

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
              <AnimatedRoutes />
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