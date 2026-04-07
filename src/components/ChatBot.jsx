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
    <>
      {/* CHAT BOX WRAPPER */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2
                  sm:left-8 sm:translate-x-0 z-50
                  w-[95vw] sm:w-auto"
      >
        <AnimatePresence>
          {chatBoxOpen && (
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
                  <div className="self-end bg-[#2a2a2a] text-white px-3 py-2 rounded-xl text-sm">
                    AI is thinking…
                  </div>
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
          )}
        </AnimatePresence>
      </div>

      {/* BUTTON WRAPPER */}
      {!chatBoxOpen && (
        <div className="fixed bottom-8 left-8 sm:bottom-8 sm:left-8 z-50">
          <div onClick={() => setChatBoxOpen(true)}>
            <Button />
          </div>
        </div>
      )}
    </>
  );
}
