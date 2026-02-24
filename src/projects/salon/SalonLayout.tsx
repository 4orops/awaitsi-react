import React, { useState, useEffect } from 'react';
import { User, Calendar, Clock, Scissors, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface Booking {
    id: number;
    name: string;
    service: string;
    phone: string;
    status: 'waiting' | 'serving' | 'completed';
    joinedAt: Date;
}

const SERVICES = [
    { id: 'cut', name: 'Haircut', duration: 30 },
    { id: 'color', name: 'Hair Color', duration: 90 },
    { id: 'nails', name: 'Manicure', duration: 45 },
    { id: 'style', name: 'Styling', duration: 60 },
];

const SalonLayout = () => {
    // State
    const [bookings, setBookings] = useState<Booking[]>([
        { id: 101, name: 'Sarah J.', service: 'Haircut', phone: '083...', status: 'serving', joinedAt: new Date() },
        { id: 102, name: 'Mike T.', service: 'Styling', phone: '072...', status: 'waiting', joinedAt: new Date() },
        { id: 103, name: 'Jessica M.', service: 'Manicure', phone: '061...', status: 'waiting', joinedAt: new Date() },
    ]);
    const [currentTicket, setCurrentTicket] = useState(101);
    const [userTicket, setUserTicket] = useState<number | null>(null);
    const [isAdminOpen, setIsAdminOpen] = useState(false);

    // Booking Form State
    const [name, setName] = useState('');
    const [service, setService] = useState(SERVICES[0].id);
    const [phone, setPhone] = useState('');
    const [lastBookedName, setLastBookedName] = useState<string | null>(null);

    // Derived State
    const currentBooking = bookings.find(b => b.status === 'serving');
    const waitingList = bookings.filter(b => b.status === 'waiting');
    const myQueuePosition = userTicket ? waitingList.findIndex(b => b.id === userTicket) : -1;
    const estWaitTime = waitingList
        .slice(0, myQueuePosition === -1 ? waitingList.length : myQueuePosition)
        .reduce((acc, curr) => {
            const s = SERVICES.find(s => s.name === curr.service);
            return acc + (s?.duration || 30);
        }, 0);
    const estWaitTimeForNextPerson = Number.isFinite(estWaitTime) ? `${estWaitTime} mins` : '—';

    const handleBook = (e: React.FormEvent) => {
        e.preventDefault();
        const newTicket = (bookings[bookings.length - 1]?.id || 100) + 1;
        const selectedService = SERVICES.find(s => s.id === service)?.name || 'Service';

        const newBooking: Booking = {
            id: newTicket,
            name,
            service: selectedService,
            phone,
            status: 'waiting',
            joinedAt: new Date()
        };

        setBookings([...bookings, newBooking]);
        setUserTicket(newTicket);
        setLastBookedName(newBooking.name);
        setName('');
        setPhone('');
    };

    const advanceQueue = () => {
        const nextQ = [...bookings];
        // Complete current
        const currentIdx = nextQ.findIndex(b => b.id === currentTicket);
        if (currentIdx !== -1) {
            nextQ[currentIdx].status = 'completed';
        }

        // Serve next
        const nextIdx = nextQ.findIndex(b => b.status === 'waiting');
        if (nextIdx !== -1) {
            nextQ[nextIdx].status = 'serving';
            setCurrentTicket(nextQ[nextIdx].id);
        } else {
            // No one waiting
            setCurrentTicket(0);
        }
        setBookings(nextQ);
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-30">
                <div className="max-w-md mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Scissors className="text-pink-500 w-6 h-6" />
                        <h1 className="font-bold text-lg">Glamour Queue</h1>
                    </div>
                    <button
                        onClick={() => setIsAdminOpen(!isAdminOpen)}
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                    >
                        <Settings className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </header>

            <main className="max-w-md mx-auto p-4 space-y-6 pb-24">

                {/* Current Status Card */}
                <motion.div
                    layout
                    className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-pink-500"
                >
                    <div className="p-6 text-center">
                        <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Now Serving</p>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTicket}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-6xl font-bold text-gray-900 mb-2"
                            >
                                #{currentTicket || '--'}
                            </motion.div>
                        </AnimatePresence>
                        <div className="text-pink-500 font-medium flex items-center justify-center gap-2">
                            <User className="w-4 h-4" />
                            {currentBooking ? currentBooking.name : 'Waiting for customers...'}
                        </div>
                    </div>
                    <div className="bg-pink-50 p-4 text-center text-sm text-pink-700">
                        Est. wait time for next person: <span className="font-bold">{estWaitTimeForNextPerson}</span>
                    </div>
                </motion.div>

                {/* User Ticket / Booking Form */}
                {!userTicket ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white rounded-2xl shadow-sm p-6"
                    >
                        <h2 className="text-xl font-bold mb-4">Book Your Spot</h2>
                        <form onSubmit={handleBook} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    required
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <input
                                    required
                                    type="tel"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-500 outline-none"
                                    placeholder="For WhatsApp notifications"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {SERVICES.map(s => (
                                        <button
                                            key={s.id}
                                            type="button"
                                            onClick={() => setService(s.id)}
                                            className={`p-3 rounded-xl border text-sm font-medium transition-all ${service === s.id ? 'bg-pink-500 text-white border-pink-500' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            {s.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-gray-800 transition active:scale-95"
                            >
                                Join Queue
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-gray-400 text-sm">Your Ticket</p>
                                    <div className="text-4xl font-bold text-white">#{userTicket}</div>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-bold ${bookings.find(b => b.id === userTicket)?.status === 'serving' ? 'bg-green-400 text-green-900' : 'bg-pink-400 text-pink-900'}`}>
                                    {bookings.find(b => b.id === userTicket)?.status === 'serving' ? 'IT\'S YOUR TURN!' : 'WAITING'}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <User className="w-5 h-5" />
                                    <span>{lastBookedName ?? bookings.find(b => b.id === userTicket)?.name ?? '—'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <Clock className="w-5 h-5" />
                                    <span>Est. Wait: <span className="text-white font-bold">{myQueuePosition <= 0 ? (currentTicket === userTicket ? '0 min' : 'Next!') : `${estWaitTime} mins`}</span></span>
                                </div>
                            </div>

                            {currentTicket !== userTicket && (
                                <div className="mt-6 pt-6 border-t border-gray-700">
                                    <p className="text-sm text-gray-400 text-center">
                                        We'll WhatsApp you when you're next!
                                    </p>
                                </div>
                            )}

                            {currentTicket === userTicket && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-6 bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center"
                                >
                                    <p className="text-green-400 font-bold animate-pulse">Please head to the counter!</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}

                {/* Up Next List */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Up Next
                    </h3>
                    <div className="space-y-3">
                        {waitingList.length === 0 ? (
                            <p className="text-gray-500 text-sm text-center py-2">Line is empty! Great time to walk in.</p>
                        ) : (
                            waitingList.slice(0, 3).map((booking, idx) => (
                                <div key={booking.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">
                                            {booking.id}
                                        </div>
                                        <div>
                                            <div className="font-medium text-gray-900">{booking.name}</div>
                                            <div className="text-xs text-gray-500">{booking.service}</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-semibold text-gray-400">
                                        ~{(idx + 1) * 15}m
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

            </main>

            {/* Admin Panel (Demo) */}
            <AnimatePresence>
                {isAdminOpen && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white rounded-t-3xl shadow-2xl z-50 p-6"
                    >
                        <div className="max-w-md mx-auto">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg">Staff Controls</h3>
                                <button onClick={() => setIsAdminOpen(false)} className="text-gray-400 hover:text-white">Close</button>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={advanceQueue}
                                    className="flex-1 py-4 bg-lime-400 text-gray-900 font-bold rounded-xl hover:bg-lime-300 transition flex flex-col items-center gap-2"
                                >
                                    <span className="text-lg">Call Next #{bookings.find(b => b.status === 'waiting')?.id || '--'}</span>
                                    <span className="text-xs opacity-75 font-normal">Completes #{currentTicket}</span>
                                </button>
                            </div>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                * This mimics the staff tablet view. Clicking this updates the queue for everyone.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SalonLayout;
