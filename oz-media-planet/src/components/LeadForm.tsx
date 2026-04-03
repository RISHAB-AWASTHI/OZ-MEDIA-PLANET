"use client";

import { useState } from "react";
import { PartyPopper, ArrowRight, ChevronDown } from "lucide-react";

function FormDropdown({
  name,
  label,
  options,
  placeholder,
  required
}: {
  name: string;
  label: string;
  options: string[];
  placeholder: string;
  required?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="relative">
      <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
        {label} {required && <span className="text-lavender-500">*</span>}
      </label>
      <input type="hidden" name={name} value={selected} required={required} />

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between border-2 rounded-xl px-4 py-3.5 text-left transition-all bg-white font-medium ${
          isOpen 
            ? "border-lavender-500 ring-4 ring-lavender-500/10 shadow-sm" 
            : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <span className={selected ? "text-slate-900" : "text-slate-400"}>
          {selected || placeholder}
        </span>
        <ChevronDown 
          size={20} 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-lavender-500" : ""}`} 
        />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[190]"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-2xl z-[200] overflow-hidden animate-fade-in-down">
            <div className="max-h-60 overflow-y-auto py-2">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setSelected(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 text-sm hover:bg-lavender-50 transition-colors flex items-center justify-between ${
                    selected === opt ? "bg-lavender-50 text-lavender-600 font-bold" : "text-slate-700 font-medium"
                  }`}
                >
                  {opt}
                  {selected === opt && <div className="w-1.5 h-1.5 bg-lavender-500 rounded-full" />}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(formData: FormData) {
    void formData;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 bg-white relative">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Get Your Free Strategy Plan
          </h2>
          <p className="text-slate-500 text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
            Fill out the form and our team will reach out within 24 hours.
          </p>
        </div>
        {submitted ? (
          <div className="bg-lavender-50 border border-lavender-200 rounded-[2.5rem] p-12 text-center animate-fade-in-up">
            <div className="w-20 h-20 bg-lavender-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PartyPopper size={40} className="text-lavender-600" />
            </div>
            <h3 className="text-3xl font-black text-lavender-700 mb-4 tracking-tight">Success!</h3>
            <p className="text-lavender-600/80 text-lg font-medium leading-relaxed">
              We&apos;ll be in touch within 24 hours with your free growth strategy plan.
            </p>
          </div>
        ) : (
          <form
            action={handleSubmit}
            className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-6 sm:p-10 space-y-6 shadow-2xl shadow-slate-200/50"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Full Name <span className="text-lavender-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Smith"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 bg-white focus:outline-none focus:ring-4 focus:ring-lavender-500/10 focus:border-lavender-500 transition-all font-medium"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Email Address <span className="text-lavender-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 bg-white focus:outline-none focus:ring-4 focus:ring-lavender-500/10 focus:border-lavender-500 transition-all font-medium"
                />
              </div>
            </div>

            <FormDropdown 
              name="businessType"
              label="Business Type"
              placeholder="Select your business type"
              required
              options={[
                "Tech Support & IT Services",
                "E-commerce Brand",
                "SaaS Company",
                "Local / Service-Based Business",
                "Startup",
                "Agency",
                "Other"
              ]}
            />

            <FormDropdown 
              name="marketingBudget"
              label="Monthly Marketing Budget"
              placeholder="Select your budget range"
              required
              options={[
                "Under $1,000",
                "$1,000 – $5,000",
                "$5,000 – $10,000",
                "$10,000 – $25,000",
                "$25,000+"
              ]}
            />

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your business goals..."
                className="w-full border-2 border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 bg-white focus:outline-none focus:ring-4 focus:ring-lavender-500/10 focus:border-lavender-500 transition-all resize-none font-medium"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-lavender-600 hover:bg-lavender-700 text-white font-black py-4.5 rounded-2xl text-xl transition-all transform hover:scale-[1.01] active:scale-[0.98] shadow-xl shadow-lavender-500/30"
            >
              Get Started <ArrowRight size={22} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
