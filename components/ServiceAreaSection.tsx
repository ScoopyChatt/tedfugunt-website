import Link from 'next/link'
import { SERVICE_AREAS } from '@/lib/siteData'
import { MapPin } from 'lucide-react'

export default function ServiceAreaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-accent-orange" size={28} />
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">
              We Serve Your Area
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Proud to serve Chattanooga, Tennessee and all surrounding communities with prompt, professional HVAC service
          </p>
        </div>

        {/* Service Area Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {SERVICE_AREAS.map((area, index) => (
            <div
              key={index}
              className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-center hover:bg-primary-50 hover:border-primary-300 transition"
            >
              <p className="text-neutral-900 font-medium text-sm">{area}</p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-neutral-100 rounded-xl h-64 sm:h-96 mb-8 flex items-center justify-center border-2 border-neutral-200">
          <div className="text-center">
            <MapPin className="text-neutral-400 mx-auto mb-4" size={48} />
            <p className="text-neutral-600">
              {/* TODO: Add Google Map or interactive map component */}
              Service area map coming soon
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-neutral-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-neutral-900 mb-3">
            Not sure if we serve your area?
          </h3>
          <p className="text-neutral-600 mb-6">
            Contact us to confirm service availability for your location
          </p>
          <button
            onClick={() => {
              const form = document.getElementById('lead-form')
              if (form) form.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-accent-orange hover:bg-accent-red text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Check Your Address
          </button>
        </div>
      </div>
    </section>
  )
}
