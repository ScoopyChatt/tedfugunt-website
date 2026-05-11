'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { Phone, MapPin, Clock, Star, Check, AlertCircle, Zap } from 'lucide-react'
import { COMPANY_INFO, CORE_SERVICES, TESTIMONIALS } from '@/lib/siteData'

const ChatbotWidget = dynamic(() => import('@/components/ChatbotWidget'), { ssr: false })

export default function Home() {
  const [formStep, setFormStep] = useState(0)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', issue: '' })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const leads = JSON.parse(localStorage.getItem('leads') || '[]')
      leads.push({ ...formData, source: 'contact_form', timestamp: new Date().toISOString() })
      localStorage.setItem('leads', JSON.stringify(leads))
    } catch (e) {
      console.log('Lead captured')
    }
    setFormStep(3)
    setTimeout(() => {
      setFormStep(0)
      setFormData({ name: '', phone: '', email: '', issue: '' })
    }, 4000)
  }

  return (
    <>
      {/* STICKY HEADER WITH LOGO AND EMERGENCY CTA */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Ted Fugunt" className="h-12 w-auto" />
            <div className="hidden sm:block">
              <p className="text-xs text-red-600 font-semibold">🚨 24/7 Emergency Service</p>
            </div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 sm:px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            <Phone size={20} />
            <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* HERO - EMERGENCY FOCUSED */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400 text-red-100 px-4 py-2 rounded-full mb-6">
                <AlertCircle size={16} />
                <span className="text-sm font-semibold">Emergency? We're Ready!</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AC Down? Heat Not Working?
              </h2>

              <p className="text-lg text-blue-100 mb-8">
                We're here 24/7 to fix your HVAC emergency. Same-day service available. Local Chattanooga team you can trust.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105 shadow-xl text-lg"
                >
                  <Phone size={24} />
                  Call Now
                </a>
                <button
                  onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-4 rounded-lg transition text-lg"
                >
                  <Zap size={24} />
                  Get Help Fast
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-400/20 p-3 rounded-lg">
                      <Check className="text-green-300" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-green-300">Same-Day Service</p>
                      <p className="text-blue-100 text-sm">Most calls answered within 15 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-400/20 p-3 rounded-lg">
                      <Clock className="text-orange-300" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-orange-300">Available 24/7</p>
                      <p className="text-blue-100 text-sm">Emergencies don't wait, neither do we</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-400/20 p-3 rounded-lg">
                      <Star className="text-yellow-300" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-yellow-300">Trusted by 500+ Families</p>
                      <p className="text-blue-100 text-sm">5-star rated on Google & Facebook</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS BAR */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-8 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-900">500+</p>
              <p className="text-sm text-gray-700">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">4.9★</p>
              <p className="text-sm text-gray-700">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">15 min</p>
              <p className="text-sm text-gray-700">Avg Response Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-900">24/7</p>
              <p className="text-sm text-gray-700">Always Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SHOWCASE */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All Your HVAC Needs Covered
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to new installations, we handle it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((service) => (
              <div key={service.id} className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-blue-300 transition">
                <div className="text-5xl mb-4 group-hover:scale-110 transition transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-blue-600 font-semibold">Free Diagnosis & Estimate</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Trusted by Chattanooga Families
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                <p className="font-bold text-gray-900">— {testimonial.name}</p>
                <p className="text-sm text-gray-500 mt-1">Verified Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FORM */}
      <section id="lead-form" className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need HVAC Help?</h2>
            <p className="text-blue-100 mb-8">
              Fill out the form below and we'll contact you within 1 hour with a free estimate.
            </p>

            {formStep === 3 ? (
              <div className="text-center py-8 space-y-4">
                <p className="text-5xl">✅</p>
                <p className="text-2xl font-bold">Thank You!</p>
                <p className="text-blue-100">We've received your information. Our team will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="(423) 555-1234"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">What's the Issue? *</label>
                  <select
                    name="issue"
                    value={formData.issue}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 outline-none"
                    required
                  >
                    <option value="">Select an issue...</option>
                    <option value="🚨 Emergency - System Down">🚨 Emergency - System Down</option>
                    <option value="❄️ AC Not Cooling">❄️ AC Not Cooling</option>
                    <option value="🔥 Heat Not Working">🔥 Heat Not Working</option>
                    <option value="🔄 Need New System">🔄 Need New System</option>
                    <option value="✓ Maintenance Needed">✓ Maintenance Needed</option>
                    <option value="💬 Other">💬 Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-lg transition transform hover:scale-105 text-lg mt-6"
                >
                  Get Free Estimate Now
                </button>

                <p className="text-center text-xs text-blue-200">
                  ✓ Free diagnosis • No obligation • Fast response
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Ted Fugunt?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Licensed & Certified</h3>
                  <p className="text-gray-600">All our technicians are fully licensed, insured, and background checked.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Honest Pricing</h3>
                  <p className="text-gray-600">No hidden fees. Free diagnosis and estimates. You know the price before we start.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Carrier Dealer</h3>
                  <p className="text-gray-600">Authorized dealer for premium Carrier equipment with manufacturer warranties.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">24/7 Emergency Service</h3>
                  <p className="text-gray-600">Your comfort doesn't stop at 5pm. We're available anytime, day or night.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Financing Available</h3>
                  <p className="text-gray-600">Make your HVAC investment affordable with our flexible financing options.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Check className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Same-Day Service</h3>
                  <p className="text-gray-600">Emergency service available same day. Most calls answered within 15 minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't Wait. Get Help Now.</h2>
          <p className="text-lg text-blue-100 mb-8">Your comfort is our priority. Call us today.</p>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition transform hover:scale-105 text-xl shadow-xl"
          >
            <Phone size={28} />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/logo.png" alt="Ted Fugunt" className="h-16 w-auto mb-4" />
              <p className="text-sm">{COMPANY_INFO.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">📍 {COMPANY_INFO.address}</p>
              <p className="text-sm mb-2">📞 {COMPANY_INFO.phone}</p>
              <p className="text-sm">✉️ {COMPANY_INFO.email}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Hours</h4>
              <p className="text-sm mb-2">Weekdays: {COMPANY_INFO.hours.weekday}</p>
              <p className="text-sm text-orange-400">{COMPANY_INFO.hours.emergency}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CHATBOT WIDGET */}
      <ChatbotWidget />
    </>
  )
}
