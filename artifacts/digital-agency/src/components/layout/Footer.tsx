import React from "react";
import { Link } from "wouter";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2">
              <img src="/zystra-logo.jpg" alt="Zystra Logo" className="h-8 w-auto rounded brightness-90 border border-slate-900" />
              <span className="text-xl font-bold tracking-tight text-white font-serif">ZYSTRA<span className="text-brand-vibrant">.</span></span>
            </Link>
            <h5 className="text-sm font-semibold text-slate-350">
              AI-Powered Digital Marketing & Web Technology Agency
            </h5>
            <p className="text-xs leading-relaxed text-slate-500">
              ZYSTRA, BM Das Rd, near Patna Muslim School, Naya Tola, Lalbagh, Patna, Bihar 800004
            </p>
            <div className="flex flex-col gap-2 mt-2 text-xs">
              <a href="tel:+916200048924" className="hover:text-white flex items-center gap-2 transition-colors">
                <span>📞</span> +91 6200048924
              </a>
              <a href="mailto:zystrawebtech@gmail.com" className="hover:text-white flex items-center gap-2 transition-colors">
                <span>📧</span> zystrawebtech@gmail.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h6 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Quick Links</h6>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><a href="#why-choose" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><a href="#showcase" className="hover:text-white transition-colors">Innovation</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h6 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Our Services</h6>
            <ul className="flex flex-col gap-3.5 text-sm">
              <li><Link href="/services/seo" className="hover:text-white transition-colors">SEO</Link></li>
              <li><Link href="/services/meta-ads" className="hover:text-white transition-colors">Meta Ads</Link></li>
              <li><Link href="/services/google-ads" className="hover:text-white transition-colors">Google Ads</Link></li>
              <li><Link href="/services/gbp-local-seo" className="hover:text-white transition-colors">Local SEO</Link></li>
              <li><Link href="/services/website-designing" className="hover:text-white transition-colors">Website Design</Link></li>
              <li><Link href="/services/performance-marketing" className="hover:text-white transition-colors">Performance Marketing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h6 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Connect With Us</h6>
            <div className="flex gap-4 mb-6">
              <a href="https://www.instagram.com/zystra_web_tech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-medium hover:text-white transition-colors" data-testid="link-social-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/zystra-webtech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-medium hover:text-white transition-colors" data-testid="link-social-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/Zystra_Web_Tech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-medium hover:text-white transition-colors" data-testid="link-social-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61571699426971" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-medium hover:text-white transition-colors" data-testid="link-social-facebook">
                {/* Fallback standard facebook icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Connect with Bihar's premium agency to stay updated on AI insights, performance analytics updates, and marketing news.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-550">
          <p>© 2026 Zystra. All rights reserved. | Designed & Powered by Zystra</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
