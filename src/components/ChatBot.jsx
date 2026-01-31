import { motion, AnimatePresence } from "framer-motion";
import { GoogleGenAI } from "@google/genai";
import { useEffect, useRef, useState } from "react";
import Button from "../personelComp/Button";
import { SendHorizontal } from "lucide-react";

/* -------------------- AI INIT -------------------- */
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

/* -------------------- SYSTEM CONTEXT -------------------- */
const SYSTEM_CONTEXT = `
You are an AI assistant answering questions about Tariq Rasheed only.

Core Behavior:
- Prioritize clarity, relevance, and smooth conversational flow.
- Answer exactly what the user asks; avoid information overload.
- Expand details gradually if the user asks follow-up questions.
- Keep responses natural, human, and recruiter-friendly.

Information Control Rules:
- Do NOT introduce skills, projects, experience, or background unless the user asks.
- If the question is broad (e.g., "Tell me about Tariq"), give a short, high-level answer
  and wait for follow-up prompts before going deeper.
- Mention:
  • Skills → only when asked about skills, tech stack, or tools
  • Projects → only when asked about projects or work samples
  • Experience → only when asked about experience, internships, or companies
  • Education or learning path → only when asked
  • Learning, mindset, or future goals → only when asked

Availability:
Currently not available.

Knowledge Base (use only when relevant):

Education:
- Diploma in Front-End Development from Computer Collegiate
- Backend technologies learned through self-directed learning and real-world practice

Skills:
- MERN Stack (MongoDB, Express.js, React.js, Node.js)
- React.js with Tailwind CSS and ShadCN UI
- TypeScript
- Docker (currently learning)
- Exploring advanced technologies and modern development tools

Experience:
- Web Developer Intern at IWS Solutions
- Contributed to production features including a Bulk Product Editor

Projects:
- AI-powered Crypto Prediction Platform
- Full-stack Hotel Booking Application
- Blogging Platform for Tech Enthusiasts
- Portfolio Builder platform with dashboard-based customization

Learning & Mindset:
- Strong interest in AI-driven software engineering
- Actively learning Docker and advanced tools
- Enjoys working with strong engineering teams
- Values learning from senior developers and mentors
- Focused on contributing skills, solving real problems, and continuous improvement

Response Style:
- Calm, confident, and concise
- Honest and grounded (no exaggeration)
- Professional tone with a human touch
`;

/* -------------------- SECTION CONFIG -------------------- */
const sectionMaps = {
  about: "#about",
  skills: "#skills",
  projects: "#projects",
  experience: "#experience",
  contact: "#contact",
};

const extractSections = (text) =>
  Object.keys(sectionMaps).filter((key) => text.toLowerCase().includes(key));

/* -------------------- SECTION BUTTON -------------------- */
const SectionButton = ({ label, href, onClick }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="px-3 py-1 rounded-full text-xs text-white border border-[#333]
               bg-gradient-to-br from-[#1f1f1f] to-[#0f0f0f]
               inline-flex items-center gap-1"
  >
    {label} <span className="opacity-60">→</span>
  </motion.a>
);

/* -------------------- MAIN COMPONENT -------------------- */
export default function ChatBot() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  const chatRef = useRef(null);
  const endRef = useRef(null);

  /* Auto scroll */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, loading]);

  /* Close on outside click */
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setChatBoxOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  /* AI Response with Error Handling */
  const aiResponseFnc = async () => {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${SYSTEM_CONTEXT}\nUser: ${user}\nAI:`,
      });
      return response.text || "Sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("AI Error:", error);
      return "Oops! Something went wrong. Please try again later.";
    }
  };

  /* Submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.trim()) return;

    setChatHistory((prev) => [...prev, { chat: "user", message: user }]);
    setUser("");
    setLoading(true);

    const aiReply = await aiResponseFnc();

    setLoading(false);
    setChatHistory((prev) => [...prev, { chat: "ai", message: aiReply }]);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 z-50 w-[95vw] sm:w-auto">
      <AnimatePresence>
        {chatBoxOpen ? (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
            className="w-full sm:w-[340px] h-[70vh] sm:h-[480px]
                       flex flex-col rounded-2xl
                       bg-[#1a1a1ad9] backdrop-blur-xl
                       border border-[#2f2f2f]
                       shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2f2f2f] text-white">
              <div>
                <h2 className="text-sm font-semibold">AI Assistant</h2>
                <p className="text-xs text-gray-400">
                  {loading ? "Typing..." : "Online"}
                </p>
              </div>
              <button
                onClick={() => setChatBoxOpen(false)}
                className="text-gray-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2 overscroll-contain">
              {chatHistory.map((chat, i) => {
                const sections = extractSections(chat.message);

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm text-white
                    ${
                      chat.chat === "user"
                        ? "self-start bg-gradient-to-br from-[#00a99d] to-[#008a7a]"
                        : "self-end bg-[#2a2a2a]"
                    }`}
                  >
                    <p>{chat.message}</p>

                    {chat.chat === "ai" && sections.length > 0 && (
                      <div className="flex gap-2 flex-wrap mt-2">
                        {sections.map((sec) => (
                          <SectionButton
                            key={sec}
                            label={`Go to ${sec}`}
                            href={sectionMaps[sec]}
                            onClick={() => setChatBoxOpen(false)}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="self-end bg-[#2a2a2a] text-white px-3 py-2 rounded-xl text-sm"
                >
                  AI is thinking…
                </motion.div>
              )}
              <div ref={endRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 p-3 border-t border-[#2f2f2f]"
            >
              <input
                type="text"
                placeholder="Ask something about Tariq..."
                className="flex-1 bg-[#262626] text-white text-base sm:text-sm
                           rounded-xl px-4 py-3 sm:py-2 outline-none
                           focus:ring-1 focus:ring-[#00a99d]"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-br from-[#00a99d] to-[#008a7a]
                           p-3 sm:p-2 rounded-xl text-white hover:opacity-90"
              >
                <SendHorizontal size={18} />
              </button>
            </form>
          </motion.div>
        ) : (
          <div onClick={() => setChatBoxOpen(true)}>
            <Button />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
