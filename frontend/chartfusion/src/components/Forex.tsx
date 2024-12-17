const Forex = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Forex Market</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">EUR/USD</span>
              <span className="text-green-600">+0.15%</span>
            </div>
            <div className="text-2xl font-bold mb-2">1.0876</div>
            <div className="text-sm text-gray-600">
              <span className="mr-4">High: 1.0892</span>
              <span>Low: 1.0854</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">GBP/USD</span>
              <span className="text-red-600">-0.08%</span>
            </div>
            <div className="text-2xl font-bold mb-2">1.2734</div>
            <div className="text-sm text-gray-600">
              <span className="mr-4">High: 1.2756</span>
              <span>Low: 1.2712</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">USD/JPY</span>
              <span className="text-green-600">+0.23%</span>
            </div>
            <div className="text-2xl font-bold mb-2">148.92</div>
            <div className="text-sm text-gray-600">
              <span className="mr-4">High: 149.15</span>
              <span>Low: 148.64</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forex;