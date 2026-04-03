import { Check, Star, Shield, Zap, Target, Users } from "lucide-react";

export function WhyChooseUsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why Choose OZ Media Planet?
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium">Because we act as your dedicated growth partners.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {[
            { icon: Shield, text: "Complete Revenue Solution" },
            { icon: Star, text: "USA-Focused Growth Strategy" },
            { icon: Zap, text: "Scalable Systems for Success" },
            { icon: Users, text: "Dedicated Team for Every Stage" },
            { icon: Target, text: "Transparent & Performance-Driven Approach" },
          ].map(({ icon: Icon, text }, idx) => (
            <div
              key={text}
              className="bg-white border border-slate-200 rounded-3xl p-6 flex items-center gap-5 shadow-sm hover:shadow-md hover:border-lavender-300 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-lavender-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Icon size={24} className="text-lavender-600" />
              </div>
              <p className="font-bold text-slate-800 text-lg leading-tight">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
