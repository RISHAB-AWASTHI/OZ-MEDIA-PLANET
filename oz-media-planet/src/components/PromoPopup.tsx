"use client";

import { useState, useEffect } from "react";
import { X, Phone, Star, Hourglass } from "lucide-react";

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // 1. Initial delay: Show after 8 seconds
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    }, 5000);

    // 2. Exit Intent logic: Trigger when cursor leaves the window
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hasShown]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in-up">
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 text-center" style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
        >
          <X size={16} />
        </button>

        {/* Icon Header */}
        <div className="w-16 h-16 bg-lavender-100 rounded-2xl flex items-center justify-center mx-auto mb-6 rotate-3">
          <Phone size={28} className="text-lavender-600" />
        </div>

        {/* Content */}
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 leading-[1.1] tracking-tight">
          We Don&apos;t Just Drain Your Money — <br className="hidden sm:block" />
          <span className="text-lavender-600 italic">We Turn It Into Sales</span>
        </h2>
        <p className="text-slate-600 text-base font-medium mb-4 leading-relaxed mx-auto text-balance">
          You spend on ads, we bring calls, customers, and real revenue. Simple.
        </p>

        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-lavender-50 border border-lavender-100 px-6 py-2.5 rounded-full mb-6 mx-auto self-center">
          <Hourglass size={18} className="text-lavender-600 animate-pulse" />
          <span className="text-lavender-800 font-bold text-sm tracking-tight">Limited Slots Available This Week</span>
        </div>

        {/* CTAs - BRAND THEMED + HIGH VISIBILITY */}
        <div className="flex flex-col gap-4">
          <a
            href="tel:+1234567890"
            className="w-full h-14 flex items-center justify-center gap-3 bg-lavender-600 hover:bg-lavender-700 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-lavender-600/30 text-lg"
          >
            <Phone size={22} /> Call Now
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="w-full h-14 flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-4 rounded-2xl transition-all shadow-lg shadow-emerald-500/30 text-lg"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust Line */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-center gap-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">
            Trusted by 100+ Businesses in the USA
          </p>
        </div>
      </div>
    </div>
  );
}
