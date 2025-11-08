import { ThreeAvatar } from "@/components/Avatar";
import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div className="flex flex-col">
      <ThreeAvatar />

      <section className="flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Hi, I'm <span className="text-primary/50">Akash</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8">
            I'm a{" "}
            <span className="text-foreground font-semibold">
              Frontend Developer{" "}
            </span>
            who loves crafting clean, interactive, and user-friendly web
            experiences. I enjoy working with React, TypeScript, and modern UI
            libraries like Shadcn.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="cursor-pointer">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="cursor-pointer">
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
