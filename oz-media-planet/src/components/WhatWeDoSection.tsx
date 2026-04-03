import { Target, DollarSign, RefreshCw } from "lucide-react";

export function WhatWeDoSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-white via-lavender-50/30 to-lavender-100/50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight px-4 sm:px-0">
            We Don't Just Market — <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-lavender-400">
              We Grow Your Business
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            Most agencies stop at generating leads.
            <br className="hidden sm:block" />
            We go beyond — we build your complete revenue pipeline:
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {[
            {
              Icon: Target,
              phrase: "Attract high-quality leads",
              color: "text-blue-600",
              bg: "bg-blue-50 border-blue-100",
              number: "01"
            },
            {
              Icon: DollarSign,
              phrase: "Convert them into paying customers",
              color: "text-emerald-600",
              bg: "bg-emerald-50 border-emerald-100",
              number: "02"
            },
            {
              Icon: RefreshCw,
              phrase: "Support and retain them for long-term growth",
              color: "text-lavender-600",
              bg: "bg-lavender-50 border-lavender-100",
              number: "03"
            },
          ].map(({ Icon, phrase, color, bg, number }, idx) => (
            <div
              key={phrase}
              className="group relative bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2rem] p-6 lg:p-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] shadow-lavender-500/10 hover:shadow-lavender-500/20 hover:border-lavender-300 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Modern background number watermark */}
              <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 text-[80px] sm:text-[100px] leading-none font-black text-slate-100 opacity-50 pointer-events-none group-hover:scale-105 group-hover:text-lavender-50 transition-all duration-500">
                {number}
              </div>

              <div className={`w-16 h-16 shrink-0 ${bg} border rounded-xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:rotate-6`}>
                <Icon size={28} className={color} />
              </div>

              <div className="relative z-10 flex-1 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 leading-snug tracking-tight">
                  {phrase}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
