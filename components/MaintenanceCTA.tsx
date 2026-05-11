import Link from 'next/link'
import { Calendar, Wrench, DollarSign } from 'lucide-react'

export default function MaintenanceCTA() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Preventive Maintenance Plans
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Keep your system running smoothly, avoid costly breakdowns, and save money on energy bills with regular maintenance
          </p>
        </div>

        {/* Three Column Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Regular Tune-Ups</h3>
            <p className="text-neutral-600">
              Scheduled maintenance visits keep your HVAC system running at peak efficiency and help catch problems before they become expensive.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 bg-accent-orange bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Wrench className="text-accent-orange" size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Emergency Priority</h3>
            <p className="text-neutral-600">
              Service agreement members get priority scheduling during emergencies and extended hours to ensure your comfort is restored quickly.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">Save on Energy</h3>
            <p className="text-neutral-600">
              A well-maintained HVAC system runs more efficiently, using less energy and keeping your utility bills lower all year long.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services/maintenance"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition shadow-card hover:shadow-card-hover"
          >
            See Maintenance Plan Options
          </Link>
        </div>
      </div>
    </section>
  )
}
