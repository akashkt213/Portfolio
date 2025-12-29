import { Card, CardContent } from "@/components/ui/card"
import { 
  FolderOpen,
  User,
  GraduationCap,
  Home,
  FileText,
  ShoppingBag,
  Send
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import StarryBackground from "@/components/StarryBackground"
import PageHeader from "@/components/PageHeader"

export default function ProjectsPage() {
  const navigate = useNavigate()
  const location = useLocation()

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

  const navItems = [
    { icon: FolderOpen, path: "/projects", label: "Projects" },
    { icon: User, path: "/about", label: "About" },
    { icon: GraduationCap, path: "/education", label: "Education" },
    { icon: Home, path: "/", label: "Home" },
    { icon: FileText, path: "/resume", label: "Resume" },
    { icon: ShoppingBag, path: "/shop", label: "Shop" },
    { icon: Send, path: "/contact", label: "Contact" }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex">
      <StarryBackground />

      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-16 bg-black/20 backdrop-blur-sm border-r border-gray-800 z-20 flex flex-col items-center py-8 gap-6">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
                isActive 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              title={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          )
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-16 relative z-10">
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

