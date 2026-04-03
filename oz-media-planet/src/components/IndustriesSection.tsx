import { Monitor, ShoppingCart, Cloud, Building2, Rocket } from "lucide-react";

export function IndustriesSection() {
  return (
    <section id="industries" className="py-16 sm:py-24 px-4 bg-slate-50 relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {[
            { Icon: Monitor, label: "Tech Support & IT Services" },
            { Icon: ShoppingCart, label: "E-commerce Brands" },
            { Icon: Cloud, label: "SaaS Companies" },
            { Icon: Building2, label: "Local & Service Businesses" },
            { Icon: Rocket, label: "Startups & Agencies" },
          ].map(({ Icon, label }, idx) => (
            <div
              key={label}
              className="flex items-center gap-3 bg-white hover:bg-lavender-50 border border-slate-200 hover:border-lavender-400 rounded-full px-5 sm:px-6 py-3 sm:py-4 transition-all duration-300 shadow-sm hover:shadow-md animate-fade-in-up transform hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Icon size={20} className="text-lavender-600 shrink-0" />
              <span className="font-bold text-slate-800 text-sm sm:text-lg">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
