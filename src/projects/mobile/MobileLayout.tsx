import React from 'react';
import { Smartphone, Tablet, ArrowLeft, Wifi, Battery, Signal } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MobileLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans flex flex-col items-center">
            {/* Navbar */}
            <nav className="w-full bg-white shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                    <span className="font-bold text-xl text-orange-600">Mobile<span className="text-gray-900">First</span></span>
                </div>
            </nav>

            {/* Content */}
            <div className="w-full max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Text */}
                <div className="order-2 lg:order-1">
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Native Performance.<br />
                        <span className="text-orange-500">Universal Reach.</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        We build high-performance iOS and Android applications perfectly tailored for the diverse African mobile landscape. Offline-first architectures, data-efficient protocols, and stunning UI.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-gray-800 transition">
                            <Smartphone className="w-5 h-5" /> View iOS Demo
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-bold flex items-center gap-2 hover:border-orange-500 hover:text-orange-600 transition">
                            <Tablet className="w-5 h-5" /> View Android Demo
                        </button>
                    </div>
                </div>

                {/* Right Phone Mockups */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                    <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl transform scale-90"></div>

                    {/* Phone 1 */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="w-72 h-[550px] bg-black rounded-[3rem] border-8 border-gray-900 overflow-hidden shadow-2xl relative z-10 mr-[-60px]"
                    >
                        {/* Status Bar */}
                        <div className="h-8 bg-black w-full flex justify-between items-center px-6">
                            <span className="text-xs text-white">9:41</span>
                            <div className="flex gap-1">
                                <Signal className="w-3 h-3 text-white" />
                                <Wifi className="w-3 h-3 text-white" />
                                <Battery className="w-3 h-3 text-white" />
                            </div>
                        </div>
                        {/* App Content */}
                        <div className="bg-white h-full p-4 overflow-hidden">
                            <div className="h-40 bg-orange-500 rounded-2xl mb-4 p-4 text-white">
                                <div className="w-10 h-10 bg-white/20 rounded-full mb-2"></div>
                                <div className="h-4 w-24 bg-white/20 rounded mb-2"></div>
                                <div className="h-8 w-32 bg-white/40 rounded"></div>
                            </div>
                            <div className="space-y-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                                        <div className="flex-1">
                                            <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone 2 (Offset) */}
                    <motion.div
                        initial={{ y: 60, opacity: 0 }}
                        animate={{ y: 40, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-72 h-[550px] bg-white rounded-[3rem] border-8 border-gray-200 overflow-hidden shadow-xl relative z-0 hidden md:block"
                    >
                        {/* Status Bar */}
                        <div className="h-8 bg-white w-full flex justify-between items-center px-6">
                            <span className="text-xs text-black">12:30</span>
                            <div className="flex gap-1">
                                <Signal className="w-3 h-3 text-black" />
                                <Battery className="w-3 h-3 text-black" />
                            </div>
                        </div>
                        {/* App Content */}
                        <div className="bg-gray-50 h-full p-6">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">My Wallet</h2>
                                <div className="text-3xl font-black text-gray-900">$12,450</div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-blue-600 text-white h-24 rounded-2xl flex items-center justify-center font-bold shadow-lg shadow-blue-200">Send</div>
                                <div className="bg-white h-24 rounded-2xl flex items-center justify-center font-bold shadow-sm">Request</div>
                            </div>
                            <div className="w-full bg-gray-200 h-64 rounded-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default MobileLayout;
