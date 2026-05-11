import { Star, Phone, Clock, Shield, Zap, CheckCircle, DollarSign } from 'lucide-react'
import ChatbotWidget from '@/components/ChatbotWidget'

export const metadata = {
  title: 'HVAC Repair & Installation in Chattanooga | Same-Day Service',
  description: 'Fast, reliable HVAC repair & installation in Chattanooga. Trusted by 2,500+ homeowners. 4.9★ Google Rating. 24/7 Emergency Service. Free Estimates.',
}

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HVACBusiness',
            name: '[COMPANY NAME]',
            telephone: '(423) 555-HVAC',
            email: 'info@example.com',
            url: 'https://example.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '[ADDRESS]',
              addressLocality: 'Chattanooga',
              addressRegion: 'TN',
              postalCode: '37402',
              addressCountry: 'US',
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '07:00',
                closes: '19:00',
              },
            ],
            areaServed: [
              { '@type': 'City', name: 'Chattanooga' },
              { '@type': 'City', name: 'Hixson' },
              { '@type': 'City', name: 'Collegedale' },
            ],
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '847',
            },
          }),
        }}
      />

      {/* Sticky Mobile Header with Phone */}
      <header className="sticky top-0 z-30 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 md:hidden">
        <div className="flex items-center justify-between gap-4">
          <img src="/images/logo.png" alt="[COMPANY NAME]" className="h-10 w-auto" />
          <a
            href="tel:+14235551111"
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-bold text-lg transition whitespace-nowrap"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden md:block bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/images/logo.png" alt="[COMPANY NAME]" className="h-12 w-auto" />
          <nav className="flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </a>
            <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition">
              Why Us
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition">
              Reviews
            </a>
          </nav>
          <a
            href="tel:+14235551111"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-bold transition"
          >
            (423) 555-HVAC
          </a>
        </div>
      </header>

      {/* SECTION 1: HERO */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1200 600%27%3E%3Crect fill=%27%231B3A5C%27 width=%271200%27 height=%27600%27/%3E%3C/svg%3E")',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Fast, Reliable AC & Furnace Repair in Chattanooga
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-blue-100">
              Because Your Family's Comfort Can't Wait
            </p>
            <p className="text-lg text-blue-100 mb-8">
              Trusted by 2,500+ Chattanooga Homeowners | 4.9★ Google Rating | Same-Day Service Available
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+14235551111"
                className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 active:scale-95"
              >
                Call Now — Free Estimate
              </a>
              <button className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 active:scale-95">
                Schedule Online
              </button>
            </div>

            <p className="text-sm text-blue-200">
              ⏰ Available 24/7 for Emergency Service
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST STRIP */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-center text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-lg font-bold text-gray-800">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                4.9★
              </div>
              <p className="text-sm text-gray-600">847 Reviews</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">NATE</p>
              <p className="text-xs text-gray-600">Certified</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">BBB</p>
              <p className="text-xs text-gray-600">A+ Accredited</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">Licensed</p>
              <p className="text-xs text-gray-600">& Insured</p>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">24/7</p>
              <p className="text-xs text-gray-600">Emergency Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES GRID */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Complete HVAC solutions for your home, whatever you need
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AC Repair', emoji: '❄️' },
              { title: 'AC Installation', emoji: '❄️' },
              { title: 'Furnace Repair', emoji: '🔥' },
              { title: 'Furnace Installation', emoji: '🔥' },
              { title: 'Heat Pump Services', emoji: '🔄' },
              { title: 'Duct Cleaning', emoji: '💨' },
              { title: 'Indoor Air Quality', emoji: '💚' },
              { title: 'Maintenance Plans', emoji: '🛡️' },
            ].map((service, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-blue-300 transition text-center group"
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                  {service.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section id="why-us" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: 'Same-Day Service',
                description: 'Don\'t wait days for repairs. We respond fast.',
              },
              {
                icon: DollarSign,
                title: 'Upfront Pricing',
                description: 'Never worry about surprise charges. You know the cost upfront.',
              },
              {
                icon: Shield,
                title: 'Background-Checked Technicians',
                description: 'Highly trained professionals you can trust in your home.',
              },
              {
                icon: CheckCircle,
                title: '100% Satisfaction Guarantee',
                description: 'If you\'re not happy, we make it right. No exceptions.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <item.icon size={32} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOCIAL PROOF / REVIEWS */}
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Trusted by Thousands of Homeowners
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Real reviews from real customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: 'Sarah Mitchell',
                rating: 5,
                text: 'Emergency AC repair on a Saturday afternoon. They came out in 45 minutes and had it fixed in an hour. Couldn\'t ask for better service!',
                date: '2 weeks ago',
              },
              {
                name: 'James Rodriguez',
                rating: 5,
                text: 'Got 2 other quotes for a furnace replacement. These guys were professional, knowledgeable, and fair priced. Highly recommend!',
                date: '1 month ago',
              },
              {
                name: 'Jennifer Lee',
                rating: 5,
                text: 'Been using their maintenance plan for 3 years now. Never had an unexpected breakdown. Best money we spend each year.',
                date: '3 weeks ago',
              },
              {
                name: 'Michael Thompson',
                rating: 5,
                text: 'The whole team was respectful and professional. They explained everything in plain language. Will definitely call them again.',
                date: '1 month ago',
              },
              {
                name: 'Amanda Garcia',
                rating: 5,
                text: 'Great communication throughout the process. No hidden fees, no surprises. Exactly what they quoted. Very satisfied!',
                date: '2 months ago',
              },
              {
                name: 'David Chen',
                rating: 5,
                text: 'Emergency call at 10 PM. They came out, diagnosed the problem, and got us cooling again. Worth every penny.',
                date: '1 month ago',
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500 mb-3">{review.date}</p>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold transition"
            >
              Read All 847 Reviews
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICE AREA MAP */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Service Area</h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Proudly serving Greater Chattanooga and surrounding areas
          </p>

          <div className="bg-gray-200 rounded-lg h-80 mb-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 text-lg">[INTERACTIVE SERVICE AREA MAP]</p>
              <p className="text-gray-400 text-sm">Placeholder for Google Map integration</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">We Serve:</h3>
            <p className="text-lg text-gray-700 mb-2">
              Chattanooga • Hixson • Collegedale • Signal Mountain • Apison • Ooltewah • Cleveland • Dalton
            </p>
            <p className="text-gray-600">
              And surrounding cities within a 30-mile radius of Chattanooga
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: FINANCING / PRICING */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Affordable HVAC Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              { level: 'Good', price: '$89', desc: 'Standard AC/Furnace Repair' },
              {
                level: 'Better',
                price: '$189',
                desc: 'High-Efficiency AC Installation',
              },
              {
                level: 'Best',
                price: '$289',
                desc: 'Premium Heat Pump System',
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-lg text-center transition transform hover:scale-105 ${
                  idx === 1
                    ? 'bg-blue-600 text-white shadow-lg border-2 border-blue-700'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{plan.level}</h3>
                <p className={`text-4xl font-bold mb-4 ${idx === 1 ? 'text-blue-100' : ''}`}>
                  Starting at {plan.price}
                </p>
                <p className={idx === 1 ? 'text-blue-100' : 'text-gray-600'}>{plan.desc}</p>
                <p className={`text-sm mt-4 ${idx === 1 ? 'text-blue-100' : 'text-gray-500'}`}>
                  Financing available • 0% interest for qualified customers
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold transition">
              Check Your Rate — No Credit Impact
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 8: RECENT WORK / GALLERY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Recent Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="bg-gray-200 rounded-lg h-64 flex items-center justify-center group overflow-hidden"
              >
                <div className="text-center text-gray-500 group-hover:text-gray-700 transition">
                  <p className="text-sm">[PHOTO: Installation/Repair]</p>
                  <p className="text-xs">Image {idx}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: EMERGENCY CTA BANNER */}
      <section className="bg-red-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            🚨 AC Emergency? We're Available 24/7
          </h2>
          <a
            href="tel:+14235551111"
            className="inline-block bg-white text-red-500 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 active:scale-95"
          >
            Call Now: (423) 555-HVAC
          </a>
        </div>
      </section>

      {/* SECTION 10: FOOTER */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/logo.png" alt="[COMPANY NAME]" className="h-12 w-auto mb-4" />
              <p className="text-gray-400">
                Trusted HVAC repair & installation in Chattanooga since 2010.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  <a href="tel:+14235551111" className="hover:text-white transition">
                    (423) 555-HVAC
                  </a>
                </li>
                <li>
                  <a href="mailto:info@example.com" className="hover:text-white transition">
                    info@example.com
                  </a>
                </li>
                <li>Mon-Fri: 7 AM - 7 PM</li>
                <li>24/7 Emergency Service</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Chattanooga</li>
                <li>Hixson</li>
                <li>Collegedale</li>
                <li>Signal Mountain</li>
                <li>+ 20 more areas</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2026 [COMPANY NAME]. Licensed, Bonded & Insured.
              </p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}
