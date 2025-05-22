import React from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-12 md:py-16 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                <img 
                  src="https://i.postimg.cc/nzgpqT7f/athena-Pic.jpg" 
                  alt="Project Athena Logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="font-bold text-xl text-white">Project Athena</span>
            </div>
            <p className="text-gray-400">
              Empowering individuals to reach their full potential through collaboration, innovation, and continuous learning.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://x.com/AthenaF0SS" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              
              <a href="https://github.com/AthenaFoss" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-blue-400 transition-colors">Benefits</a>
              </li>
            
              <li>
                <a href="https://x.com/AthenaF0SS/status/1924866780788621432" className="text-gray-400 hover:text-blue-400 transition-colors">Events</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">We Work And Build Remotely :) </span>
              </li>
             
              <li className="flex items-center">
                <Mail className="mr-3 text-blue-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">nikhil@projectathena.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Joining Request</h3>
            <p className="text-gray-400 mb-4">
              Send your message If you want to Join 
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all shadow-[0_0_10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                Request
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Project Athena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;