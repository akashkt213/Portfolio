import { 
  User,
  GraduationCap,
  Home,
  Briefcase,
  Send
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import StarryBackground from "@/components/StarryBackground"
import PageHeader from "@/components/PageHeader"

interface Experience {
  id: number
  company: string
  role: string
  period: string
  badgeColor: string
  achievements: string[]
}

export default function ExperiencePage() {
  const navigate = useNavigate()
  const location = useLocation()

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Datopic",
      role: "Fullstack Engineer",
      period: "February 2024 - Present",
      badgeColor: "bg-red-600",
      achievements: [
        "Integrated Lexical editor for drafting custom email templates and payslips, enabling rich-text editing capabilities.",
        "Participated in focus groups for product development, UX design, and developer tooling to drive improvements.",
        "Managed application state using Redux and Zustand for scalable and predictable state management.",
        "Built and integrated REST and GraphQL APIs for efficient data fetching and manipulation.",
        "Implemented robust form validation using Zod and React Hook Form, ensuring data integrity across the application.",
        "Worked with Nx monorepos to modularize codebases and manage scalable project structures efficiently.",
        "Developed responsive and modern UI components using Tailwind CSS for consistent design systems.",
        "Integrated React Big Calendar to display scheduled interviews, holidays, and leave events with interactive scheduling.",
        "Implemented i18n for multi-language support, enabling localization across the application.",
        "Utilized TanStack Table for rendering and managing complex data tables with advanced filtering and sorting.",
        "Integrated React Query for optimized server-state management, reducing unnecessary API calls.",
        "Built UI components using Shadcn component library for consistent and accessible design patterns.",
        "Implemented code splitting and lazy loading to improve app performance and reduce initial load time."
      ]
    }
  ]

  const navItems = [
    { icon: User, path: "/about", label: "About" },
    { icon: GraduationCap, path: "/education", label: "Education" },
    { icon: Home, path: "/", label: "Home" },
    { icon: Briefcase, path: "/experience", label: "Experience" },
    { icon: Send, path: "/contact", label: "Contact" }
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

          <div className="space-y-10">
            {experiences.map((experience) => (
              <div key={experience.id} className="space-y-5">
                <div className={`${experience.badgeColor} text-white px-5 py-2.5 rounded-lg inline-block text-2xl font-semibold`}>
                  {experience.company}
                </div>

                <div className="text-xl text-gray-300 font-medium">
                  {experience.role} | {experience.period}
                </div>

                <ul className="space-y-3 text-gray-300 text-base leading-relaxed">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-white mt-1.5 flex-shrink-0">•</span>
                      <span className="flex-1">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

