import { Phone, Users } from "lucide-react";

export function CtaBannerSection() {
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden">
      {/* Background with multiple gradient orbs */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-lavender-600/30 -translate-y-1/2 rounded-full blur-[80px] sm:blur-[100px]"></div>
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-600/20 -translate-y-1/2 rounded-full blur-[80px] sm:blur-[100px]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-white tracking-tight leading-tight drop-shadow-lg">
          Ready to Scale Your Business in the USA?
        </h2>
        <p className="text-lavender-100/90 text-lg sm:text-xl md:text-2xl mb-10 sm:mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Let&apos;s build your complete lead-to-customer system today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 font-extrabold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl hover:bg-slate-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <Phone size={24} className="text-lavender-600" /> Book Free Call
          </a>
          <a
            href="#contact"
            className="btn-liquid inline-flex items-center justify-center gap-3 bg-transparent text-white font-extrabold px-10 py-5 rounded-2xl text-xl border border-lavender-400/30 transition-all duration-300 group"
          >
            <Users size={24} className="transition-colors duration-300" /> Talk to a Growth Expert
          </a>
        </div>
      </div>
    </section>
  );
}
