import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Send,
  Sparkles,
  X,
  Bot,
  User,
  Phone,
  Calculator,
  RefreshCw,
  Zap,
  Minimize2,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  Code,
  Search,
  Palette,
  Cpu
} from "lucide-react";

type ServiceCategory = "main" | "ads" | "web" | "seo" | "creative" | "revops" | "contact_form" | "quote_form" | "submitted";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  time: string;
  categoryChips?: { label: string; key: ServiceCategory | string; icon?: any }[];
  ticketData?: {
    type: string;
    name?: string;
    emailOrPhone?: string;
    service?: string;
    budget?: string;
    message?: string;
  };
}

export default function ZystraChatbot() {
  const [location] = useLocation();
  if (location === "/contact") return null;

  const [isOpen, setIsOpen] = useState(false);
  const [hasHovered, setHasHovered] = useState(false);
  const [isMascotHovered, setIsMascotHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<ServiceCategory>("main");
  const [selectedSubService, setSelectedSubService] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 350);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Form states
  const [contactForm, setContactForm] = useState({ name: "", emailPhone: "", goal: "" });
  const [quoteForm, setQuoteForm] = useState({
    service: "Meta & Google Ads",
    budget: "$2,000 - $5,000",
    timeline: "Within 2 Weeks",
    contactInfo: ""
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Hi! I'm **Zyra**, your Zystra AI Growth Strategist. How can we accelerate your brand today? Choose a category below to explore our services:",
      time: "Just now",
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to top when opening chat window
  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  // Scroll to bottom only when new user/bot messages arrive
  useEffect(() => {
    if (isOpen && messages.length > 1) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isTyping]);

  const addBotMessage = (text: string, delay = 500, ticketData?: any) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: "bot",
          text,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          ticketData
        }
      ]);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        sender: "user",
        text,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      }
    ]);
  };

  // Dispatch Email function (Formats structured email & triggers mailto + clipboard)
  const dispatchEmail = ({
    type,
    name,
    emailOrPhone,
    service,
    budget,
    timeline,
    message
  }: {
    type: string;
    name?: string;
    emailOrPhone?: string;
    service?: string;
    budget?: string;
    timeline?: string;
    message?: string;
  }) => {
    const subject = encodeURIComponent(`[Zystra Inquiry - ${type}] from ${name || emailOrPhone || "Website Visitor"}`);
    const bodyLines = [
      `=== ZYSTRA INQUIRY BRIEF ===`,
      `Inquiry Type: ${type}`,
      name ? `Client Name: ${name}` : null,
      emailOrPhone ? `Contact Info: ${emailOrPhone}` : null,
      service ? `Target Service: ${service}` : null,
      budget ? `Estimated Budget: ${budget}` : null,
      timeline ? `Target Timeline: ${timeline}` : null,
      message ? `Message / Requirements:\n${message}` : null,
      `Timestamp: ${new Date().toLocaleString()}`,
      `============================`
    ].filter(Boolean).join("\n");

    const mailtoUrl = `mailto:info@zystra.in?subject=${subject}&body=${encodeURIComponent(bodyLines)}`;
    
    try {
      window.open(mailtoUrl, "_blank");
    } catch (e) {
      console.log("Mailto triggered", e);
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(bodyLines).catch(() => {});
    }

    setCurrentCategory("submitted");
    addBotMessage(
      `🎉 Your brief has been formatted and dispatched to **info@zystra.in**! Our senior strategist will review your goals and respond within 24 hours.`,
      700,
      { type, name, emailOrPhone, service: service || selectedSubService, budget, message }
    );
  };

  // Conversational Drill-down Handler
  const handleCategorySelect = (key: string, label: string) => {
    addUserMessage(label);

    if (key === "main") {
      setCurrentCategory("main");
      setSelectedSubService(null);
      addBotMessage("Explore our core growth categories below:");
    } else if (key === "ads") {
      setCurrentCategory("ads");
      addBotMessage("🎯 **Performance Marketing & Paid Ads**\nPaid advertising is the fastest lever to scale ROAS & revenue. Which ad channel do you want to dominate?");
    } else if (key === "web") {
      setCurrentCategory("web");
      addBotMessage("💻 **Web & Mobile Engineering**\nHigh-converting web platforms and custom mobile apps designed for extreme performance. What are you looking to build?");
    } else if (key === "seo") {
      setCurrentCategory("seo");
      addBotMessage("🔍 **SEO & Search Dominance**\nCapture intent-driven buyers searching for your business. Which search channel do you want to conquer?");
    } else if (key === "creative") {
      setCurrentCategory("creative");
      addBotMessage("🎨 **Branding, Visuals & Video Shoot**\nVisual positioning defines market leaders. How can our creative studio elevate your brand?");
    } else if (key === "revops") {
      setCurrentCategory("revops");
      addBotMessage("⚡ **RevOps & AI Automation**\nAutomate manual workflows, sync CRM funnels, and scale revenue ops efficiently. What system do you need?");
    } else if (key === "contact_form") {
      setCurrentCategory("contact_form");
      addBotMessage("📞 **Direct Callback Inquiry**\nPlease share your contact details below so our senior strategist can reach out directly.");
    } else if (key === "quote_form") {
      setCurrentCategory("quote_form");
      addBotMessage("📊 **Instant Project Quotation**\nConfigure your estimated scope, budget tier, and contact info for a custom proposal.");
    } else {
      // Sub-service selected!
      setSelectedSubService(key);
      addBotMessage(
        `📌 **${key}**\nWe specialize in end-to-end execution, data tracking, and campaign optimization for ${key}.\n\nWould you like an instant quotation or a direct callback for ${key}?`
      );
    }
  };

  const handleSendCustomMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = inputText.trim();
    if (!text) return;

    addUserMessage(text);
    setInputText("");

    dispatchEmail({
      type: "Custom Query",
      service: selectedSubService || "General Inquiry",
      message: text
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.emailPhone.trim()) return;

    addUserMessage(`Name: ${contactForm.name || "Client"}\nContact: ${contactForm.emailPhone}\nGoal: ${contactForm.goal || selectedSubService || "Growth Consultation"}`);
    
    dispatchEmail({
      type: "Contact Request",
      name: contactForm.name,
      emailOrPhone: contactForm.emailPhone,
      service: selectedSubService || "General Callback",
      message: contactForm.goal
    });

    setContactForm({ name: "", emailPhone: "", goal: "" });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.contactInfo.trim()) return;

    addUserMessage(`Project Scope:\n• Service: ${quoteForm.service}\n• Budget: ${quoteForm.budget}\n• Timeline: ${quoteForm.timeline}\n• Contact: ${quoteForm.contactInfo}`);

    dispatchEmail({
      type: "Project Quotation Request",
      emailOrPhone: quoteForm.contactInfo,
      service: quoteForm.service,
      budget: quoteForm.budget,
      timeline: quoteForm.timeline,
      message: `Quotation requested for ${quoteForm.service} with budget tier ${quoteForm.budget}.`
    });
  };

  const handleResetChat = () => {
    setCurrentCategory("main");
    setSelectedSubService(null);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: "👋 Hi! I'm **Zyra**, your Zystra AI Growth Strategist. How can we accelerate your brand today? Choose a category below:",
        time: "Just now",
      }
    ]);
  };

  return (
    <div
      className={`fixed right-1.5 sm:right-2.5 z-[980] select-none font-sans flex flex-col items-end max-w-full pointer-events-none transition-all duration-300 ${
        isScrolled ? "bottom-19 sm:bottom-22" : "bottom-3 sm:bottom-4"
      }`}
    >
      
      {/* ── INTERACTIVE CHAT WINDOW MODAL (Positioned to the left of Zyra so Zyra remains 100% visible) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -20 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-0 right-20 sm:right-24 lg:right-28 w-[calc(100vw-110px)] sm:w-[375px] md:w-[395px] max-w-[85vw] h-[calc(100vh-100px)] max-h-[520px] min-h-[340px] bg-white rounded-3xl border-2 border-purple-500/30 shadow-[0_20px_50px_rgba(110,1,156,0.3)] flex flex-col overflow-hidden text-slate-900 z-50 transform-gpu pointer-events-auto"
          >
            {/* Header Bar (Zystra Deep Purple Gradient) */}
            <div className="p-3.5 bg-gradient-to-r from-[#5b0182] via-[#6e019c] to-[#3b0057] text-white border-b border-purple-700/50 flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-full bg-white/20 p-0.5 shadow-md flex items-center justify-center shrink-0 border border-white/30">
                  <img
                    src="/chatbot/1.webp"
                    alt="Zyra AI"
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-black text-white tracking-tight">Zyra</h3>
                    <span className="text-[10px] font-mono text-purple-200 font-bold">| Zystra AI Assistant</span>
                  </div>
                  <p className="text-[10px] text-purple-200/90 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online Strategy Consultant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleResetChat}
                  title="Reset Conversation"
                  className="p-1.5 rounded-full hover:bg-white/20 text-purple-100 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                  className="p-1.5 rounded-full hover:bg-white/20 text-purple-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body (Scrollable Previous Messages Stream - Isolated Mouse Scroll) */}
            <div
              ref={chatContainerRef}
              onWheel={(e) => e.stopPropagation()}
              className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/70 font-sans text-xs min-h-0 [overscroll-behavior:contain] [overscroll-behavior-y:contain] scrollbar-thin scrollbar-thumb-purple-300"
              style={{
                overflowY: "auto",
                touchAction: "pan-y",
                overscrollBehavior: "contain",
                overscrollBehaviorY: "contain"
              }}
            >
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-[#6e019c] p-0.5 shrink-0 flex items-center justify-center shadow-sm overflow-hidden border border-purple-300">
                      <img
                        src="/chatbot/1.webp"
                        alt="Zyra"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                  )}

                  <div className="max-w-[85%] flex flex-col gap-0.5">
                    <div
                      className={`p-3 rounded-2xl text-[12px] leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-[#6e019c] to-purple-700 text-white rounded-br-none font-medium whitespace-pre-line"
                          : "bg-white border border-purple-200/80 text-slate-800 rounded-bl-none font-normal shadow-sm"
                      }`}
                    >
                      {msg.text}

                      {/* Ticket Confirmation Box */}
                      {msg.ticketData && (
                        <div className="mt-2.5 p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-[11px] font-mono space-y-1 text-purple-950">
                          <div className="flex items-center justify-between font-bold border-b border-purple-200 pb-1 text-[#6e019c]">
                            <span>INQUIRY TICKET #{Math.floor(1000 + Math.random() * 9000)}</span>
                            <span className="text-emerald-600 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> DISPATCHED
                            </span>
                          </div>
                          {msg.ticketData.name && <div>• Name: {msg.ticketData.name}</div>}
                          {msg.ticketData.emailOrPhone && <div>• Contact: {msg.ticketData.emailOrPhone}</div>}
                          {msg.ticketData.service && <div>• Service: {msg.ticketData.service}</div>}
                          {msg.ticketData.budget && <div>• Budget: {msg.ticketData.budget}</div>}
                          <div className="text-[10px] text-slate-500 pt-1">
                            Dispatched to <strong className="text-purple-900">info@zystra.in</strong>
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[8.5px] text-slate-400 px-1 font-mono">{msg.time}</span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white shrink-0 flex items-center justify-center">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2 items-center text-slate-500 text-xs"
                >
                  <div className="w-7 h-7 rounded-full bg-[#6e019c] p-0.5 shrink-0 flex items-center justify-center shadow-sm overflow-hidden border border-purple-300">
                    <img
                      src="/chatbot/1.webp"
                      alt="Zyra"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="px-3.5 py-2 rounded-2xl bg-white border border-purple-200 flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              {/* ── CONVERSATIONAL ACTION CHIPS: LEVEL 1 MAIN CATEGORIES ── */}
              {currentCategory === "main" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-1.5 space-y-1.5"
                >
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Select a Broad Service Category:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {[
                      { key: "ads", label: "🎯 Paid Ads & Performance Marketing", desc: "Meta, Google, YouTube & Omnichannel ROAS" },
                      { key: "web", label: "💻 Web & Mobile Development", desc: "Next.js Web Apps, E-Commerce & iOS/Android" },
                      { key: "seo", label: "🔍 SEO & Search Dominance", desc: "Google Map Pack, Enterprise SEO & PR" },
                      { key: "creative", label: "🎨 Branding & Creative Strategy", desc: "Logo, Social Media & Video Production" },
                      { key: "revops", label: "⚡ RevOps & AI Automation", desc: "AI Lead Agents, CRM & CRO Optimization" },
                      { key: "quote_form", label: "📊 Get Instant Project Quotation", desc: "Configure service, budget & timeline" },
                      { key: "contact_form", label: "📞 Request Callback / Direct Inquiry", desc: "Direct callback from senior strategist" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => handleCategorySelect(item.key, item.label)}
                        className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200/90 hover:border-purple-600 transition-all flex items-center justify-between group cursor-pointer shadow-sm"
                      >
                        <div>
                          <div className="font-bold text-[11.5px] text-slate-900 group-hover:text-[#6e019c] transition-colors">{item.label}</div>
                          <div className="text-[9.5px] text-slate-500">{item.desc}</div>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:text-[#6e019c] group-hover:translate-x-1 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── SUB-CATEGORY DRILL-DOWN: ADS ── */}
              {currentCategory === "ads" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Select Paid Ad Solution:
                  </span>
                  {[
                    "Meta Ads (Facebook & Instagram)",
                    "Google Ads (PPC Intent & Search)",
                    "YouTube Video Ad Scaling",
                    "Omnichannel Full-Stack Performance"
                  ].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleCategorySelect(sub, sub)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-600 font-bold text-[11px] text-slate-800 transition-all flex justify-between items-center group shadow-sm cursor-pointer"
                    >
                      <span>{sub}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategorySelect("main", "⬅️ Main Menu")}
                    className="w-full py-1.5 text-center text-[10px] font-mono text-purple-700 hover:underline"
                  >
                    ⬅️ Back to Main Menu
                  </button>
                </motion.div>
              )}

              {/* ── SUB-CATEGORY DRILL-DOWN: WEB ── */}
              {currentCategory === "web" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Select Web / Mobile Engineering:
                  </span>
                  {[
                    "Bespoke Next.js & Web Apps",
                    "High-Converting Landing Pages",
                    "E-Commerce Storefronts (Shopify/Custom)",
                    "Custom Mobile Apps (iOS & Android)"
                  ].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleCategorySelect(sub, sub)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-600 font-bold text-[11px] text-slate-800 transition-all flex justify-between items-center group shadow-sm cursor-pointer"
                    >
                      <span>{sub}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategorySelect("main", "⬅️ Main Menu")}
                    className="w-full py-1.5 text-center text-[10px] font-mono text-purple-700 hover:underline"
                  >
                    ⬅️ Back to Main Menu
                  </button>
                </motion.div>
              )}

              {/* ── SUB-CATEGORY DRILL-DOWN: SEO ── */}
              {currentCategory === "seo" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Select Search Engine Solution:
                  </span>
                  {[
                    "Google Maps & Local SEO Dominance",
                    "National & Enterprise SEO",
                    "SEO Technical Audit & CRO",
                    "AI Content Automation & Digital PR"
                  ].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleCategorySelect(sub, sub)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-600 font-bold text-[11px] text-slate-800 transition-all flex justify-between items-center group shadow-sm cursor-pointer"
                    >
                      <span>{sub}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategorySelect("main", "⬅️ Main Menu")}
                    className="w-full py-1.5 text-center text-[10px] font-mono text-purple-700 hover:underline"
                  >
                    ⬅️ Back to Main Menu
                  </button>
                </motion.div>
              )}

              {/* ── SUB-CATEGORY DRILL-DOWN: CREATIVE ── */}
              {currentCategory === "creative" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Select Creative Solution:
                  </span>
                  {[
                    "Logo Design & Brand Identity",
                    "Social Media Management & Growth",
                    "Cinematic Studio Video Shoot",
                    "High-ROAS Ad Creatives & Reels"
                  ].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleCategorySelect(sub, sub)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-600 font-bold text-[11px] text-slate-800 transition-all flex justify-between items-center group shadow-sm cursor-pointer"
                    >
                      <span>{sub}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategorySelect("main", "⬅️ Main Menu")}
                    className="w-full py-1.5 text-center text-[10px] font-mono text-purple-700 hover:underline"
                  >
                    ⬅️ Back to Main Menu
                  </button>
                </motion.div>
              )}

              {/* ── SUB-CATEGORY DRILL-DOWN: REVOPS ── */}
              {currentCategory === "revops" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Select RevOps Solution:
                  </span>
                  {[
                    "AI Agent Workflows & Lead Automation",
                    "Revenue Operations & CRM Setup",
                    "Conversion Rate Optimization (CRO)"
                  ].map((sub) => (
                    <button
                      key={sub}
                      onClick={() => handleCategorySelect(sub, sub)}
                      className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-600 font-bold text-[11px] text-slate-800 transition-all flex justify-between items-center group shadow-sm cursor-pointer"
                    >
                      <span>{sub}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                  <button
                    onClick={() => handleCategorySelect("main", "⬅️ Main Menu")}
                    className="w-full py-1.5 text-center text-[10px] font-mono text-purple-700 hover:underline"
                  >
                    ⬅️ Back to Main Menu
                  </button>
                </motion.div>
              )}

              {/* ── SUB-SERVICE SELECTION ACTIONS ── */}
              {selectedSubService && currentCategory !== "contact_form" && currentCategory !== "quote_form" && currentCategory !== "submitted" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <span className="text-[9.5px] font-mono uppercase tracking-wider text-purple-900 font-bold block px-1">
                    Actions for {selectedSubService}:
                  </span>
                  <button
                    onClick={() => handleCategorySelect("quote_form", `📊 Get Quotation for ${selectedSubService}`)}
                    className="w-full text-left p-2.5 rounded-xl bg-[#6e019c] hover:bg-purple-800 text-white font-bold text-[11px] transition-all flex justify-between items-center shadow-md cursor-pointer"
                  >
                    <span>📊 Get Quotation / Estimate</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleCategorySelect("contact_form", `📞 Contact Us for ${selectedSubService}`)}
                    className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-purple-50 border border-purple-300 text-purple-950 font-bold text-[11px] transition-all flex justify-between items-center shadow-sm cursor-pointer"
                  >
                    <span>📞 Request Direct Callback</span>
                    <ChevronRight className="w-3.5 h-3.5 text-purple-600" />
                  </button>
                </motion.div>
              )}

              {/* ── INTERACTIVE FORM: CONTACT US ── */}
              {currentCategory === "contact_form" && (
                <motion.form
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onSubmit={handleContactSubmit}
                  className="p-3 rounded-2xl bg-white border border-purple-200 space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-purple-950">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#6e019c]" /> Direct Callback Form
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentCategory("main")}
                      className="text-[10px] text-purple-600 hover:underline font-mono"
                    >
                      Cancel
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-purple-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-purple-600"
                  />

                  <input
                    type="text"
                    required
                    placeholder="Email or Phone Number *"
                    value={contactForm.emailPhone}
                    onChange={(e) => setContactForm({ ...contactForm, emailPhone: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-purple-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-purple-600"
                  />

                  <textarea
                    rows={2}
                    placeholder="Your requirements or notes..."
                    value={contactForm.goal}
                    onChange={(e) => setContactForm({ ...contactForm, goal: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-purple-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-purple-600 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#6e019c] to-purple-700 hover:from-purple-800 hover:to-purple-900 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Dispatch Brief to info@zystra.in</span>
                  </button>
                </motion.form>
              )}

              {/* ── INTERACTIVE FORM: GET QUOTATION ── */}
              {currentCategory === "quote_form" && (
                <motion.form
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onSubmit={handleQuoteSubmit}
                  className="p-3 rounded-2xl bg-white border border-purple-200 space-y-2 shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-purple-950">
                    <span className="flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-[#6e019c]" /> Instant Project Estimate
                    </span>
                    <button
                      type="button"
                      onClick={() => setCurrentCategory("main")}
                      className="text-[10px] text-purple-600 hover:underline font-mono"
                    >
                      Cancel
                    </button>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-purple-900 block mb-0.5">Target Service</label>
                    <select
                      value={quoteForm.service}
                      onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-xl bg-slate-50 border border-purple-200 text-slate-900 text-xs focus:outline-none focus:border-purple-600"
                    >
                      <option>Meta & Google Ads</option>
                      <option>Next.js Web & Mobile Apps</option>
                      <option>Google Maps & Local SEO</option>
                      <option>Logo & Brand Identity</option>
                      <option>Full Omnichannel Scale</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-purple-900 block mb-0.5">Estimated Budget</label>
                    <div className="grid grid-cols-3 gap-1">
                      {["<$2,000", "$2K - $5K", "$5K - $15K+"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setQuoteForm({ ...quoteForm, budget: b })}
                          className={`py-1 px-1 rounded-lg text-[10px] font-bold border transition-all ${
                            quoteForm.budget === b
                              ? "bg-[#6e019c] border-purple-900 text-white shadow-sm"
                              : "bg-slate-50 border-purple-200 text-slate-700 hover:border-purple-400"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Your Email or Phone *"
                    value={quoteForm.contactInfo}
                    onChange={(e) => setQuoteForm({ ...quoteForm, contactInfo: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-purple-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-purple-600"
                  />

                  <button
                    type="submit"
                    className="w-full py-2 rounded-xl bg-gradient-to-r from-[#6e019c] to-purple-700 hover:from-purple-800 hover:to-purple-900 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-300" />
                    <span>Submit & Email Quote Brief</span>
                  </button>
                </motion.form>
              )}

              {/* ── AFTER SUBMISSION ── */}
              {currentCategory === "submitted" && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="pt-1 space-y-1.5">
                  <a
                    href="https://wa.me/916200048924?text=Hi%20Zystra%20team,%20I%20just%20submitted%20a%20brief%20through%20Zyra."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md block text-center"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Chat Instantly on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleResetChat}
                    className="w-full py-1.5 rounded-xl bg-white border border-purple-300 text-purple-900 hover:bg-purple-50 text-xs font-mono font-bold shadow-sm"
                  >
                    ⬅️ Return to Main Menu
                  </button>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer Text Input Bar */}
            <form
              onSubmit={handleSendCustomMessage}
              className="p-2.5 bg-white border-t border-purple-200 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask Zyra any custom question..."
                className="flex-1 px-3.5 py-2 rounded-2xl bg-slate-100 border border-purple-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-purple-600 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2 rounded-2xl bg-[#6e019c] hover:bg-purple-700 disabled:opacity-30 text-white transition-all shadow-sm cursor-pointer disabled:cursor-not-allowed shrink-0"
                title="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── ANIMATED CHARACTER MASCOT LAUNCHER ── */}
      <div className="relative flex items-center">
        
        {/* Preload hover image to guarantee instant hover transition */}
        <img src="/chatbot/2.webp" className="hidden" alt="" />

        {/* ── ZYSTRA BRAND PURPLE COMIC TEXT UI (OMG! 3D Block Style with Zystra Color Palette) ── */}
        <AnimatePresence>
          {!isOpen && isMascotHovered && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -10, y: 12 }}
              animate={{ opacity: 1, scale: 1, rotate: -4, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, rotate: -10, y: 12 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              onClick={() => setIsOpen(true)}
              className="absolute -top-10 -right-3 sm:-top-12 sm:-right-4 pointer-events-auto cursor-pointer select-none z-50 filter drop-shadow-[0_8px_20px_rgba(0,0,0,0.85)]"
            >
              <svg viewBox="0 0 230 80" className="w-48 sm:w-56 h-20 sm:h-24 overflow-visible">
                <defs>
                  {/* Ben-Day Halftone Dot Pattern in Deep Violet */}
                  <pattern id="zystraHalftoneDots" x="0" y="0" width="4.5" height="4.5" patternUnits="userSpaceOnUse">
                    <circle cx="2.25" cy="2.25" r="1.1" fill="#3b0764" opacity="0.85" />
                  </pattern>

                  {/* Zystra Brand Purple-to-Violet Linear Gradient */}
                  <linearGradient id="zystraPurpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e9d5ff" />
                    <stop offset="30%" stopColor="#c084fc" />
                    <stop offset="65%" stopColor="#9333ea" />
                    <stop offset="100%" stopColor="#581c87" />
                  </linearGradient>
                </defs>

                {/* Arc Path following finger curve */}
                <path id="comicTextArc" d="M 10,70 C 45,22 145,15 215,38" fill="none" />

                {/* 1. Deep Solid Black 3D Block Shadow Layer (Extruded dx="4.5" dy="5") */}
                <text
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="11"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  className="text-base sm:text-lg font-black uppercase tracking-wider italic"
                  style={{ fontFamily: "'Bangers', 'Impact', 'Arial Black', 'Trebuchet MS', sans-serif" }}
                  dx="4.5"
                  dy="5"
                >
                  <textPath href="#comicTextArc" startOffset="48%" textAnchor="middle">
                    CHAT WITH US!
                  </textPath>
                </text>

                {/* 2. Sharp White Sticker Outline Halo */}
                <text
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="7"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  className="text-base sm:text-lg font-black uppercase tracking-wider italic"
                  style={{ fontFamily: "'Bangers', 'Impact', 'Arial Black', 'Trebuchet MS', sans-serif" }}
                >
                  <textPath href="#comicTextArc" startOffset="48%" textAnchor="middle">
                    CHAT WITH US!
                  </textPath>
                </text>

                {/* 3. Solid Black Letter Outline Border */}
                <text
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="3.5"
                  strokeLinejoin="miter"
                  strokeMiterlimit="4"
                  className="text-base sm:text-lg font-black uppercase tracking-wider italic"
                  style={{ fontFamily: "'Bangers', 'Impact', 'Arial Black', 'Trebuchet MS', sans-serif" }}
                >
                  <textPath href="#comicTextArc" startOffset="48%" textAnchor="middle">
                    CHAT WITH US!
                  </textPath>
                </text>

                {/* 4. Zystra Purple Gradient Letter Fill */}
                <text
                  fill="url(#zystraPurpleGradient)"
                  className="text-base sm:text-lg font-black uppercase tracking-wider italic"
                  style={{ fontFamily: "'Bangers', 'Impact', 'Arial Black', 'Trebuchet MS', sans-serif" }}
                >
                  <textPath href="#comicTextArc" startOffset="48%" textAnchor="middle">
                    CHAT WITH US!
                  </textPath>
                </text>

                {/* 5. Authentic Ben-Day Halftone Dot Overlay across Letter Fill */}
                <text
                  fill="url(#zystraHalftoneDots)"
                  className="text-base sm:text-lg font-black uppercase tracking-wider italic"
                  style={{ fontFamily: "'Bangers', 'Impact', 'Arial Black', 'Trebuchet MS', sans-serif", mixBlendMode: "multiply" }}
                >
                  <textPath href="#comicTextArc" startOffset="48%" textAnchor="middle">
                    CHAT WITH US!
                  </textPath>
                </text>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Character GIF / Mascot Floating Button (Direct Static Image) */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => {
            setHasHovered(true);
            setIsMascotHovered(true);
          }}
          onMouseLeave={() => setIsMascotHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Zyra AI Chatbot"
          className="relative group cursor-pointer p-0 bg-transparent border-0 outline-none pointer-events-auto"
        >
          {/* Direct Mascot Image: /chatbot/1.webp (Default) -> /chatbot/2.webp (Hover) */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center transform-gpu">
            <img
              src={isMascotHovered ? "/chatbot/2.webp" : "/chatbot/1.webp"}
              alt="Zyra AI Mascot Character"
              className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(110,1,156,0.6)] group-hover:drop-shadow-[0_12px_28px_rgba(168,85,247,0.8)] transition-all duration-200"
            />
          </div>
        </motion.button>

      </div>

    </div>
  );
}
