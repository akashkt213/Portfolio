import { useState } from "react"
import { 
  User,
  Home,
  Briefcase,
  FolderOpen,
  Send
} from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import StarryBackground from "@/components/StarryBackground"
import PageHeader from "@/components/PageHeader"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const navItems = [
    { icon: User, path: "/about", label: "About" },
    { icon: Home, path: "/", label: "Home" },
    { icon: Briefcase, path: "/experience", label: "Experience" },
    { icon: FolderOpen, path: "/projects", label: "Projects" },
    { icon: Send, path: "/contact", label: "Contact" }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

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
                  ? "bg-orange-500/20 text-white" 
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
        <div className="container mx-auto px-8 py-12 max-w-2xl">
          <PageHeader className="mb-12 mt-8" />

          {/* Get in Touch Section */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-sans font-semibold text-center">
              Get in Touch
            </h2>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-300">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                  placeholder="Your company"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white font-medium text-lg"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 pt-8">
              <a
                href="https://www.linkedin.com/in/akash-kumar142/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/akashkt213"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

