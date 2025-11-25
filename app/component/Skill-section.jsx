"use client";
import React, { useEffect } from "react";

import OrbitingSkill from '../component/OrbitingSkill.jsx'; 
import MarqueSkill from '../component/MarqueSkill.jsx';

export default function SkillsSection() {
  // Inject marquee animation dynamically
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <section className="overflow-hidden py-12" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>
      <div className="container mx-auto px-6 lg:px-24">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-1">
          <div className="w-[3px] h-12 bg-[#2ec4b6]"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center" style={{ color: "var(--text-color)" }}>
            My Best <span className="text-[#2ec4b6]">Skills</span> &{" "}
            <span className="text-[#2ec4b6]">Technologies</span>
          </h2>
          <div className="w-[2px] h-12 bg-[#2ec4b6]"></div>
        </div>

        {/* Orbiting Skills + Marquee */}
        <div className="flex flex-col items-center justify-center">
          <OrbitingSkill/> 
          <MarqueSkill/>
        </div>
      </div>
    </section>
  );
}
