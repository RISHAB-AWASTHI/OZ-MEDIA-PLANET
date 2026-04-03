import { MapPin } from "lucide-react";

export function ServiceAreasSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 text-lavender-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-md">
          <MapPin size={14} /> Nationwide Reach
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">Serving Major U.S. Cities</h2>

        <div className="flex flex-wrap justify-center gap-4 text-slate-300">
          {["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Dallas", "San Francisco", "Atlanta"].map(
            (city, idx) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-lg font-medium hover:border-lavender-400 hover:bg-lavender-500/10 transition-all duration-300 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {city}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
