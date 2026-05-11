'use client'

import { COMPANY_INFO } from '@/lib/siteData'

export default function Hero() {
  const scrollToForm = () => {
    const form = document.getElementById('lead-form')
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-700 to-primary-800 text-white overflow-hidden pt-20 pb-32">
      {/* Background accent */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 bg-accent-orange opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 bg-accent-orange opacity-5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-orange" />
          </span>
          <span>24/7 Emergency Service Available</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
          Chattanooga HVAC Service
          <br />
          <span className="bg-gradient-to-r from-accent-orange to-accent-red bg-clip-text text-transparent">
            Built Around Fast Comfort
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-neutral-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          When your AC quits in summer or your heat fails in winter, you need a local Chattanooga HVAC team that responds fast, diagnoses clearly, and gets your home comfortable again.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={scrollToForm}
            className="bg-accent-orange hover:bg-accent-red text-white font-semibold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-card hover:shadow-card-hover"
          >
            Schedule Service
          </button>
          <a
            href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
            className="border-2 border-white hover:bg-white hover:text-primary-700 text-white font-semibold py-4 px-8 rounded-lg transition"
          >
            📞 Call Now {COMPANY_INFO.phone}
          </a>
        </div>

        {/* Trust Proof */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <span>Carrier Dealer</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-neutral-300">•</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">✓</span>
            <span>Licensed Professionals</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-neutral-300">•</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">⭐</span>
            <span>5-Star Rated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
