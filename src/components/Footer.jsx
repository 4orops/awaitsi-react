import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-2xl font-montserrat">
                AWAITSI
              </span>
            </div>
            <p className="text-gray-400">
              Building technology with heart, for generations to come.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-montserrat">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>CRM Solutions</li>
              <li>AI Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-montserrat">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Our Values</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 font-montserrat">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>South Africa</li>
              <li>info@awaitsi.co.za</li>
              <li>+27 83 867 2031</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Awaitsi (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;