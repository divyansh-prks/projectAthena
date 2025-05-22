import React from 'react';
import { Calendar, Gift, ArrowRight } from 'lucide-react';

const JoinUs: React.FC = () => {
  return (
    <section id="join" className="py-16 md:py-24 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join <span className="text-blue-400">Project Athena</span>
          </h2>
          <p className="text-xl text-gray-300">
            Begin your journey with us and become part of an extraordinary community of innovators and leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Onboarding Day */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative bg-gray-900 p-8 rounded-xl h-full">
              <div className="flex items-center mb-6">
                <Calendar className="text-blue-400" size={32} />
                <h3 className="text-2xl font-bold ml-4">Onboarding Day</h3>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">Experience our comprehensive onboarding program:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Welcome session with community leaders</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Personalized mentorship matching</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Resource access and platform training</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Goal-setting workshop</span>
                  </li>
                </ul>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                Schedule Your Onboarding
              </button>
            </div>
          </div>

          {/* Surprise Day */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative bg-gray-900 p-8 rounded-xl h-full">
              <div className="flex items-center mb-6">
                <Gift className="text-blue-400" size={32} />
                <h3 className="text-2xl font-bold ml-4">Surprise Day</h3>
              </div>
              <div className="space-y-4 mb-8">
                <p className="text-gray-300">Discover what makes our community special:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Exclusive tech talks and workshops</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Networking with industry leaders</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Innovation showcase opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-blue-400 mt-1 mr-2" size={16} />
                    <span>Special community perks revealed</span>
                  </li>
                </ul>
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                Join Surprise Day
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;