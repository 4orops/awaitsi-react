import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const sections = [
  {
    num: '01',
    title: 'Introduction',
    body: 'Awaitsi (Pty) Ltd ("we", "us", or "our") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in accordance with the Protection of Personal Information Act (POPIA) of South Africa.',
    list: null,
  },
  {
    num: '02',
    title: 'Information We Collect',
    body: 'We may collect the following types of information:',
    list: [
      'Personal Identification Information: Name, email address, phone number, and business details provided via our contact or quote forms.',
      'Usage Data: Information about how you use our website, including pages visited and time spent.',
      'Technical Data: IP address, browser type and version, operating system.',
    ],
  },
  {
    num: '03',
    title: 'How We Use Your Information',
    body: 'We use the collected information to:',
    list: [
      'Respond to your enquiries and provide quotes for our services.',
      'Communicate with you about your project or services.',
      'Improve our website and service offerings.',
      'Comply with legal obligations under South African law.',
    ],
  },
  {
    num: '04',
    title: 'Data Sharing',
    body: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to deliver our services (e.g., cloud hosting providers). All third-party service providers are required to maintain the confidentiality of your information.',
    list: null,
  },
  {
    num: '05',
    title: 'Data Retention',
    body: 'We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for a maximum of 2 years unless you request deletion sooner.',
    list: null,
  },
  {
    num: '06',
    title: 'Your Rights (POPIA)',
    body: 'Under the Protection of Personal Information Act, you have the right to:',
    list: [
      'Access the personal information we hold about you.',
      'Request correction of inaccurate information.',
      'Request deletion of your personal information.',
      'Object to the processing of your personal information.',
      'Lodge a complaint with the Information Regulator of South Africa.',
    ],
  },
  {
    num: '07',
    title: 'Cookies',
    body: 'Our website may use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.',
    list: null,
  },
  {
    num: '08',
    title: 'Security',
    body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
    list: null,
  },
];

const PrivacyPolicyPage: React.FC = () => {
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
              <span className="w-1.5 h-1.5 bg-awaitsi-green rounded-full" />
              <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.25em]">Legal</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-montserrat
                           tracking-[-0.03em] leading-[0.9] text-white">
              PRIVACY<br />
              <span className="text-awaitsi-green italic font-light">policy.</span>
            </h1>
            <p className="text-white/40 font-opensans text-sm mt-6 tracking-wide">
              Last updated: May 2026 &nbsp;·&nbsp; POPIA Compliant
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Editorial numeric sections ── */}
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
                <p className="text-white/50 font-opensans leading-relaxed text-base max-w-3xl mb-4">
                  {s.body}
                </p>
                {s.list && (
                  <ul className="space-y-3 mt-2">
                    {s.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/40 font-opensans text-sm leading-relaxed">
                        <span className="w-1 h-1 mt-2 rounded-full bg-awaitsi-green flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
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
                If you have any questions about this Privacy Policy or wish to exercise your POPIA rights, please contact us at:
              </p>
              <div className="border border-white/10 bg-white/[0.03] p-8 inline-block">
                <p className="text-white font-black font-montserrat mb-3">Awaitsi (Pty) Ltd</p>
                <p className="text-white/50 font-opensans text-sm mb-2">
                  Email:{' '}
                  <a href="mailto:info@awaitsi.co.za"
                     className="text-awaitsi-green hover:text-white transition-colors">
                    info@awaitsi.co.za
                  </a>
                </p>
                <p className="text-white/50 font-opensans text-sm mb-2">
                  Phone:{' '}
                  <a href="tel:+27655443979"
                     className="text-awaitsi-green hover:text-white transition-colors">
                    +27 65 544 3979
                  </a>
                </p>
                <p className="text-white/50 font-opensans text-sm">Location: South Africa</p>
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

export default PrivacyPolicyPage;
