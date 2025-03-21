import { motion } from "framer-motion";
import React from "react";

const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company: "DBAccess",
    duration: "March 2021 - Present",
    description:
      "Leading the development team in building scalable web applications, implementing best practices, and mentoring junior developers.",
  },
];
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:px-20 px-8">
      <h3 className="text-2xl text-gray-400 mb-12">Experience</h3>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
        <div className="ml-8 space-y-12">
          {EXPERIENCES.map((job, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="relative p-6 bg-gray-800 border border-gray-700 rounded-lg transition-all"
            >
              <div className="absolute -left-10 top-4">
                <span className="block h-4 w-4 bg-blue-400 rounded-full border-2 border-gray-900"></span>
              </div>
              <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
              <p className="text-gray-400 mb-1">
                {job.company} | {job.duration}
              </p>
              <p className="text-gray-400">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
