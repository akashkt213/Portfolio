import { Card, CardContent } from "@/components/ui/card"
import StarryBackground from "@/components/StarryBackground"
import PageHeader from "@/components/PageHeader"
import SidebarNav from "@/components/SidebarNav"

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Scraaatch",
      description: "Create and send custom scratch cards to your family and friends.",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      icon: "🎫"
    },
    {
      id: 2,
      title: "AnAss",
      description: "Trackers, wishlists, todos, calendar, shopping lists and more.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      icon: "🐴"
    },
    {
      id: 3,
      title: "Daily Story",
      description: "A platform where the world collaborates on a new short story, from scratch, every 24 hours.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      icon: "📖"
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex">
      <StarryBackground />

      <SidebarNav />

      {/* Main Content */}
      <div className="flex-1 relative z-10">
        <div className="container mx-auto px-8 py-12 max-w-4xl">
          <PageHeader className="mb-12 mt-8" />

          {/* Projects List */}
          <div className="space-y-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className={`${project.bgColor} ${project.borderColor} border-2 backdrop-blur-sm hover:scale-[1.02] transition-transform cursor-pointer`}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-4xl flex-shrink-0`}>
                      {project.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-3">{project.title}</h2>
                      <p className="text-gray-300 text-lg">{project.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

