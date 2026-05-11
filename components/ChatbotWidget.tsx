'use client'

import { useState, useRef, useEffect } from 'react'
import { ChatMessage, ChatSession, LeadData, ServiceType, UrgencyLevel } from '@/lib/leadTypes'
import { generateId } from '@/lib/utils'
import { X, Send, MessageCircle } from 'lucide-react'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [sessionData, setSessionData] = useState<Partial<LeadData>>({})
  const [currentStep, setCurrentStep] = useState<'initial' | 'service' | 'urgency' | 'name' | 'phone' | 'email' | 'address' | 'complete'>('initial')
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const addMessage = (role: 'bot' | 'user', content: string) => {
    const message: ChatMessage = {
      id: generateId(),
      role,
      content,
      timestamp: new Date().toISOString(),
    }
    setMessages((prev) => [...prev, message])
  }

  const handleInitialOpen = () => {
    if (messages.length === 0) {
      addMessage(
        'bot',
        "Hi! 👋 I'm Ted Fugunt Heating & Air's virtual assistant. I can help you schedule service, request an estimate, or get answers about HVAC issues. What can we help with today?"
      )
      setCurrentStep('initial')
    }
    setIsOpen(true)
  }

  const handleUserMessage = (content: string) => {
    addMessage('user', content)

    // Simulate bot response with slight delay
    setTimeout(() => {
      handleBotResponse(content)
    }, 500)
  }

  const handleBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase().trim()

    switch (currentStep) {
      case 'initial':
        // Route to service selection
        addMessage('bot', 'What issue are you experiencing?')
        addMessage('bot', '1. AC not cooling\n2. Heat not working\n3. System making noise\n4. Need replacement estimate\n5. Maintenance tune-up\n6. Indoor air quality\n7. Other')
        setCurrentStep('service')
        break

      case 'service':
        const serviceMap: Record<string, ServiceType> = {
          '1': 'ac-repair',
          'ac': 'ac-repair',
          'cooling': 'ac-repair',
          '2': 'heating-repair',
          'heat': 'heating-repair',
          'warm': 'heating-repair',
          '3': 'system-making-noise',
          'noise': 'system-making-noise',
          '4': 'replacement-estimate',
          'replacement': 'replacement-estimate',
          'replace': 'replacement-estimate',
          '5': 'maintenance-tune-up',
          'maintenance': 'maintenance-tune-up',
          'tune-up': 'maintenance-tune-up',
          '6': 'indoor-air-quality',
          'air quality': 'indoor-air-quality',
          '7': 'other',
          'other': 'other',
        }

        let service = 'other'
        for (const [key, val] of Object.entries(serviceMap)) {
          if (input.includes(key)) {
            service = val
            break
          }
        }

        setSessionData((prev) => ({
          ...prev,
          serviceNeeded: service as ServiceType,
        }))

        addMessage('bot', `Got it! You need ${service.replace('-', ' ')} service.`)
        addMessage('bot', 'How soon do you need this?\n1. Emergency / ASAP\n2. This week\n3. Planning ahead')
        setCurrentStep('urgency')
        break

      case 'urgency':
        const urgencyMap: Record<string, UrgencyLevel> = {
          '1': 'emergency',
          'emergency': 'emergency',
          'asap': 'emergency',
          'now': 'emergency',
          '2': 'this-week',
          'week': 'this-week',
          'soon': 'this-week',
          '3': 'planning-ahead',
          'planning': 'planning-ahead',
          'future': 'planning-ahead',
        }

        let urgency = 'this-week'
        for (const [key, val] of Object.entries(urgencyMap)) {
          if (input.includes(key)) {
            urgency = val
            break
          }
        }

        setSessionData((prev) => ({
          ...prev,
          urgency: urgency as UrgencyLevel,
        }))

        addMessage('bot', `Perfect! I'll make sure we prioritize this. Now, what's your name?`)
        setCurrentStep('name')
        break

      case 'name':
        setSessionData((prev) => ({
          ...prev,
          name: userInput,
        }))
        addMessage('bot', `Nice to meet you, ${userInput}! What's the best phone number to reach you?`)
        setCurrentStep('phone')
        break

      case 'phone':
        setSessionData((prev) => ({
          ...prev,
          phone: userInput,
        }))
        addMessage('bot', `Got it! And what's your email address?`)
        setCurrentStep('email')
        break

      case 'email':
        setSessionData((prev) => ({
          ...prev,
          email: userInput,
        }))
        addMessage('bot', `Great! What's your address or ZIP code in the Chattanooga area?`)
        setCurrentStep('address')
        break

      case 'address':
        const leadData: LeadData = {
          name: sessionData.name || '',
          phone: sessionData.phone || '',
          email: sessionData.email || '',
          addressOrZip: userInput,
          serviceNeeded: (sessionData.serviceNeeded as ServiceType) || 'other',
          urgency: (sessionData.urgency as UrgencyLevel) || 'this-week',
          preferredContact: 'call',
          source: 'website_chatbot',
          createdAt: new Date().toISOString(),
        }

        // Save lead to localStorage
        try {
          const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]')
          existingLeads.push(leadData)
          localStorage.setItem('leads', JSON.stringify(existingLeads))
          console.log('Chat lead captured:', leadData)
        } catch (err) {
          console.error('Error saving lead:', err)
        }

        setSessionData((prev) => ({
          ...prev,
          addressOrZip: userInput,
        }))

        addMessage(
          'bot',
          `Perfect, ${sessionData.name}! We have all the information we need. Our team will contact you at ${sessionData.phone} shortly to confirm your appointment. If this is an emergency, you can call us immediately at (423) 894-3723. Thank you! 🙏`
        )
        setCurrentStep('complete')
        break
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      handleUserMessage(inputValue)
      setInputValue('')
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={handleInitialOpen}
          className="fixed bottom-24 md:bottom-8 right-6 md:right-8 w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full shadow-card hover:shadow-card-hover hover:scale-110 transition transform flex items-center justify-center z-40 animate-pulse-subtle"
          aria-label="Open chat assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 md:bottom-8 right-6 md:right-8 w-96 max-w-[90vw] h-[500px] md:h-[600px] bg-white rounded-xl shadow-card-hover flex flex-col z-50 animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-4 rounded-t-xl flex justify-between items-center">
            <div>
              <h3 className="font-bold">Ted Fugunt HVAC</h3>
              <p className="text-xs opacity-90">Virtual Assistant</p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false)
                setMessages([])
                setCurrentStep('initial')
                setSessionData({})
              }}
              className="hover:bg-white/20 p-1 rounded-lg transition"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg whitespace-pre-wrap text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-br-none'
                      : 'bg-neutral-100 text-neutral-900 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-neutral-200 p-4 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-sm"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition disabled:opacity-50"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
