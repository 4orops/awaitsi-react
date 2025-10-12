import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold text-blue-900 font-montserrat">
              AWAITSI
            </div>
          </div>
          
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-900 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 transition">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 transition">Contact</a>
          </div>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-500 text-white rounded-lg hover:shadow-lg transition">
            Get a Quote
          </button>

          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-blue-900">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-900">About</a>
            <a href="#services" className="block text-gray-700 hover:text-blue-900">Services</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-900">Contact</a>
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-900 to-cyan-500 text-white rounded-lg">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;