"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Download } from "lucide-react";

const projects = [
  {
    title: "Luxury Hotel Website",
    liveUrl: "https://luxury-hotel-web.netlify.app/",
    clientUrl:
      "https://github.com/FaisalAmeen07/Luxury-Hotel-site-html_bootstrap_js-",
    description:
      "The Luxury Hotel Website is a modern, elegant, and fully responsive front-end project built with HTML and CSS. It features a visually appealing design that showcases premium hospitality services, rooms, and amenities with smooth layouts and refined typography. Designed with user experience in mind, the site adapts seamlessly to all screen sizes, offering a luxurious browsing experience on both desktop and mobile devices.",
  },
  {
    title: "Currency Converter",
    liveUrl: "https://currency-conversion-wbsite.netlify.app/",
    clientUrl: "https://github.com/FaisalAmeen07/",
    description:
      "The Currency Converter is a responsive web app that allows users to convert between different currencies in real-time. Built using HTML, CSS, and JavaScript, it integrates a Live Currency API for up-to-date exchange rates and a Flags API to visually represent countries. Designed for speed and simplicity, it ensures an intuitive and seamless experience across all devices.",
  },
  {
    title: "Ecommerce Website",
    liveUrl: "https://e-shop-ecommerce-complete-front-end.vercel.app/",
    clientUrl:
      "https://github.com/FaisalAmeen07/E-Shop_Ecommerce_Complete_FrontEnd-React.JS",
    description:
      "A modern Frontend E-Commerce website built with React that uses Context API for state management and integrates live product data from a third-party API. The platform allows users to explore products effortlessly with advanced filters based on brand and price range. Designed with a responsive layout, it ensures a smooth shopping experience across all devices. The project emphasizes reusable components and optimized performance to deliver a fast, app-like user experience.",
  },
];

const SectionHeader = ({ children }) => (
  <h2 className="text-2xl font-bold text-[#37373e] border-b-2 border-[#2ec4b6] pb-2 mb-6">
    {children}
  </h2>
);

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = 'Faisal-Amin-Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen pt-14 px-4 sm:px-8 lg:px-20 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#2ec4b6]/20 relative"
      >
        {/* Download Button - Now positioned outside the main content flow */}
        <div className="flex justify-end mb-6 sm:mb-0 sm:absolute sm:top-6 sm:right-6">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 bg-[#2ec4b6] text-white px-4 py-3 rounded-full hover:bg-[#1a8a7d] transition-all duration-300 hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
          >
            <Download size={18} />
            <span className="text-sm font-medium">Download PDF</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="border-b border-[#2ec4b6]/30 pb-8 mb-8 text-center sm:pt-0 pt-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#37373e] tracking-wider mb-2">
            FAISAL AMIN
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2ec4b6] to-[#1a8a7d] mx-auto mb-4 rounded-full"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-[#2ec4b6] font-semibold mt-2">
            Frontend Developer
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mt-6 text-sm text-[#37373e]">
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg w-full sm:w-auto justify-center">
              <Mail size={16} className="text-[#2ec4b6]" /> 
              <span>odeveloper56@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg w-full sm:w-auto justify-center">
              <Phone size={16} className="text-[#2ec4b6]" /> 
              <span>(+92) 3062672226</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg w-full sm:w-auto justify-center">
              <MapPin size={16} className="text-[#2ec4b6]" /> 
              <span>Lahore, Ali Town</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/faisal-ameen07/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-3 rounded-full text-[#37373e] hover:bg-[#2ec4b6] hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/FaisalAmeen07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-3 rounded-full text-[#37373e] hover:bg-[#2ec4b6] hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            >
              <Github size={20} />
            </a>
            <a
              href="https://currency-conversion-wbsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 p-3 rounded-full text-[#37373e] hover:bg-[#2ec4b6] hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* Two Column Layout for About and Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* About Section */}
          <div>
            <SectionHeader>About Me</SectionHeader>
            <p className="text-[#37373e] leading-relaxed">
              My name is Faisal Ameen. I recently graduated with a Bachelor's
              degree in Software Engineering. I have a strong interest in
              technology and communication, and I'm eager to start my career in a
              professional environment where I can grow, learn, and contribute.
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <SectionHeader>Technical Skills</SectionHeader>
            <div className="grid grid-cols-2 gap-3 text-[#37373e]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>HTML5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>CSS3</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>React.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>Git & GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>WordPress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full"></div>
                <span>Elementor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-8">
          <SectionHeader>Work Experience</SectionHeader>
          <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-[#2ec4b6]/20">
            <p className="text-[#37373e] leading-relaxed">
              Completed a 6-month Web Designing course from{" "}
              <span className="font-semibold text-[#2ec4b6]">Code Labe & IT Solution</span>, where
              I learned and practiced complete Frontend Development. Worked with
              modern tools like HTML, CSS, JavaScript, and React.js, and also
              contributed to an e-commerce website using React.js.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <SectionHeader>Education</SectionHeader>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-[#2ec4b6]/20 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-[#37373e] text-lg">
                The Islamia University of Bahawalpur (2021 - 2025)
              </h3>
              <p className="text-[#2ec4b6] font-medium">Bachelor of Software Engineering</p>
              <p className="text-[#37373e]">CGPA: 3.68/4.00</p>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-white p-5 rounded-xl border border-[#2ec4b6]/20 hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-[#37373e] text-lg">
                Scholars Inn Boys H.S.S, JPP (2020 - 2021)
              </h3>
              <p className="text-[#2ec4b6] font-medium">FSC Pre Engineering</p>
              <p className="text-[#37373e]">Marks: 1024/1100</p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <SectionHeader>Featured Projects</SectionHeader>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-white border border-[#2ec4b6]/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-semibold text-[#37373e] mb-3 group-hover:text-[#2ec4b6] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#37373e] mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-[#2ec4b6] text-white px-4 py-2 rounded-full hover:bg-[#1a8a7d] transition-all duration-300 hover:scale-105 font-medium w-full sm:w-auto justify-center"
                  >
                    <Globe size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm bg-gray-100 text-[#37373e] px-4 py-2 rounded-full hover:bg-[#2ec4b6] hover:text-white transition-all duration-300 hover:scale-105 font-medium w-full sm:w-auto justify-center"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-[#2ec4b6]/30 pt-6 mt-8 text-center">
          <p className="text-sm text-[#37373e]">
            © {new Date().getFullYear()} Faisal Amin | Built with Next.js & Tailwind CSS
          </p>
          <p className="text-xs text-[#2ec4b6] mt-2">
            Passionate about creating beautiful and functional web experiences
          </p>
        </div>
      </motion.div>
    </section>
  );
}