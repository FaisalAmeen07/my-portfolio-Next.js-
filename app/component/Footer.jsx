"use client";
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Home, Code, FolderGit2, Briefcase, PhoneCall, FileText } from 'lucide-react';
import { FaCode } from "react-icons/fa";

const footerConfig = {
  name: "Faisal Amin",
  tagline: "FrontEnd Developer",
  description: "Tech enthusiast with a passion for design, travel and creativity.",
  
  navLinks: [
    { name: "Home", path: "heroSection", icon: <Home size={16} /> },
    { name: "Skills", path: "skillsSection", icon: <Code size={16} /> },
    { name: "Projects", path: "projectsSection", icon: <FolderGit2 size={16} /> },
    { name: "Services", path: "servicesSection", icon: <Briefcase size={16} /> },
    { name: "Contact", path: "contactSection", icon: <PhoneCall size={16} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={16} />, external: true },
  ],

  socialLinks: [
    { 
      label: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/FaisalAmeen07/' 
    },
    { 
      label: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/faisal-ameen07/' 
    },
    { 
      label: 'Mail', 
      icon: Mail, 
      href: 'mailto:odeveloper56@gmail.com' 
    },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="backdrop-blur-md border-t border-[#2ec4b6]/20 mt-20 relative overflow-hidden"
      style={{
              backgroundColor: "var(--skills-bg)", 
              color: "var(--text-color)",
            }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#2ec4b6] rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#2ec4b6] rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-20 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start gap-4" style={{ color: "var(--text-color)" }}>
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#2ec4b6] to-[#1a8a7d] rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl"><FaCode/></span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-5" style={{ color: "var(--text-color)" }}>
                  {footerConfig.name}
                </span>
                <span className="text-xs font-medium" style={{ color: "var(--text-color)" }}>
                  {footerConfig.tagline}
                </span>
              </div>
            </Link>
            <p className="text-sm text-center lg:text-left max-w-xs mt-2">
              {footerConfig.description}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold text-[#2ec4b6] mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              {footerConfig.navLinks.map((item) => (
                <div key={item.name}>
                  {item.external ? (
                    <Link
                      href={item.path}
                      className="flex items-center gap-2 hover:!text-[#2ec4b6] transition-all duration-300 hover:translate-x-1 group text-sm" style={{ color: "var(--text-color)"}}
                    >
                      <span className="group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </span>
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.path)}
                      className="flex items-center gap-2 hover:!text-[#2ec4b6] transition-all duration-300 hover:translate-x-1 group text-sm w-full text-left"
                      style={{ color: "var(--text-color)" }}
                    >
                      <span className="group-hover:opacity-100 transition-opacity duration-300">
                        {item.icon}
                      </span>
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold text-[#2ec4b6] mb-4">Let's Connect</h3>
            <p className="text-sm mb-4 text-center lg:text-left" style={{ color: "var(--text-color)" }}>
              Ready to bring your ideas to life? Let's work together!
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {footerConfig.socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-white p-3 rounded-xl shadow-lg transition-all duration-300 hover:!bg-[#2ec4b6] hover:!text-white hover:scale-110 hover:shadow-2xl hover:shadow-[#2ec4b6]/20"
                  style={{ color: "var(--text-color)",
                    backgroundColor: "var(--footer-icon-bg)"
                   }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Copyright Information */}
        <div className="border-t border-[#2ec4b6]/30 pt-6 text-center">
          <p className="text-sm" style={{ color: "var(--text-color)" }}>
            &copy; {currentYear} <span className='text-[#2ec4b6] font-semibold'>{footerConfig.name}</span>. All Rights Reserved.
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--text-color)" }}> 
            Crafted with using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;