"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "DBAccess",
      duration: "March 2021 - Present",
      description:
        "Leading the development team in building scalable web applications, implementing best practices, and mentoring junior developers.",
    },
  ];
  const projects = [1, 2, 3, 4];

  return (
    <>
      <div className="flex min-h-screen bg-gray-900 text-white pr-5">
        <nav className="fixed top-8 right-8 z-50">
          <ul className="hidden md:flex gap-6 text-gray-400 text-lg">
            <li>
              <a
                href="#home"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-400 hover:text-blue-400 transition-colors focus:outline-none"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-14 right-0 bg-gray-800 border border-gray-700 rounded-lg w-48 py-4 shadow-lg"
            >
              <ul className="flex flex-col items-start text-gray-400 text-lg">
                <li className="w-full px-4 py-2 hover:bg-gray-700">
                  <a
                    href="#home"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full font-medium"
                  >
                    Home
                  </a>
                </li>
                <li className="w-full px-4 py-2 hover:bg-gray-700">
                  <a
                    href="#experience"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full font-medium"
                  >
                    Experience
                  </a>
                </li>
                <li className="w-full px-4 py-2 hover:bg-gray-700">
                  <a
                    href="#projects"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full font-medium"
                  >
                    Projects
                  </a>
                </li>
                <li className="w-full px-4 py-2 hover:bg-gray-700">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full font-medium"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </nav>

        <main className="lg:ml-20 ml-4 flex-1">
          <section id="home" className="min-h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl font-bold mb-4">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Gilberto Davis
                </span>
              </h1>
              <h2 className="text-3xl text-gray-400 mb-6">Software Engineer</h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                I&apos;m a software developer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently focused on modern web technologies.
              </p>

              <div className="mt-20 flex flex-row gap-5">
                <a
                  href="https://github.com/GilbDavis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub className="text-2xl text-gray-400 hover:text-blue-400 transition-colors w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gilbertodavis/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin className="text-2xl text-gray-400 hover:text-blue-400 transition-colors  w-8 h-8" />
                </a>
                <a href="mailto:gilberto.davis02@gmail.com">
                  <FiMail className="text-2xl text-gray-400 hover:text-blue-400 transition-colors  w-8 h-8" />
                </a>
              </div>
            </motion.div>
          </section>

          <section id="experience" className="py-20">
            <h3 className="text-2xl text-gray-400 mb-12">Experience</h3>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
              <div className="ml-8 space-y-12">
                {experiences.map((job, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="relative p-6 bg-gray-800 border border-gray-700 rounded-lg transition-all"
                  >
                    {/* Timeline dot */}
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

          <section id="projects" className="py-20">
            <h3 className="text-2xl text-gray-400 mb-12">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all"
                >
                  <div className="h-48 bg-gray-700 rounded mb-4"></div>
                  <h4 className="text-xl font-semibold mb-2">
                    Project {project}
                  </h4>
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

          <section id="contact" className="py-20">
            <h3 className="text-2xl text-gray-400 mb-12">Get In Touch</h3>
            <div className="max-w-xl">
              <form className="space-y-6">
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message"
                    rows={5}
                    className="w-full bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-400 focus:outline-none"
                  />
                </div>
                <button className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </section>

          <footer className="border-t border-gray-700 py-8 mt-20">
            <p className="text-gray-400 text-center">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
