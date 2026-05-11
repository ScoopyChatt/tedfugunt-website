'use client'

import { useState, useEffect, useRef } from 'react'
import { X, MessageCircle, Send } from 'lucide-react'

interface ConversationMessage {
  id: string
  type: 'bot' | 'user'
  text: string
  timestamp: Date
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [step, setStep] = useState<'greeting' | 'name' | 'phone' | 'zip' | 'need' | 'urgency' | 'notes' | 'confirmation' | 'closed'>('greeting')
  const [messages, setMessages] = useState<ConversationMessage[]>([])
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    zipCode: '',
    selectedNeed: '',
    isEmergency: false,
    notes: '',
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const autoOpenTimeoutRef = useRef<NodeJS.Timeout>()

  // Auto-open after 5 seconds on first visit only
  useEffect(() => {
    if (!hasOpenedOnce) {
      autoOpenTimeoutRef.current = setTimeout(() => {
        setIsOpen(true)
        setHasOpenedOnce(true)
        const greeting: ConversationMessage = {
          id: `msg-${Date.now()}`,
          type: 'bot',
          text: '👋 Hi there! Need help with your heating or cooling? I\'ll collect your information so our team can help you right away.',
          timestamp: new Date(),
        }
        setMessages([greeting])
      }, 5000)
    }

    return () => {
      if (autoOpenTimeoutRef.current) clearTimeout(autoOpenTimeoutRef.current)
    }
  }, [hasOpenedOnce])

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (text: string, type: 'bot' | 'user') => {
    const newMessage: ConversationMessage = {
      id: `msg-${Date.now()}`,
      type,
      text,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const proceedToNextStep = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)

      if (step === 'greeting') {
        addMessage('Let\'s get started!', 'user')
        setTimeout(() => {
          addMessage('What\'s your first name?', 'bot')
          setStep('name')
        }, 300)
      } else if (step === 'name') {
        if (!userInput.trim()) {
          addMessage('Please enter your name', 'bot')
          return
        }
        const name = userInput.trim()
        setFormData({ ...formData, firstName: name })
        addMessage(name, 'user')
        setUserInput('')

        setTimeout(() => {
          addMessage('Thanks! What\'s the best phone number to reach you?', 'bot')
          setStep('phone')
        }, 300)
      } else if (step === 'phone') {
        const phoneRegex = /(\d{3})[^\d]*(\d{3})[^\d]*(\d{4})/
        const phoneMatch = userInput.trim().match(phoneRegex)

        if (!phoneMatch) {
          addMessage(userInput, 'user')
          setUserInput('')
          setTimeout(() => {
            addMessage('Please enter a valid phone number (e.g., (423) 894-3723)', 'bot')
            setIsLoading(false)
          }, 300)
          return
        }

        const phone = `(${phoneMatch[1]}) ${phoneMatch[2]}-${phoneMatch[3]}`
        setFormData({ ...formData, phone })
        addMessage(phone, 'user')
        setUserInput('')

        setTimeout(() => {
          addMessage('Great! What\'s your ZIP code?', 'bot')
          setStep('zip')
        }, 300)
      } else if (step === 'zip') {
        const zip = userInput.trim()
        setFormData({ ...formData, zipCode: zip })
        addMessage(zip, 'user')
        setUserInput('')

        setTimeout(() => {
          addMessage('Perfect! What service do you need help with?', 'bot')
          setStep('need')
        }, 300)
      } else if (step === 'need') {
        addMessage(userInput.trim(), 'user')
        setFormData({ ...formData, selectedNeed: userInput.trim() })
        setUserInput('')

        setTimeout(() => {
          addMessage('Is this an emergency situation right now?', 'bot')
          setStep('urgency')
        }, 300)
      } else if (step === 'urgency') {
        addMessage(userInput.trim(), 'user')
        const isEmergency = userInput.toLowerCase().includes('yes') || userInput.toLowerCase().includes('emergency')
        setFormData({ ...formData, isEmergency })
        setUserInput('')

        setTimeout(() => {
          addMessage('Is there anything else we should know about this issue? (Optional)', 'bot')
          setStep('notes')
        }, 300)
      } else if (step === 'notes') {
        if (userInput.trim()) {
          setFormData({ ...formData, notes: userInput.trim() })
          addMessage(userInput.trim(), 'user')
        } else {
          addMessage('No additional details', 'user')
        }
        setUserInput('')

        // Save lead
        const leadData = {
          firstName: formData.firstName,
          phone: formData.phone,
          zipCode: formData.zipCode,
          selectedNeed: formData.selectedNeed,
          isEmergency: formData.isEmergency,
          notes: formData.notes,
          timestamp: new Date().toISOString(),
          priority: formData.isEmergency ? 'URGENT' : 'NORMAL',
        }

        try {
          const leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]')
          leads.push(leadData)
          localStorage.setItem('chatbot_leads', JSON.stringify(leads))
          console.log('Lead saved:', leadData)
        } catch (e) {
          console.log('Lead captured from chatbot')
        }

        setTimeout(() => {
          const urgencyMsg = formData.isEmergency
            ? '🚨 URGENT - We\'ve flagged this as an emergency. Our team will call you ASAP!'
            : '✅ Thanks! Our team will call you soon at ' + formData.phone
          addMessage(urgencyMsg, 'bot')
          setStep('confirmation')

          setTimeout(() => {
            setIsOpen(false)
            setStep('closed')
          }, 3000)
        }, 300)
      }
    }, 800)
  }

  const handleSendMessage = () => {
    if (!userInput.trim() && step !== 'notes') return
    if (isLoading) return
    proceedToNextStep()
  }

  const handleReopenClick = () => {
    setIsOpen(true)
    setStep('greeting')
    setFormData({
      selectedNeed: '',
      isEmergency: '',
      zipCode: '',
      firstName: '',
      phone: '',
      email: '',
    })
    setMessages([
      {
        id: `msg-${Date.now()}`,
        type: 'bot',
        text: '👋 Hi there! Need help with your heating or cooling? I can get you connected with a technician fast.',
        timestamp: new Date(),
      },
    ])
  }

  // Closed state - show floating button
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleReopenClick}
          className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 active:scale-95 animate-pulse"
          aria-label="Open chat support"
          title="Chat with us"
        >
          <MessageCircle size={28} />
        </button>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse">
          1
        </div>
      </div>
    )
  }

  // Open chat window
  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-96 max-w-[calc(100vw-32px)] flex flex-col h-auto max-h-[600px] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <span className="font-bold">Quick Service</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-800 p-1 rounded transition"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50" style={{ maxHeight: '400px' }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg text-sm leading-relaxed ${
                  msg.type === 'bot'
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Reply Buttons or Input */}
        <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
          {step === 'greeting' && (
            <button
              onClick={() => proceedToNextStep()}
              className="w-full px-4 py-3 text-sm bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
            >
              Let's Get Started →
            </button>
          )}

          {step === 'need' && (
            <div className="space-y-2">
              {[
                { label: 'AC Repair', emoji: '❄️' },
                { label: 'Furnace Repair', emoji: '🔥' },
                { label: 'Heat Pump', emoji: '🔄' },
                { label: 'New Installation', emoji: '⚙️' },
                { label: 'Maintenance', emoji: '🛡️' },
                { label: 'Other', emoji: '❓' },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={() => {
                    setUserInput(`${btn.emoji} ${btn.label}`)
                    setTimeout(() => proceedToNextStep(), 100)
                  }}
                  className="w-full px-3 py-2 text-left text-sm bg-white border border-gray-300 rounded hover:bg-blue-50 transition"
                >
                  {btn.emoji} {btn.label}
                </button>
              ))}
            </div>
          )}

          {step === 'urgency' && (
            <div className="space-y-2">
              <button
                onClick={() => {
                  setUserInput('Yes, it\'s an emergency')
                  setTimeout(() => proceedToNextStep(), 100)
                }}
                className="w-full px-3 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
              >
                🚨 Yes, Emergency
              </button>
              <button
                onClick={() => {
                  setUserInput('No, not an emergency')
                  setTimeout(() => proceedToNextStep(), 100)
                }}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
              >
                ✓ No, Not Emergency
              </button>
            </div>
          )}

          {(step === 'name' || step === 'phone' || step === 'zip' || step === 'notes') && (
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={
                  step === 'name'
                    ? 'Your name...'
                    : step === 'phone'
                    ? '(423) 894-3723'
                    : step === 'zip'
                    ? '37421'
                    : 'Type here... (optional)'
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                autoFocus
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={(step !== 'notes' && !userInput.trim()) || isLoading}
                className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-300 transition"
              >
                <Send size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Powered by disclosure */}
        <div className="px-4 py-2 text-center text-xs text-gray-500 bg-gray-50 border-t border-gray-200">
          Powered by AI — We respond faster than human agents
        </div>
      </div>
    </div>
  )
}
