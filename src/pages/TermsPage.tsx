import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const sections = [
  {
    num: '01',
    title: 'Agreement to Terms',
    body: 'By accessing or using the website of Awaitsi (Pty) Ltd ("Awaitsi", "we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the website or use our services.',
  },
  {
    num: '02',
    title: 'Services',
    body: 'Awaitsi provides web development, mobile application development, CRM systems, AI integration, and related digital services to businesses, primarily in South Africa. Specific terms for project delivery, pricing, and scope of work are governed by individual service agreements and proposals agreed upon with each client.',
  },
  {
    num: '03',
    title: 'Intellectual Property',
    body: 'All content on this website, including text, graphics, logos, and software, is the property of Awaitsi (Pty) Ltd and is protected by applicable intellectual property laws. Upon full payment for a project, clients receive ownership of the deliverables as specified in their service agreement. Awaitsi retains the right to showcase completed work in its portfolio unless otherwise agreed in writing.',
  },
  {
    num: '04',
    title: 'Payment Terms',
    body: 'Payment terms are outlined in individual project proposals and service agreements. Generally, projects require a deposit before commencement, with the balance due upon completion. All prices are quoted in South African Rand (ZAR) and exclude VAT unless otherwise stated.',
  },
  {
    num: '05',
    title: 'Limitation of Liability',
    body: 'Awaitsi shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the amount paid by the client for the specific service giving rise to the claim.',
  },
  {
    num: '06',
    title: 'Confidentiality',
    body: 'Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of a project. This obligation survives the termination of any service agreement.',
  },
  {
    num: '07',
    title: 'Governing Law',
    body: 'These Terms of Service are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the South African courts.',
  },
  {
    num: '08',
    title: 'Changes to Terms',
    body: 'We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the updated terms.',
  },
];

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-awaitsi-gray-950 text-white">

      {/* ── Dark header ── */}
      <div className="border-b border-white/10 line-grid relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />
        <div className="max-w-6xl mx-auto px-4 pt-28 pb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-10
                         text-[10px] font-black uppercase tracking-[0.22em] transition-colors group"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Back to Home
            </Link>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-awaitsi-cyan rounded-full" />
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em]">Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat
                           tracking-[-0.03em] leading-[0.9] text-white">
              TERMS OF<br />
              <span className="text-awaitsi-cyan italic font-light">service.</span>
            </h1>
            <p className="text-white/40 font-opensans text-sm mt-6 tracking-wide">
              Last updated: May 2026
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Editorial numeric list ── */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-x border-b border-white/10">
          {sections.map((s, idx) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
              className="grid grid-cols-12 border-b border-white/10 last:border-b-0
                         hover:bg-white/[0.02] transition-colors duration-300"
            >
              {/* Number */}
              <div className="col-span-2 md:col-span-1 p-8 border-r border-white/10 flex items-start">
                <span className="text-xl md:text-3xl font-light font-montserrat text-white/20 leading-none pt-1">
                  {s.num}
                </span>
              </div>
              {/* Content */}
              <div className="col-span-10 md:col-span-11 p-8 md:p-12">
                <h2 className="text-lg md:text-2xl font-black font-montserrat text-white mb-4 tracking-tight">
                  {s.title}
                </h2>
                <p className="text-white/50 font-opensans leading-relaxed text-base max-w-3xl">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-12"
          >
            <div className="col-span-2 md:col-span-1 p-8 border-r border-white/10 flex items-start">
              <span className="text-xl md:text-3xl font-light font-montserrat text-white/20 leading-none pt-1">
                09
              </span>
            </div>
            <div className="col-span-10 md:col-span-11 p-8 md:p-12">
              <h2 className="text-lg md:text-2xl font-black font-montserrat text-white mb-6 tracking-tight">
                Contact Us
              </h2>
              <p className="text-white/50 font-opensans leading-relaxed mb-6">
                For any questions about these Terms of Service, please contact us:
              </p>
              <div className="border border-white/10 bg-white/[0.03] p-8 inline-block">
                <p className="text-white font-black font-montserrat mb-3">Awaitsi (Pty) Ltd</p>
                <p className="text-white/50 font-opensans text-sm mb-2">
                  Email:{' '}
                  <a href="mailto:info@awaitsi.co.za"
                     className="text-awaitsi-cyan hover:text-white transition-colors">
                    info@awaitsi.co.za
                  </a>
                </p>
                <p className="text-white/50 font-opensans text-sm">
                  Phone:{' '}
                  <a href="tel:+27655443979"
                     className="text-awaitsi-cyan hover:text-white transition-colors">
                    +27 65 544 3979
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 flex justify-start">
        <Link
          to="/"
          className="inline-flex items-center gap-3 text-white/30 hover:text-white
                     text-[10px] font-black uppercase tracking-[0.22em] transition-colors group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsPage;
