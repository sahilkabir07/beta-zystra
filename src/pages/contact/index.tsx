import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Globe,
  Plus,
  Minus,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Building
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/shared/SEO";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactPage() {
  // Page initialization
  useEffect(() => {
    document.documentElement.classList.remove("dark");

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.4,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.scrollTo(0, 0);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
    description: ""
  });
  const [descLength, setDescLength] = useState(0);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "description") {
      if (value.length <= 800) {
        setFormData(prev => ({ ...prev, [name]: value }));
        setDescLength(value.length);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        purpose: "",
        description: ""
      });
      setDescLength(0);
      setAttachedFile(null);
    }, 1500);
  };

  // Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const faqs: FAQItem[] = [
    {
      question: "How quickly will I hear back after contacting Zystra?",
      answer: "We respond to every inquiry within one business day. For urgent requests, calling us directly is the fastest way to connect."
    },
    {
      question: "Do I need to know exactly which service I need before reaching out?",
      answer: "No. Many clients reach out with just a goal or a problem — our team will recommend the right mix of services after understanding your business."
    },
    {
      question: "Does Zystra work with businesses outside India?",
      answer: "Yes. We've delivered projects for international clients, including in the UAE, and are equipped to work across time zones."
    },
    {
      question: "Is the initial consultation free?",
      answer: "Yes. We review your current digital presence and share our recommended approach before any commitment is required."
    }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Zystra",
    "url": "https://zystra.in/contact",
    "description": "Get in touch with Zystra, an AI-powered digital marketing agency. Reach out for a free consultation and reply within 24 hours.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zystra",
      "url": "https://zystra.in",
      "telephone": "+916200048924",
      "email": "zystrawebtech@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "BM Das Rd, near Patna Muslim School, Naya Tola, Lalbagh",
        "addressLocality": "Patna",
        "addressRegion": "Bihar",
        "postalCode": "800004",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.instagram.com/zystra_web_tech/",
        "https://www.linkedin.com/company/zystra-webtech/",
        "https://twitter.com/Zystra_Web_Tech",
        "https://www.facebook.com/profile.php?id=61571699426971"
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-brand-vibrant/30 selection:text-white">
      <SEO
        title="Contact Zystra | Start Your Growth Project"
        description="Get in touch with Zystra. Tell us your goals and we'll reply within one business day with a custom digital marketing strategy."
        canonicalUrl="https://zystra.in/contact"
        schema={[contactSchema, faqSchema]}
      />

      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute -top-[10%] left-[10%] w-[700px] h-[700px] bg-brand-dark/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] -right-[5%] w-[700px] h-[700px] bg-brand-vibrant/10 rounded-full blur-[160px]" />
      </div>

      <main className="relative z-10 pt-28 pb-20">

        {/* SECTION 1 — HERO */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-16 text-center">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-vibrant/30 bg-brand-dark/10 backdrop-blur-md text-xs font-mono font-semibold tracking-wider text-purple-300 uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-vibrant" />
              get in touch
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-6xl font-serif font-black tracking-tight leading-tight text-white"
            >
              Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-brand-vibrant to-pink-500">Remarkable</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-350 font-medium leading-relaxed max-w-2xl"
            >
              Tell us about your goals. We'll reply within one business day with how we'd approach your growth.
            </motion.p>
          </div>
        </section>

        {/* SECTION 2 & 3 & 5 — WHY REACH OUT & FORM SECTION */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Info & Details */}
            <div className="lg:col-span-5 flex flex-col gap-10 select-text">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
                  Growth Consultation
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Whatever Stage You're At, We're Ready to Help
                </h2>
                <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-medium">
                  Whether you're launching a new brand, struggling to get found online, or scaling an already-successful business — every conversation with Zystra starts the same way. We listen first, then show you exactly how AI-powered strategy and creative execution can move your numbers. You can explore <Link href="/services" className="text-purple-300 hover:text-white transition-colors underline underline-offset-2">services</Link> or view <Link href="/portfolio" className="text-purple-300 hover:text-white transition-colors underline underline-offset-2">our work</Link> before reaching out.
                </p>
              </div>

              {/* Steps/Process */}
              <div className="flex flex-col gap-6 bg-slate-900/35 border border-slate-900 p-6 rounded-2xl">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-200">
                  What Happens After You Reach Out
                </h3>
                
                <div className="flex flex-col gap-5 pt-3 border-t border-slate-950">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-vibrant/10 border border-brand-vibrant/25 flex items-center justify-center text-xs font-bold text-purple-300 shrink-0">
                      01
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-serif font-bold text-white">We Review Your Brief</h4>
                      <p className="text-xs text-slate-400 font-medium">
                        Our team reads through your goals, current challenges, and any links or screenshots you share — before we ever respond.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-vibrant/10 border border-brand-vibrant/25 flex items-center justify-center text-xs font-bold text-purple-300 shrink-0">
                      02
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-serif font-bold text-white">We Reply Within 24 Hours</h4>
                      <p className="text-xs text-slate-400 font-medium">
                        No long waiting periods. You'll hear back from a real strategist, not an automated form response.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-vibrant/10 border border-brand-vibrant/25 flex items-center justify-center text-xs font-bold text-purple-300 shrink-0">
                      03
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-serif font-bold text-white">We Recommend a Path Forward</h4>
                      <p className="text-xs text-slate-400 font-medium">
                        Based on what you share, we'll outline the services and strategy that make sense for your specific goals — no generic pitch decks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Details Section */}
              <div className="flex flex-col gap-5 pt-4 border-t border-slate-900">
                <h2 className="text-xl font-serif font-bold text-white">Prefer to Reach Out Directly?</h2>
                <p className="text-xs text-slate-450 leading-relaxed font-medium">
                  If you'd rather skip the form, you can call or email us directly — we're just as responsive either way. We are a trusted AI marketing agency contact.
                </p>

                <div className="flex flex-col gap-3 font-mono text-xs text-slate-350">
                  <a href="tel:+916200048924" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-vibrant group-hover:bg-slate-800">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    +91 6200048924
                  </a>
                  <a href="mailto:zystrawebtech@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-vibrant group-hover:bg-slate-800">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    zystrawebtech@gmail.com
                  </a>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-brand-vibrant shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-relaxed">
                      BM Das Rd, near Patna Muslim School,<br />Naya Tola, Lalbagh, Patna,<br />Bihar 800004
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider mr-2">Connect:</span>
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/zystra_web_tech/" },
                    { icon: Linkedin, href: "https://www.linkedin.com/company/zystra-webtech/" },
                    { icon: Twitter, href: "https://twitter.com/Zystra_Web_Tech" },
                    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61571699426971" }
                  ].map((soc, idx) => (
                    <a
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-900 hover:bg-brand-vibrant hover:text-white border border-slate-800 text-slate-400 flex items-center justify-center transition-colors"
                    >
                      <soc.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-slate-900/15 border border-slate-900 p-6 sm:p-10 rounded-3xl shadow-2xl relative">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-slate-400 font-medium mb-8">
                The more context you give us, the faster and more useful our first response will be.
              </p>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Your Name *</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-vibrant transition-colors placeholder:text-slate-650"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-vibrant transition-colors placeholder:text-slate-650"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-vibrant transition-colors placeholder:text-slate-650"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9876543210"
                      className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-vibrant transition-colors placeholder:text-slate-650"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Purpose / Inquiry Type</label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-vibrant transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select inquiry type</option>
                    <option value="SEO & Local Search">SEO & Local Search</option>
                    <option value="Paid Social & Search Ads">Paid Ads (Meta & Google)</option>
                    <option value="Web & App Development">Web & App Development</option>
                    <option value="Branding & Creative Studio">Branding & Logo Design</option>
                    <option value="RevOps & Automation">RevOps Solutions</option>
                    <option value="Get Free Consultation">Free Marketing Consultation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Project Description</label>
                    <span className="text-[10px] font-mono text-slate-500">{descLength}/800</span>
                  </div>
                  <textarea
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, current roadblocks, or outline what you are hoping to achieve..."
                    className="w-full bg-slate-950 border border-slate-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-brand-vibrant transition-colors resize-none placeholder:text-slate-650"
                  />
                </div>

                {/* Drag & Drop File Upload Indicator */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Attachments (optional)</label>
                  <div className="border-2 border-dashed border-slate-850 rounded-xl p-5 text-center flex flex-col items-center gap-2 hover:border-brand-vibrant/40 transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".png,.jpg,.jpeg,.pdf"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <UploadCloud className="w-7 h-7 text-slate-400" />
                    <span className="text-xs text-slate-300 font-medium">
                      {attachedFile ? attachedFile.name : "Drag & drop a file here, or browse"}
                    </span>
                    <span className="text-[9px] font-mono text-slate-550">
                      Accepts PNG, JPG, PDF (Max 10MB)
                    </span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="rounded-xl bg-brand-vibrant hover:bg-brand-medium text-white px-6 py-6 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer w-full"
                >
                  {formStatus === "submitting" ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                {/* Form Feedbacks */}
                <AnimatePresence>
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl border border-emerald-950 bg-emerald-500/10 text-emerald-400 text-xs flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                      Success! We've received your brief. A strategist will contact you within 24 hours.
                    </motion.div>
                  )}
                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="p-4 rounded-xl border border-red-950/80 bg-red-500/10 text-red-400 text-xs flex items-center gap-2"
                    >
                      <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                      Please fill in all required fields marked with * before submitting.
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

          </div>
        </section>

        {/* GOOGLE MAPS EMBED SECTION */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="relative rounded-3xl overflow-hidden border border-slate-900 h-[380px] bg-slate-900/15">
            <iframe
              title="Zystra Patna Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.9408434771746!2d85.14488347623916!3d25.606847877452392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed585a0684a0d9%3A0xe54d924151b73cb3!2sB.M.%20Das%20Rd%2C%20Patna%2C%20Bihar%20800004!5e0!3m2!1sen!2sin!4v1720875323456!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </section>

        {/* SECTION 4 — WHAT TO EXPECT */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
              Working Together
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
              What to Expect When You Contact Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-900/25 p-6 rounded-2xl border border-slate-900 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/20 flex items-center justify-center text-brand-vibrant">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Response Time</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                Under 24 hours, every time. Real strategy answers, not canned auto-responders.
              </p>
            </div>

            <div className="bg-slate-900/25 p-6 rounded-2xl border border-slate-900 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/20 flex items-center justify-center text-brand-vibrant">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Timezone Compatibility</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                IST (GMT+5:30) — we operate during standard Indian business hours, with full flexibility for international clients in the UAE and beyond.
              </p>
            </div>

            <div className="bg-slate-900/25 p-6 rounded-2xl border border-slate-900 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-vibrant/10 border border-brand-vibrant/20 flex items-center justify-center text-brand-vibrant">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">Preferred Format</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                A short brief along with any relevant links or screenshots helps us understand your goals fastest — but a simple message works too.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION 6 — FAQ */}
        <section className="container mx-auto px-6 sm:px-12 max-w-4xl mb-28">
          <div className="text-center mb-16 flex flex-col gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-vibrant uppercase">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white flex items-center justify-center gap-2.5">
              <HelpCircle className="w-7 h-7 text-brand-vibrant" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900/15 border border-slate-900/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => handleFaqToggle(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-serif font-bold text-sm sm:text-base text-white hover:text-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  {openFaqIdx === idx ? (
                    <Minus className="w-4 h-4 text-brand-vibrant shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-brand-vibrant shrink-0" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIdx === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-350 leading-relaxed font-medium border-t border-slate-950/30 select-text">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7 — FINAL CTA */}
        <section className="container mx-auto px-6 sm:px-12 max-w-7xl">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-brand-dark via-brand-medium to-brand-vibrant p-10 sm:p-16 text-center flex flex-col items-center gap-6 shadow-xl shadow-brand-dark/20">
            <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
              style={{
                backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
                backgroundSize: "24px 24px"
              }}
            />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40" />

            <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-200 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/20">
                Let's Talk
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-black leading-tight text-white">
                Your Brand's Next Chapter Starts With One Message
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
                You don't need a perfect brief or a finished plan. Just tell us where you are and where you want to be — we'll handle the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button 
                  onClick={() => {
                    const scrollForm = document.querySelector('form');
                    scrollForm?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }} 
                  className="rounded-full bg-white text-slate-950 hover:bg-slate-50 font-bold px-8 py-6 shadow-lg flex items-center gap-2 group cursor-pointer"
                >
                  Send Us a Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <span className="text-xs text-purple-200 font-mono uppercase tracking-wider mt-2 block">
                Response within 24 hours · India & International clients welcome
              </span>
            </div>
          </div>
        </section>

      </main>

      {/* Floating WhatsApp Button for Indian conversion optimization */}
      <a
        href="https://wa.me/916200048924?text=Hi%20Zystra%20team,%20I'd%20like%20to%20get%20a%20free%2520digital%20marketing%20audit."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/10"
        title="WhatsApp Zystra Support"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      <Footer />
    </div>
  );

  function handleFaqToggle(idx: number) {
    toggleFaq(idx);
  }
}
