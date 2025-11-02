"use client";
import React, { useEffect } from "react";
import OrbitingSkill from '../component/OrbitingSkill.jsx';
import MarqueSkill from '../component/MarqueSkill.jsx';



export default function SkillsSection() {
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
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div className="container mx-auto pt-10 px-6 lg:px-24">
        <div className="flex items-center justify-center gap-4">
          <div className="w-[3px] h-12 bg-[#2ec4b6]"></div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#242f30]">
            My Best <span className="text-[#2ec4b6]">Skills</span> &{" "}
            <span className="text-[#2ec4b6]">Technologies</span>
          </h2>

          <div className="w-[2px] h-12 bg-[#2ec4b6]"></div>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 lg:gap-8">
         <OrbitingSkill/>
          <MarqueSkill/>
        </div>
      </div>
    </section>
  );
}
