import React, { useState } from "react";
import { Link } from "wouter";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/zystratechnologies?igsh=eDh1OTJlYjljdWI5",
      label: "Instagram",
      glowClass: "hover:border-pink-500/60 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/zystra-webtech/",
      label: "LinkedIn",
      glowClass: "hover:border-blue-500/60 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/Zystra_Web_Tech",
      label: "Twitter",
      glowClass: "hover:border-white/60 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    },
    {
      icon: ({ className }: { className?: string }) => (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
        </svg>
      ),
      href: "https://www.facebook.com/profile.php?id=61571699426971",
      label: "Facebook",
      glowClass: "hover:border-blue-600/60 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    }
  ];

  return (
    <footer className="relative bg-[#06030e] text-slate-300 py-8 sm:py-10 px-6 sm:px-10 border-t border-purple-500/20 overflow-hidden z-20">
      {/* Dynamic colorful blobs floating in back */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-4 right-1/4 w-[450px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)", 
            backgroundSize: "28px 28px" 
          }} 
        />
      </div>

      {/* Massive subtle watermark text */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9vw] font-serif font-black text-white/[0.02] pointer-events-none select-none tracking-[0.2em] uppercase leading-none text-center whitespace-nowrap z-0">
        ZYSTRA
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Main Columns Grid - Compact Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-white/10 items-start">
          
          {/* Logo & Agency Statement */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-8 w-auto rounded-md border border-purple-500/30 transition-transform duration-300 group-hover:scale-105" />
              <span className="text-2xl font-serif font-black text-white tracking-wide">
                ZYSTRA<span className="text-purple-400">.</span>
              </span>
            </Link>
            
            <h5 className="text-xs sm:text-sm font-bold text-purple-200 leading-snug">
              AI-Powered Digital Marketing & Web Technology Agency
            </h5>
            
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm font-normal">
              We design campaigns, engineer software, and optimize conversions to put your brand where your customers are looking.
            </p>

            {/* Interactive compact social links */}
            <div className="flex gap-2.5 mt-1">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-9 h-9 rounded-full border border-purple-500/20 bg-purple-500/10 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.glowClass}`}
                >
                  <social.icon className="w-4 h-4 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 sm:col-span-4 col-span-6">
            <h6 className="text-xs font-mono font-black text-purple-300 uppercase tracking-widest mb-3 border-l-2 border-purple-500 pl-2.5">
              Explore
            </h6>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm font-sans font-medium text-slate-350">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Innovation", href: "/innovation" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-50 group-hover:scale-100" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 sm:col-span-4 col-span-6">
            <h6 className="text-xs font-mono font-black text-purple-300 uppercase tracking-widest mb-3 border-l-2 border-purple-500 pl-2.5">
              Our Services
            </h6>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm font-sans font-medium text-slate-350">
              {[
                { label: "SEO Optimization", href: "/services/seo" },
                { label: "Meta Ads Campaigns", href: "/services/meta-ads" },
                { label: "Google PPC Advertising", href: "/services/google-ads" },
                { label: "Maps & Local SEO", href: "/services/gbp-local-seo" },
                { label: "Website Development", href: "/services/website-designing" },
                { label: "Performance Marketing", href: "/services/performance-marketing" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 scale-50 group-hover:scale-100" />
                    <span className="transition-transform duration-200 group-hover:translate-x-1">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Direct info */}
          <div className="lg:col-span-3 sm:col-span-4 col-span-12 flex flex-col gap-3.5">
            <div>
              <h6 className="text-xs font-mono font-black text-purple-300 uppercase tracking-widest mb-3 border-l-2 border-purple-500 pl-2.5">
                Zystra Growth Hub
              </h6>
              <p className="text-xs leading-relaxed text-slate-400 mb-2.5 font-normal">
                Subscribe for premium marketing tips & AI strategy updates.
              </p>
              
              {/* Compact newsletter form */}
              <form onSubmit={handleSubscribe} className="relative w-full max-w-xs">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full h-10 bg-white/[0.05] border border-purple-500/25 focus:border-purple-400 focus:outline-none rounded-full px-4 pr-11 text-xs font-sans text-white placeholder-slate-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="absolute right-1 top-1 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-sm"
                >
                  {subscribed ? (
                    <span className="text-[10px] font-bold">Done</span>
                  ) : (
                    <Send className="w-3.5 h-3.5" />
                  )}
                </button>
              </form>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-2 text-xs font-sans font-normal text-slate-350 pt-1">
              <a href="tel:+916200048924" className="hover:text-white flex items-center gap-2.5 transition-colors group">
                <Phone className="w-4 h-4 text-purple-400 group-hover:scale-105 transition-transform" />
                <span>+91 6200048924</span>
              </a>
              <a href="mailto:zystrawebtech@gmail.com" className="hover:text-white flex items-center gap-2.5 transition-colors group">
                <Mail className="w-4 h-4 text-purple-400 group-hover:scale-105 transition-transform shrink-0" />
                <span className="truncate">zystrawebtech@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <span className="leading-tight">Naya Tola, Lalbagh, Patna, Bihar 800004</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal terms */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500 relative z-10 select-text">
          <p>© {new Date().getFullYear()} Zystra. All rights reserved. | Powered by Zystra</p>
          <div className="flex gap-5 font-normal">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
