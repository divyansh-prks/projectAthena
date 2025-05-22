import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.7)]">
              <img 
                src="https://i.postimg.cc/nzgpqT7f/athena-Pic.jpg" 
                alt="Project Athena Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-bold text-2xl text-white tracking-wider">
              Project Athena
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#benefits" className="nav-link">Benefits</a>
            <a href="#testimonials" className="nav-link">Super Heroes</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 px-2 bg-gray-900/95 backdrop-blur-sm rounded-lg animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              <a 
                href="#home" 
                className="px-4 py-2 text-white hover:bg-blue-900/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#benefits" 
                className="px-4 py-2 text-white hover:bg-blue-900/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-2 text-white hover:bg-blue-900/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-white hover:bg-blue-900/50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button className="mx-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                Join Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;