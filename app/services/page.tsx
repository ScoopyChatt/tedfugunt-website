import Link from 'next/link'
import { CORE_SERVICES } from '@/lib/siteData'
import { ArrowRight } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'HVAC Services | Ted Fugunt Heating & Air',
  description: 'Complete HVAC services including emergency repair, installation, replacement, maintenance, and indoor air quality solutions.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-neutral-100 max-w-2xl mx-auto">
            Complete HVAC solutions for your home or business in Chattanooga
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition">
                  {service.title}
                </h2>
                <p className="text-neutral-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-primary-600 group-hover:text-primary-700 font-semibold group-hover:gap-3 transition">
                  Learn More
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Additional Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Commercial HVAC</h3>
              <p className="text-neutral-600">
                Full commercial HVAC services for businesses, including design, installation, maintenance, and emergency repair. We handle systems of all sizes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Sheet Metal Fabrication</h3>
              <p className="text-neutral-600">
                Custom sheet metal work for HVAC systems, including ductwork design and fabrication to meet your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Extended Warranties</h3>
              <p className="text-neutral-600">
                Protect your HVAC investment with extended warranty coverage. Peace of mind for years to come.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Service Agreements</h3>
              <p className="text-neutral-600">
                Maintenance plans designed to keep your system running efficiently and help you avoid costly emergency repairs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
