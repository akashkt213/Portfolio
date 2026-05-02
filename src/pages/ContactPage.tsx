import StarryBackground from "@/components/StarryBackground";
import PageHeader from "@/components/PageHeader";
import SidebarNav from "@/components/SidebarNav";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden flex">
      <StarryBackground />
      <SidebarNav />

      <div className="flex-1 relative z-10">
        <div className="container mx-auto px-8 py-12 max-w-2xl text-center">
          <PageHeader className="mb-12 mt-8" />

          <h2 className="text-2xl font-semibold">Get in Touch</h2>

          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-10">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akash-kumar142/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/akashkt213"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.02c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.31-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.05.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/KumarAkash34058"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-900/50 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all hover:scale-105"
              aria-label="X"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2H21l-6.545 7.486L22 22h-6.828l-5.35-6.993L3.8 22H1l7.05-8.06L2 2h6.828l4.84 6.34L18.244 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
