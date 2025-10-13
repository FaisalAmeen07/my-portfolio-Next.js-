"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { scroller } from "react-scroll";
import HeroSection from "./component/Hero.jsx";
import SkillsSection from "./component/Skill-section.jsx";
import Projects from "./component/Projects.jsx";
import Education from "./component/Education.jsx";
import Services from "./component/Services.jsx";
import Contact from "./component/Contact.jsx";

const Page = () => {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      // wait a short time so the sections are mounted before scrolling
      setTimeout(() => {
        scroller.scrollTo(scrollTo, {
          duration: 600,
          smooth: "easeInOutQuart",
          offset: -80, // adjust to your navbar height
        });
      }, 300);
    }
  }, [scrollTo]);

  return (
    <>
      <section id="heroSection">
        <HeroSection />
      </section>

      <section id="skillsSection">
        <SkillsSection />
      </section>
      
      <section id="projectsSection">
        <Projects />
      </section>

      <section id="educationSection">
        <Education/>
      </section>

      <section id="servicesSection">
        <Services/>
      </section> 
      <section id="contactSection">
        <Contact/>
      </section> 
    </>
  );
};

export default Page;
