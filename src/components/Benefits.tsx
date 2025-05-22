import React from 'react';
import { benefitsData } from '../data/benefits';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why <span className="text-blue-400">Project Athena</span> Stands Out
          </h2>
          <p className="text-xl text-gray-300">
            Join our community and unlock a world of opportunities and growth that sets us apart from the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
              <div className="relative bg-gray-900 p-8 rounded-xl h-full flex flex-col">
                <div className="text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 flex-grow">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;