import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="h-[500px] perspective-1000 w-full cursor-pointer group"
      onClick={handleFlip}
    >
      <div 
        className={`relative h-full w-full transition-all duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative group rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative bg-gray-900 rounded-xl h-full flex flex-col">
              <div className="h-72 overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                <p className="text-blue-400 text-lg mb-3">{testimonial.role}</p>
                <p className="text-gray-300 line-clamp-3 mb-4">{testimonial.testimonial}</p>
                <p className="text-sm text-gray-400 mt-auto">
                  Click to see achievements & social profiles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="relative group rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-700"></div>
            <div className="relative bg-gray-900 rounded-xl h-full flex flex-col p-6">
              <h3 className="text-xl font-bold mb-4">Achievements</h3>
              <ul className="mb-6 space-y-3">
                {testimonial.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-xl font-bold mb-4 mt-auto">Connect</h3>
              <div className="flex space-x-4">
                {testimonial.social.twitter && (
                  <a 
                    href={testimonial.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Twitter size={24} />
                  </a>
                )}
                {testimonial.social.linkedin && (
                  <a 
                    href={testimonial.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                {testimonial.social.github && (
                  <a 
                    href={testimonial.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={24} />
                  </a>
                )}
                {testimonial.social.website && (
                  <a 
                    href={testimonial.social.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-6">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;