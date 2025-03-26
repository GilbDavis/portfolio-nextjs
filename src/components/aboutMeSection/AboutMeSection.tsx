import React from "react";

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
              I&apos;m a software engineer with over 5 years of experience
              building products for the web. I specialize in JavaScript, React,
              and Node.js, with a focus on creating fast, accessible, and
              user-friendly applications.
            </p>
            <p>
              My journey in software development began during my Computer
              Science studies at MIT, where I developed a passion for solving
              complex problems with elegant solutions. Since then, I&apos;ve
              worked with startups and established companies to deliver
              high-quality software products.
            </p>
            <p>
              When I&apos;m not coding, you can find me hiking, reading science
              fiction, or experimenting with new technologies.
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
  );
};

export default AboutMeSection;
