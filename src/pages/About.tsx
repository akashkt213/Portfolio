export function About() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
          About Me
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          I'm Akash — a passionate{" "}
          <span className="font-semibold text-foreground">
            Frontend Developer{" "}
          </span>
          who thrives on transforming creative ideas into functional, elegant
          web interfaces. I love working with{" "}
          <span className="text-foreground font-medium">React</span>,
          <span className="text-foreground font-medium"> TypeScript</span>, and
          modern tools like{" "}
          <span className="text-foreground font-medium">Tailwind CSS</span> and{" "}
          <span className="text-foreground font-medium">Shadcn UI</span>.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          I focus on building interfaces that not only look beautiful but also
          provide seamless user experiences. When I’m not coding, you’ll
          probably find me exploring new design trends or learning how to make
          code even cleaner.
        </p>
        <p className="text-foreground font-semibold">
          Let’s create something amazing together!
        </p>
      </div>
    </section>
  );
}
