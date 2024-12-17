import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">LEARN FOREX</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">How to Trade Forex</a></li>
              <li><a href="#" className="hover:text-white">Forex Quizzes</a></li>
              <li><a href="#" className="hover:text-white">Forex Forums</a></li>
              <li><a href="#" className="hover:text-white">Forex Glossary</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">FOREX TOOLS</h3>
            <ul className="space-y-2">
              <li><a href="/calendar" className="hover:text-white">Economic Calendar</a></li>
              <li><a href="/forex" className="hover:text-white">Currency Calculator</a></li>
              <li><a href="#" className="hover:text-white">Market Analysis</a></li>
              <li><a href="#" className="hover:text-white">Trading Signals</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">COMPANY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook /></a>
              <a href="#" className="hover:text-white"><Twitter /></a>
              <a href="#" className="hover:text-white"><Instagram /></a>
            </div>
            <p className="text-sm">
              Stay updated with the latest forex trading insights and market analysis.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2024 Chart Fusion. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;