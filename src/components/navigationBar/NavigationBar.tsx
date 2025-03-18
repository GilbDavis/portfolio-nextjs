import { motion } from "framer-motion";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
            Portfolio
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
                Portfolio
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
  );
};

NavigationBar.displayName = "NavigationBar";

export default NavigationBar;
