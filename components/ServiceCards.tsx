import Link from 'next/link'
import { CORE_SERVICES } from '@/lib/siteData'
import { ArrowRight } from 'lucide-react'

export default function ServiceCards() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Complete HVAC Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From emergency repairs to full system replacements, we handle all your heating and cooling needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-neutral-50 border border-neutral-200 rounded-xl p-6 hover:shadow-card-hover hover:border-primary-300 transition transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm group-hover:gap-3 transition"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
