"use client";
import ExperienceSection from "../components/experienceSection/ExperienceSection";
import AboutMeSection from "../components/aboutMeSection/AboutMeSection";
import ContactSection from "../components/contactSection/ContactSection";
import HeroSection from "../components/heroSection/HeroSection";
import HeaderSection from "../components/headerSection/HeaderSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
      <HeaderSection />

      <main className="flex-1 px-4 sm:px-20">
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
