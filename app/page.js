// app/page.js
import { Suspense } from "react";
import ScrollWrapper from "./component/ScrollWrapper.jsx"; // New file
import HeroSection from "./component/Hero.jsx";
import SkillsSection from "./component/Skill-section.jsx";
import Projects from "./component/Projects.jsx";
import Education from "./component/Education.jsx";
import Services from "./component/Services.jsx";
import Contact from "./component/Contact.jsx";

// Loading UI for Suspense (Aap isay achha design de sakte hain)
const Loading = () => <div className="text-center p-20">Loading...</div>; 

const Page = () => {
  return (
    <>
      {/* ScrollWrapper ko Suspense ke andar rakha jayega */}
      <Suspense fallback={<Loading />}>
        <ScrollWrapper />
      </Suspense>

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