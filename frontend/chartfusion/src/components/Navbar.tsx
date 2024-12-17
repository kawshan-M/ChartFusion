import { Calendar, Home, DollarSign, LogIn } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center">
              <DollarSign className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">Chart Fusion</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Home className="h-4 w-4 mr-1" />
                HOME
              </Link>
              
              <Link
                to="/calendar"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/calendar') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Calendar className="h-4 w-4 mr-1" />
                CALENDAR
              </Link>
              
              <Link
                to="/forex"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/forex') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <DollarSign className="h-4 w-4 mr-1" />
                FOREX
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            <Link
              to="/login"
              className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              <LogIn className="h-4 w-4 mr-1" />
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;