import { motion } from "framer-motion";
import React from "react";

const PROJECTS = [1, 2, 3, 4];
const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <h3 className="text-2xl text-gray-400 mb-12">Featured Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <motion.div
            key={project}
            whileHover={{ y: -10 }}
            className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all"
          >
            <div className="h-48 bg-gray-700 rounded mb-4"></div>
            <h4 className="text-xl font-semibold mb-2">Project {project}</h4>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-900 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
