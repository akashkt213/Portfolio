import StarryBackground from "@/components/StarryBackground"
import PageHeader from "@/components/PageHeader"
import SidebarNav from "@/components/SidebarNav"

interface TechStackCategory {
  title: string
  items: string[]
}

export default function AboutPage() {
  const techStack: TechStackCategory[] = [
    {
      title: "Core Frontend",
      items: ["React", "Tailwind CSS", "TypeScript"]
    },
    {
      title: "Animation & UI",
      items: ["Shadcn UI", "Three.js"]
    },
    {
      title: "Backend & Runtimes",
      items: ["Node.js"]
    },
    {
      title: "Data & BaaS",
      items: ["PostgreSQL", "MongoDB"]
    },
    {
      title: "Currently Exploring",
      items: ["React Native"]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex">
      <StarryBackground />

      {/* Decorative element - top right */}
      <div className="fixed top-0 right-8 z-10">
        <div className="flex flex-col items-center gap-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
        </div>
      </div>

      <SidebarNav />

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        <div className="container mx-auto px-8 py-12 max-w-4xl">
          <PageHeader className="mb-12 mt-8" />

          {/* About Section */}
          <div className="space-y-10">
            {/* Description */}
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a frontend developer with 2+ years of experience building scalable, user-focused web applications. I enjoy turning complex problems into simple, intuitive interfaces using modern tools like React, TypeScript, and Tailwind CSS. I care deeply about clean code, performance, and great user experience.
              </p>
            </div>

            {/* Tech Stack Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold font-sans">Tech Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techStack.map((category, index) => (
                  <div
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 space-y-3"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className="px-3 py-1.5 bg-gray-900/50 border border-gray-700 rounded-md text-sm text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

