import React from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Background blobs inside CTA */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-vibrant/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-medium/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="bg-slate-900 text-white p-10 sm:p-16 md:p-20 rounded-[40px] relative overflow-hidden shadow-2xl">
          {/* Light flare inside card */}
          <div className="absolute top-0 left-0 w-82 h-82 bg-brand-vibrant/20 rounded-full blur-[80px] -translate-x-1/3 -translate-y-1/3" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1 bg-brand-vibrant/20 text-brand-vibrant/80 border border-brand-vibrant/30 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider mb-6 uppercase">
              Start Your Growth Today
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white mb-6 tracking-tight leading-tight">
              Ready to Escape the Digital Competition?
            </h2>
            <p className="text-slate-350 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Whether you are a local business looking to dominate your city or a startup ready to scale nationally — Zystra has the strategy, technology, and team to make it happen. Let's build something remarkable together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full h-14 px-8 bg-white text-slate-950 hover:bg-slate-100 font-bold shadow-md hover:scale-105 transition-transform" data-testid="button-ignite">
                  Get Your Free Digital Audit
                </Button>
              </Link>
              <a href="tel:+916200048924" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full h-14 px-8 border-slate-700 hover:border-white text-white hover:bg-slate-800 font-semibold gap-2">
                  <Phone className="w-4 h-4" /> Call: +91 6200048924
                </Button>
              </a>
            </div>

            <div className="mt-8 text-xs text-slate-450 font-mono tracking-wide">
              Response within 24 hours · Based in Patna, Bihar · Serving clients across India
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
