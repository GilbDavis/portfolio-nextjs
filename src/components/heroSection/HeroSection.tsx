import { motion } from "framer-motion";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import photo from "@public/photo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse items-center"
      >
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
            occasionally designing) exceptional digital experiences. Currently
            focused on modern web technologies.
          </p>

          <div className="mt-20 flex flex-row gap-5">
            <a
              className="flex items-center gap-2"
              href="/gilberto_resume.pdf"
              download="Gilberto_Davis_Resume.pdf"
            >
              <p>Resume</p>
              <FaFileDownload />
            </a>
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
        <div className="w-1/2 mx-auto rounded-[50%] bg-gradient-to-r from-blue-400 to-purple-500">
          <Image src={photo} alt="my-photo" priority />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
