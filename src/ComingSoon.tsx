import React, { useState, useEffect } from 'react';
import { Mail, Phone, Sparkles, Heart, Code, Smartphone, Database } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const launchDate = new Date('2026-03-02T00:00:00'); // March 2, 2026

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const floatingIcons = [
    { Icon: Code, delay: '0s', duration: '20s' },
    { Icon: Smartphone, delay: '5s', duration: '25s' },
    { Icon: Database, delay: '10s', duration: '22s' },
    { Icon: Sparkles, delay: '3s', duration: '18s' }
  ];

  const floatingLogos = Array.from({ length: 24 }).map((_, i) => {
    const size = Math.random() * 8 + 4; // size between 4rem and 12rem
    return {
      src: '/Artboard1.png',
      alt: 'Awaitsi Logo',
      className: `absolute animate-float`,
      style: {
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        width: `${size}rem`,
        height: `${size}rem`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 20 + 20}s`,
        opacity: Math.random() * 0.3 + 0.2, // opacity between 0.2 and 0.5
        zIndex: 5,
      },
    };
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, idx) => (
          <div
            key={idx}
            className="absolute animate-float opacity-10"
            style={{
              left: `${15 + idx * 20}%`,
              top: `${10 + idx * 15}%`,
              animationDelay: item.delay,
              animationDuration: item.duration
            }}
          >
            <item.Icon className="w-24 h-24 text-white" />
          </div>
        ))}
        {floatingLogos.map((logo, idx) => (
          <img
            key={idx}
            src={logo.src}
            alt={logo.alt}
            className={logo.className}
            style={logo.style}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
         <div className="mb-8 animate-fade-in relative z-20 w-full flex justify-center"> {/* Added relative z-20 for positioning context and flex for centering */}
            <img
              src="/Artboard1.png"
              alt="Awaitsi Logo"
              className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl animate-pulse-slow" 
            />  {/* Increased size and added pulse animation */}
        </div>

        {/* Heart Icon with Pulse */}
        <div className="mb-6 animate-pulse-slow">
          <div className="w-20 h-20 bg-lime-400 rounded-full flex items-center justify-center shadow-2xl">
            <Heart className="w-10 h-10 text-blue-900" fill="currentColor" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Something Amazing
          </h1>
          <h2 
            className="text-3xl md:text-5xl font-bold text-lime-400 mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Is Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-cyan-100 max-w-2xl mx-auto leading-relaxed">
            We're building technology with heart, for generations to come.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl"
                >
                  <div 
                    className="text-4xl md:text-6xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm text-cyan-200 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Preview */}
        <div 
          className="mb-12 max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { Icon: Code, label: 'Web Dev' },
              { Icon: Smartphone, label: 'Mobile Apps' },
              { Icon: Database, label: 'CRM' },
              { Icon: Sparkles, label: 'AI Solutions' }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition duration-300"
              >
                <service.Icon className="w-8 h-8 text-lime-400 mx-auto mb-2" />
                <div className="text-white text-sm font-semibold">{service.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Email Notification Form */}
        <div 
          className="mb-12 max-w-md w-full animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-white text-xl font-bold mb-4 text-center">
              Be the First to Know
            </h3>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-lime-400 text-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-300 text-blue-900 font-bold py-3 rounded-lg transition duration-300 shadow-lg"
                >
                  Notify Me at Launch
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="text-lime-400 text-lg font-semibold mb-2">
                  ✓ Thank You!
                </div>
                <div className="text-white text-sm">
                  We'll notify you when we launch.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div 
          className="text-center animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <p className="text-cyan-100 mb-4">Need to reach us now?</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@awaitsi.co.za"
              className="flex items-center gap-2 text-white hover:text-lime-400 transition"
            >
              <Mail className="w-5 h-5" />
              <span>info@awaitsi.co.za</span>
            </a>
            <a 
              href="tel:+27838672031"
              className="flex items-center gap-2 text-white hover:text-lime-400 transition"
            >
              <Phone className="w-5 h-5" />
              <span>+27 83 867 2031</span>
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div 
          className="mt-12 text-center animate-fade-in-up"
          style={{ animationDelay: '1s' }}
        >
          <p className="text-cyan-200 text-sm">
            Family-Owned • South African • Built with ❤️
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
          animation-fill-mode: both;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;