"use client";
import { motion } from "framer-motion";
import NavigationBar from "@components/navigationBar/NavigationBar";
import HeroSection from "@/components/heroSection/HeroSection";

export default function Home() {
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
        <NavigationBar />

        <main className="lg:ml-20 ml-4 flex-1">
          <HeroSection />

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
              © {new Date().getFullYear()} Gilberto Davis. All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
