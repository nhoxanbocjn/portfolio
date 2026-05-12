import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { LuBot, LuX, LuSend } from "react-icons/lu";
import { useLang } from "../../context/LangContext";
import translations from "../../translations";

const FAB_SIZE = 54;
const PANEL_W = 350;
const PANEL_H = 600;

function getInitialPos() {
  return {
    x: window.innerWidth - FAB_SIZE - 28,
    y: window.innerHeight - FAB_SIZE - 28,
  };
}

function Chatbot() {
  const lang = useLang();
  const t = translations[lang].chatbot;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [pos, setPos] = useState(getInitialPos);

  const messagesEndRef = useRef(null);
  const dragging = useRef(false);
  const moved = useRef(false);
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: t.welcome }]);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    moved.current = true;
    setPos({
      x: Math.max(0, Math.min(window.innerWidth - FAB_SIZE, e.clientX - offset.current.x)),
      y: Math.max(0, Math.min(window.innerHeight - FAB_SIZE, e.clientY - offset.current.y)),
    });
  }, []);

  const onMouseUp = useCallback(() => { dragging.current = false; }, []);

  const onTouchMove = useCallback((e) => {
    if (!dragging.current) return;
    moved.current = true;
    const touch = e.touches[0];
    setPos({
      x: Math.max(0, Math.min(window.innerWidth - FAB_SIZE, touch.clientX - offset.current.x)),
      y: Math.max(0, Math.min(window.innerHeight - FAB_SIZE, touch.clientY - offset.current.y)),
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [onMouseMove, onMouseUp, onTouchMove]);

  const onFabPointerDown = (e) => {
    dragging.current = true;
    moved.current = false;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    offset.current = { x: clientX - pos.x, y: clientY - pos.y };
    e.preventDefault();
  };

  const onFabClick = () => {
    if (moved.current) return;
    setIsOpen((o) => !o);
  };

  const openAbove = pos.y > window.innerHeight / 2;
  const alignRight = pos.x > window.innerWidth / 2;
  const panelStyle = openAbove ? { bottom: FAB_SIZE + 12, top: "auto" } : { top: FAB_SIZE + 12, bottom: "auto" };
  const alignStyle = alignRight ? { right: 0, left: "auto" } : { left: 0, right: "auto" };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input.trim() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await axios.post("/api/chat", { messages: next });
      setMessages([...next, { role: "assistant", content: res.data.reply }]);
    } catch {
      setMessages([...next, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendSuggestion = (text) => {
    if (loading) return;
    const userMsg = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setLoading(true);
    axios.post("/api/chat", { messages: next })
      .then((res) => setMessages([...next, { role: "assistant", content: res.data.reply }]))
      .catch(() => setMessages([...next, { role: "assistant", content: t.error }]))
      .finally(() => setLoading(false));
  };

  const showSuggestions = messages.length === 1 && messages[0].role === "assistant" && !loading;

  return (
    <div className="chatbot-wrapper" style={{ left: pos.x, top: pos.y }}>
      <button
        className="chatbot-fab"
        onMouseDown={onFabPointerDown}
        onTouchStart={onFabPointerDown}
        onClick={onFabClick}
        aria-label={isOpen ? t.ariaClose : t.ariaOpen}
      >
        {isOpen ? <LuX /> : <LuBot />}
      </button>

      {isOpen && (
        <div
          className="chatbot-panel"
          style={{ ...panelStyle, ...alignStyle, width: Math.min(PANEL_W, window.innerWidth - 16) }}
        >
          <div className="chatbot-header">
            <span>{t.title}</span>
            <button onClick={() => setIsOpen(false)} aria-label={t.ariaClose}>
              <LuX />
            </button>
          </div>

          <div
            className="chatbot-messages"
            style={{ maxHeight: Math.min(PANEL_H - 110, window.innerHeight - 160) }}
          >
            {messages.map((m, i) => (
              <div key={i} className={`chatbot-msg chatbot-msg--${m.role}`}>
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="chatbot-msg chatbot-msg--assistant chatbot-typing">...</div>
            )}
            {showSuggestions && (
              <div className="chatbot-suggestions">
                {t.suggestions.map((s, i) => (
                  <button key={i} className="chatbot-suggestion-chip" onClick={() => sendSuggestion(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-row">
            <textarea
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              rows={1}
              disabled={loading}
            />
            <button
              className="chatbot-send"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send"
            >
              <LuSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
