import React from 'react';
import { Calendar, Home, ArrowRight, Brain, Zap, Smartphone, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const projects = [
    {
        title: "AI Integration",
        description: "Smart automation, chatbots, and analytics to optimize your operations.",
        icon: <Brain className="w-8 h-8 text-cyan-400" />,
        link: "/portfolio/ai",
        color: "from-blue-600 to-cyan-400"
    },
    {
        title: "CRM Solutions",
        description: "Custom dashboards and workflows designed to simplify growth.",
        icon: <Users className="w-8 h-8 text-indigo-400" />,
        link: "/portfolio/crm",
        color: "from-indigo-600 to-purple-500"
    },
    {
        title: "Mobile Apps",
        description: "Cross-platform Android & iOS apps tailored for African markets.",
        icon: <Smartphone className="w-8 h-8 text-orange-400" />,
        link: "/portfolio/mobile",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Salon Booking System",
        description: "Smart queuing system with real-time \"Your Turn\" alerts.",
        icon: <Calendar className="w-8 h-8 text-lime-400" />,
        link: "/portfolio/salon",
        color: "from-pink-500 to-rose-500"
    },
    {
        title: "Premium Real Estate",
        description: "Luxury property showcase with advanced filtering and interactive gallery.",
        icon: <Home className="w-8 h-8 text-cyan-400" />,
        link: "/portfolio/real-estate",
        color: "from-blue-600 to-indigo-600"
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 px-4 bg-gray-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-cyan-400">
                        Our Work
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore our latest projects showcasing our capabilities in complex system booking and premium UI design.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <MotionLink
                            key={idx}
                            to={project.link}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-lime-400/50 transition-all duration-300"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="p-8 relative z-10">
                                <div className="mb-6 inline-block p-4 bg-gray-700/50 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-lime-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-4 transition-all">
                                    View Project <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>

                            {/* Decorative circle */}
                            <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                        </MotionLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
