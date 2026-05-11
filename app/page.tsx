'use client'

import { COMPANY_INFO, CORE_SERVICES, TRUST_SIGNALS, FAQ, TESTIMONIALS } from '@/lib/siteData'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{COMPANY_INFO.name}</h1>
            <p className="text-sm text-blue-100">24/7 Emergency Service Available</p>
          </div>
          <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">
            📞 {COMPANY_INFO.phone}
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Professional HVAC Service</h2>
          <p className="text-xl text-blue-100 mb-8">Emergency repair, installation, and maintenance in Chattanooga</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg">
              📞 Call Now: {COMPANY_INFO.phone}
            </a>
            <button onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })} className="border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.label} className="py-4">
                <div className="text-3xl mb-2">{signal.icon}</div>
                <p className="font-semibold text-sm text-gray-900">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Trusted by Chattanooga Homeowners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="lead-form" className="py-16 sm:py-20 bg-blue-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Get HVAC Help Today</h2>
          <form className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
              <input type="tel" placeholder="(423) 555-1234" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
              <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Address or ZIP *</label>
              <input type="text" placeholder="Chattanooga, TN" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">What do you need?</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option>AC Not Cooling</option>
                <option>Heat Not Working</option>
                <option>System Making Noise</option>
                <option>Need Replacement Estimate</option>
                <option>Maintenance Tune-Up</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg text-lg transition">
              Get HVAC Help
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">{COMPANY_INFO.name}</h3>
              <p className="text-gray-400">{COMPANY_INFO.description}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">📍 {COMPANY_INFO.address}</p>
              <p className="text-gray-400 mb-2">📞 {COMPANY_INFO.phone}</p>
              <p className="text-gray-400">✉️ {COMPANY_INFO.email}</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Hours</h4>
              <p className="text-gray-400 mb-2">Weekdays: {COMPANY_INFO.hours.weekday}</p>
              <p className="text-gray-400">{COMPANY_INFO.hours.emergency}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {COMPANY_INFO.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
