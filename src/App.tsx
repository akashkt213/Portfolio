import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
// import ProjectsPage from "./pages/ProjectsPage"
import ExperiencePage from "./pages/ExperiencePage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        <Route path="/" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
