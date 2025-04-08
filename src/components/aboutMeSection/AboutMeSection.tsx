import React from "react";
import SkillTag from "../tags/SkillTag";
import SkillTagContainer from "../containers/SkillTagContainer";

const AboutMeSection = () => {
  return (
    <section id="about" className="container py-24 sm:py-32 border-t relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[30%] -right-[20%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/10 blur-3xl"></div>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I&apos;m a passionate Software Developer with 4+ years of
              experience, i specialize in building scalable high impact
              solutions with modern technologies like Typescript, Node.JS and
              React.
            </p>
            <p>
              I stay at the forefront of emerging tools and best practices to
              build efficient, user centered applications. Whether architecting
              robust backends with NestJS, streamlining workflows with
              automation, applying cool styles, or solving complex challenges, I
              thrive on turning ideas into reality.
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tighter">
            Skills & Technologies
          </h3>
          <SkillTagContainer>
            <SkillTag>TypeScript</SkillTag>
            <SkillTag>React</SkillTag>
            <SkillTag>NextJS</SkillTag>
            <SkillTag>Node.JS</SkillTag>
            <SkillTag>Tailwind</SkillTag>
            <SkillTag>NestJS</SkillTag>
            <SkillTag>ExpressJS</SkillTag>
            <SkillTag>Docker</SkillTag>
            <SkillTag>TDD</SkillTag>
          </SkillTagContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
