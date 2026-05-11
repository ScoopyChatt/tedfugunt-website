import { SERVICE_AREAS } from '@/lib/siteData'
import { MapPin, Check } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Service Area | Ted Fugunt Heating & Air',
  description: 'We proudly serve Chattanooga, TN and surrounding communities. Find out if we service your area.',
}

export default function ServiceAreaPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <MapPin size={40} />
            Our Service Area
          </h1>
          <p className="text-xl text-neutral-100">
            Proud to serve Chattanooga and surrounding communities
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
            We proudly serve Chattanooga, Tennessee and the surrounding communities. Whether you're in the city, suburbs, or outlying areas, we're here to provide fast, professional HVAC service when you need it.
          </p>

          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Areas We Service
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {SERVICE_AREAS.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 hover:bg-primary-50 hover:border-primary-300 transition"
              >
                <Check className="text-accent-orange flex-shrink-0" size={20} />
                <span className="text-neutral-900 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="bg-neutral-100 rounded-xl h-64 sm:h-96 mb-12 flex items-center justify-center border-2 border-neutral-300">
            <div className="text-center">
              <MapPin className="text-neutral-400 mx-auto mb-4" size={48} />
              <p className="text-neutral-600 font-medium">
                {/* TODO: Add Google Maps embed or interactive map component */}
                Service area map coming soon
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Not Sure If We Service Your Area?
          </h2>

          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            If you're not certain whether your location is within our service area, please contact us. We may be able to accommodate requests from areas slightly outside our usual service radius.
          </p>

          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Contact Us to Confirm Service
            </h3>
            <p className="text-neutral-700 mb-6">
              Don't worry if you're unsure. Give us a call or submit a form to confirm we service your area.
            </p>
            <button
              onClick={() => {
                const form = document.getElementById('lead-form')
                if (form) form.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Check Your Address
            </button>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mt-16 mb-8">
            Why Service Area Matters
          </h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Local Expertise</h4>
                <p className="text-neutral-600">
                  By limiting our service area, we can provide faster response times and more personalized service to each customer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Fast Emergency Response</h4>
                <p className="text-neutral-600">
                  We can reach emergency calls within our service area quickly, often within 30-60 minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Community Focus</h4>
                <p className="text-neutral-600">
                  We're deeply invested in the Chattanooga community and the surrounding areas we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
