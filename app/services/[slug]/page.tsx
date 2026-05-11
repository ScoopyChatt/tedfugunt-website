import { notFound } from 'next/navigation'
import { CORE_SERVICES, COMPANY_INFO } from '@/lib/siteData'
import { Check, Phone } from 'lucide-react'

export const dynamic = 'force-dynamic'

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const service = CORE_SERVICES.find((s) => s.id === params.slug)
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The service you are looking for does not exist.',
    }
  }
  return {
    title: `${service.title} | Ted Fugunt Heating & Air`,
    description: `${service.description} Expert service in Chattanooga, TN. Call ${COMPANY_INFO.phone} for fast, reliable HVAC help.`,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = CORE_SERVICES.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  const benefits = [
    'Same-day service available',
    'Expert diagnosis and honest recommendations',
    'All major brands serviced',
    '24/7 emergency service',
    'Transparent pricing, no hidden fees',
    'Licensed HVAC professionals',
    'Warranty on parts and labor',
    'Financing options available',
  ]

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-6xl">{service.icon}</div>
            <h1 className="text-4xl sm:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-neutral-100 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Professional {service.title} in Chattanooga
              </h2>

              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                When you need {service.title.toLowerCase()}, you need a team you can trust. Our experienced HVAC technicians are ready to diagnose your issue, explain your options clearly, and get your system working again fast.
              </p>

              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Whether it's an emergency breakdown or planned maintenance, we provide the professional service Chattanooga homeowners and businesses have relied on for years.
              </p>

              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Why Choose Our {service.title} Service?
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="text-accent-orange flex-shrink-0" size={20} />
                    <span className="text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                How It Works
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Contact Us</h4>
                    <p className="text-neutral-600">
                      Call us at {COMPANY_INFO.phone} or use our online form to request service. We're available 24/7 for emergencies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Schedule Service</h4>
                    <p className="text-neutral-600">
                      We'll arrange a convenient time for you. Many emergency issues can be handled same-day.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Professional Diagnosis</h4>
                    <p className="text-neutral-600">
                      Our technicians will thoroughly inspect your system and explain what's wrong and what options you have.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-primary-600 text-white font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2">Solution & Service</h4>
                    <p className="text-neutral-600">
                      We'll complete the work and make sure everything is running smoothly. You'll get a clear explanation of what was done.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              {/* CTA Box */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-4">Need {service.title}?</h3>
                <p className="text-neutral-100 mb-6">
                  We're ready to help. Available 24/7 for emergencies.
                </p>

                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="flex items-center justify-center gap-2 bg-accent-orange hover:bg-accent-red text-white font-bold w-full py-3 rounded-lg transition mb-4"
                >
                  <Phone size={20} />
                  Call Now
                </a>

                <button
                  onClick={() => {
                    const form = document.getElementById('lead-form')
                    if (form) form.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="w-full bg-white hover:bg-neutral-100 text-primary-700 font-bold py-3 rounded-lg transition"
                >
                  Schedule Service
                </button>

                <p className="text-sm text-neutral-200 mt-4 text-center">
                  Free diagnosis on service calls
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
