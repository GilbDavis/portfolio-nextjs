import React from "react";
import photo from "@public/photo.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="container py-24 sm:py-32 relative overflow-hidden mx-auto">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-[30%] -left-[10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/20 blur-3xl"></div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hello, I&apos;m <span className="text-primary">Gilberto Davis</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            A passionate software Developer specializing in building exceptional
            digital experiences.
          </p>
          {/* <div className="flex gap-4">
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
          </div> */}
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
  );
};

export default HeroSection;
