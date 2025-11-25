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
import { Sun, Moon } from "lucide-react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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

    const hoverStyle = {
      backgroundColor: isHovered ? "#2ec4b6" : "transparent",
      color: isHovered ? "white" : "var(--text-color)",
    };

    if (item.external) {
      return (
        <Link
          href={item.path}
          onClick={() => setIsOpen(false)}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300"
          style={hoverStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.icon}
          <span>{item.name}</span>
        </Link>
      );
    }

    if (pathname === "/") {
      return (
        <ScrollLink
          to={item.path}
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer"
          style={hoverStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {item.icon}
          <span>{item.name}</span>
        </ScrollLink>
      );
    }

    return (
      <button
        onClick={() => {
          handleScrollOrNavigate(item.path);
          setIsOpen(false);
        }}
        className="flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left"
        style={hoverStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {item.icon}
        <span>{item.name}</span>
      </button>
    );
  };

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 transition-all duration-300 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md border"
      style={{
        backgroundColor: isScrolled ? "var(--header-bg)" : "var(--bg-color)",
        borderColor: "var(--header-border)",
        color: "var(--text-color)",
      }}
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
            <span
              className="font-bold text-xl leading-5"
              style={{ color: "var(--text-color)" }}
            >
              Faisal Amin
            </span>
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-color)" }}
            >
              FrontEnd Developer
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) =>
              item.external ? (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm cursor-pointer 
                  hover:bg-[#2ec4b6] hover:!text-white transition-all duration-300 
                  text-black dark:text-white"
                  style={{ color: "var(--text-color)" }}
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
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm cursor-pointer 
                hover:bg-[#2ec4b6] hover:!text-white transition-all duration-300 
                dark:text-white"
                  style={{ color: "var(--text-color)" }}
                >
                  {item.icon}
                  {item.name}
                </ScrollLink>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleScrollOrNavigate(item.path)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full border-amber-50 text-sm cursor-pointer 
                  transition-all duration-300 
                hover:bg-[#2ec4b6] hover:!text-white"
                  style={{ color: "var(--text-color)" }}
                >
                  {item.icon}
                  {item.name}
                </button>
              )
            )}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#2ec4b6] text-white hover:bg-[#1a8a7d] transition-all duration-300"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Divider */}
          <div
            className="h-6 w-px mx-4"
            style={{ background: "var(--text-color)" }}
          ></div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2ec4b6] p-1 rounded text-white hover:bg-[#1a8a7d]"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-[#2ec4b6] rounded-lg transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <span className="text-2xl">☰</span>}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden absolute w-full rounded-b-2xl shadow-xl backdrop-blur-md"
            style={{
              backgroundColor: "var(--header-bg)",
              borderTop: `1px solid var(--header-border)`,
              color: "var(--text-color)",
            }}
          >
            <div className="px-4 py-4">
              <ul className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <MobileMenuItem item={item} />
                  </li>
                ))}
              </ul>

              <div className="h-px my-4 bg-[#2ec4b6]"></div>

              <div className="flex items-center justify-center gap-4 py-2">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2ec4b6] text-white p-1 rounded hover:bg-[#1a8a7d]"
                  >
                    {item.icon}
                  </motion.a>
                ))}
                <div className="flex justify-center py-3">
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded bg-[#2ec4b6] text-white hover:bg-[#1a8a7d] transition-all duration-300"
                  >
                    {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
