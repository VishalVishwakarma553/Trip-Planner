const Test = () => {
  
    return (
      <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('/about_banner.avif')" }}>
        <div className="absolute inset-0  flex flex-col items-center justify-center text-black">
          <h1 className="text-4xl font-bold"></h1>
          <p className="text-lg mt-2 max-w-2xl text-center">
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 mt-3">
          We are a team of travel enthusiasts and tech innovators who believe that planning a trip should be easy and exciting.
          Our AI-powered travel guide provides **personalized destination recommendations**, **budget-friendly itineraries**, and **real-time travel insights**.
        </p>
      </div>

      {/* How It Works */}
      <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg mt-6">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">1. Enter Your Preferences</h3>
            <p className="text-gray-600 mt-2">Tell us where you want to go, your budget, and your travel interests.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-600">2. AI-Powered Recommendations</h3>
            <p className="text-gray-600 mt-2">Our AI analyzes millions of data points to suggest the best destinations, transport, and hotels.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-red-600">3. Plan & Enjoy Your Trip</h3>
            <p className="text-gray-600 mt-2">Get a customized travel plan with real-time costs and weather updates.</p>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4 ">
          <details className="bg-gray-100 p-4 transition rounded-lg cursor-pointer">
            <summary className="font-semibold text-lg">How does AI generate travel recommendations?</summary>
            <p className="text-gray-600 mt-2">
              Our AI analyzes historical travel data, real-time pricing, and user preferences to provide personalized travel suggestions.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-lg">Can I customize my itinerary?</summary>
            <p className="text-gray-600 mt-2">
              Yes! You can modify the itinerary to match your interests and budget.
            </p>
          </details>
          <details className="bg-gray-100 p-4 rounded-lg cursor-pointer">
            <summary className="font-semibold text-lg">Is this service free to use?</summary>
            <p className="text-gray-600 mt-2">
              Yes, our basic recommendations are free, but we also offer premium personalized plans.
            </p>
          </details>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800">Start Your Journey Today!</h2>
        <p className="text-gray-600 mt-2">Join thousands of travelers who use our AI-powered travel guide.</p>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
          Join Us Now
        </button>
      </div>
    </div>
    )
}

export default Test
