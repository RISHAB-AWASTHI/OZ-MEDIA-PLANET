import { Phone, Target, Rocket, DollarSign, RefreshCw, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">How It Works</h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">You focus on scaling — we handle everything else.</p>
        </div>

        <div className="grid grid-cols-2 lg:flex lg:items-start lg:justify-between gap-6 lg:gap-2 relative z-10">
          {[
            { Icon: Phone, label: "Book a Free Consultation" },
            { Icon: Target, label: "We Analyze Your Business" },
            { Icon: Rocket, label: "Launch Marketing Campaigns" },
            { Icon: DollarSign, label: "Convert Leads Into Sales" },
            { Icon: RefreshCw, label: "Manage Support & Retention" },
          ].map(({ Icon, label }, i, arr) => (
            <>
              <div key={label} className="flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 bg-gradient-to-br from-lavender-100 to-lavender-50 border border-lavender-200 group-hover:border-lavender-400 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-lavender-500/20 shrink-0">
                  <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-lavender-600 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md">{i + 1}</span>
                  <Icon size={28} className="text-lavender-600 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-base font-bold text-slate-800 text-center max-w-[140px] leading-snug">{label}</p>
              </div>
              {i < arr.length - 1 && (
                <div key={`arrow-${i}`} className="hidden lg:flex items-center pt-8 text-lavender-300 shrink-0">
                  <ArrowRight size={22} strokeWidth={2} />
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
