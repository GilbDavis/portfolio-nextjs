import React from "react";
import WorkTag from "@/components/tags/WorkTag";

const EXPERIENCES = [
  {
    title: "Sr. Full Stack Developer",
    company: "Itti Digital",
    duration: "Sept. 2025 - Present",
    description: <></>,
    tags: ["React", "Node.JS", "MicroServices", "AWS"],
  },
  {
    title: "Full Stack Software Developer",
    company: "DBAccess",
    duration: "Feb. 2021 - Sept. 2025",
    description: (
      <>
        <p>
          Responsible for building components of technology solutions, as well
          as contributing to their design with the main focus on Next.js and
          Express frameworks in Sigoseguros.com As part of the activities, the
          following stand out:
        </p>
        <ul className="list-disc pl-10 list-outside">
          <li>
            Designed and implemented a payments module using Stripe, optimizing
            the transaction processing experience.
          </li>
          <li>
            Integrated an email management and sending system using Customer.io,
            improving the automation of communication with users.{" "}
          </li>
          <li>
            Automated key processes using Bash scripts, increasing operational
            efficiency.
          </li>
          <li>
            Strong experience in version control with Git and project
            collaboration using GitHub.
          </li>
          <li>
            Actively participated in the review of Pull Requests, ensuring code
            quality and consistency.
          </li>
          <li>
            Practical knowledge of command line tools (CLI) such as Socotra and
            Stripe, facilitating advanced configurations and operations.
          </li>
          <li>
            Implemented and managed automated testing and test case creation
            using Postman, ensuring the quality of services.
          </li>
          <li>
            Proposed and developed continuous improvements to the product,
            standing out for my proactive approach to innovation.
          </li>
          <li>
            Resolved level 3 technical support tickets using the Hubspot
            platform, improving customer satisfaction.
          </li>
          <li>
            Implemented TDD (Test-Driven Development) in unit tests,
            strengthening code robustness.
          </li>
          <li>
            Led the migration of Goemerchant payment processing to Stripe,
            modernizing the payment infrastructure and failure rates.
          </li>
          <li>
            Advanced database management, including query creation and
            optimization in PostgreSQL.
          </li>
        </ul>
      </>
    ),
    tags: ["React", "Node.js", "GCP", "Docker", "PostgreSQL"],
  },
];
const lastExperience = EXPERIENCES.length - 1;

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="container py-24 sm:py-32 border-t mx-auto"
    >
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
              <div className="text-muted-foreground">
                {experience.description}
              </div>
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
