"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    // Forces the page to start at the top on every refresh for a cleaner UX
    window.scrollTo(0, 0);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-sm border-b border-lavender-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lavender-600 font-black text-2xl tracking-tighter">OZ</span>
          <span className="text-slate-900 font-bold text-xl tracking-tight">Media Planet</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-lavender-600 transition-colors uppercase tracking-wider text-[11px]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Book Free Call Button (Visible on all but very small) */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex bg-lavender-600 hover:bg-lavender-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md shadow-lavender-600/20 active:scale-95"
          >
            Book Free Call
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-600 hover:text-lavender-600 hover:bg-lavender-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-lavender-100 shadow-xl animate-fade-in-down overflow-hidden">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-slate-800 hover:text-lavender-600 transition-colors flex items-center justify-between"
              >
                {link.name}
                <Menu size={16} className="opacity-20" />
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-lavender-600 text-white text-center font-bold px-6 py-4 rounded-2xl text-lg shadow-lg shadow-lavender-600/30"
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
