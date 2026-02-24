import React from 'react';
import { Bot, Brain, Cpu, MessageSquare, ArrowLeft, BarChart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const AiLayout = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                    <div className="flex items-center gap-2">
                        <Brain className="w-6 h-6 text-cyan-500" />
                        <span className="font-bold text-xl tracking-tight">Cortex<span className="text-cyan-500">AI</span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-cyan-900/20 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-900/30 rounded-full border border-cyan-500/30 text-cyan-400 mb-8"
                    >
                        <Bot className="w-4 h-4" /> <span>Next Gen Intelligence</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-blue-400">
                        Automate. Optimize. Evolve.
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                        Harnessing the power of advanced AI to streamline operations, enhance customer engagement, and drive data-backed decisions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                        {[
                            { icon: <MessageSquare />, title: "Smart Chatbots", desc: "24/7 Customer support with natural language processing." },
                            { icon: <Cpu />, title: "Process Automation", desc: "Eliminate repetitive tasks with intelligent workflows." },
                            { icon: <BarChart />, title: "Predictive Analytics", desc: "Forecast trends and optimize inventory with machine learning." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-cyan-500 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Demo Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-slate-950 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
                        <div className="grid md:grid-cols-2">
                            <div className="p-12 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-6">Interactive AI Assistant</h2>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">AI</div>
                                        <div className="bg-slate-800 p-4 rounded-r-xl rounded-bl-xl text-sm text-slate-200">
                                            Hello! I analyzed your sales data. Revenue is up 15% this month. Would you like a breakdown?
                                        </div>
                                    </div>
                                    <div className="flex gap-4 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0">Me</div>
                                        <div className="bg-cyan-900/30 border border-cyan-800 p-4 rounded-l-xl rounded-br-xl text-sm text-cyan-100">
                                            Yes, show me the top performing categories.
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0">AI</div>
                                        <div className="bg-slate-800 p-4 rounded-r-xl rounded-bl-xl text-sm text-slate-200">
                                            <div className="mb-2">Top Categories:</div>
                                            <ul className="list-disc list-inside space-y-1 text-slate-400">
                                                <li>Electronics (40%)</li>
                                                <li>Home Office (35%)</li>
                                                <li>Accessories (25%)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-12 flex items-center justify-center border-l border-slate-800">
                                <div className="text-center">
                                    <Brain className="w-32 h-32 text-cyan-500/50 mx-auto mb-6 animate-pulse" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Neural Processing</h3>
                                    <p className="text-slate-400">Real-time data ingestion and analysis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AiLayout;
