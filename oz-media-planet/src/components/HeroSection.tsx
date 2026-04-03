import Image from "next/image";
import { Rocket, Phone, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-white text-slate-900 pt-24 lg:pt-28 pb-16 lg:pb-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-lavender-50 to-lavender-100 opacity-80" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--color-lavender-600) 0%, transparent 50%), radial-gradient(circle at 80% 20%, var(--color-lavender-900) 0%, transparent 40%)",
        }}
      />
      {/* Grid Layout: Text Left, Illustration Right */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Content */}
        <div className="text-center lg:text-left animate-fade-in-up order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-lavender-100 border border-lavender-200 text-lavender-700 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 relative">
            <span className="w-2 h-2 bg-lavender-500 rounded-full animate-pulse" />
            Trusted by Businesses Across the USA
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] mb-6 text-slate-900 tracking-tight">
            Turn Your Business Into a <br className="hidden lg:block" />
            <span className="text-lavender-600">Revenue Machine</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed">
            Oz Media Planet helps you scale faster with professional <span className="text-slate-900 font-bold">Lead Generation</span>, <span className="text-slate-900 font-bold">Sales Conversion</span>, and <span className="text-slate-900 font-bold">Customer Support Services</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-lavender-600 hover:bg-lavender-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-lavender-500/30"
            >
              <Rocket size={20} /> Get Started
            </a>
            <a
              href="#contact"
              className="btn-liquid-white inline-flex items-center justify-center gap-2 bg-white border border-lavender-200 text-slate-800 font-bold px-8 py-4 rounded-xl text-lg transition-all group"
            >
              <Phone size={20} className="text-lavender-600 group-hover:text-white transition-colors duration-300" /> Free Strategy Call
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 font-medium">
            {[
              "100% US Based",
              "Proven Growth Systems",
              "End-to-End Partner",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100 whitespace-nowrap">
                <Check size={16} className="text-lavender-600 shrink-0" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Illustration Placeholder */}
        <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[600px] flex justify-center items-center animate-fade-in-up order-1 lg:order-2" style={{ animationDelay: "0.2s" }}>
          {/* Illustration */}
          <Image
            src="/Sales consulting-amico.svg"
            alt="Lead Generation and Sales Transformation"
            width={576}
            height={576}
            priority
            className="relative z-10 w-full max-w-[320px] sm:max-w-md lg:max-w-xl h-auto transform hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
