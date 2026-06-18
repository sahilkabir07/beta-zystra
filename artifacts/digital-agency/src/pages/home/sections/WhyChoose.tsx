import React from "react";
import { Shield, TrendingUp, BarChart } from "lucide-react";

// Helper custom icon component
function Eye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function WhyChoose() {
  const values = [
    {
      title: "Transparency First",
      icon: <Eye className="w-5 h-5 text-brand-vibrant" />,
      desc: "You always know where your budget is going. We provide clear, jargon-free reporting that shows real metrics — traffic, leads, conversions — not vanity numbers."
    },
    {
      title: "Performance Over Promises",
      icon: <TrendingUp className="w-5 h-5 text-brand-vibrant" />,
      desc: "We measure our success by your growth. Our team sets measurable KPIs for every project and optimises relentlessly until those targets are hit and exceeded."
    },
    {
      title: "Creativity Backed by Data",
      icon: <BarChart className="w-5 h-5 text-brand-vibrant" />,
      desc: "Great marketing needs both art and science. Our creative team and data analysts work together on every campaign — so your brand looks brilliant and performs brilliantly."
    }
  ];

  return (
    <section id="why-zystra" className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5 text-brand-medium" />
              Our Core Ethos
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-slate-900 mb-6 leading-tight">
              Why Businesses Across Bihar and India Choose Zystra
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              The digital landscape is crowded, noisy, and competitive. Most businesses struggle to stand out — not because their products are weak, but because their digital presence is. Zystra was built to solve exactly that problem.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 border-l-4 border-brand-vibrant pl-4 mb-4">
              Our Core Values That Drive Every Campaign
            </h3>

            <div className="flex flex-col gap-6">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-6 border border-slate-100 rounded-2xl bg-slate-50/30 hover:bg-white hover:shadow-md hover:border-brand-vibrant/20 hover:-translate-y-0.5 transition-all duration-200 ease-out flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-vibrant/10 flex items-center justify-center shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 mb-2">{v.title}</h4>
                    <p className="text-slate-555 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
