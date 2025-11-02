"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileCode2 } from "lucide-react";
import ProjectModal from "../component/Project-model.jsx";


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projectData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section
      id="projects"
      className="container mx-auto py-24 px-6 lg:px-24"
      aria-labelledby="projects-heading"
    >
      {/* Section Heading */}
      <header className="text-center mb-16">
        <div className="flex items-center justify-center gap-4">
          <div className="w-[2px] h-12 bg-[#2ec4b6]"></div>
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-[#242f30]">
            My Digital <span className="text-[#2ec4b6]">Creations</span>
          </h2>
          <div className="w-[2px] h-12 bg-[#2ec4b6]"></div>
        </div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-4 text-sm text-[#37373e] max-w-2xl mx-auto"
        >
          A selection of projects where I've turned complex problems into elegant, user-friendly solutions.
        </motion.p>
      </header>
      <br/>

  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
        {projects.map((project, index) => (
          <motion.article
            key={project._id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
            aria-labelledby={`project-title-${project._id}`}
          >
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-10/12 z-20 transition-all duration-500 ease-in-out group-hover:-translate-y-2 group-hover:scale-105 ">
              <img
                src={project.projectImage}
                alt={`Screenshot of ${project.projectName}`}
                className="aspect-video w-full object-fill rounded-lg shadow-xl border-2 border-[#0ab9a7]"
              />
            </div>

            <div className="relative z-10 bg-white rounded-2xl shadow-xl transition-all duration-300 group-hover:shadow pt-28 p-6 text-center">
              <h3
                id={`project-title-${project._id}`}
                className="text-2xl font-bold tracking-tight text-[#2ec4b6] bg-clip-text  inline-block relative
                  after:absolute after:left-0 after:bottom-0 pb-1 after:h-[2px] after:w-0 after:bg-[#2ec4b6] 
                  after:transition-all after:duration-500 group-hover:after:w-full"
              >
                {project.projectName}
              </h3>

              <p className="mt-2 text-sm text-[#37373e] leading-relaxed">{project.slogan}</p>

              <div className="flex justify-center gap-4 mt-6 pt-5 border-t border-[#2ec4b6]">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-[#2ec4b6] px-4 py-2 text-sm font-semibold text-[#2ec4b6] transition-all duration-300 hover:scale-105 hover:bg-[#2ec4b6] hover:text-white"
                >
                  <ExternalLink size={16} /> Live
                </a>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 rounded-full border-2 border-transparent bg-[#2ec4b6] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#2ec4b6] hover:to-[#08d3bf]"
                >
                  <FileCode2 size={16} /> Details
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
