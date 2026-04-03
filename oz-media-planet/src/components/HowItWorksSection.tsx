import { Phone, Target, Rocket, DollarSign, RefreshCw } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">How It Works</h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">You focus on scaling — we handle everything else.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
          {[
            { Icon: Phone, label: "Book a Free Consultation" },
            { Icon: Target, label: "We Analyze Your Business" },
            { Icon: Rocket, label: "Launch Marketing Campaigns" },
            { Icon: DollarSign, label: "Convert Leads Into Sales" },
            { Icon: RefreshCw, label: "Manage Support & Retention" },
          ].map(({ Icon, label }, i) => (
            <div key={label} className="flex flex-col items-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bg-lavender-50 group-hover:bg-lavender-100 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-6 transition-all duration-300 border border-lavender-100/50 group-hover:border-lavender-200 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-lavender-500/10">
                <Icon size={36} className="text-lavender-600 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <p className="text-lg font-bold text-slate-800 text-center max-w-[200px] leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
