import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 ml-6">
            <span className="font-bold inline-block">Gilberto Davis</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#about"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <Link
            href="https://github.com/GilbDavis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="GitHub"
              className="hover:cursor-pointer"
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
              variant="ghost"
              size="icon"
              aria-label="LinkedIn"
              className="hover:cursor-pointer"
            >
              <Linkedin className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="mailto:gilberto.davis02@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Email"
              className="hover:cursor-pointer"
            >
              <Mail className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            download="Gilberto_Davis_Resume.pdf"
            href="/gilberto_resume.pdf"
            target="_blank"
          >
            <Button className="ml-4 hidden md:flex hover:cursor-pointer">
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

HeaderSection.displayName = "HeaderSection";

export default HeaderSection;
