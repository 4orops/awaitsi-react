import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Smartphone, LayoutDashboard, Palette, HelpCircle, X, ArrowRight, Heart, CheckCircle2, Loader2, Sparkles } from 'lucide-react';

interface FormData {
    projectType: string;
    businessStage: string;
    name: string;
    email: string;
    phone: string;
    budget: string;
    description: string;
}

const initialData: FormData = {
    projectType: '',
    businessStage: '',
    name: '',
    email: '',
    phone: '',
    budget: '',
    description: ''
};

const Step1 = ({ data, updateData, onNext }: { data: FormData, updateData: (k: keyof FormData, v: string) => void, onNext: () => void }) => {
    const options = [
        { id: 'website', icon: <Globe className="mb-2 w-6 h-6" />, title: 'Website Development', desc: 'A modern, responsive website for your business.' },
        { id: 'app', icon: <Smartphone className="mb-2 w-6 h-6" />, title: 'Mobile App Development', desc: 'Android, iOS or cross-platform apps.' },
        { id: 'system', icon: <LayoutDashboard className="mb-2 w-6 h-6" />, title: 'System / Portal', desc: 'Custom CRM, ERP, dashboards or automation tools.' },
        { id: 'design', icon: <Palette className="mb-2 w-6 h-6" />, title: 'Branding / Design', desc: 'Logos, brand identity, UX/UI design.' },
        { id: 'unsure', icon: <HelpCircle className="mb-2 w-6 h-6" />, title: 'I’m not sure yet', desc: 'Help me choose the best solution.' }
    ];

    return (
        <div className="space-y-6">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-1 font-montserrat">Let's Start Your Journey</h2>
                <p className="text-cyan-100/80">Step 1: What do you want to build?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((opt) => (
                    <button
                        key={opt.id}
                        onClick={() => { updateData('projectType', opt.title); }}
                        className={`p-4 rounded-xl text-left transition-all duration-200 border-2 relative overflow-hidden group ${data.projectType === opt.title
                            ? 'bg-white text-blue-900 border-white shadow-lg scale-[1.02]'
                            : 'bg-white/10 text-white border-transparent hover:bg-white/20 hover:border-white/30'
                            }`}
                    >
                        <div className={`transition-colors ${data.projectType === opt.title ? 'text-lime-600' : 'text-cyan-300'}`}>
                            {opt.icon}
                        </div>
                        <h3 className="font-bold relative z-10">{opt.title}</h3>
                        <p className={`text-sm mt-1 relative z-10 ${data.projectType === opt.title ? 'text-gray-600' : 'text-gray-300'}`}>{opt.desc}</p>

                        {data.projectType === opt.title && (
                            <div className="absolute top-2 right-2 text-lime-600">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                        )}
                    </button>
                ))}
            </div>
            <button
                onClick={onNext}
                disabled={!data.projectType}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold transition-all duration-300 ${data.projectType
                    ? 'bg-lime-400 text-gray-900 hover:bg-lime-300 shadow-lg hover:shadow-lime-400/20 translate-y-0'
                    : 'bg-gray-500/50 text-gray-300 cursor-not-allowed'
                    }`}
            >
                Continue <ArrowRight className="w-5 h-5" />
            </button>
        </div>
    );
};

const Step2 = ({ data, updateData, onNext, onBack }: { data: FormData, updateData: (k: keyof FormData, v: string) => void, onNext: () => void, onBack: () => void }) => {
    const options = [
        "I'm just getting started",
        "I'm growing & need better systems",
        "I need to automate & digitize",
        "I only want a quick project"
    ];

    return (
        <div className="space-y-6">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-white mb-1 font-montserrat">Current Status</h2>
                <p className="text-cyan-100/80">Step 2: What stage is your business at?</p>
            </div>

            <div className="space-y-3">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => updateData('businessStage', opt)}
                        className={`w-full p-4 rounded-xl text-left transition-all duration-200 border-2 flex items-center justify-between ${data.businessStage === opt
                            ? 'bg-white text-blue-900 border-white shadow-lg transform scale-[1.01]'
                            : 'bg-white/10 text-white border-transparent hover:bg-white/20 hover:border-white/30'
                            }`}
                    >
                        <span className="font-semibold">{opt}</span>
                        {data.businessStage === opt && <CheckCircle2 className="w-5 h-5 text-lime-600" />}
                    </button>
                ))}
            </div>

            <div className="flex gap-4 pt-4">
                <button onClick={onBack} className="px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition">Back</button>
                <button
                    onClick={onNext}
                    disabled={!data.businessStage}
                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${data.businessStage
                        ? 'bg-lime-400 text-gray-900 hover:bg-lime-300 shadow-lg'
                        : 'bg-gray-500/50 text-gray-300 cursor-not-allowed'
                        }`}
                >
                    Next Step <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

const Step3 = ({ data, updateData, onBack, onSubmit, isLoading }: { data: FormData, updateData: (k: keyof FormData, v: string) => void, onBack: () => void, onSubmit: () => void, isLoading: boolean }) => (
    <div className="space-y-6 text-white h-[60vh] md:h-auto overflow-y-auto pr-2 custom-scrollbar">
        <div>
            <h2 className="text-2xl font-bold font-montserrat mb-1">Final Details</h2>
            <p className="text-cyan-100/80">Step 3: Tell us a bit about you</p>
        </div>

        <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-cyan-200 ml-1">Name</label>
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => updateData('name', e.target.value)}
                        placeholder="John Doe"
                        className="w-full p-3 bg-blue-900/40 border border-blue-400/30 rounded-xl focus:border-lime-400 focus:bg-blue-900/60 focus:outline-none transition-all placeholder-white/30 backdrop-blur-sm"
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-semibold text-cyan-200 ml-1">Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => updateData('email', e.target.value)}
                        placeholder="john@company.com"
                        className="w-full p-3 bg-blue-900/40 border border-blue-400/30 rounded-xl focus:border-lime-400 focus:bg-blue-900/60 focus:outline-none transition-all placeholder-white/30 backdrop-blur-sm"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-semibold text-cyan-200 ml-1">Budget Range (Optional)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['< R5k', 'R5k - R15k', 'R15k - R50k', 'R50k+', 'Not sure'].map((b) => (
                        <button
                            key={b}
                            onClick={() => updateData('budget', b)}
                            type="button"
                            className={`p-2 text-sm rounded-lg border transition-all ${data.budget === b
                                ? 'bg-lime-400 border-lime-400 text-blue-900 font-bold'
                                : 'bg-blue-900/40 border-blue-400/30 hover:border-white/50 text-white'
                                }`}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-semibold text-cyan-200 ml-1">Project Goals</label>
                <textarea
                    value={data.description}
                    onChange={(e) => updateData('description', e.target.value)}
                    placeholder="Briefly describe what you want to achieve..."
                    className="w-full p-3 bg-blue-900/40 border border-blue-400/30 rounded-xl h-24 focus:border-lime-400 focus:bg-blue-900/60 focus:outline-none transition-all placeholder-white/30 backdrop-blur-sm resize-none"
                ></textarea>
            </div>
        </div>

        <div className="flex gap-4 pt-2">
            <button onClick={onBack} disabled={isLoading} className="px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition disabled:opacity-50">Back</button>
            <button
                onClick={onSubmit}
                disabled={!data.name || !data.email || isLoading}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all shadow-lg ${(!data.name || !data.email || isLoading)
                    ? 'bg-gray-500/50 text-gray-300 cursor-not-allowed'
                    : 'bg-lime-400 text-gray-900 hover:bg-lime-300 hover:shadow-lime-400/30'
                    }`}
            >
                {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <>Submit Request <ArrowRight className="w-5 h-5" /></>}
            </button>
        </div>
    </div>
);

const ThankYou = ({ onClose }: { onClose: () => void }) => (
    <div className="text-center text-white space-y-6 py-8">
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="w-24 h-24 bg-gradient-to-tr from-lime-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-lime-400/40"
        >
            <Sparkles className="w-12 h-12 text-blue-900" />
        </motion.div>

        <div>
            <h2 className="text-3xl font-bold font-montserrat mb-2">Message Sent!</h2>
            <p className="text-cyan-100 text-lg">Your journey has officially begun.</p>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm max-w-sm mx-auto">
            <p className="mb-4">
                We've received your request. An Awaitsi consultant will review your goals and reach out shortly.
            </p>
            <p className="font-semibold text-lime-400">
                Turnaround time: ~24 Hours
            </p>
        </div>

        <button
            onClick={onClose}
            className="px-8 py-3 bg-white text-blue-900 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg w-full max-w-xs"
        >
            Back to Website
        </button>
    </div>
);


const JourneyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(initialData);
    const [isLoading, setIsLoading] = useState(false);

    const updateData = (key: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const onNext = () => setStep(prev => prev + 1);
    const onBack = () => setStep(prev => prev - 1);

    const onSubmit = async () => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep(4);
    }

    const closeAndReset = () => {
        onClose();
        setTimeout(() => {
            setStep(1);
            setFormData(initialData);
        }, 300);
    }

    const progressWidth = `${((step - 1) / 3) * 100}%`;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAndReset}
                        className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative bg-gradient-to-br from-blue-900 to-cyan-700 rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-white/10"
                    >
                        {/* Background Decorations */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10 p-8 md:p-10">
                            <button
                                onClick={closeAndReset}
                                className="absolute top-4 right-4 p-2 bg-black/20 text-white/70 hover:text-white hover:bg-black/40 rounded-full transition-all"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {step < 4 && (
                                <div className="mb-8">
                                    <div className="flex justify-between text-xs font-bold text-cyan-200 mb-2 uppercase tracking-wider">
                                        <span>Progress</span>
                                        <span>Step {step} of 3</span>
                                    </div>
                                    <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            className="bg-gradient-to-r from-lime-400 to-cyan-400 h-full rounded-full shadow-[0_0_10px_rgba(163,230,53,0.5)]"
                                            initial={{ width: 0 }}
                                            animate={{ width: progressWidth }}
                                            transition={{ ease: "easeInOut", duration: 0.5 }}
                                        ></motion.div>
                                    </div>
                                </div>
                            )}

                            <AnimatePresence mode="wait" custom={1}>
                                <motion.div
                                    key={step}
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -20, opacity: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.3 }}
                                >
                                    {step === 1 && <Step1 data={formData} updateData={updateData} onNext={onNext} />}
                                    {step === 2 && <Step2 data={formData} updateData={updateData} onNext={onNext} onBack={onBack} />}
                                    {step === 3 && <Step3 data={formData} updateData={updateData} onBack={onBack} onSubmit={onSubmit} isLoading={isLoading} />}
                                    {step === 4 && <ThankYou onClose={closeAndReset} />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default JourneyModal;
