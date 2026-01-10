import React from 'react';
import { Mail, Phone, Sparkles, Heart, Code, Smartphone, Database, Laptop, Server, Cloud, GitMerge, Users, TrendingUp } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface ComingSoonPageProps {
  email: string;
  setEmail: (email: string) => void;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  timeLeft: TimeLeft;
  containerRef: React.RefObject<HTMLDivElement | null>;
  isSubmitting: boolean;
  error: string | null;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  email,
  setEmail,
  submitted,
  handleSubmit,
  timeLeft,
  containerRef,
  isSubmitting,
  error,
}) => {
  const [floatingIcons] = React.useState(() => [
    { Icon: Code },
    { Icon: Smartphone },
    { Icon: Database },
    { Icon: Sparkles },
    { Icon: Laptop },
    { Icon: Server },
    { Icon: Cloud },
    { Icon: GitMerge },
    { Icon: Users },
    { Icon: TrendingUp }
  ].map(item => ({
    ...item,
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 90}%`,
  })));

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 relative overflow-hidden animate-background-pan">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, idx) => (
          <div
            key={idx}
            className="absolute opacity-10"
            style={{
              left: item.left,
              top: item.top,
            }}
          >
            <item.Icon className="w-24 h-24 text-white" />
          </div>
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
            className="text-5xl md:text-7xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
          >
            Something Amazing
          </h1>
          <h2
            className="text-3xl md:text-5xl font-bold text-lime-400 mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
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
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 shadow-2xl transition-all duration-300 hover:bg-white/20 hover:shadow-lime-400/30"
                >
                  <div
                    className="text-4xl md:text-6xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
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
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center mx-auto mb-4 border border-white/30">
                  <service.Icon className="w-8 h-8 text-lime-400 mx-auto" />
                </div>
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
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-lime-400 to-awaitsi-green text-blue-900 font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Notify Me at Launch'}
                </button>
                {error && (
                  <p className="text-red-400 text-sm text-center mt-2">{error}</p>
                )}
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
              <span>+27 65 544 3979</span>
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
        @keyframes background-pan {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
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

        .animate-background-pan {
          background-size: 400% 400%;
          animation: background-pan 15s ease-in-out infinite;
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

export default ComingSoonPage;