import { CreditCard, DollarSign, TrendingDown } from 'lucide-react'

export const metadata = {
  title: 'Flexible HVAC Financing | Ted Fugunt Heating & Air',
  description: 'Make your HVAC system replacement affordable with our flexible financing options. Approved credit available.',
}

export default function FinancingPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Flexible Financing Options</h1>
          <p className="text-xl text-neutral-100">
            Make your HVAC system replacement affordable
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
            A new HVAC system is an investment in your home's comfort and efficiency. We understand that the upfront cost can be a concern, which is why we offer flexible financing options with approved credit to make your purchase more manageable.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Multiple Payment Plans
              </h3>
              <p className="text-neutral-600">
                Choose the payment plan that works best for your budget. Whether you prefer shorter or longer terms, we have options.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Competitive Rates
              </h3>
              <p className="text-neutral-600">
                We work with trusted financing partners to bring you competitive interest rates and terms.
              </p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                Quick Approval
              </h3>
              <p className="text-neutral-600">
                Most financing applications are approved within minutes so you can move forward with your system replacement.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            How Financing Works
          </h2>

          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Get Your Quote</h4>
                <p className="text-neutral-600">
                  We'll assess your HVAC needs and provide you with an upfront quote for your new system.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Apply for Financing</h4>
                <p className="text-neutral-600">
                  Submit a simple application. We'll work with you to find the best financing option for your situation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Receive Approval</h4>
                <p className="text-neutral-600">
                  Quick approval process gets you the funding you need to move forward with installation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-accent-orange text-white font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 mb-2">Professional Installation</h4>
                <p className="text-neutral-600">
                  We install your new system and you begin making affordable monthly payments.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Explore Financing?
            </h3>
            <p className="text-neutral-700 mb-6">
              Let's talk about your HVAC needs and find a financing option that works for you.
            </p>
            <button
              onClick={() => {
                const form = document.getElementById('lead-form')
                if (form) form.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Get a Quote
            </button>
          </div>

          <div className="text-center text-neutral-600">
            <p className="mb-4">
              Financing provided by approved lenders. Subject to credit approval and verification.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
