"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
} from "lucide-react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScrollOrNavigate = (section) => {
    if (pathname !== "/") {
      sessionStorage.setItem("scrollTo", section); // store section name temporarily
      router.push("/"); // just go back to home
    }
  };

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
      icon: <Github size={18} />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/faisal-ameen07/",
      icon: <Linkedin size={18} />,
    },
    {
      name: "Email",
      path: "mailto:odeveloper56@gmail.com",
      icon: <Mail size={18} />,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50  text-white backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/profileLogo.png"
            width={150}
            height={40}
            alt="Logo"
            className="object-contain"
          />
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {menuItems.map((item) =>
              item.external ? (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm hover:bg-[#f4623a] hover:text:white transition-colors"
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
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm  hover:bg-[#f4623a] transition-colors cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </ScrollLink>
              ) : (
                <button
                  key={item.name}
                  onClick={() => handleScrollOrNavigate(item.path)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-sm text-white hover:bg-[#f4623a] transition-colors cursor-pointer"
                >
                  {item.icon}
                  {item.name}
                </button>
              )
            )}
          </ul>

          {/* Divider */}
          <div className="h-6 w-px bg-white/30 mx-4"></div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                whileHover={{ scale: 1.2 }}
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#f4623a] transition-colors"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile menu button (visible on 1024px and below) */}
        <button
          className="lg:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="lg:hidden bg-black/70 backdrop-blur-lg border-t border-white/20 px-4 py-0"
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) =>
            item.external ? (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-violet-500 transition-colors"
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
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-violet-500 transition-colors cursor-pointer"
              >
                {item.icon}
                {item.name}
              </ScrollLink>
            ) : (
              <button
                key={item.name}
                onClick={() => {
                  handleScrollOrNavigate(item.path);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-white hover:bg-violet-500 transition-colors cursor-pointer"
              >
                {item.icon}
                {item.name}
              </button>
            )
          )}
        </ul>

        <div className="h-px bg-white/30 my-3"></div>

        <div className="flex items-center justify-center gap-6 pb-2">
          {socialLinks.map((item) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-violet-400 transition-colors"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;
