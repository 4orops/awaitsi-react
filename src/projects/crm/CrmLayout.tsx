import React from 'react';
import { Users, BarChart3, PieChart, ArrowLeft, CheckCircle, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const CrmLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                    <div className="flex items-center gap-2 font-bold text-xl text-indigo-900">
                        <Users className="w-6 h-6 text-indigo-600" />
                        NexusSelect CRM
                    </div>
                </div>
            </nav>

            <div className="flex h-[calc(100vh-64px)] overflow-hidden">
                {/* Sidebar Mockup */}
                <aside className="w-64 bg-indigo-900 text-white hidden md:flex flex-col p-6 space-y-6">
                    <div className="space-y-2">
                        <div className="p-3 bg-indigo-800/50 rounded-lg font-medium flex items-center gap-3"><PieChart className="w-5 h-5" /> Dashboard</div>
                        <div className="p-3 hover:bg-indigo-800/30 rounded-lg cursor-pointer flex items-center gap-3 text-indigo-200"><Users className="w-5 h-5" /> Contacts</div>
                        <div className="p-3 hover:bg-indigo-800/30 rounded-lg cursor-pointer flex items-center gap-3 text-indigo-200"><BarChart3 className="w-5 h-5" /> Analytics</div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-8 relative">
                    <div className="max-w-5xl mx-auto">
                        <header className="mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-between items-end"
                            >
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">Sales Overview</h1>
                                    <p className="text-gray-500 mt-1">Track your team's performance and pipeline.</p>
                                </div>
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                                    + Add Lead
                                </button>
                            </motion.div>
                        </header>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            {[
                                { label: "Total Revenue", val: "R124,500", change: "+12.5%", color: "text-green-600" },
                                { label: "Active Leads", val: "45", change: "+5", color: "text-blue-600" },
                                { label: "Conversion Rate", val: "22%", change: "+1.2%", color: "text-purple-600" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                                >
                                    <div className="text-gray-500 text-sm font-medium mb-1">{stat.label}</div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.val}</div>
                                    <div className={`text-sm font-semibold ${stat.color}`}>{stat.change} vs last month</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recent Leads Table */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                                <h2 className="font-bold text-lg">Recent Deals</h2>
                                <div className="relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input type="text" placeholder="Search..." className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-50 text-gray-600">
                                        <tr>
                                            <th className="px-6 py-3 font-semibold">Client</th>
                                            <th className="px-6 py-3 font-semibold">Status</th>
                                            <th className="px-6 py-3 font-semibold">Amount</th>
                                            <th className="px-6 py-3 font-semibold">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            { name: "Acme Corp", status: "Closed Won", amount: "R12,000", date: "Today" },
                                            { name: "Global Tech", status: "Negotiation", amount: "R8,500", date: "Yesterday" },
                                            { name: "Starlight Inc", status: "Prospect", amount: "R4,200", date: "Oct 24" },
                                            { name: "Nebula Systems", status: "Closed Won", amount: "R19,000", date: "Oct 22" }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-gray-50/50 transition">
                                                <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${row.status === 'Closed Won' ? 'bg-green-100 text-green-800' :
                                                            row.status === 'Negotiation' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                                                        {row.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-gray-600">{row.amount}</td>
                                                <td className="px-6 py-4 text-gray-500">{row.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default CrmLayout;
