"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lang, translations } from "@/lib/translations";

interface NavbarProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLang = () => setLang(lang === "de" ? "en" : "de");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Swipet – Home"
        >
          <div
            className={`w-8 h-8 rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
              scrolled ? "" : "ring-2 ring-white/30"
            }`}
          >
            <Image
              src="/logo.svg"
              alt="Swipet Logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span
            className={`font-semibold text-base tracking-tight transition-colors duration-300 ${
              scrolled ? "text-swipet-text" : "text-white"
            }`}
          >
            Swipet
          </span>
        </a>

        {/* Language Switcher */}
        <button
          onClick={toggleLang}
          className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "text-swipet-text hover:bg-gray-100 border border-gray-200"
              : "text-white/90 hover:text-white border border-white/30 hover:bg-white/10"
          }`}
          aria-label={`Switch language to ${t.nav.langLabel}`}
        >
          <span className={`${scrolled ? "text-gray-400" : "text-white/60"}`}>
            {lang.toUpperCase()}
          </span>
          <span className={scrolled ? "text-gray-300" : "text-white/40"}>|</span>
          <span>{t.nav.langLabel}</span>
        </button>
      </nav>
    </header>
  );
}
