import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import ProjectTag from "../tags/ProjectTag";
import SigoSegurosImg from "@public/sigo_seguros.png";
import Link from "next/link";
import { Link as Url } from "lucide-react";

// const PROJECTS = [1, 2, 3, 4];

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="container py-24 sm:py-32 border-t relative"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/10 to-blue-500/5 blur-3xl"></div>
      </div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
          <div className="relative aspect-video">
            <Image
              src={SigoSegurosImg}
              alt="Sigo Seguros"
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">Sigo Seguros</h3>
            <p className="text-muted-foreground mb-4">
              An insurtech startup focused on offering fair and affordable auto
              insurance to the Spanish-speaking community.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <ProjectTag>NextJS</ProjectTag>
              <ProjectTag>NestJS</ProjectTag>
              <ProjectTag>PostgreSQL</ProjectTag>
              <ProjectTag>Docker</ProjectTag>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://sigoseguros.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Url size="24" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectSection;
