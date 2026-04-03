import { TrendingUp, BadgeDollarSign, Zap, RefreshCw } from "lucide-react";

export function ResultsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-lavender-600 text-white relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto text-center z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 sm:mb-16 tracking-tight text-white drop-shadow-sm">Results You Can Expect</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: TrendingUp, title: "Increased Sales", desc: "Measurable growth in your bottom line" },
            { Icon: BadgeDollarSign, title: "Lower CAC", desc: "More customers for far less ad spend" },
            { Icon: Zap, title: "Faster Conversions", desc: "Optimized funnels that close much faster" },
            { Icon: RefreshCw, title: "Repeat Business", desc: "Long-term loyalty & recurring revenue" },
          ].map(({ Icon, title, desc }, idx) => (
            <div
              key={title}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-[2rem] p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-white drop-shadow-sm" />
              </div>
              <h3 className="font-extrabold text-2xl mb-3">{title}</h3>
              <p className="text-lavender-100/90 text-base font-medium">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
