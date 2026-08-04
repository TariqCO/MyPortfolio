import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SendHorizontal, Terminal, X } from "lucide-react";

/* -------------------- GROQ CONFIG -------------------- */
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile"; // or "mixtral-8x7b-32768"

/* -------------------- SYSTEM CONTEXT -------------------- */
const SYSTEM_CONTEXT = `
You are an AI assistant answering questions about Tariq Rasheed only.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORE BEHAVIOR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Prioritize clarity, relevance, and smooth conversational flow.
- Answer exactly what the user asks; avoid volunteering unnecessary information.
- Expand details gradually if the user asks follow-up questions.
- Keep responses calm, confident, and recruiter-friendly — no fluff, no exaggeration.
- If asked something not covered in the knowledge base, say honestly that you don't
  have that detail, and optionally point the recruiter to Tariq's contact for clarification.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INFORMATION CONTROL RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Only surface information when it's relevant to what's asked:
- Skills / tech stack    → asked about skills, tools, or technologies
- Projects               → asked about projects, work samples, or portfolio
- Experience             → asked about experience, internships, or past work
- Education              → asked about education, degrees, or learning path
- Availability           → asked about start date, hours, or schedule
- Salary / compensation  → asked about expected salary or rate
- Work style             → asked about remote/onsite, collaboration, or preferences
- Goals / growth         → asked about future plans, ambitions, or career direction
- Personality / culture  → asked about hobbies, traits, values, or team fit
- References / proof     → asked about GitHub, portfolio, or verifiable work

For broad openers like "Tell me about Tariq" — give a short, high-level summary
and wait for follow-up before going deeper.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
KNOWLEDGE BASE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

── PERSONAL ──
- Based in Karachi, Pakistan
- Calm and curious by nature; prefers depth and real understanding over surface-level knowledge
- Enjoys building side projects — not just for portfolio value, but for the problem-solving
  process itself
- Into gaming and watches a lot of tech content to stay current with trends and tools

── CONTACT & LINKS ──
- Email:     tariq.official1712@gmail.com
- Phone:     03711175464
- Portfolio: my-portfolio-three-iota-48.vercel.app
- LinkedIn:  linkedin.com/in/tariq-1712Tr
- GitHub:    github.com/TariqCO

── AVAILABILITY ──
- Currently available — can start immediately
- Open to full-time, part-time, or freelance engagements
- Available for remote work; open to onsite or hybrid in Karachi

── SALARY / RATE EXPECTATIONS ──
- Open to discussion depending on role, scope, and team
- For freelance: rates are negotiable based on project complexity and timeline
- Looking for fair, growth-oriented compensation — not chasing a number, but not
  underselling either
- If a recruiter presses for a specific figure, acknowledge it's flexible and suggest
  Tariq is best reached directly: tariq.official1712@gmail.com

── EDUCATION ──
- Diploma in Frontend Development from Computer Collegiate
- Backend, auth, and AI integration skills built through self-directed learning,
  internship experience, and hands-on project work
- No traditional CS degree — but has shipped real, full-stack production-level work

── SKILLS ──
  Languages:   JavaScript (ES6+), Python, HTML5, CSS3
  Frontend:    React.js, Tailwind CSS, ShadCN UI, Vite, Framer Motion
  Backend:     Node.js, Express.js, Socket.io, RESTful APIs
  Database:    MongoDB (Mongoose), MySQL
  Auth:        JWT, Refresh Tokens, bcrypt, RBAC
  AI / APIs:   Google Gemini API
  Tools:       Git, GitHub, Postman, VS Code
  Learning:    Docker, advanced AI-driven development workflows

── EXPERIENCE ──

  Web Developer Intern · IWS Solutions (Feb 2024 – Jan 2025)
  - Built a MERN-based Bulk Product Editor with import/export, inline editing,
    and bulk price/category update functionality
  - Developed features for a Hotel Booking Web App: booking flows, admin dashboards,
    and secure authentication
  - Delivered responsive UIs using React, Tailwind CSS, and ShadCN UI
  - Worked with MySQL and RESTful APIs in a production environment

  Freelance Web Developer · Independent (2023 – Present)
  - Designed and developed a custom Wedding Website for a client — RSVP form,
    event timeline, photo gallery, and mobile-first responsive layout
  - Managed the full project lifecycle: requirements, design, delivery, post-launch support

── PROJECTS ──

  Crypto Prediction App (MERN · Google Gemini AI · JWT Auth)
  GitHub: github.com/TariqCO/cryptoPrediction
  - Full-stack app for predicting cryptocurrency price movements with real-time
    result validation
  - Integrated Gemini AI to generate plain-language market summaries from predictions
  - JWT authentication with refresh token rotation and protected route middleware

  AI Code Reviewer (Node.js · Express · Gemini API)
  GitHub: github.com/TariqCO/ai-code-reviewer
  - AI-powered tool that accepts any code snippet and returns structured,
    actionable feedback
  - Clean Express backend handling Gemini API communication, rate limiting,
    and error responses

  Blog Application (MERN · JWT · RBAC)
  GitHub: github.com/TariqCO/blog-application
  - Full-stack blogging platform with registration, login, and full post CRUD
  - Role-Based Access Control: authors can only modify their own content
  - Refresh token rotation for secure session management

  Python Projects (github.com/TariqCO/Python-Programme)
  - Password Manager, Cab Reservation System, Store Management System
  - CLI tools built with OOP, file I/O, and data structures

── WORK STYLE & PREFERENCES ──
- Prefers remote work but is open to onsite or hybrid arrangements in Karachi
- Collaborative — enjoys working within strong engineering teams and learning from
  senior developers
- Communicates clearly and proactively; doesn't wait to ask questions when stuck
- Writes clean, maintainable code and picks up new technologies quickly
- Comfortable working independently on tasks with minimal hand-holding

── STRENGTHS ──
- Solid full-stack fundamentals: from UI to APIs to auth to database
- Real experience shipping AI-integrated features using Google Gemini API
- Strong on authentication and security: JWT, refresh token rotation, bcrypt, RBAC
- Fast learner — currently deepening Docker knowledge and exploring AI workflows
- Delivers working products, not just code

── HONEST SELF-ASSESSMENT (for "what are your weaknesses" type questions) ──
- Transparent about being early in his career — he's not a 5-year senior developer
- Has more depth in JavaScript/Node than in Python for backend production systems
- Docker is currently being learned — not yet production-proficient
- Hasn't worked on large distributed systems yet, but understands the fundamentals
  and is actively building toward that

── BEHAVIORAL / SITUATIONAL QUESTIONS ──
Use the following to answer STAR-style, "tell me about a time when..." questions:

  Handling a challenge:
  - During his internship at IWS Solutions, he was tasked with building a Bulk Product
    Editor from scratch. The requirements evolved mid-build. He adapted the architecture
    without scrapping the foundation, delivered it on time, and it became a core part
    of the product.

  Working in a team:
  - At IWS, he collaborated with the team on the Hotel Booking App — coordinating on
    shared API contracts, raising blockers early, and keeping his UI work in sync with
    backend changes made by others.

  Learning something new fast:
  - Integrated Google Gemini AI into the Crypto Prediction App without prior experience
    with that API. Read the documentation, built a working integration, and shipped it.

  Taking ownership:
  - For his freelance Wedding Website, he managed everything solo — client calls,
    design decisions, development, deployment, and post-launch fixes.

── CULTURE FIT & VALUES ──
- Believes in making a real impact, not just filling a seat
- Hungry to grow — transparent about where he is in his journey, not pretending
  to know everything
- Values teams where engineering quality is taken seriously
- Prefers environments where he can contribute meaningfully from day one and keep
  leveling up

── WHY HIRE TARIQ / CLOSING PITCH ──
- He's a practical full-stack developer who has already shipped real, working products
- Has real AI integration experience — not just buzz-word familiarity
- Brings strong security awareness (auth, RBAC, token management) that many junior
  devs overlook
- Coachable, curious, and reliable — the kind of person who grows with the team
- Available now and motivated to contribute immediately

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESPONSE STYLE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Calm, confident, and concise
- Honest and grounded — no exaggeration, no fluff
- Professional tone with a human, approachable touch
- Use plain paragraphs for conversational answers
- Use bullet points only when listing multiple distinct items (skills, projects, etc.)
- When sharing GitHub links or contact info, present them cleanly as-is
- Never fabricate details not in the knowledge base — say you don't have that info
  and direct to Tariq directly if needed
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
  <a href={href} onClick={onClick} className="cb-route">
    <span className="cb-badge">GET</span>
    {label}
  </a>
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

  /* AI Response with Groq */
  const aiResponseFnc = async () => {
    try {
      const response = await fetch(GROQ_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: SYSTEM_CONTEXT },
            { role: "user", content: user },
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`Groq API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
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
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .cb-root {
          --paper: #FAFAF9; --surface: #FFFFFF; --ink: #14161A;
          --ink-2: #6B7178; --ink-3: #9BA0A6; --line: #E4E4E1;
          --blue: #2F6FED; --blue-soft: rgba(47,111,237,0.07);
          --green: #16A34A; --green-soft: rgba(22,163,74,0.08);
          font-family: 'Inter', sans-serif;
          color: var(--ink);
        }
        .cb-mono { font-family: 'JetBrains Mono', monospace; }
        .cb-display { font-family: 'Space Grotesk', sans-serif; }

        .cb-panel {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(20,22,26,0.12);
          overflow: hidden;
        }

        .cb-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 16px;
          border-bottom: 1px solid var(--line);
          background: #FCFCFB;
        }
        .cb-head-left { display: flex; align-items: center; gap: 9px; }
        .cb-head-icon {
          width: 26px; height: 26px; border-radius: 5px;
          background: var(--ink); color: var(--paper);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cb-head-title { font-size: 0.82rem; font-weight: 600; line-height: 1.2; }
        .cb-head-status {
          font-size: 0.68rem; color: var(--ink-3);
          display: flex; align-items: center; gap: 5px;
          margin-top: 1px;
        }
        @keyframes cbPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(22,163,74,0.35); }
          50%      { box-shadow: 0 0 0 4px rgba(22,163,74,0); }
        }
        .cb-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: cbPulse 2s ease-in-out infinite; flex-shrink: 0; }
        .cb-dot.busy { background: var(--blue); }

        .cb-close {
          width: 26px; height: 26px; border-radius: 5px;
          border: 1px solid var(--line); background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          color: var(--ink-2);
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .cb-close:hover { border-color: var(--ink); color: var(--ink); }

        .cb-messages {
          background: var(--paper);
        }

        .cb-bubble {
          font-size: 0.85rem; line-height: 1.55;
          padding: 10px 13px;
          border-radius: 6px;
          max-width: 82%;
        }
        .cb-bubble.user {
          align-self: flex-end;
          background: var(--ink);
          color: var(--paper);
        }
        .cb-bubble.ai {
          align-self: flex-start;
          background: var(--surface);
          border: 1px solid var(--line);
          color: var(--ink);
        }
        .cb-role-tag {
          font-size: 0.62rem; font-weight: 600;
          text-transform: uppercase; letter-spacing: 0.05em;
          margin-bottom: 4px; display: block;
        }
        .cb-bubble.user .cb-role-tag { color: rgba(250,250,249,0.55); }
        .cb-bubble.ai .cb-role-tag { color: var(--blue); }

        .cb-route {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px;
          border: 1px solid var(--line);
          border-radius: 5px;
          background: var(--surface);
          text-decoration: none;
          color: var(--ink-2);
          font-size: 0.68rem;
          font-family: 'JetBrains Mono', monospace;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .cb-route:hover { border-color: var(--ink); color: var(--ink); }
        .cb-badge {
          font-size: 0.6rem; font-weight: 600;
          padding: 1px 5px; border-radius: 3px;
          background: var(--blue-soft); color: var(--blue);
        }

        .cb-typing {
          align-self: flex-start;
          display: flex; align-items: center; gap: 5px;
          font-size: 0.72rem; color: var(--ink-3);
          font-family: 'JetBrains Mono', monospace;
          padding: 10px 13px;
          border: 1px solid var(--line);
          border-radius: 6px;
          background: var(--surface);
        }
        @keyframes cbBlink { 0%, 100% { opacity: 0.25; } 50% { opacity: 1; } }
        .cb-typing-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--ink-3); animation: cbBlink 1s ease-in-out infinite; }
        .cb-typing-dot:nth-child(2) { animation-delay: 0.15s; }
        .cb-typing-dot:nth-child(3) { animation-delay: 0.3s; }

        .cb-inputbar {
          display: flex; align-items: center; gap: 8px;
          padding: 12px;
          border-top: 1px solid var(--line);
          background: var(--surface);
        }
        .cb-input {
          flex: 1;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 10px 12px;
          font-size: 0.84rem;
          color: var(--ink);
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.15s ease;
        }
        .cb-input::placeholder { color: var(--ink-3); }
        .cb-input:focus { border-color: var(--ink); }

        .cb-send {
          width: 38px; height: 38px; flex-shrink: 0;
          border-radius: 6px;
          background: var(--ink); color: var(--paper);
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s ease;
        }
        .cb-send:hover { background: var(--blue); }
        .cb-send:disabled { opacity: 0.4; cursor: not-allowed; }

        .cb-toggle {
          display: flex; align-items: center; gap: 9px;
          padding: 10px 16px 10px 10px;
          background: var(--ink); color: var(--paper);
          border: none; border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 6px 20px rgba(20,22,26,0.22);
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .cb-toggle:hover { transform: translateY(-2px); background: var(--blue); }
        .cb-toggle-icon {
          width: 26px; height: 26px; border-radius: 5px;
          background: rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
        }
        .cb-toggle-label {
          font-size: 0.8rem; font-weight: 500;
          display: flex; flex-direction: column; align-items: flex-start;
          line-height: 1.2;
        }
        .cb-toggle-status {
          font-size: 0.64rem;
          font-family: 'JetBrains Mono', monospace;
          color: rgba(250,250,249,0.55);
          display: flex; align-items: center; gap: 5px;
        }

        .cb-scroll::-webkit-scrollbar { width: 4px; }
        .cb-scroll::-webkit-scrollbar-thumb { background: var(--line); border-radius: 99px; }
      `}</style>

      {/* CHAT PANEL */}
      <div className="cb-root fixed bottom-8 left-1/2 -translate-x-1/2 sm:left-8 sm:translate-x-0 z-50 w-[95vw] sm:w-auto">
        <AnimatePresence>
          {chatBoxOpen && (
            <motion.div
              ref={chatRef}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="cb-panel w-full sm:w-[360px] h-[72vh] sm:h-[500px] flex flex-col"
            >
              {/* Header */}
              <div className="cb-head">
                <div className="cb-head-left">
                  <div className="cb-head-icon">
                    <Terminal size={14} />
                  </div>
                  <div>
                    <div className="cb-head-title cb-display">AI assistant</div>
                    <div className="cb-head-status">
                      <span className={`cb-dot ${loading ? "busy" : ""}`} />
                      {loading ? "generating response" : "GET /assistant · 200 OK"}
                    </div>
                  </div>
                </div>
                <button onClick={() => setChatBoxOpen(false)} className="cb-close" aria-label="Close chat">
                  <X size={13} />
                </button>
              </div>

              {/* Messages */}
              <div className="cb-messages cb-scroll flex-1 overflow-y-auto p-3 flex flex-col gap-2.5">
                {chatHistory.length === 0 && !loading && (
                  <div className="cb-mono text-[0.72rem] text-[var(--ink-3)] text-center py-6 px-4 leading-relaxed">
                    Ask anything about Tariq's stack, projects, or experience —
                    answered straight from his profile.
                  </div>
                )}

                {chatHistory.map((chat, i) => {
                  const sections = extractSections(chat.message);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                      className={`flex flex-col ${chat.chat === "user" ? "items-end" : "items-start"}`}
                    >
                      <div className={`cb-bubble ${chat.chat === "user" ? "user" : "ai"}`}>
                        <span className="cb-role-tag cb-mono">
                          {chat.chat === "user" ? "you" : "assistant"}
                        </span>
                        <p className="whitespace-pre-wrap">{chat.message}</p>
                      </div>

                      {chat.chat === "ai" && sections.length > 0 && (
                        <div className="flex gap-2 flex-wrap mt-2">
                          {sections.map((sec) => (
                            <SectionButton
                              key={sec}
                              label={`/${sec}`}
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
                  <div className="cb-typing">
                    <span className="cb-typing-dot" />
                    <span className="cb-typing-dot" />
                    <span className="cb-typing-dot" />
                  </div>
                )}
                <div ref={endRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="cb-inputbar">
                <input
                  type="text"
                  placeholder="Ask something about Tariq..."
                  className="cb-input"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
                <button type="submit" className="cb-send" disabled={!user.trim() || loading} aria-label="Send message">
                  <SendHorizontal size={16} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* TOGGLE BUTTON */}
      {!chatBoxOpen && (
        <div className="cb-root fixed bottom-8 left-8 z-50">
          <button onClick={() => setChatBoxOpen(true)} className="cb-toggle">
            <span className="cb-toggle-icon">
              <Terminal size={14} />
            </span>
            <span className="cb-toggle-label">
              Ask AI
              <span className="cb-toggle-status">
                <span className="cb-dot" /> online
              </span>
            </span>
          </button>
        </div>
      )}
    </>
  );
}
