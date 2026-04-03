import { MapPin, Star } from "lucide-react";

export function GeoTrustSection() {
  return (
    <section className="relative py-16 sm:py-24 px-6 sm:px-8 bg-lavender-950 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-lavender-600/20 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-lavender-900/50 border border-lavender-700/50 text-lavender-200 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-md">
          <MapPin size={14} className="text-lavender-400" /> Nationwide Reach
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Serving Businesses Across the United States
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-lavender-100 leading-relaxed max-w-3xl mb-10 font-medium">
          OZ Media Planet helps U.S. companies scale faster with powerful lead generation, sales conversion, and customer support systems. Whether you're a startup, agency, or established business, we deliver consistent growth through proven strategies.
        </p>

        {/* Trust indicator */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-[#F59E0B] fill-[#F59E0B]" />
            ))}
          </div>
          <p className="text-lavender-300 font-medium text-sm">
            Trusted by growing businesses coast to coast
          </p>
        </div>
      </div>
    </section>
  );
}
