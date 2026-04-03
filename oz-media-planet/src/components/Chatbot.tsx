"use client";

import { useState } from "react";
import { MessageSquare, ChevronDown, User } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"greeting" | "capture" | "thanks">("greeting");
  
  // Chat History State
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hi there! 👋 Welcome to OZ Media Planet. How can we help you scale today?" },
  ]);

  // Lead Form State
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleQuickReply = (text: string) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
    
    // Simulate typing delay before bot responds
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Awesome! Please drop your name and phone number so a growth expert can reach out to you immediately.",
        },
      ]);
      setStep("capture");
    }, 700);
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prev) => [
      ...prev,
      { from: "user", text: `Name: ${formData.name}\nPhone: ${formData.phone}` },
      {
        from: "bot",
        text: "Got it! Our team will contact you shortly. Feel free to connect via WhatsApp below if it's urgent.",
      },
    ]);
    setStep("thanks");
  };

  return (
    <>
      {/* FLOATING TRIGGER ICON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[150] w-14 h-14 bg-lavender-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] shadow-lavender-600/40 hover:bg-lavender-700 transition-all duration-300 transform ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100 hover:-translate-y-1"
        }`}
        aria-label="Open support chat"
      >
        <MessageSquare size={24} />
      </button>

      {/* EXPANDED CHAT WINDOW */}
      <div
        className={`fixed bottom-6 right-4 sm:right-6 z-[160] w-[calc(100%-2rem)] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
        }`}
      >
        {/* HEADER */}
        <div className="bg-gradient-to-r from-lavender-600 to-lavender-700 text-white p-4 rounded-t-2xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center relative">
              <User size={18} />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-lavender-700 rounded-full"></span>
            </div>
            <div>
              <p className="font-bold text-[15px] leading-tight">OZ Growth Expert</p>
              <p className="text-[11px] text-lavender-100 font-medium">Typically replies right away</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <ChevronDown size={20} />
          </button>
        </div>

        {/* CHAT THREAD */}
        <div className="flex-1 p-4 overflow-y-auto min-h-[300px] max-h-[400px] bg-slate-50 flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`p-3.5 rounded-2xl text-sm leading-relaxed max-w-[85%] whitespace-pre-wrap ${
                  msg.from === "user"
                    ? "bg-lavender-600 text-white rounded-br-sm shadow-md shadow-lavender-600/10"
                    : "bg-white border border-slate-200 text-slate-700 rounded-bl-sm shadow-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* DYNAMIC ACTIONS based on step */}
          {step === "greeting" && (
            <div className="flex flex-col gap-2 mt-1 animate-fade-in-up">
              {["Lead Generation Services", "Customer Support", "Talk to an Expert"].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleQuickReply(btn)}
                  className="bg-white border border-lavender-200 text-lavender-700 hover:bg-lavender-50 px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-colors w-[90%] shadow-sm"
                >
                  {btn}
                </button>
              ))}
            </div>
          )}

          {step === "capture" && (
            <form
              onSubmit={handleLeadSubmit}
              className="mt-1 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm flex flex-col gap-3 animate-fade-in-up"
            >
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Your Details</h4>
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 transition-shadow"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-lavender-500 transition-shadow"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <button
                type="submit"
                className="w-full bg-lavender-600 hover:bg-lavender-700 text-white font-bold py-3 rounded-xl text-sm mt-2 transition-colors shadow-lg shadow-lavender-600/20"
              >
                Submit Request
              </button>
            </form>
          )}
        </div>

        {/* BOTTOM WHATSAPP REDIRECT */}
        <div className="p-4 border-t border-slate-200 bg-white rounded-b-2xl">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366]/10 text-[#1da650] hover:bg-[#25D366]/20 font-bold py-2.5 rounded-xl text-sm transition-colors"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
