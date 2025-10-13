"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

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
  <h2 className="text-2xl font-bold text-slate-100 border-b-2 border-[#f55e34] pb-2 mb-4">
    {children}
  </h2>
);

export default function ResumePage() {
  return (
    <section className="min-h-screen pt-12 px-4 sm:px-8 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-violet-200 dark:border-[#f38d70]"
      >
        {/* Header Section */}
        <div className="border-b border-gray-300 dark:border-gray-700 pb-6 mb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wider">FAISAL AMIN</h1>
          <p className="text-xl sm:text-2xl text-[#f1623b] font-medium mt-2">
            Frontend Developer
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Mail size={16} /> <span>odeveloper56@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> <span>(+92) 3062672226</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} /> <span>Lahore, Ali Town</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mt-4">
            <a
              href="https://www.linkedin.com/in/faisal-ameen07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f38d70] hover:text-[#e15832]"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/FaisalAmeen07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f38d70] hover:text-[#e15832]"
            >
              <Github size={20} />
            </a>
            <a
              href="https://currency-conversion-wbsite.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f38d70] hover:text-[#e15832]"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8">
          <SectionHeader>About</SectionHeader>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My name is Faisal Ameen. I recently graduated with a Bachelor's
            degree in Software Engineering. I have a strong interest in
            technology and communication, and I’m eager to start my career in a
            professional environment where I can grow, learn, and contribute.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-8">
          <SectionHeader>Work Experience</SectionHeader>
          <p className="text-gray-700 dark:text-gray-300">
            Completed a 6-month Web Designing course from{" "}
            <span className="font-medium">Code Labe & IT Solution</span>, where
            I learned and practiced complete Frontend Development. Worked with
            modern tools like HTML, CSS, JavaScript, and React.js, and also
            contributed to an e-commerce website using React.js.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <SectionHeader>Education</SectionHeader>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                The Islamia University of Bahawalpur (2021 - 2025)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bachelor of Software Engineering — 3.68 GPA
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                Scholars Inn Boys H.S.S, JPP (2020 - 2021)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                FSC Pre Engineering — 1024 Marks
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <SectionHeader> Projects</SectionHeader>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-violet-200 dark:border-[#f38d70] rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#f38d70] hover:text-[#e15832] font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#f38d70] hover:text-[#e15832] font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <SectionHeader>Skills</SectionHeader>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700 dark:text-gray-300">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React.js / Next.js</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Git & GitHub</p>
            <p>WordPress / Elementor</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-300 dark:border-gray-700 pt-4 mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} Faisal Ameen | Built with React &
            Tailwind CSS
          </p>
        </div>
      </motion.div>
    </section>
  );
}
