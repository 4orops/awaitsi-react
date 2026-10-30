import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, FileText, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BusinessSystemsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white font-opensans selection:bg-awaitsi-green selection:text-black">
      <SEO 
        title="Business Systems | Awaitsi" 
        description="Turn disconnected business processes into connected digital workflows with CRM, operations management, and business administration systems."
      />
      <Navigation />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header Section */}
        <section className="px-6 max-w-7xl mx-auto mb-16 text-center relative">
          <div className="absolute inset-0 line-grid opacity-30 pointer-events-none -z-10" />
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl mx-auto">
            <span className="text-awaitsi-green font-bold text-xs uppercase tracking-ultra mb-4 block">02 — Core Pillar</span>
            <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat tracking-tight mb-6">
              Business Systems
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
              Turn disconnected business processes into connected digital workflows.
            </p>
          </motion.div>
        </section>

        {/* The Value Proposition */}
        <section className="px-6 max-w-5xl mx-auto mb-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 lg:p-12 bg-white text-awaitsi-gray-950 rounded-3xl text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">The End of Fragmentation</h2>
            <p className="text-awaitsi-gray-700 text-lg max-w-3xl mx-auto">
              Replace spreadsheets, paper processes, disconnected tools, and scattered communication with one connected business system designed around the way you actually work.
            </p>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* CRM */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="crm" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">CRM & Lead Management</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Customer Management:</strong> 360-degree view of your clients and their history.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Sales Pipelines:</strong> Track leads from inquiry to closed deal seamlessly.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Follow-ups & Tasks:</strong> Automated reminders so nothing falls through the cracks.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Reporting:</strong> Instant insights into sales velocity and conversion rates.</span></li>
              </ul>
            </motion.div>

            {/* Operations */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="operations" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Operations & Workflows</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Job & Task Management:</strong> Allocate resources and track operational progress.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Booking & Service Management:</strong> Digitize your scheduling and dispatching.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Inventory & Orders:</strong> Keep stock counts accurate and fulfillment rapid.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Staff Workflows & Approvals:</strong> Streamline internal requests and sign-offs.</span></li>
              </ul>
            </motion.div>

            {/* Business Administration */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="workflows" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-cyan/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-cyan/10 rounded-xl flex items-center justify-center text-awaitsi-cyan">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Business Administration</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Document Management:</strong> Secure, searchable central repositories.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Internal Portals:</strong> Hubs for employee resources and communication.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Role-Based Access:</strong> Ensure data security with proper permission structures.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-cyan shrink-0 mt-0.5" /> <span><strong>Automated Notifications:</strong> Keep the right people informed at the right time.</span></li>
              </ul>
            </motion.div>

            {/* Customer Experience */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} id="customer" className="p-8 lg:p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-awaitsi-green/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-awaitsi-green/10 rounded-xl flex items-center justify-center text-awaitsi-green">
                  <LayoutDashboard className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-montserrat">Customer Experience</h3>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Customer Portals:</strong> Give clients self-service access to their data and invoices.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Online Forms:</strong> Replace PDF onboarding with seamless digital capture.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Communication Workflows:</strong> Ensure consistent, branded client interactions.</span></li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-awaitsi-green shrink-0 mt-0.5" /> <span><strong>Self-Service Bookings:</strong> Empower customers to interact on their schedule.</span></li>
              </ul>
            </motion.div>

          </div>
        </section>

        {/* Pathway Section */}
        <section className="px-6 max-w-4xl mx-auto mt-24 text-center">
          <div className="p-8 lg:p-12 bg-gradient-to-r from-awaitsi-cyan/20 to-awaitsi-green/20 border border-awaitsi-green/30 rounded-3xl">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white mb-4">Once your systems are connected...</h3>
            <p className="text-white/70 mb-8 text-lg">You begin generating incredibly valuable operational data.</p>
            <Link to="/services/data-intelligence" className="btn-primary inline-flex">
              Explore Data & Intelligence <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BusinessSystemsPage;
