"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, X } from "lucide-react";
import Image from "next/image";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900/40 flex justify-center items-start z-50 overflow-auto pt-20 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="rounded-xl max-w-5xl w-full p-6 relative shadow-2xl border border-[#2ec4b6]/20"
        style={{ backgroundColor: "var(--bg-color)" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#2ec4b6] hover:text-[#1a8a7d] transition-colors duration-300"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <h1
          className="text-3xl sm:text-4xl font-bold"
          style={{ color: "var(--text-color)" }}
        >
          {project.projectName}
        </h1>
        <p className="text-[#2ec4b6] italic font-medium">{project.slogan}</p>

        {/* Image */}
        <Image
          width={800}
          height={450}
          src={project.projectImage}
          alt={project.projectName}
          className="w-full rounded-xl mt-4 mb-4 object-cover border border-[#2ec4b6]/20"
        />

        {/* Overview */}
        <p
          className="whitespace-pre-wrap leading-relaxed"
          style={{ color: "var(--text-color)" }}
        >
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-6">
          <h2 className="text-[#2ec4b6] font-semibold text-lg mb-3 border-b border-[#2ec4b6]/30 pb-2">
            Key Features
          </h2>
          <ul className="space-y-2" style={{ color: "var(--text-color)" }}>
            {project.features?.map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-[#2ec4b6] rounded-full mt-2 flex-shrink-0"></div>
                <span>{f.trim()}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h2 className="text-[#2ec4b6] font-semibold text-lg mb-3 border-b border-[#2ec4b6]/30 pb-2">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech) => (
              <span
                key={tech}
                className="px-3 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-[#2ec4b6] to-[#1a8a7d] text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-[#2ec4b6]/30">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#2ec4b6] text-white hover:bg-[#1a8a7d] transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <Globe size={18} />
              <span>Live Site</span>
            </a>
          )}
          {project.clientLink && (
            <a
              href={project.clientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#2ec4b6] to-[#1a8a7d] text-white hover:from-[#1a8a7d] hover:to-[#2ec4b6] transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              <ExternalLink size={18} />
              <span>Client Code</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
