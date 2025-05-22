import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }
    
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="w-full lg:w-1/2 space-y-6 mb-8 lg:mb-0">
            <h1 
              ref={textRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 transition-opacity duration-1000"
            >
              Welcome to <span className="text-blue-400">Project Athena</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A community of innovators, thinkers, and creators building the future together. Join us on this extraordinary journey of growth and discovery.
            </p>
            <div>
                  <li>We Enjoy</li>
                  <li>We Help Each Other</li>
                  <li>We Learn From Each Other</li>
                  <li> We <span className='text-blue-300'> Build ! </span></li>
                </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">
               
               <a href="https://x.com/AthenaF0SS">Join Our Community</a>
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-blue-400 text-white rounded-md hover:bg-blue-900/30 transition-all shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <a href="#benefits"> Learn More </a>
              </button>
            </div>
            
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://i.postimg.cc/XvnM5mzC/athena.png"
                  alt="Project Athena Team"
                  className="w-full rounded-lg shadow-xl transform transition duration-500 group-hover:scale-105"
                />


               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;