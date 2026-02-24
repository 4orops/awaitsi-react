import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Target, Lightbulb, Users, Shield } from 'lucide-react';

interface LearnMoreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LearnMoreModal: React.FC<LearnMoreModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-900 to-cyan-600 p-6 text-white relative">
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            <h2 className="text-3xl font-bold font-montserrat">About Awaitsi</h2>
                            <p className="text-cyan-100 mt-2">Our Vision, Mission & Values</p>
                        </div>

                        {/* Content */}
                        <div className="p-8 max-h-[70vh] overflow-y-auto">
                            <div className="space-y-8">

                                <section className="flex gap-4">
                                    <div className="bg-lime-100 p-3 rounded-lg h-fit">
                                        <Target className="w-6 h-6 text-lime-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            To democratize technology for South African businesses, providing enterprise-grade
                                            digital solutions that are accessible, affordable, and scalable. We believe in
                                            empowering local entrepreneurs to compete on a global stage.
                                        </p>
                                    </div>
                                </section>

                                <section className="flex gap-4">
                                    <div className="bg-cyan-100 p-3 rounded-lg h-fit">
                                        <Lightbulb className="w-6 h-6 text-cyan-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Why Choose Us?</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            We don't just build software; we build relationships. As a family-oriented business,
                                            we treat every client's project with the same care and dedication as our own.
                                            Our "Code with Heart" philosophy means we prioritize user experience and
                                            long-term reliability over quick wins.
                                        </p>
                                    </div>
                                </section>

                                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Users className="w-5 h-5 text-blue-600" />
                                            <h4 className="font-bold text-gray-900">Community Focused</h4>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Deeply rooted in supporting local economic growth.
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Shield className="w-5 h-5 text-blue-600" />
                                            <h4 className="font-bold text-gray-900">Trusted Partner</h4>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Transparent communication and reliable ongoing support.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8 pt-6 border-t flex justify-end">
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LearnMoreModal;
