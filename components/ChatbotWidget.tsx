'use client'

import { useState, useEffect } from 'react'
import { X, MessageCircle } from 'lucide-react'

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({ name: '', phone: '', issue: '' })
  const [autoCloseTimer, setAutoCloseTimer] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsOpen(true)
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsOpen(false)
      }
    }, 15000)
    setAutoCloseTimer(timer)
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [hasInteracted])

  const handleInteraction = () => {
    setHasInteracted(true)
    if (autoCloseTimer) {
      clearTimeout(autoCloseTimer)
      setAutoCloseTimer(null)
    }
  }

  const handleNext = () => {
    if (step === 0) {
      setStep(1)
      handleInteraction()
    } else if (step === 1 && formData.name.trim()) {
      setStep(2)
      handleInteraction()
    } else if (step === 2 && formData.phone.trim()) {
      setStep(3)
      handleInteraction()
    } else if (step === 3 && formData.issue.trim()) {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    const leadData = {
      name: formData.name,
      phone: formData.phone,
      issue: formData.issue,
      source: 'chatbot',
      timestamp: new Date().toISOString(),
    }

    try {
      const leads = JSON.parse(localStorage.getItem('leads') || '[]')
      leads.push(leadData)
      localStorage.setItem('leads', JSON.stringify(leads))
    } catch (e) {
      console.log('Lead captured from chatbot')
    }

    setStep(4)
    setTimeout(() => {
      setIsOpen(false)
      setFormData({ name: '', phone: '', issue: '' })
      setStep(0)
      setHasInteracted(false)
    }, 3000)
  }

  const handleReopenClick = () => {
    setIsOpen(true)
    setStep(0)
    setFormData({ name: '', phone: '', issue: '' })
    setHasInteracted(false)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleReopenClick}
          className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all transform hover:scale-110 active:scale-95"
          aria-label="Open chat support"
        >
          <MessageCircle size={28} />
        </button>
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
          1
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-6 sm:right-6">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-200 w-96 max-w-[calc(100vw-32px)] flex flex-col h-auto max-h-[600px]">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <div className="flex items-center gap-2">
            <MessageCircle size={20} />
            <span className="font-bold">Quick Service</span>
          </div>
          <button
            onClick={() => {
              setIsOpen(false)
              handleInteraction()
            }}
            className="hover:bg-blue-800 p-1 rounded transition"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {step === 0 && (
            <div className="space-y-4">
              <p className="text-gray-800 font-semibold">Hi! 👋</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                We're here to help! Tell us about your HVAC issue and we'll get you connected with our team right away. Most inquiries are responded to within 1 hour.
              </p>
              <p className="text-xs text-blue-600 font-semibold">24/7 Emergency Service Available</p>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-3">
              <p className="text-gray-800 font-semibold">What's your name?</p>
              <input
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value })
                  handleInteraction()
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                autoFocus
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-3">
              <p className="text-gray-800 font-semibold">Your phone number?</p>
              <input
                type="tel"
                placeholder="(423) 555-1234"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value })
                  handleInteraction()
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                autoFocus
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <p className="text-gray-800 font-semibold">What's the issue?</p>
              <select
                value={formData.issue}
                onChange={(e) => {
                  setFormData({ ...formData, issue: e.target.value })
                  handleInteraction()
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                autoFocus
              >
                <option value="">Select an issue...</option>
                <option value="emergency">🚨 Emergency - System Down</option>
                <option value="ac-not-cooling">❄️ AC Not Cooling</option>
                <option value="heat-not-working">🔥 Heat Not Working</option>
                <option value="replacement">🔄 Need New System</option>
                <option value="maintenance">✓ Maintenance</option>
                <option value="other">💬 Other</option>
              </select>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-3">
              <p className="text-2xl">✅</p>
              <p className="text-gray-800 font-semibold">Thanks {formData.name}!</p>
              <p className="text-gray-700 text-sm">We've got your info. Our team will call you within 1 hour to help!</p>
              <p className="text-xs text-blue-600">📞 {formData.phone}</p>
            </div>
          )}
        </div>

        {step < 4 && (
          <div className="px-6 pb-6">
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !formData.name.trim()) ||
                (step === 2 && !formData.phone.trim()) ||
                (step === 3 && !formData.issue.trim())
              }
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-3 rounded-lg transition text-sm"
            >
              {step === 0 ? "Let's Go →" : step === 3 ? '✓ Send My Info' : 'Next →'}
            </button>
          </div>
        )}

        {step === 0 && !hasInteracted && (
          <div className="px-6 pb-3 text-xs text-gray-500 text-center">
            Closes automatically in 15 seconds...
          </div>
        )}
      </div>
    </div>
  )
}
