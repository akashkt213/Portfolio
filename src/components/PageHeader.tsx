import { useNavigate } from "react-router-dom"

interface PageHeaderProps {
  name?: string
  title?: string
  className?: string
}

export default function PageHeader({ 
  name = "Akash Kumar", 
  title = "Software Engineer",
  className = ""
}: PageHeaderProps) {
  const navigate = useNavigate()
  return (
    <div className={`text-center ${className}`} onClick={() => navigate('/')}>
      <h1 className="text-6xl md:text-7xl font-serif font-semibold mb-4 tracking-tight cursor-pointer">
        {name}
      </h1>
      <p className="text-xl md:text-2xl font-sans text-gray-300 font-light">
        {title}
      </p>
    </div>
  )
}

