'use client'

import { useState } from 'react'
import Link from 'next/link'
import { COMPANY_INFO } from '@/lib/siteData'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-elevation">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-primary-700 hover:text-primary-800 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-orange rounded-lg flex items-center justify-center text-white text-sm font-bold">
              TF
            </div>
            <span className="hidden sm:inline">Ted Fugunt</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-neutral-700 hover:text-primary-600 text-sm font-medium transition">
              Services
            </Link>
            <Link href="/service-area" className="text-neutral-700 hover:text-primary-600 text-sm font-medium transition">
              Service Area
            </Link>
            <Link href="/financing" className="text-neutral-700 hover:text-primary-600 text-sm font-medium transition">
              Financing
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-primary-600 text-sm font-medium transition">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm transition"
            >
              📞 {COMPANY_INFO.phone}
            </a>
            <button className="inline-flex md:hidden bg-neutral-100 hover:bg-neutral-200 p-2 rounded-lg transition" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <a
              href="#schedule-service"
              className="hidden md:inline-block bg-accent-orange hover:bg-accent-red text-white px-4 py-2 rounded-lg font-semibold text-sm transition shadow-card hover:shadow-card-hover"
            >
              Schedule Service
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-neutral-200 pt-4">
            <Link href="/services" className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition">
              Services
            </Link>
            <Link href="/service-area" className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition">
              Service Area
            </Link>
            <Link href="/financing" className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition">
              Financing
            </Link>
            <Link href="/contact" className="block text-neutral-700 hover:text-primary-600 font-medium py-2 transition">
              Contact
            </Link>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="block bg-accent-orange hover:bg-accent-red text-white px-4 py-2 rounded-lg font-semibold text-center transition"
            >
              Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
