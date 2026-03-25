"use client";

import { useInView } from "@/hooks/useInView";

interface AboutT {
  heading: string;
  subtext: string;
  features: { icon: string; title: string; text: string }[];
}

export default function AboutSection({ aboutT }: { aboutT: AboutT }) {
  const { ref, isInView: inView } = useInView();

  return (
    <section className="py-24 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#2C2C2A" }}>
            {aboutT.heading}
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: "#888780" }}>
            {aboutT.subtext}
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutT.features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 text-center transition-all duration-500"
              style={{
                background: "#FFF5F7",
                transitionDelay: `${i * 100}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#2C2C2A" }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#888780" }}>
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
