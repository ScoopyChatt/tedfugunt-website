'use client'

import { useState, FormEvent } from 'react'
import { LeadData, ServiceType, UrgencyLevel, PreferredContact } from '@/lib/leadTypes'
import { isValidEmail, isValidPhone } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    addressOrZip: '',
    serviceNeeded: 'ac-repair' as ServiceType,
    urgency: 'this-week' as UrgencyLevel,
    message: '',
    preferredContact: 'call' as PreferredContact,
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setError('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validation
    if (!formData.name.trim()) {
      setError('Please enter your name')
      setIsLoading(false)
      return
    }

    if (!isValidPhone(formData.phone)) {
      setError('Please enter a valid phone number')
      setIsLoading(false)
      return
    }

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    if (!formData.addressOrZip.trim()) {
      setError('Please enter your address or ZIP code')
      setIsLoading(false)
      return
    }

    // Create lead object
    const leadData: LeadData = {
      ...formData,
      source: 'website_form',
      createdAt: new Date().toISOString(),
    }

    // TODO: Send to API endpoint
    // For now, save to localStorage for demonstration
    try {
      const existingLeads = JSON.parse(localStorage.getItem('leads') || '[]')
      existingLeads.push(leadData)
      localStorage.setItem('leads', JSON.stringify(existingLeads))

      // Log to console for debugging
      console.log('Lead submitted:', leadData)

      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          email: '',
          addressOrZip: '',
          serviceNeeded: 'ac-repair',
          urgency: 'this-week',
          message: '',
          preferredContact: 'call',
        })
      }, 3000)
    } catch (err) {
      setError('Failed to submit form. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="lead-form" className="py-12 sm:py-16 bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-3">
            Get HVAC Help Today
          </h2>
          <p className="text-lg text-neutral-600">
            Tell us what's going on and we'll reach out within hours
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
            <p className="text-green-700 mb-2">
              We've received your request and our team will contact you shortly.
            </p>
            <p className="text-green-600 text-sm">
              If you have an emergency, call us at <a href="tel:4238943723" className="font-semibold hover:underline">(423) 894-3723</a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-card p-8 space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(423) 555-1234"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Address/ZIP */}
            <div>
              <label htmlFor="addressOrZip" className="block text-sm font-semibold text-neutral-700 mb-2">
                Address or ZIP Code *
              </label>
              <input
                type="text"
                id="addressOrZip"
                name="addressOrZip"
                value={formData.addressOrZip}
                onChange={handleChange}
                placeholder="Chattanooga, TN 37421"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Service Needed */}
            <div>
              <label htmlFor="serviceNeeded" className="block text-sm font-semibold text-neutral-700 mb-2">
                What do you need help with?
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              >
                <option value="ac-repair">AC Not Cooling</option>
                <option value="heating-repair">Heat Not Working</option>
                <option value="system-making-noise">System Making Noise</option>
                <option value="replacement-estimate">Need Replacement Estimate</option>
                <option value="maintenance-tune-up">Maintenance Tune-Up</option>
                <option value="indoor-air-quality">Indoor Air Quality</option>
                <option value="duct-cleaning">Air Duct Cleaning</option>
                <option value="commercial-hvac">Commercial HVAC</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Urgency */}
            <div>
              <label htmlFor="urgency" className="block text-sm font-semibold text-neutral-700 mb-2">
                How soon do you need service?
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
              >
                <option value="emergency">Emergency / ASAP</option>
                <option value="this-week">This Week</option>
                <option value="planning-ahead">Planning Ahead</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                Additional Details (optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your HVAC issue..."
                rows={3}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
              />
            </div>

            {/* Preferred Contact */}
            <div>
              <label htmlFor="preferredContact" className="block text-sm font-semibold text-neutral-700 mb-2">
                How should we contact you?
              </label>
              <div className="space-y-2">
                {(['call', 'email', 'text'] as PreferredContact[]).map((method) => (
                  <label key={method} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={method}
                      checked={formData.preferredContact === method}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 cursor-pointer"
                    />
                    <span className="text-neutral-700 capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-accent-orange hover:bg-accent-red text-white font-bold py-4 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Submitting...' : 'Get HVAC Help'}
            </button>

            <p className="text-xs text-neutral-500 text-center">
              We'll contact you within 1-2 hours during business hours or within 24 hours for emergency requests.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
