const Calendar = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Economic Calendar</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
              <div className="flex-1">
                <p className="font-semibold">USD - Federal Reserve Rate Decision</p>
                <p className="text-sm text-gray-600">High Impact</p>
              </div>
              <div className="text-right">
                <p className="font-medium">14:00 GMT</p>
                <p className="text-sm text-gray-600">March 20, 2024</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
              <div className="flex-1">
                <p className="font-semibold">EUR - ECB Monetary Policy Statement</p>
                <p className="text-sm text-gray-600">High Impact</p>
              </div>
              <div className="text-right">
                <p className="font-medium">12:45 GMT</p>
                <p className="text-sm text-gray-600">March 21, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;