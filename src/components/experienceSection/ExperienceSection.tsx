import React from "react";
import WorkTag from "@components/work/WorkTag";

const EXPERIENCES = [
  {
    title: "Full-Stack Software Developer",
    company: "DBAccess",
    duration: "2021 - Present",
    description:
      "Leading the development team in building scalable web applications, implementing best practices, and mentoring junior developers.",
    tags: ["React", "Node.js", "GCP", "Docker", "PostgreSQL"],
  },
];
const lastExperience = EXPERIENCES.length - 1;

const ExperienceSection = () => {
  return (
    <section id="experience" className="container py-24 sm:py-32 border-t">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16">
        Work Experience
      </h2>
      {EXPERIENCES.map((experience, index) => (
        <div
          className={`space-y-12 ${
            index === lastExperience ? "mb-0" : "mb-20"
          }`}
          key={index}
        >
          <div className="grid gap-4 md:grid-cols-[1fr_3fr] items-start">
            <div className="text-muted-foreground">
              <p className="font-semibold text-foreground">
                {experience.duration}
              </p>
              <p>{experience.title}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">{experience.company}</h3>
              <p className="text-muted-foreground">{experience.description}</p>
              <div className="flex flex-wrap gap-2">
                {experience.tags.map((tag, index) => (
                  <WorkTag key={index}>{tag}</WorkTag>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
