"use client";

import Image from "next/image";
import { Translations } from "@/lib/translations";

interface HeroSectionProps {
  heroT: Translations["hero"];
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection({ heroT }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #F0956A 0%, #E27289 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "rgba(255,255,255,0.5)" }}
      />
      <div
        className="absolute bottom-[12%] right-[6%] w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "rgba(255,255,255,0.4)" }}
      />
      <div
        className="absolute top-[55%] left-[60%] w-48 h-48 rounded-full opacity-10 blur-2xl pointer-events-none"
        style={{ background: "rgba(255,255,255,0.6)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-16 max-w-2xl mx-auto">
        {/* Logo */}
        <div className="animate-float-slow mb-8">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/25">
            <Image
              src="/logo.png"
              alt="Swipet"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Brand name */}
        <p className="text-white/80 font-medium text-lg tracking-widest uppercase mb-3 select-none">
          Swipet
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
          {heroT.tagline}
        </h1>

        {/* Subtle tagline bar */}
        <div className="w-12 h-1 rounded-full bg-white/40 mb-10" />

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 w-full max-w-sm">
          {/* Primary CTA */}
          <button
            onClick={() => scrollTo("feedback")}
            className="w-full sm:w-auto px-10 py-4 bg-white text-primary font-bold rounded-full text-lg
              shadow-xl hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98]
              transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            {heroT.cta}
          </button>

          {/* Secondary link */}
          <button
            onClick={() => scrollTo("signup")}
            className="text-white/85 text-sm underline underline-offset-4 decoration-white/50
              hover:text-white hover:decoration-white transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
          >
            {heroT.secondary}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50">
        <div className="w-px h-8 bg-white/60 rounded-full animate-pulse" />
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          className="text-white"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
