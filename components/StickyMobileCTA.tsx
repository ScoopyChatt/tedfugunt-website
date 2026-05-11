'use client'

import { COMPANY_INFO } from '@/lib/siteData'
import { Phone, Clock } from 'lucide-react'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-white border-t border-neutral-200 shadow-card p-3 flex gap-2 z-40">
      <a
        href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
        className="flex-1 flex items-center justify-center gap-2 bg-accent-orange hover:bg-accent-red text-white font-semibold py-3 rounded-lg transition"
      >
        <Phone size={18} />
        <span>Call</span>
      </a>
      <button
        onClick={() => {
          const scheduleSection = document.getElementById('schedule-service')
          if (scheduleSection) {
            scheduleSection.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition"
      >
        <Clock size={18} />
        <span>Schedule</span>
      </button>
    </div>
  )
}
