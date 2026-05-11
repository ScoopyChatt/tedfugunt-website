export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-2">Ted Fugunt Heating & Air</h1>
          <p className="text-xl">Professional HVAC Service in Chattanooga</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency HVAC Service</h2>
          <p className="text-gray-700 mb-4">
            When your heating or cooling system fails, you need fast, reliable help. Call us anytime for emergency repair service.
          </p>
          <a href="tel:4238943723" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
            📞 Call Now: (423) 894-3723
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">AC Repair</h3>
              <p className="text-gray-700">Fast air conditioning repair service when you need it most.</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Heating Repair</h3>
              <p className="text-gray-700">Emergency heat repair to keep your home warm.</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">System Installation</h3>
              <p className="text-gray-700">Professional HVAC installation with financing available.</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Maintenance Plans</h3>
              <p className="text-gray-700">Regular tune-ups to keep your system running smoothly.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Get HVAC Help Today</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Name</label>
              <input type="text" placeholder="Your name" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Phone</label>
              <input type="tel" placeholder="(423) 555-1234" className="w-full border rounded px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Email</label>
              <input type="email" placeholder="your@email.com" className="w-full border rounded px-4 py-2" />
            </div>
            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg">
              Get HVAC Help
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-2">Ted Fugunt Heating & Air</p>
          <p className="text-gray-400">1105 Mackey Ave, Chattanooga, TN 37421</p>
          <p className="text-gray-400">24/7 Emergency Service: (423) 894-3723</p>
        </div>
      </footer>
    </div>
  )
}
