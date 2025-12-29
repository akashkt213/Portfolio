import { Card, CardContent } from "@/components/ui/card"
import { 
  User, 
  Briefcase, 
  FolderOpen, 
  Send
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import StarryBackground from "@/components/StarryBackground"
import PageHeader from "@/components/PageHeader"

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 py-12">
        <PageHeader name="Akash Kumar" className="mb-16 mt-8" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {/* About Card */}
          <Card 
            className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <CardContent className="p-6 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <User className="w-8 h-8 mb-4" />
                  <h2 className="text-3xl font-bold mb-2">About</h2>
                  <p className="text-gray-400">A bit about myself.</p>
                </div>
                <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience Card */}
          <Card 
            className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
            onClick={() => navigate('/experience')}
          >
            <CardContent className="p-6 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Briefcase className="w-8 h-8 mb-4" />
                  <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
                  <p className="text-gray-400">My career as a Software Engineer.</p>
                </div>
                <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-2xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Projects Card */}
          <Card 
            className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
            onClick={() => navigate('/projects')}
          >
            <CardContent className="p-6 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <FolderOpen className="w-8 h-8 mb-4" />
                  <h2 className="text-3xl font-bold mb-2">Projects</h2>
                  <p className="text-gray-400">Personal projects I've been working on.</p>
                  {/* <div className="flex gap-2 mt-4">
                    <div className="w-8 h-8 bg-purple-500/20 border border-purple-500 rounded flex items-center justify-center">
                      <span className="text-xs">🐴</span>
                    </div>
                    <div className="w-8 h-8 bg-green-500/20 border border-green-500 rounded flex items-center justify-center">
                      <span className="text-xs">📖</span>
                    </div>
                    <div className="w-8 h-8 bg-red-500/20 border border-red-500 rounded flex items-center justify-center">
                      <span className="text-xs">{}</span>
                    </div>
                  </div> */}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card 
            className="bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-700 transition-all cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            <CardContent className="p-6 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <Send className="w-8 h-8 mb-4" />
                  <h2 className="text-3xl font-bold mb-2">Contact</h2>
                  <p className="text-gray-400">Email, LinkedIn, carrier pigeon...</p>
                </div>
                <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ask FranckGPT Section */}
        {/* <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-gray-300 mb-6">Ask FranckGPT</h2>
          
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {predefinedQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-gray-900/50 border-gray-700 text-white hover:bg-gray-800"
              >
                {question}
              </Button>
            ))}
          </div>

          <div className="relative">
            <Input
              type="text"
              placeholder="What would you like to know?"
              className="w-full h-16 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 pl-12 pr-12 text-lg"
            />
            <Mic className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

