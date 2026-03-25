"use client";

import { useInView } from "@/hooks/useInView";

interface AboutT {
  heading: string;
  para1: string;
  para2: string;
  para3: string;
}

export default function AboutSection({ aboutT }: { aboutT: AboutT }) {
  const { ref, isInView: inView } = useInView();

  return (
    <section className="py-24 px-6 bg-white">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: "#2C2C2A" }}>
          {aboutT.heading}
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-5 text-left" style={{ color: "#888780" }}>
          {aboutT.para1}
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-5 text-left" style={{ color: "#888780" }}>
          {aboutT.para2}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-left" style={{ color: "#888780" }}>
          {aboutT.para3}
        </p>
      </div>
    </section>
  );
}
