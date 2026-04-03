import { Flame, BarChart3, HeadphonesIcon, ChevronRight, Check } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-lavender-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Core Services</h2>
          <p className="text-slate-400 text-lg sm:text-xl font-medium max-w-2xl mx-auto">Everything you need to grow — under one roof.</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              Icon: Flame,
              title: "Lead Generation Services",
              badge: "High Intent",
              items: [
                "Google Ads (Search & Call Ads)",
                "Facebook & Instagram Advertising",
                "Funnel & Landing Page Optimization",
                "High-Intent Audience Targeting",
              ],
              result: "Consistent flow of qualified leads ready to convert",
            },
            {
              Icon: BarChart3,
              title: "Sales Conversion Services",
              badge: "Closing",
              items: [
                "Dedicated Sales Team / Call Closers",
                "CRM Setup & Automation",
                "Lead Follow-Up Systems",
                "High-Converting Sales Scripts",
              ],
              result: "More leads converted into paying customers",
            },
            {
              Icon: HeadphonesIcon,
              title: "Customer Support Services",
              badge: "24/7",
              items: [
                "24/7 Customer Support Handling",
                "Issue Resolution & Ticket Management",
                "Customer Retention & Upselling",
                "Long-Term Relationship Management",
              ],
              result: "Happy customers + recurring revenue",
            },
          ].map(({ Icon, title, badge, items, result }, idx) => (
            <div
              key={title}
              className="group bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-lavender-500/50 hover:bg-white/[0.05] rounded-[2rem] p-8 lg:p-10 flex flex-col transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-lavender-500/30 to-lavender-600/10 border border-lavender-500/20 group-hover:border-lavender-400/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-lavender-500/20 transition-all duration-300">
                  <Icon size={26} className="text-lavender-300" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl text-white leading-tight mb-2">{title}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider bg-lavender-500/20 text-lavender-300 px-3 py-1 rounded-full">
                    {badge}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 flex-1 mb-10">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300 text-base font-medium">
                    <ChevronRight size={18} className="text-lavender-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="bg-lavender-500/10 border border-lavender-500/20 rounded-xl p-4 text-lavender-300 text-sm font-semibold flex items-start gap-3 leading-snug group-hover:bg-lavender-500/20 transition-colors">
                <Check size={18} className="shrink-0 text-lavender-400" /> 
                <p>{result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
