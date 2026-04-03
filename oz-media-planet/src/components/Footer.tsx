export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lavender-400 font-black text-2xl">OZ</span>
              <span className="text-white font-bold text-xl">Media Planet</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your end-to-end revenue partner for lead generation, sales conversion, and customer support in the USA.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 sm:gap-16 text-sm">
            <div>
              <p className="text-white font-bold mb-4 uppercase tracking-widest text-[11px]">Services</p>
              <ul className="space-y-3">
                <li><a href="#services" className="hover:text-lavender-400 transition-colors">Lead Generation</a></li>
                <li><a href="#services" className="hover:text-lavender-400 transition-colors">Sales Conversion</a></li>
                <li><a href="#services" className="hover:text-lavender-400 transition-colors">Customer Support</a></li>
                <li><a href="#services" className="hover:text-lavender-400 transition-colors">Web Development</a></li>
                <li><a href="#services" className="hover:text-lavender-400 transition-colors">SEO Services</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-bold mb-4 uppercase tracking-widest text-[11px]">Company</p>
              <ul className="space-y-3">
                <li><a href="#how-it-works" className="hover:text-lavender-400 transition-colors">How It Works</a></li>
                <li><a href="#industries" className="hover:text-lavender-400 transition-colors">Industries</a></li>
                <li><a href="#contact" className="hover:text-lavender-400 transition-colors">Contact</a></li>
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
            <a href="#" className="hover:text-lavender-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lavender-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-lavender-400 transition-colors">Disclaimer</a>
          </div>
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} OZ Media Planet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
