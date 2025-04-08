import React from "react";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:justify-center md:mx-auto">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {currentYear} Gilberto Davis. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/GilbDavis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hover:cursor-pointer"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/gilbertodavis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hover:cursor-pointer"
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="mailto:gilberto.davis02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="hover:cursor-pointer"
              variant="ghost"
              size="icon"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
