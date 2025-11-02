"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Facebook } from "lucide-react";

// socila icon
const SocialIcon = () => {
  const socialLinks = [
    {
      href: "https://github.com/FaisalAmeen07/",
      icon: <Github size={24} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/faisal-ameen07/",
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
    },
    {
      href: "https://www.facebook.com/share/14LYnodXV7z/",
      icon: <Facebook size={24} />,
      label: "Facebook",
    },
  ];

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-black hover:text-[#2ec4b6] transition-colors duration-300"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

// Custom hook to replicate the typewriter effect
const useTypewriter = ({
  words,
  loop = true,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 2000,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), delaySpeed);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
  ]);

  return [text];
};

// Simple blinking cursor component
const Cursor = ({ cursorStyle = "_" }) => {
  return <span className="animate-ping">{cursorStyle}</span>;
};

// The main Hero Section component
export default function HeroSection() {
  const [text] = useTypewriter({
    words: [
      "Frontend Developer",
      "Web Designer",
      "WordPress & Elementor Expert",
      "I craft clean, responsive UIs",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-20 px-4 lg:px-20 mt-16">
      {/* Left side content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 bg-[#2ec4b6] rounded-full text-xs sm:text-sm text-white backdrop-blur-sm hover:bg-[#0fdac5] dark:hover:bg-[#2ec4b6]/50 transition-all duration-300">
          Welcome to my world of code and creativity.
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
          Hi, I am
        </h1>

        <span className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-[#2ec4b6] ml-0 md:ml-10">
          Faisal Amin
        </span>

        <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-[#2ec4b6] dark:text-[#2ec4b6] flex justify-center md:justify-start items-center h-8">
          <span className="mr-2">{text}</span>
          <Cursor cursorStyle="_" />
        </h2>

        <p className="mt-3 max-w-xl text-lg text-black sm:text-base italic">
          “I'm a Frontend-focused MERN Stack Developer passionate about building
          fast, responsive, and scalable web applications. Skilled in React.js,
          Next.js, Express.js, and MongoDB, I create intuitive, user-centered
          interfaces using Tailwind CSS,and Bootstrap. In addition,
          I build dynamic and visually engaging WordPress websites with
          Elementor, blending modern design with clean, efficient code.
         ”
        </p>
        <div className="mt-6">
          <SocialIcon />
        </div>
        <a
          href="/Resume.pdf"
          download="Faisal_Ameen_Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-2 mt-8 bg-[#2ec4b6] border border-[#2ec4b6] rounded-full text-sm sm:text-base text-white backdrop-blur-sm hover:bg-[#38a69b] transition-all duration-300"
        >
          Download Resume <Download size={20} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="lg:col-span-2 flex justify-center items-center"
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#2ec4b6]/50"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-[#2ec4b6]/40"
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          <motion.img
            src="/Profile-img.png"
            alt="Faisal Ameen"
            className="w-full h-full object-cover rounded-full p-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
