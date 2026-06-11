import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useInView, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Box, BarChart, MonitorSmartphone, Share2, Target, Zap, ChevronRight, Linkedin, Twitter, Instagram } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-white" data-testid="link-logo">
          NEXUS<span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {["Services", "Work", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors" data-testid={`link-nav-${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 shadow-[0_0_15px_rgba(168,85,247,0.4)]" data-testid="button-start-project">
          Start a Project
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 3D Shape fake */}
      <motion.div 
        className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full pointer-events-none"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ y: y1, opacity }}
      />
      <motion.div 
        className="absolute w-[400px] h-[400px] border border-primary/40 rounded-full pointer-events-none border-dashed"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ y: y1, opacity }}
      />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tighter max-w-5xl mx-auto leading-[1.1] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WE BUILD BRANDS THAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 text-glow">MOVE CULTURE</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The most advanced creative machine on the planet. Precise, electric, and unforgettable.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 h-14 px-8 text-base font-bold" data-testid="button-view-work">
            View Our Work <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const text = "Digital Strategy · Brand Identity · Motion Design · Social Media · Paid Ads · SEO · Content Creation · Web Development · ";
  return (
    <div className="w-full bg-primary/10 border-y border-primary/20 py-4 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        className="text-sm font-mono tracking-widest text-primary font-medium flex"
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <span>{text}{text}{text}</span>
      </motion.div>
    </div>
  );
}

function Services() {
  const services = [
    { title: "Brand Strategy", icon: <Target className="w-6 h-6" />, desc: "Positioning that cuts through the noise." },
    { title: "Performance Marketing", icon: <Zap className="w-6 h-6" />, desc: "Data-driven campaigns that convert." },
    { title: "Creative Production", icon: <Box className="w-6 h-6" />, desc: "Cinematic visuals and motion design." },
    { title: "Web & Digital", icon: <MonitorSmartphone className="w-6 h-6" />, desc: "Immersive digital experiences." },
    { title: "Social Media", icon: <Share2 className="w-6 h-6" />, desc: "Building devoted communities." },
    { title: "Data & Analytics", icon: <BarChart className="w-6 h-6" />, desc: "Insights that drive growth." },
  ];

  return (
    <section id="services" className="py-32 container mx-auto px-6 relative">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Elite Capabilities</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Precision tools for ambitious brands.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] relative overflow-hidden"
            data-testid={`card-service-${i}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
              <ChevronRight className="text-primary w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function AnimatedCounter({ value, label, prefix = "", suffix = "" }: { value: number, label: string, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} className="text-center p-6 border border-border/50 rounded-2xl bg-card/20 backdrop-blur-sm" data-testid={`counter-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <motion.div 
        className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {prefix}{displayValue}{suffix}
      </motion.div>
      <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Stats() {
  return (
    <section className="py-20 border-y border-border/50 bg-card/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatedCounter value={150} suffix="+" label="Brands Elevated" />
          <AnimatedCounter value={2} prefix="$" suffix="B+" label="Revenue Generated" />
          <AnimatedCounter value={98} suffix="%" label="Client Retention" />
          <AnimatedCounter value={12} label="Industry Awards" />
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    { client: "AURA", category: "Brand & Digital", image: "bg-gradient-to-br from-purple-900 to-black" },
    { client: "OBLIVION", category: "Motion & Campaign", image: "bg-gradient-to-tr from-blue-900 to-black" },
    { client: "SYNAPSE", category: "Web App & Strategy", image: "bg-gradient-to-bl from-indigo-900 to-black" }
  ];

  return (
    <section id="work" className="py-32 container mx-auto px-6">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-xl">Movements we've engineered.</p>
        </div>
        <Button variant="outline" className="hidden md:flex rounded-full" data-testid="button-view-all-work">View All</Button>
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`w-full h-[500px] rounded-3xl ${p.image} relative overflow-hidden group cursor-pointer border border-border/50`}
            data-testid={`card-project-${i}`}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">{p.category}</p>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white group-hover:translate-x-4 transition-transform duration-500">{p.client}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Sarah Jenkins", role: "CMO, VANGUARD", initial: "S", quote: "NEXUS didn't just build our brand, they built a cult following. The precision in their execution is unmatched." },
    { name: "David Chen", role: "Founder, SYNC", initial: "D", quote: "Working with them feels like having a cheat code. The design, the strategy—everything is lightyears ahead." }
  ];

  return (
    <section id="about" className="py-32 container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Transmission Received</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">What leaders say about the NEXUS experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="glass-card p-10 rounded-3xl relative overflow-hidden group hover:border-primary/40 transition-colors"
            data-testid={`card-testimonial-${i}`}
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-xl md:text-2xl font-serif mb-8 text-white">"{t.quote}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg border border-primary/30">
                {t.initial}
              </div>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-primary font-mono">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center glass-card p-12 md:p-20 rounded-3xl border-primary/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to be next?</h2>
          <p className="text-xl text-muted-foreground mb-10">Enter the cockpit. Let's build your movement.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="h-14 rounded-full bg-black/50 border-border/50 focus-visible:ring-primary px-6"
              data-testid="input-email"
            />
            <Button size="lg" className="rounded-full h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold whitespace-nowrap" data-testid="button-ignite">
              Ignite Sequence
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold tracking-tighter text-white">
            NEXUS<span className="text-primary">.</span>
          </div>
          
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-linkedin"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-social-instagram"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NEXUS Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="hover:text-white" data-testid="link-terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  // Ensure dark mode is active (since it's a dark-only site, we force dark class on body)
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Work />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
