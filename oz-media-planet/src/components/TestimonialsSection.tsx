import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">Don't just take our word for it.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "OZ Media Planet helped us 3x our leads and improve conversions within weeks.",
              author: "Business Owner",
              location: "New York",
            },
            {
              quote: "Their full funnel system completely changed our business growth trajectory.",
              author: "E-commerce Brand",
              location: "Los Angeles",
            },
          ].map((t, idx) => (
            <div 
              key={t.quote} 
              className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 relative group animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <Quote size={48} className="absolute top-8 right-8 text-lavender-100 group-hover:text-lavender-200 transition-colors duration-300" />
              
              <div className="flex gap-1 mb-8">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-800 text-xl md:text-2xl font-bold leading-relaxed mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-lavender-100 flex items-center justify-center font-bold text-lavender-700">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-slate-500 text-sm font-medium">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
