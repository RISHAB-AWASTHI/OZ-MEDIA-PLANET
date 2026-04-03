"use client";

import { useState } from "react";
import {
  Rocket,
  Check,
  Target,
  DollarSign,
  RefreshCw,
  Flame,

  TrendingUp,
  BadgeDollarSign,
  Zap,
  Phone,
  BarChart3,
  Monitor,
  ShoppingCart,
  Cloud,
  Building2,
  MapPin,
  Star,
  PartyPopper,
  ArrowRight,
  Users,

  HeadphonesIcon,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(formData: FormData) {
    void formData;
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold text-xl tracking-tight">OZ</span>
            <span className="text-white font-bold text-xl tracking-tight">Media Planet</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a>
            <a href="#industries" className="hover:text-green-400 transition-colors">Industries</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Book Free Call
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-slate-900 text-white pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-950 opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #22c55e 0%, transparent 50%), radial-gradient(circle at 80% 20%, #16a34a 0%, transparent 40%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Trusted by Businesses Across the USA
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Turn Your Business Into a{" "}
            <span className="text-green-400">Revenue Machine</span>{" "}
            in the USA
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We Generate High-Quality Leads, Convert Them Into Customers, and
            Handle Your Customer Support — All in One Place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <Rocket size={20} /> Get Started
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              <Phone size={20} /> Book a Free Strategy Call
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-400">
            {[
              "Trusted by Businesses Across the USA",
              "Proven Sales & Growth Systems",
              "End-to-End Revenue Partner",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <Check size={14} className="text-green-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GEO TRUST */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
            Serving Businesses Across the United States
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            OZ Media Planet helps U.S. companies scale faster with powerful lead
            generation, sales conversion, and customer support systems. Whether
            you&apos;re a startup, agency, or established business, we deliver
            consistent growth through proven strategies.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            We Don&apos;t Just Market —{" "}
            <span className="text-green-500">We Grow Your Business</span>
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Most agencies stop at generating leads. We go beyond — we build
            your complete revenue pipeline:
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { Icon: Target, text: "Attract high-quality leads" },
              { Icon: DollarSign, text: "Convert them into paying customers" },
              { Icon: RefreshCw, text: "Support and retain them for long-term growth" },
            ].map(({ Icon, text }) => (
              <div
                key={text}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Icon size={24} className="text-green-600" />
                </div>
                <p className="font-semibold text-slate-800">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">Our Core Services</h2>
            <p className="text-slate-400 text-lg">Everything you need to grow — under one roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                Icon: Flame,
                title: "Lead Generation Services",
                badge: "USA",
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
                badge: "",
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
            ].map(({ Icon, title, badge, items, result }) => (
              <div
                key={title}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg leading-tight">{title}</h3>
                    {badge && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        {badge}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                      <ChevronRight size={14} className="text-green-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-green-400 text-sm font-medium flex items-center gap-2">
                  <Check size={14} /> {result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
            Why Choose OZ Media Planet?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Complete Revenue Solution (Not Just Marketing)",
              "USA-Focused Growth Strategy",
              "Scalable Systems for Long-Term Success",
              "Dedicated Team for Every Stage",
              "Transparent & Performance-Driven Approach",
            ].map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl p-5 text-left"
              >
                <Check size={18} className="text-green-500 mt-0.5 shrink-0" />
                <p className="font-semibold text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">How It Works</h2>
            <p className="text-slate-500 text-lg">You focus on scaling — we handle everything else.</p>
          </div>
          <div className="grid sm:grid-cols-5 gap-4">
            {[
              { step: "1", Icon: Phone, label: "Book a Free Consultation" },
              { step: "2", Icon: Target, label: "We Analyze Your Business & Goals" },
              { step: "3", Icon: Rocket, label: "Launch High-Performance Campaigns" },
              { step: "4", Icon: DollarSign, label: "Convert Leads Into Sales" },
              { step: "5", Icon: RefreshCw, label: "Manage Support & Retention" },
            ].map(({ step, Icon, label }, i) => (
              <div key={step} className="flex flex-col items-center text-center gap-3 relative">
                {i < 4 && (
                  <div className="hidden sm:block absolute top-6 left-[calc(50%+28px)] right-0 h-0.5 bg-green-200" />
                )}
                <div className="relative z-10 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-green-200">
                  {step}
                </div>
                <Icon size={22} className="text-green-600" />
                <p className="text-sm font-semibold text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-20 px-4 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Results You Can Expect</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: TrendingUp, title: "Increased Sales & Revenue", desc: "Measurable growth in your bottom line" },
              { Icon: BadgeDollarSign, title: "Lower Acquisition Costs", desc: "More customers for less spend" },
              { Icon: Zap, title: "Faster Conversion Rates", desc: "Optimized funnels that close faster" },
              { Icon: RefreshCw, title: "Repeat Customers", desc: "Long-term loyalty & recurring revenue" },
            ].map(({ Icon, title, desc }) => (
              <div key={title} className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-green-100 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { Icon: Monitor, label: "Tech Support & IT Services" },
              { Icon: ShoppingCart, label: "E-commerce Brands" },
              { Icon: Cloud, label: "SaaS Companies" },
              { Icon: Building2, label: "Local & Service-Based Businesses" },
              { Icon: Rocket, label: "Startups & Agencies" },
            ].map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-slate-100 hover:bg-green-50 border border-slate-200 hover:border-green-300 rounded-xl px-5 py-3 transition-colors"
              >
                <Icon size={18} className="text-green-600" />
                <span className="font-semibold text-slate-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-14 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Serving Major U.S. Cities</h2>
          <div className="flex flex-wrap justify-center gap-3 text-slate-300">
            {["New York", "Los Angeles", "Chicago", "Houston", "Miami", "Dallas", "San Francisco", "Atlanta"].map(
              (city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 border border-slate-600 rounded-full px-4 py-1.5 text-sm hover:border-green-400 hover:text-green-400 transition-colors cursor-default"
                >
                  <MapPin size={12} /> {city}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">What Our Clients Say</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                quote: "OZ Media Planet helped us 3x our leads and improve conversions within weeks.",
                author: "Business Owner, New York",
              },
              {
                quote: "Their full funnel system completely changed our business growth.",
                author: "E-commerce Brand, Los Angeles",
              },
            ].map((t) => (
              <div key={t.quote} className="bg-white border border-slate-200 rounded-2xl p-8 text-left shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-5 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-slate-500 text-sm font-medium">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Scale Your Business in the USA?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Let&apos;s build your complete lead-to-customer system today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-50 transition-all shadow-lg"
            >
              <Phone size={20} /> Book Free Strategy Call
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl text-lg border border-green-400 transition-all"
            >
              <Users size={20} /> Talk to a Growth Expert
            </a>
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Get Your Free Strategy Plan
            </h2>
            <p className="text-slate-500 text-lg">
              Fill out the form and our team will reach out within 24 hours.
            </p>
          </div>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <PartyPopper size={32} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-700 mb-2">Thank You!</h3>
              <p className="text-green-600">
                We&apos;ll be in touch within 24 hours with your free strategy plan.
              </p>
            </div>
          ) : (
            <form
              action={handleSubmit}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Smith"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Business Type *
                </label>
                <select
                  name="businessType"
                  required
                  defaultValue=""
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                >
                  <option value="" disabled>Select your business type</option>
                  <option>Tech Support & IT Services</option>
                  <option>E-commerce Brand</option>
                  <option>SaaS Company</option>
                  <option>Local / Service-Based Business</option>
                  <option>Startup</option>
                  <option>Agency</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Monthly Marketing Budget *
                </label>
                <select
                  name="marketingBudget"
                  required
                  defaultValue=""
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition"
                >
                  <option value="" disabled>Select your budget range</option>
                  <option>Under $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000 – $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your business goals..."
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-green-500/30"
              >
                <ArrowRight size={20} /> Get My Free Strategy Plan
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400 font-bold text-xl">OZ</span>
                <span className="text-white font-bold text-xl">Media Planet</span>
              </div>
              <p className="text-sm max-w-xs leading-relaxed">
                Your end-to-end revenue partner for lead generation, sales conversion, and customer support in the USA.
              </p>
            </div>
            <div className="flex gap-12 text-sm">
              <div>
                <p className="text-white font-semibold mb-3">Services</p>
                <ul className="space-y-1.5">
                  <li><a href="#services" className="hover:text-green-400 transition-colors">Lead Generation</a></li>
                  <li><a href="#services" className="hover:text-green-400 transition-colors">Sales Conversion</a></li>
                  <li><a href="#services" className="hover:text-green-400 transition-colors">Customer Support</a></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-3">Company</p>
                <ul className="space-y-1.5">
                  <li><a href="#how-it-works" className="hover:text-green-400 transition-colors">How It Works</a></li>
                  <li><a href="#industries" className="hover:text-green-400 transition-colors">Industries</a></li>
                  <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 space-y-3">
            <p className="text-xs text-slate-500">
              OZ Media Planet is an Independent Marketing & Support Service Provider.
              We are not affiliated with any third-party brands or companies.
            </p>
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-green-400 transition-colors">Disclaimer</a>
            </div>
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} OZ Media Planet. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
