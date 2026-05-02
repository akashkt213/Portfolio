import { 
  User,
  Briefcase,
  Send
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

interface NavItem {
  icon: React.ComponentType<{ className?: string }>
  path: string
  label: string
}

const navItems: NavItem[] = [
  // { icon: FolderOpen, path: "/projects", label: "Projects" },
  { icon: User, path: "/", label: "About" },
  // { icon: Home, path: "/", label: "Home" },
  { icon: Briefcase, path: "/experience", label: "Experience" },
  { icon: Send, path: "/contact", label: "Contact" }
]

export default function SidebarNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20">
      <div className="bg-black/40 backdrop-blur-sm border rounded-2xl p-3 flex flex-col gap-3">
        {navItems.map((item, index) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                isActive 
                  ? "bg-[#ffe0c2]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              title={item.label}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-black" : "text-white"}`} />
            </button>
          )
        })}
      </div>
    </div>
  )
}

