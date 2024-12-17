const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Stop wrangling data.<br />
            Start <span className="text-blue-600">driving strategy.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Centralize multi-bank data with an intuitive trading command center. 
            Gain a bird's eye view of markets, automate reporting, and make informed decisions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
              Get Started
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-md hover:border-gray-400 font-medium">
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
            <p className="text-gray-600">Get real-time market analysis and trading signals from expert analysts.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Trading Tools</h3>
            <p className="text-gray-600">Access professional trading tools and indicators for better decision making.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p className="text-gray-600">Learn forex trading from basics to advanced strategies with our courses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;