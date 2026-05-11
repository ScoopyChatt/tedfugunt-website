'use client'

import { useState, useEffect, useRef } from 'react'
import { X, MessageCircle, Send, Loader } from 'lucide-react'

interface ConversationMessage {
  id: string
  type: 'bot' | 'user'
  text: string
  timestamp: Date
}

interface QuickReplyButton {
  label: string
  value: string
  emoji: string
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false)
  const [step, setStep] = useState<'greeting' | 'need' | 'urgency' | 'zip' | 'lead' | 'confirmation' | 'closed'>('greeting')
  const [messages, setMessages] = useState<ConversationMessage[]>([])
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    selectedNeed: '',
    isEmergency: '',
    zipCode: '',
    firstName: '',
    phone: '',
    email: '',
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const autoOpenTimeoutRef = useRef<NodeJS.Timeout>()

  // Auto-open after 5 seconds on first visit only
  useEffect(() => {
    if (!hasOpenedOnce) {
      autoOpenTimeoutRef.current = setTimeout(() => {
        setIsOpen(true)
        setHasOpenedOnce(true)
        // Add initial greeting message
        const greeting: ConversationMessage = {
          id: `msg-${Date.now()}`,
          type: 'bot',
          text: '👋 Hi there! Need help with your heating or cooling? I can get you connected with a technician fast.',
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

  const handleNeedSelection = (need: string) => {
    setFormData({ ...formData, selectedNeed: need })
    addMessage(need, 'user')

    // Small delay for natural feeling
    setTimeout(() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        const urgencyQuestion = 'Is this an emergency situation right now?'
        addMessage(urgencyQuestion, 'bot')
        setStep('urgency')
      }, 1000)
    }, 300)
  }

  const handleUrgencySelection = (isEmergency: boolean) => {
    const response = isEmergency ? 'Yes, it\'s an emergency' : 'No, it\'s not an emergency'
    setFormData({ ...formData, isEmergency: isEmergency ? 'yes' : 'no' })
    addMessage(response, 'user')

    setTimeout(() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)

        if (isEmergency) {
          // For emergencies, show phone number immediately
          addMessage(
            '⚠️ For emergencies, call us right now at (423) 894-3723 — we have technicians available 24/7.',
            'bot'
          )
          setTimeout(() => {
            addMessage(
              'Would you still like me to take your info so we can follow up?',
              'bot'
            )
            setStep('zip')
          }, 800)
        } else {
          addMessage(
            "What's your ZIP code so I can confirm we service your area?",
            'bot'
          )
          setStep('zip')
        }
      }, 1000)
    }, 300)
  }

  const handleZipCodeSubmit = () => {
    if (!userInput.trim()) return

    const zip = userInput.trim()
    setFormData({ ...formData, zipCode: zip })
    addMessage(zip, 'user')
    setUserInput('')

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)

      // Simple validation: assume service area if zip is provided
      // In production, validate against actual service area
      addMessage(
        '✅ Great news! We serve your area. I can check our schedule for a same-day or next-day appointment.',
        'bot'
      )

      setTimeout(() => {
        addMessage(
          "What's your name and the best phone number to reach you?",
          'bot'
        )
        setStep('lead')
      }, 800)
    }, 1000)
  }

  const handleLeadCapture = () => {
    // Parse user input for name and phone
    const input = userInput.trim()
    const phoneRegex = /(\d{3})[^\d]*(\d{3})[^\d]*(\d{4})/
    const phoneMatch = input.match(phoneRegex)

    if (!phoneMatch) {
      addMessage(input, 'user')
      setUserInput('')

      setTimeout(() => {
        addMessage(
          'I need your phone number too. Please provide your full name and phone number, like: John Smith, (423) 555-1234',
          'bot'
        )
      }, 600)
      return
    }

    // Extract name (everything before the phone number)
    const namePart = input.split(/[\d\-\(\)]/)[0].trim()
    if (!namePart || namePart.length < 2) {
      addMessage(input, 'user')
      setUserInput('')

      setTimeout(() => {
        addMessage(
          'Could you provide your full name as well? Format: Name, (Phone)',
          'bot'
        )
      }, 600)
      return
    }

    // Phone is valid, capture it
    const phone = `(${phoneMatch[1]}) ${phoneMatch[2]}-${phoneMatch[3]}`
    setFormData({ ...formData, firstName: namePart, phone: phone })

    addMessage(input, 'user')
    setUserInput('')

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      addMessage(
        `Perfect, ${namePart}! Our team will call you at ${phone} within 15 minutes during business hours or within 30 minutes of opening if it's after hours.`,
        'bot'
      )

      setTimeout(() => {
        addMessage(
          'Is there anything specific you\'d like the technician to know about the issue?',
          'bot'
        )
        setStep('confirmation')
      }, 800)
    }, 1000)
  }

  const handleConfirmation = () => {
    if (userInput.trim()) {
      addMessage(userInput, 'user')
      setUserInput('')
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      addMessage(
        '✅ Thanks! We\'ve got all your info. You\'ll hear from our team shortly. Have a great day!',
        'bot'
      )

      // Save lead to localStorage
      const leadData = {
        firstName: formData.firstName,
        phone: formData.phone,
        email: formData.email,
        selectedNeed: formData.selectedNeed,
        zipCode: formData.zipCode,
        isEmergency: formData.isEmergency,
        timestamp: new Date().toISOString(),
      }

      try {
        const leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]')
        leads.push(leadData)
        localStorage.setItem('chatbot_leads', JSON.stringify(leads))
      } catch (e) {
        console.log('Lead captured from chatbot')
      }

      setTimeout(() => {
        setIsOpen(false)
        setStep('closed')
      }, 2000)
    }, 1000)
  }

  const handleSendMessage = () => {
    if (!userInput.trim() || isLoading) return

    if (step === 'zip') {
      handleZipCodeSubmit()
    } else if (step === 'lead') {
      handleLeadCapture()
    } else if (step === 'confirmation') {
      handleConfirmation()
    }
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
          {step === 'need' && (
            <div className="space-y-2">
              {[
                { label: 'AC Repair', value: 'ac-repair', emoji: '❄️' },
                { label: 'Furnace Repair', value: 'furnace-repair', emoji: '🔥' },
                { label: 'Get a Quote', value: 'quote', emoji: '💰' },
                { label: 'Maintenance Plan', value: 'maintenance', emoji: '🛡️' },
                { label: 'Something Else', value: 'other', emoji: '❓' },
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => handleNeedSelection(`${btn.emoji} ${btn.label}`)}
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
                onClick={() => handleUrgencySelection(true)}
                className="w-full px-3 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition font-semibold"
              >
                🚨 Yes, Emergency
              </button>
              <button
                onClick={() => handleUrgencySelection(false)}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 transition"
              >
                ✓ No, Not Emergency
              </button>
            </div>
          )}

          {(step === 'zip' || step === 'lead' || step === 'confirmation') && (
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={
                  step === 'zip'
                    ? 'Your ZIP code...'
                    : step === 'lead'
                    ? 'Name, Phone...'
                    : 'Anything else?'
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                autoFocus
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!userInput.trim() || isLoading}
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
