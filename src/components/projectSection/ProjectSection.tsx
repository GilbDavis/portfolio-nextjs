import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import Image from "next/image";

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
        Featured Projects
      </h2>
      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="web">Web Development</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
          <TabsTrigger value="other">Other Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack e-commerce solution with payment processing,
                  inventory management, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    React
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    Node.js
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    MongoDB
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-muted-foreground mb-4">
                  A collaborative task management application with real-time
                  updates and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    Next.js
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    Firebase
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    TailwindCSS
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Fitness Tracker"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fitness Tracker</h3>
                <p className="text-muted-foreground mb-4">
                  A mobile application for tracking workouts, nutrition, and
                  fitness goals with data visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    React Native
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    GraphQL
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    AWS Amplify
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="web" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  A full-stack e-commerce solution with payment processing,
                  inventory management, and analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    React
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    Node.js
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    MongoDB
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="mobile" className="mt-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Fitness Tracker"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fitness Tracker</h3>
                <p className="text-muted-foreground mb-4">
                  A mobile application for tracking workouts, nutrition, and
                  fitness goals with data visualization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    React Native
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    GraphQL
                  </div>
                  <div className="rounded-full bg-primary/10 text-primary px-3 py-1 text-xs">
                    AWS Amplify
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    View Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex justify-center">
        <Button size="lg">View All Projects</Button>
      </div>
    </section>
  );
};

export default ProjectSection;
