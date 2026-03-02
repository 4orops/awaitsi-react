import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-2xl font-montserrat">A</span>
              </div>
              <span className="font-bold text-2xl font-montserrat tracking-wide">
                AWAITSI
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building technology with heart, for generations to come. Empowering South Africa through innovation.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-lime-400 hover:text-gray-900 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 font-montserrat text-lg text-white">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-lime-400 transition cursor-pointer">Web Development</li>
              <li className="hover:text-lime-400 transition cursor-pointer">Mobile Applications</li>
              <li className="hover:text-lime-400 transition cursor-pointer">CRM Solutions</li>
              <li className="hover:text-lime-400 transition cursor-pointer">AI Integration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 font-montserrat text-lg text-white">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-lime-400 transition cursor-pointer">About Us</li>
              <li className="hover:text-lime-400 transition cursor-pointer">Our Values</li>
              <li className="hover:text-lime-400 transition cursor-pointer">Portfolio</li>
              <li className="hover:text-lime-400 transition cursor-pointer">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 font-montserrat text-lg text-white">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <span>South Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <a href="mailto:info@awaitsi.co.za" className="hover:text-white transition">info@awaitsi.co.za</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-lime-400 flex-shrink-0" />
                <a href="tel:+27655443979" className="hover:text-white transition">+27 65 544 3979</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2025 Awaitsi (Pty) Ltd. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
