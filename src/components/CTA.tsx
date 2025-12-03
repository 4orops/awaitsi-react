import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6 font-montserrat">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 text-cyan-100">
          Let's discuss your vision — no obligation. We treat every project as part of our family.
        </p>
        <button className="px-10 py-4 bg-lime-400 text-gray-900 font-bold text-lg rounded-lg hover:bg-lime-300 transition shadow-xl">
          Request a Quote Today
        </button>
      </div>
    </section>
  );
};

export default CTA;
