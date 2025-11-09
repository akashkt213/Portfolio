import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiReactrouter,
  SiRedux,
  SiReactquery,
} from "react-icons/si";

export function About() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Shadcn UI", icon: <SiShadcnui className="text-purple-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "React Router", icon: <SiReactrouter className="text-red-500" /> },
    { name: "Redux", icon: <SiRedux className="text-blue-500" /> },
    { name: "React Query", icon: <SiReactquery className="text-orange-500" /> },
  ];

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

        <p className="text-foreground font-semibold mb-10">
          Let’s create something amazing together!
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-md border border-white/10 hover:scale-105 transition-transform md:w-[120px] md:h-[120px]"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-black">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
