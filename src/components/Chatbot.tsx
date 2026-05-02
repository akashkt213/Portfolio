import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Mic, Loader2 } from "lucide-react"
import { sendMessage, type ChatMessage } from "@/lib/chatbot"

interface ChatbotProps {
  predefinedQuestions?: string[]
}

export default function Chatbot({ predefinedQuestions = [] }: ChatbotProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSend = async (question?: string) => {
    const questionToSend = question || input.trim()
    if (!questionToSend) return

    setInput("")
    setError(null)
    setIsLoading(true)

    // Add user message
    const userMessage: ChatMessage = { role: 'user', content: questionToSend }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)

    try {
      const response = await sendMessage(questionToSend, messages)
      setMessages([...updatedMessages, { role: 'assistant', content: response }])
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to get response'
      setError(errorMessage)
      setMessages([...updatedMessages, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please check your API configuration.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-300 mb-6">
        Ask AkashGPT
      </h2>

      {/* Predefined Questions */}
      {predefinedQuestions.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {predefinedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              onClick={() => handleSend(question)}
              disabled={isLoading}
              className="bg-gray-900/50 border-gray-700 text-white hover:bg-gray-800"
            >
              {question}
            </Button>
          ))}
        </div>
      )}

      {/* Chat Messages */}
      {messages.length > 0 && (
        <div className="space-y-4 max-h-96 overflow-y-auto bg-gray-900/30 rounded-lg p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  msg.role === 'user'
                    ? 'bg-orange-500/20 text-white'
                    : 'bg-gray-800/50 text-gray-300'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-800/50 rounded-lg px-4 py-2">
                <Loader2 className="w-5 h-5 animate-spin text-gray-400" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Input Field */}
      <div className="relative">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What would you like to know?"
          disabled={isLoading}
          className="w-full h-16 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 pl-12 pr-12 text-lg"
        />
        <Mic className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Button
          size="icon"
          onClick={() => handleSend()}
          disabled={isLoading || !input.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </Button>
      </div>
    </div>
  )
}

