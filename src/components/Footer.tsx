import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-700 py-8 mt-20">
      <p className="text-gray-400 text-center">
        © {new Date().getFullYear()} Gilberto Davis. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
