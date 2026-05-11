import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import TrustBar from '@/components/TrustBar'
import LeadForm from '@/components/LeadForm'
import Testimonials from '@/components/Testimonials'
import FinancingCTA from '@/components/FinancingCTA'
import MaintenanceCTA from '@/components/MaintenanceCTA'
import ServiceAreaSection from '@/components/ServiceAreaSection'
import { COMPANY_INFO } from '@/lib/siteData'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trust Bar */}
      <TrustBar />

      {/* Core Services */}
      <ServiceCards />

      {/* Lead Form */}
      <LeadForm />

      {/* Why Choose Ted Fugunt */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Ted Fugunt?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              When you need HVAC service in Chattanooga, here's what sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Fast, Reliable Service
                  </h3>
                  <p className="text-neutral-600">
                    We respond quickly to both emergency and routine service requests. Same-day appointments often available.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Honest Recommendations
                  </h3>
                  <p className="text-neutral-600">
                    We diagnose problems clearly and recommend solutions that truly fit your needs and budget — never overselling.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    24/7 Emergency Service
                  </h3>
                  <p className="text-neutral-600">
                    Your comfort doesn't stop at 5pm. We're available anytime for heating and cooling emergencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Licensed HVAC Professionals
                  </h3>
                  <p className="text-neutral-600">
                    Our technicians are trained, experienced, and certified to handle all brands and types of HVAC equipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Carrier Dealer
                  </h3>
                  <p className="text-neutral-600">
                    We install and service premium Carrier equipment, backed by manufacturer warranties and our service guarantee.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Transparent Pricing
                  </h3>
                  <p className="text-neutral-600">
                    No hidden fees. You know exactly what you're paying before we start work. Financing available.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <MaintenanceCTA />

      {/* Financing */}
      <FinancingCTA />

      {/* Testimonials */}
      <Testimonials />

      {/* Service Area */}
      <ServiceAreaSection />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Ready for Professional HVAC Service?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Whether you need emergency repair, a new system, or regular maintenance, we're here to help. Contact us today for fast, reliable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                const form = document.getElementById('lead-form')
                if (form) form.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-accent-orange hover:bg-accent-red text-white font-bold py-4 px-8 rounded-lg transition text-lg"
            >
              Schedule Service Now
            </button>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="border-2 border-white hover:bg-white hover:text-primary-700 text-white font-bold py-4 px-8 rounded-lg transition text-lg"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
