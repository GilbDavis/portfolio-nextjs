import { BookOpen, GraduationCap } from "lucide-react";
import React from "react";

const EducationSection = () => {
  return (
    <section
      id="education"
      className="container py-24 sm:py-32 border-t relative mx-auto"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-[30%] -right-[20%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/5 blur-3xl"></div>
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16">
        Education
      </h2>
      <div className="space-y-12">
        <div className="grid gap-4 md:grid-cols-[1fr_3fr] items-start">
          <div className="text-muted-foreground">
            <p className="font-semibold text-foreground">2016 - 2023</p>
            <p>Bachelor&apos;s Degree</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">
                Technological University of Panama
              </h3>
            </div>
            <p className="font-medium">
              Bachelor&apos;s Degree in Software Development
            </p>
            <p className="text-muted-foreground">
              Graduated with honors. Specialized in Full Stack Web Development.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Web Development
              </div>
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Distributed Systems
              </div>
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Software Design
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_3fr] items-start">
          <div className="text-muted-foreground">
            <p className="font-semibold text-foreground">2016 - 2019</p>
            <p>Technical Diploma</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">
                Technological University of Panama
              </h3>
            </div>
            <p className="font-medium">
              Engineering Technician with Specialization in Software Development
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Algorithms
              </div>
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Data Structures
              </div>
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Software Development
              </div>
              <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm">
                Software Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
