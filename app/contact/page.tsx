import { COMPANY_INFO } from '@/lib/siteData'
import LeadForm from '@/components/LeadForm'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export const metadata = {
  title: 'Contact Ted Fugunt Heating & Air | HVAC Service',
  description: 'Contact us for HVAC repair, installation, and maintenance. Available 24/7 for emergencies.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-neutral-100">
            Reach out for professional HVAC service in Chattanooga
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 bg-accent-orange text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Phone</h3>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                {COMPANY_INFO.phone}
              </a>
              <p className="text-sm text-neutral-600 mt-2">24/7 Emergency Service</p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Hours</h3>
              <p className="text-sm text-neutral-700 font-semibold">Mon-Fri</p>
              <p className="text-sm text-neutral-600">{COMPANY_INFO.hours.weekday}</p>
              <p className="text-sm text-neutral-700 font-semibold mt-2">Emergency</p>
              <p className="text-sm text-neutral-600">{COMPANY_INFO.hours.emergency}</p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Address</h3>
              <p className="text-sm text-neutral-700">{COMPANY_INFO.address}</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 shadow-card text-center">
              <div className="w-14 h-14 bg-primary-600 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Email</h3>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <LeadForm />

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                What areas do you service?
              </h3>
              <p className="text-neutral-600">
                We serve Chattanooga and surrounding communities including Harrison, Hixson, Lookout Mountain, Ooltewah, Red Bank, Signal Mountain, and Soddy-Daisy.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                How quickly can you respond to an emergency?
              </h3>
              <p className="text-neutral-600">
                We offer 24/7 emergency service. Call us immediately at {COMPANY_INFO.phone} and we'll dispatch a technician as quickly as possible.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Do you offer financing?
              </h3>
              <p className="text-neutral-600">
                Yes! We offer flexible financing options with approved credit to make system replacement more affordable.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                What payment methods do you accept?
              </h3>
              <p className="text-neutral-600">
                We accept cash, check, credit cards (Visa, Mastercard, Discover, American Express), and financing with approved credit.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                Are you a Carrier dealer?
              </h3>
              <p className="text-neutral-600">
                Yes! We're an authorized Carrier dealer and install their premium heating and cooling equipment backed by manufacturer warranties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
