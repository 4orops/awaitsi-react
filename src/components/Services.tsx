import React from 'react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}

interface ServicesProps {
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 font-montserrat">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions tailored for South African businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-t-4 border-cyan-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-cyan-500 rounded-lg flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3 font-montserrat">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              {/* <div className="text-lime-600 font-semibold text-lg">
                {service.price}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
