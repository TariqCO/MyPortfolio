import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Button from "../personelComp/Button";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

/* -------------------- SYSTEM CONTEXT -------------------- */
const SYSTEM_CONTEXT = `
You are Tariq’s personal AI assistant.

Provide concise, professional, recruiter-focused answers
about Tariq Rasheed only.

Skills: MERN Stack, React, Tailwind CSS, ShadCN UI
Projects: Crypto Prediction App, Hotel Booking Platform
Experience: Web Developer Intern at IWS Solutions
`;

/* -------------------- SECTION CONFIG -------------------- */
const SECTION_MAP = {
  about: "#about",
  skills: "#skills",
  projects: "#projects",
  experience: "#experience",
  contact: "#contact",
};

const extractSections = (text) =>
  Object.keys(SECTION_MAP).filter((key) =>
    text.toLowerCase().includes(key)
  );

/* -------------------- SECTION BUTTON -------------------- */
const SectionButton = ({ label, href, onClick }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    style={{
      padding: "6px 14px",
      borderRadius: 999,
      background: "linear-gradient(135deg,#1f1f1f,#0f0f0f)",
      border: "1px solid #333",
      fontSize: 12,
      color: "#fff",
      textDecoration: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      cursor: "pointer",
    }}
  >
    {label} <span style={{ opacity: 0.6 }}>→</span>
  </motion.a>
);

/* -------------------- MAIN COMPONENT -------------------- */
export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);
  const endRef = useRef(null);

  /* Auto scroll */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Send message */
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");
    setMessages((p) => [...p, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      const res = await model.generateContent(
        `${SYSTEM_CONTEXT}\nUser: ${userText}\nAI:`
      );

      setMessages((p) => [
        ...p,
        { role: "ai", text: res.response.text() },
      ]);
    } catch {
      setMessages((p) => [
        ...p,
        { role: "ai", text: "Unable to respond right now." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            style={{
              position: "fixed",
              bottom: 24,
              left: 24,
              zIndex: 50,
            }}
            onClick={() => setOpen(true)}
          >
            <Button />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            style={{
              position: "fixed",
              bottom: 24,
              left: 24,
              width: 360,
              height: 480,
              background: "#0a0a0a",
              color: "#fff",
              borderRadius: 22,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 50,
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "14px 18px",
                background: "#111",
                fontWeight: 600,
                borderBottom: "1px solid #222",
              }}
            >
              Tariq’s AI Assistant
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                padding: 14,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {messages.map((msg, i) => {
                const sections = extractSections(msg.text);

                return (
                  <div
                    key={i}
                    style={{
                      alignSelf:
                        msg.role === "user"
                          ? "flex-end"
                          : "flex-start",
                      background:
                        msg.role === "user" ? "#fff" : "#161616",
                      color:
                        msg.role === "user" ? "#000" : "#fff",
                      padding: "10px 14px",
                      borderRadius: 16,
                      maxWidth: "75%",
                      fontSize: 14,
                    }}
                  >
                    <p
                      style={{
                        marginBottom: sections.length ? 8 : 0,
                      }}
                    >
                      {msg.text}
                    </p>

                    {msg.role === "ai" && sections.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          gap: 8,
                          flexWrap: "wrap",
                        }}
                      >
                        {sections.map((sec) => (
                          <SectionButton
                            key={sec}
                            label={`Go to ${sec}`}
                            href={SECTION_MAP[sec]}
                            onClick={() => setOpen(false)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {loading && (
                <span style={{ fontSize: 12, color: "#777" }}>
                  Typing…
                </span>
              )}

              <div ref={endRef} />
            </div>

            {/* Input + Submit */}
            <div
              style={{
                padding: 12,
                borderTop: "1px solid #222",
                background: "#111",
                display: "flex",
                gap: 8,
              }}
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && sendMessage()
                }
                placeholder="Ask about Tariq…"
                style={{
                  flex: 1,
                  resize: "none",
                  padding: 12,
                  borderRadius: 14,
                  background: "#1a1a1a",
                  color: "#fff",
                  border: "1px solid #333",
                  outline: "none",
                  fontSize: 14,
                }}
              />

              <button
                onClick={sendMessage}
                style={{
                  background: "#1a1a1a",
                  border: "1px solid #333",
                  color: "#fff",
                  borderRadius: 14,
                  padding: "0 14px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"# MyPortfolio" 
