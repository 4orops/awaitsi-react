import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please provide your name, email and message.');
      setSubmitting(false);
      return;
    }

    try {
      // Netlify Function endpoint
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send');

      setSuccess('Message sent — we will be in touch.');
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-lime-50 to-cyan-100 relative">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[length:20px_20px]"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-montserrat">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            Start your journey with us. Whether you have a specific project in mind or just want to explore possibilities, we're here to help.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-900 via-cyan-500 to-lime-400"></div>

          {/* 
            Added data-netlify="true" and name="contact" for Netlify Forms compatibility.
            This acts as a built-in database for submissions.
          */}
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-8 mb-8"
            name="contact"
            data-netlify="true"
          >
            {/* Hidden input for Netlify bot field / spam protection */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium text-gray-900"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium text-gray-900"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium text-gray-900"
                  placeholder="+27 83 123 4567"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all font-medium text-gray-900"
                >
                  <option value="" disabled>Select a service...</option>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>CRM Solution</option>
                  <option>AI Integration</option>
                  <option>Other / Consultation</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 transition-all resize-none font-medium text-gray-900"
                  placeholder="Tell us about your goals..."
                ></textarea>
              </div>
            </div>
          </form>

          <div className="mt-4">
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {success && <p className="text-green-600 text-sm mb-2">{success}</p>}
            <button
              type="submit"
              onClick={(e) => { /* ensure keyboard/aria activation also uses form submit */ }}
              className="w-full px-8 py-5 bg-gradient-to-r from-blue-900 to-cyan-600 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 transform"
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
