import { TRUST_SIGNALS } from '@/lib/siteData'

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-primary-900 to-primary-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {TRUST_SIGNALS.map((signal, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-2">{signal.icon}</div>
              <p className="text-sm font-semibold">{signal.label}</p>
              <p className="text-xs text-neutral-300 mt-1">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
