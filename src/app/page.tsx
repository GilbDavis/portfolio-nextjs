"use client";
import NavigationBar from "@components/navigationBar/NavigationBar";
import HeroSection from "@/components/heroSection/HeroSection";
import ExperienceSection from "../components/experienceSection/ExperienceSection";
import ProjectSection from "../components/projectSection/ProjectSection";
import ContactSection from "../components/contactSection/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-900 text-white pr-5">
        <NavigationBar />

        <main className="lg:ml-20 ml-4 flex-1">
          <HeroSection />
          <ExperienceSection />
          <ProjectSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </>
  );
}
