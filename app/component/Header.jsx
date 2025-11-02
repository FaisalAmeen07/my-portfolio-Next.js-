"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Code,
  FolderGit2,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Mail,
  PhoneCall,
  X,
} from "lucide-react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollOrNavigate = (section) => {
    if (pathname !== "/") {
      sessionStorage.setItem("scrollTo", section);
      router.push("/");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "heroSection", icon: <Home size={18} /> },
    { name: "Skills", path: "skillsSection", icon: <Code size={18} /> },
    {
      name: "Projects",
      path: "projectsSection",
      icon: <FolderGit2 size={18} />,
    },
    {
      name: "Services",
      path: "servicesSection",
      icon: <Briefcase size={18} />,
    },
    { name: "Contact", path: "contactSection", icon: <PhoneCall size={18} /> },
    {
      name: "Resume",
      path: "/resume",
      icon: <FileText size={18} />,
      external: true,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      path: "https://github.com/FaisalAmeen07/",
      icon: <Github size={23} />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/faisal-ameen07/",
      icon: <Linkedin size={23} />,
    },
    {
      name: "Email",
      path: "mailto:odeveloper56@gmail.com",
      icon: <Mail size={23} />,
    },
  ];

  const MobileMenuItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);

    if (item.external) {
      return (
        <Link
          href={item.path}
          onClick={() => setIsOpen(false)}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group"
          style={{
            backgroundColor: isHovered ? "#2ec4b6" : "transparent",
            color: isHovered ? "white" : "black",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="transition-colors duration-300">{item.icon}</div>
          <span className="font-medium">{item.name}</span>
        </Link>
      );
    } else if (pathname === "/") {
      return (
        <ScrollLink
          to={item.path}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer group"
          style={{
            backgroundColor: isHovered ? "#2ec4b6" : "transparent",
            color: isHovered ? "white" : "black",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="transition-colors duration-300">{item.icon}</div>
          <span className="font-medium">{item.name}</span>
        </ScrollLink>
      );
    } else {
      return (
        <button
          onClick={() => {
            handleScrollOrNavigate(item.path);
            setIsOpen(false);
          }}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer text-left group"
          style={{
            backgroundColor: isHovered ? "#2ec4b6" : "transparent",
            color: isHovered ? "white" : "black",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="transition-colors duration-300">{item.icon}</div>
          <span className="font-medium">{item.name}</span>
        </button>
      );
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 
      transition-all duration-300 text-black
      rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] 
      backdrop-blur-md ${
        isScrolled ? "bg-white/60 border-[#2ec4b6]/50" : "bg-white"
      }`}
      ref={mobileMenuRef}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#2ec4b6] to-[#1a8a7d] rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">
              <FaCode />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-800 text-xl leading-5">
              Faisal Amin
            </span>
            <span className="text-gray-500 text-xs font-medium">
              FrontEnd Developer
            </span>
          </div>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) =>
              item.external ? (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm hover:bg-[#2ec4b6] hover:text-white transition-colors duration-300"
                >
                  {item.icon}
                  {item.name}
                </Link>
              ) : pathname === "/" ? (
                <ScrollLink
                  key={item.name}
                  to={item.path}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm hover:bg-[#2ec4b6] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </ScrollLink>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleScrollOrNavigate(item.path)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-black hover:bg-[#2ec4b6] hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </button>
              )
            )}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-black mx-4"></div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-[#2ec4b6] p-1 rounded transition-colors duration-300"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-[#2ec4b6] focus:outline-none transition-colors duration-300 hover:bg-[#2ec4b6] hover:text-white rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <span className="text-2xl">☰</span>}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden absolute w-full bg-white/95 backdrop-blur-md border-t border-[#2ec4b6] rounded-b-2xl shadow-xl"
          >
            <div className="px-4 py-4">
              <ul className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <MobileMenuItem item={item} />
                  </li>
                ))}
              </ul>

              <div className="h-px bg-[#2ec4b6] my-4"></div>

              <div className="flex items-center justify-center gap-4 py-2">
                {socialLinks.map((item) => (
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-[#2ec4b6] p-1 rounded transition-colors duration-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
