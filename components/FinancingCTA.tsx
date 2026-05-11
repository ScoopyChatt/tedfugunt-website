import Link from 'next/link'
import { CreditCard, TrendingDown } from 'lucide-react'

export default function FinancingCTA() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-800 rounded-2xl p-8 sm:p-12 text-white overflow-hidden relative">
          {/* Background accent */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-accent-orange opacity-10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                <CreditCard className="text-accent-orange" size={28} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Financing Available</h2>
            </div>

            <p className="text-lg text-neutral-100 mb-6 max-w-2xl leading-relaxed">
              Don't let system replacement costs stop you from getting the comfort you deserve. We offer flexible financing options with approved credit to fit your budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown size={20} className="text-accent-orange" />
                  <span className="font-semibold">Monthly Payments</span>
                </div>
                <p className="text-neutral-200 text-sm">
                  Spread the cost of a new HVAC system over time with manageable monthly payments.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">✓</span>
                  <span className="font-semibold">No Hidden Fees</span>
                </div>
                <p className="text-neutral-200 text-sm">
                  Transparent pricing with no surprise charges. Know exactly what you're paying.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/financing"
                className="inline-block bg-accent-orange hover:bg-accent-red text-white font-semibold px-8 py-3 rounded-lg transition text-center"
              >
                Learn About Financing
              </Link>
              <button
                onClick={() => {
                  const form = document.getElementById('lead-form')
                  if (form) form.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-block border-2 border-white hover:bg-white hover:text-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
