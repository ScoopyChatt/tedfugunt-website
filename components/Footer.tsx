import Link from 'next/link'
import { COMPANY_INFO, SERVICE_AREAS } from '@/lib/siteData'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-orange rounded-lg flex items-center justify-center text-white text-sm font-bold">
                TF
              </div>
              <span className="font-bold text-white">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              Professional HVAC repair, replacement, and maintenance for Chattanooga and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ac-repair" className="hover:text-accent-orange transition">
                  AC Repair
                </Link>
              </li>
              <li>
                <Link href="/services/heating-repair" className="hover:text-accent-orange transition">
                  Heating Repair
                </Link>
              </li>
              <li>
                <Link href="/services/installation" className="hover:text-accent-orange transition">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-accent-orange transition">
                  Maintenance Plans
                </Link>
              </li>
              <li>
                <Link href="/services/indoor-air-quality" className="hover:text-accent-orange transition">
                  Air Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/service-area" className="hover:text-accent-orange transition">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/financing" className="hover:text-accent-orange transition">
                  Financing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent-orange transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-orange transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent-orange flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{COMPANY_INFO.phone}</p>
                  <p className="text-xs text-neutral-400">24/7 Emergency</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent-orange flex-shrink-0 mt-1" />
                <p className="text-white">{COMPANY_INFO.address}</p>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-accent-orange flex-shrink-0 mt-1" />
                <div>
                  <p>Mon-Fri: {COMPANY_INFO.hours.weekday}</p>
                  <p>{COMPANY_INFO.hours.emergency}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Area Footer */}
        <div className="bg-neutral-800 rounded-lg p-6 mb-8">
          <p className="text-sm text-neutral-400 mb-3">
            <strong>Service Area:</strong> We proudly serve Chattanooga and surrounding communities including:
          </p>
          <p className="text-sm text-neutral-300">
            {SERVICE_AREAS.slice(0, -1).join(', ')}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
            <p>&copy; {new Date().getFullYear()} Ted Fugunt Heating & Air. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent-orange transition">Privacy</a>
              <a href="#" className="hover:text-accent-orange transition">Terms</a>
              <a href="#" className="hover:text-accent-orange transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
