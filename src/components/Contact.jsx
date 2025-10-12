import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-montserrat">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Start your journey with us. We're here to help.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-cyan-500">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
              <input 
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">Phone</label>
            <input 
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="+27 XX XXX XXXX"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="projectType">Project Type</label>
            <select 
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
            >
              <option>Select a service</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>CRM Solution</option>
              <option>AI Integration</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">Tell us about your project</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-500"
              placeholder="Share your vision with us..."
            ></textarea>
          </div>
          <button 
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-900 to-cyan-500 text-white font-bold text-lg rounded-lg hover:shadow-xl transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;