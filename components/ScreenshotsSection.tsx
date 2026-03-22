"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const SCREENSHOTS = [
  "/SH3.png",
  "/SH5.png",
  "/SH2.png",
  "/SH4.png",
  "/SH6.png",
  "/SH1.png",
  "/SH8.png",
  "/SH7.png",
];

interface ScreenshotsSectionProps {
  screenshotsT: {
    heading: string;
    subtext: string;
  };
}

export default function ScreenshotsSection({ screenshotsT }: ScreenshotsSectionProps) {
  const [current, setCurrent] = useState(0);
  const { ref, isInView: inView } = useInView({ threshold: 0.2 });
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Touch / drag state
  const touchStartX = useRef<number | null>(null);
  const dragStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + SCREENSHOTS.length) % SCREENSHOTS.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SCREENSHOTS.length);
    }, 3000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetTimer]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      goTo(current + (diff > 0 ? 1 : -1));
      resetTimer();
    }
    touchStartX.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - e.clientX;
    if (Math.abs(diff) > 40) {
      goTo(current + (diff > 0 ? 1 : -1));
      resetTimer();
    }
    dragStartX.current = null;
  };

  return (
    <div
      ref={ref}
      className="py-20 px-4"
      style={{ backgroundColor: "#FFF5F7" }}
    >
      {/* Heading */}
      <div
        className="text-center mb-12 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: "#2C2C2A" }}
        >
          {screenshotsT.heading}
        </h2>
        <p className="text-base max-w-md mx-auto" style={{ color: "#888780" }}>
          {screenshotsT.subtext}
        </p>
      </div>

      {/* Carousel */}
      <div
        className="flex flex-col items-center gap-6 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(32px)",
          transitionDelay: "120ms",
        }}
      >
        {/* Mockup + arrows row */}
        <div className="flex items-center gap-5">
          {/* Left arrow */}
          <button
            onClick={() => { goTo(current - 1); resetTimer(); }}
            aria-label="Vorheriges Bild"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              width: 44,
              height: 44,
              background: "#fff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              border: "1.5px solid #f0e8ea",
              color: "#E27289",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 14L6 9l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

        {/* iPhone mockup — outer div IS the phone frame */}
        <div
          className="relative select-none cursor-grab active:cursor-grabbing shadow-2xl overflow-hidden"
          style={{
            width: 270,
            height: 560,
            borderRadius: 44,
            border: "8px solid #1a1a1a",
            background: "#000",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          {/* Notch */}
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: 0,
              width: 90,
              height: 28,
              background: "#1a1a1a",
              borderRadius: "0 0 16px 16px",
              zIndex: 10,
            }}
          />
          {/* Screenshots */}
          {SCREENSHOTS.map((src, i) => (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <Image
                src={src}
                alt={`Swipet Screenshot ${i + 1}`}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority={i === 0}
                draggable={false}
              />
            </div>
          ))}
        </div>

          {/* Right arrow */}
          <button
            onClick={() => { goTo(current + 1); resetTimer(); }}
            aria-label="Nächstes Bild"
            className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              width: 44,
              height: 44,
              background: "#fff",
              boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
              border: "1.5px solid #f0e8ea",
              color: "#E27289",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>{/* end mockup+arrows row */}

        {/* Dot indicators */}
        <div className="flex gap-2">
          {SCREENSHOTS.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i); resetTimer(); }}
              aria-label={`Screenshot ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 20 : 8,
                height: 8,
                background: i === current ? "#E27289" : "#D1C9C9",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
