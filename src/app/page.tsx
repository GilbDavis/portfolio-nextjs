"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import photo from "@public/photo.png";

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950">
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

      <main className="flex-1 px-4 sm:px-20">
        <section className="container py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"></div>
            <div className="absolute -bottom-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/20 blur-3xl"></div>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hello, I&apos;m{" "}
                <span className="text-primary">Gilberto Davis</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A passionate software engineer specializing in building
                exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <Link href="#contact">
                  <Button className="hover:cursor-pointer" size="lg">
                    Get in touch
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button
                    className="hover:cursor-pointer"
                    size="lg"
                    variant="outline"
                  >
                    View my work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative h-[350px] w-[350px] rounded-full overflow-hidden border-4 border-primary/50 shadow-xl">
                <Image
                  src={photo}
                  alt="Gilberto Davis"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="container py-24 sm:py-32 border-t relative"
        >
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
                  I&apos;m a software engineer with over 5 years of experience
                  building products for the web. I specialize in JavaScript,
                  React, and Node.js, with a focus on creating fast, accessible,
                  and user-friendly applications.
                </p>
                <p>
                  My journey in software development began during my Computer
                  Science studies at MIT, where I developed a passion for
                  solving complex problems with elegant solutions. Since then,
                  I&apos;ve worked with startups and established companies to
                  deliver high-quality software products.
                </p>
                <p>
                  When I&apos;m not coding, you can find me hiking, reading
                  science fiction, or experimenting with new technologies.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tighter">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">JavaScript</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">TypeScript</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">React</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">Next.js</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">Node.js</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">TailwindCSS</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">GraphQL</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">AWS</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg border p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
                  <div className="text-primary">Docker</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="container py-24 sm:py-32 border-t">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-16">
            Work Experience
          </h2>
          <div className="space-y-12">
            <div className="grid gap-4 md:grid-cols-[1fr_3fr] items-start">
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">2021 - Present</p>
                <p>Senior Software Engineer</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">TechCorp Inc.</h3>
                <p className="text-muted-foreground">
                  Led the development of a microservices architecture that
                  improved system reliability by 40%. Mentored junior developers
                  and implemented best practices for code quality and testing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    React
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    Node.js
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    AWS
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    Docker
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_3fr] items-start">
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">2018 - 2021</p>
                <p>Software Engineer</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">InnovateSoft</h3>
                <p className="text-muted-foreground">
                  Developed and maintained multiple client-facing web
                  applications. Implemented responsive designs and optimized
                  performance, resulting in a 30% increase in page load speed.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    JavaScript
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    React
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    Redux
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    CSS
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_3fr] items-start">
              <div className="text-muted-foreground">
                <p className="font-semibold text-foreground">2016 - 2018</p>
                <p>Junior Developer</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">StartupXYZ</h3>
                <p className="text-muted-foreground">
                  Collaborated in an agile team to build a SaaS platform from
                  the ground up. Implemented features based on user feedback and
                  contributed to the UI/UX design process.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    HTML
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    CSS
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    JavaScript
                  </div>
                  <div className="rounded-full bg-muted px-3 py-1 text-sm">
                    jQuery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                    <h3 className="text-xl font-bold mb-2">
                      E-commerce Platform
                    </h3>
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
                    <h3 className="text-xl font-bold mb-2">
                      Task Management App
                    </h3>
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
                    <h3 className="text-xl font-bold mb-2">
                      E-commerce Platform
                    </h3>
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

        <section
          id="contact"
          className="container py-24 sm:py-32 border-t relative"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-[20%] -right-[10%] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/5 blur-3xl"></div>
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get In Touch
              </h2>
              <p className="mt-4 text-muted-foreground">
                I&apos;m currently open to new opportunities and collaborations.
                Feel free to reach out if you have a project in mind or just
                want to connect!
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a
                    href="mailto:gilberto.davis02@gmail.com"
                    className="hover:text-primary"
                  >
                    gilberto.davis02@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/gilbertodavis/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/gilberotdavis
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/GilbDavis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/GilbDavis
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message"
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:justify-center md:mx-auto">
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
    </div>
  );
}
