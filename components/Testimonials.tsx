import { TESTIMONIALS } from '@/lib/siteData'
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by Chattanooga Homeowners
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            See why your neighbors choose Ted Fugunt for all their HVAC needs
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent-orange text-accent-orange" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>

              {/* Name */}
              <p className="font-semibold text-neutral-900">— {testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Join hundreds of satisfied customers in the Chattanooga area
          </p>
          <button
            onClick={() => {
              const form = document.getElementById('lead-form')
              if (form) form.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}
