"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code,
  PenTool,
  Cloud,
  CheckCircle2,
  WordPress,
} from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Web Development",
    description:
      "Building full-stack applications with modern web standards for a seamless user experience.",
    points: [
      "Custom Web Apps",
      "Progressive Web Apps",
      "Single Page Applications",
    ],
    themeColor: "red",
  },
  {
    icon: <Smartphone className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Responsive Design",
    description:
      "Crafting mobile-first, adaptive layouts that work flawlessly on all devices and screen sizes.",
    points: [
      "Mobile Optimization",
      "Cross-Browser Compatibility",
      "Touch-Friendly Interfaces",
    ],
    themeColor: "pink",
  },
  {
    icon: <Code className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Frontend Development",
    description:
      "Developing interactive and high-performance UIs using modern frontend frameworks.",
    points: [
      "React.js & Next.js",
      "Tailwind CSS & JavaScript",
      "API Integration",
    ],
    themeColor: "green",
  },
  {
    icon: <PenTool className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "WordPress Development",
    description:
      "Creating dynamic and customizable websites using WordPress with modern themes and plugins.",
    points: [
      "Custom WordPress Themes",
      "Elementor & Gutenberg",
      "Speed & SEO Optimization",
    ],
    themeColor: "blue",
  },
  {
    icon: <Cloud className="w-8 h-8 lg:w-12 lg:h-12" />,
    title: "Cloud Deployment",
    description:
      "Seamless deployment and management of full-stack apps on modern cloud platforms.",
    points: ["Vercel & Netlify", "GitHub", "Production Optimization"],
    themeColor: "sky",
  },
];

const themeStyles = {
  sky: {
    border: "border-violet-500/30",
    gradientIndicator: "bg-gradient-to-b from-violet-500 to-violet-400",
    gradientIcon: "bg-gradient-to-br from-violet-500 to-violet-400",
    text: "text-[#9a6eff]",
    bg: "bg-white",
    shadow: "shadow-violet-500/20",
  },
  pink: {
    border: "border-pink-500/30",
    gradientIndicator: "bg-gradient-to-b from-pink-500 to-pink-400",
    gradientIcon: "bg-gradient-to-br from-pink-500 to-pink-400",
    text: "text-[#fa53ab]",
    bg: "bg-white",
    shadow: "shadow-pink-500/20",
  },
  green: {
    border: "border-green-500/30",
    gradientIndicator: "bg-gradient-to-b from-green-500 to-green-400",
    gradientIcon: "bg-gradient-to-br from-green-500 to-green-400",
    text: "text-green-600",
    bg: "bg-white",
    shadow: "shadow-green-500/20",
  },
  blue: {
    border: "border-blue-500/30",
    gradientIndicator: "bg-gradient-to-br from-blue-500 to-blue-400",
    gradientIcon: "bg-gradient-to-br from-blue-500 to-blue-400",
    text: "text-[#4967ea]",
    bg: "bg-white",
    shadow: "shadow-orange-500/20",
  },
  red: {
    border: "border-red-500/30",
    gradientIndicator: "bg-gradient-to-b from-red-500 to-red-400",
    gradientIcon: "bg-gradient-to-br from-red-500 to-red-400",
    text: "text-[#fd474c]",
    bg: "bg-white",
    shadow: "shadow-red-500/20",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];
  const activeTheme = themeStyles[activeService.themeColor];

  return (
    <section className="overflow-hidden" aria-labelledby="services-title">
      <div className="container mx-auto px-4 lg:px-20 border-blue-800">
        <motion.header
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-[2px] h-12 bg-[#2ec4b6]"></div>
            <h2
              id="services-title"
              className="text-4xl lg:text-5xl font-bold text-center"
              style={{ color: "var(--text-color)" }}
            >
              My Expert <span className="text-[#2ec4b6]"> Services</span>
            </h2>
            <div className="w-[2px] h-12 bg-[#2ec4b6]"></div>
          </div>
          <p
            className="text-sm my-6 max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-color)" }}
          >
            I provide a wide range of services to turn your ideas into reality.
            Here's how I can help you succeed.
          </p>
        </motion.header>

        <div className="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3 lg:w-1/3"
          >
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={`
                relative text-left w-full p-4 rounded-xl transition-all duration-300 transform 
                hover:-translate-y-1 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 group

    ${
      activeIndex === index
        ? `bg-[#2ec4b6] text-white  shadow-lg ${
            themeStyles[service.themeColor].border
          }`
        : "hover:!bg-[#2ec4b6] hover:!text-white"
    }
  `}
                style={{
                  backgroundColor:
                    activeIndex === index ? "#2ec4b6" : "var(--skills-bg)",
                  color:
                    activeIndex === index ? "#ffffff" : "var(--text-color)",
                }}
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-service-indicator"
                    className={`absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl ${
                      themeStyles[service.themeColor].gradientIndicator
                    }`}
                  />
                )}

                <span
                  className={`
                  text-xl font-semibold transition-colors duration-300 pl-4
                  ${
                    activeIndex === index
                      ? "text-white"
                      : "group-hover:text-white"
                  }
                             `}
                  style={{
                    color: activeIndex === index ? "#fff" : "var(--text-color)",
                  }}
                >
                  {service.title}
                </span>
              </button>
            ))}
          </motion.div>

          <div className="lg:w-2/3 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`w-full p-8 rounded-2xl shadow-xl backdrop-blur-md`} 
                 style={{
              backgroundColor: "var(--skills-bg)", 
              color: "var(--text-color)",
            }}
              >
                <div
                  className={`mb-6 inline-block p-4 rounded-full shadow-md  text-white  ${activeTheme.gradientIcon}`}
                >
                  {activeService.icon}
                </div>
                <h3 className="text-3xl font-extrabold mb-4 text-[#2ec4b6]">
                  {activeService.title}
                </h3>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--text-color)" }}>
                  {activeService.description}
                </p>
                <ul className="space-y-4">
                  {activeService.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i + 0.3 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle2
                        className={`w-6 h-6 flex-shrink-0 ${activeTheme.text}`}
                      />
                      <span className="text-lg"  style={{ color: "var(--text-color)" }}>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const serviceTheme = themeStyles[service.themeColor];
            return (
              <motion.div
                key={index}
                className="group relative flex flex-col p-6 rounded-2xl backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 transform hover:-translate-y-2"
                 style={{
              backgroundColor: "var(--skills-bg)", 
              color: "var(--text-color)",
            }}
                variants={cardVariants}
              >
                <div
                  className={`mb-5 p-4 rounded-xl inline-flex self-start text-white shadow-lg ${serviceTheme.gradientIcon} ${serviceTheme.shadow}`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#2ec4b6] mb-2">
                  {service.title}
                </h3>
                <p className="mb-6 flex-grow"  style={{ color: "var(--text-color)" }}>
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2
                        className={`w-5 h-5 flex-shrink-0 ${serviceTheme.text}`}
                      />
                      <span className=""  style={{ color: "var(--text-color)" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
