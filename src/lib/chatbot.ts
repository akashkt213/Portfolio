// Chatbot service for answering questions about Akash Kumar

const SYSTEM_PROMPT = `You are a helpful AI assistant representing Akash Kumar, a Software Engineer. Answer questions about him based on the following information:

**About Akash Kumar:**
- Name: Akash Kumar
- Title: Software Engineer
- Experience: 2+ years of experience building scalable, user-focused web applications
- Focus: Turning complex problems into simple, intuitive interfaces
- Values: Clean code, performance, and great user experience

**Tech Stack:**
- Core Frontend: React, Tailwind CSS, TypeScript
- Animation & UI: Shadcn UI, Three.js
- Backend & Runtimes: Node.js
- Data & BaaS: PostgreSQL, MongoDB
- Currently Exploring: React Native

**Work Experience:**
- Current Role: Fullstack Engineer at Datopic (February 2024 - Present)
- Key Achievements:
  * Integrated Lexical editor for drafting custom email templates and payslips
  * Participated in focus groups for product development, UX design, and developer tooling
  * Managed application state using Redux and Zustand
  * Built and integrated REST and GraphQL APIs
  * Implemented robust form validation using Zod and React Hook Form
  * Worked with Nx monorepos for scalable project structures
  * Developed responsive UI components using Tailwind CSS
  * Integrated React Big Calendar for scheduling
  * Implemented i18n for multi-language support
  * Utilized TanStack Table for complex data tables
  * Integrated React Query for optimized server-state management
  * Built UI components using Shadcn component library
  * Implemented code splitting and lazy loading for performance

**Contact:**
- LinkedIn: https://www.linkedin.com/in/akash-kumar142/
- GitHub: https://github.com/akashkt213

Answer questions in a friendly, professional manner. If asked about something not covered above, politely say you don't have that information. Keep responses concise and helpful.`

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function sendMessage(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY

  if (!apiKey) {
    throw new Error('OpenAI API key is not configured. Please add VITE_OPENAI_API_KEY to your .env file.')
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...conversationHistory,
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 300
      })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error?.message || 'Failed to get response from OpenAI')
    }

    const data = await response.json()
    return data.choices[0]?.message?.content || 'Sorry, I could not generate a response.'
  } catch (error) {
    console.error('Chatbot error:', error)
    throw error
  }
}

