import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleTestimonials = 9;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % (testimonialsData.length - visibleTestimonials + 1)
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - visibleTestimonials : prevIndex - 1
    );
  };

  const members = [
    {
      id: 1,
      name: 'Nikhil',
      role: 'Blockchain Developer',
      achievement: 'Founder',
      image: 'https://i.postimg.cc/DyhgdGTt/nikhilser.png',
    },
    {
      id: 2,
      name: 'CryptoSwami',
      role: 'Famous Personality',
      achievement: 'Handsome Guy',
      image: 'https://i.postimg.cc/nzQkTYMt/cryptoser.png',
    },
    {
      id: 3,
      name: 'Avhi',
      role: 'Blockchain Developer',
      achievement: 'SuperTeam India Grant',
      image: 'https://pbs.twimg.com/profile_images/1886357063019704320/InJB0gyG_400x400.jpg',
    },
    {
      
      id: 4,
      name: 'Dhairya ',
      role: 'Full Stack Developer',
      achievement: 'Google Summer of Code',
      image: 'https://pbs.twimg.com/profile_images/1834183870134059009/WHeOyAaU_400x400.jpg',
    },
    {
      id: 5,
      name: 'Harsh Thakur ',
      role: 'Full Stack Developer',
      achievement: 'Google Summer of Code',
      image: 'https://pbs.twimg.com/profile_images/1810739022706446336/SChJy7qv_400x400.jpg',
    },
    {
      id: 6,
      name: 'Piyush Jha',
      role: 'Blockchain Developer',
      achievement: 'SuperTeam India Grant',
      image: 'https://pbs.twimg.com/profile_images/1919095777583910912/9StB6ahO_400x400.jpg',
    },
    {
      id: 7,
      name: 'Aman',
      role: 'Blockchain Developer',
      achievement: 'SuperTeam India Grant',
      image: 'https://i.postimg.cc/N0FYKZVj/amanser.png',
    },
   
    {
      id: 8,
      name: 'Pranayraj',
      role: 'Rust , Solana Developer',
      achievement: 'SuperTeam India Grant',
      image: 'https://pbs.twimg.com/profile_images/1913714504824958976/W3cIz4Vv_400x400.jpg',
    },
    {
      id: 9,
      name: 'Arjun ',
      role: 'Solana Developer',
      achievement: 'SuperTeam India Grant',
      image: 'https://pbs.twimg.com/profile_images/1874318224604684288/bRQb65Y7_400x400.jpg',
    },
    
   
  ];

  const MemberProfileCard = ({ member }: { member: typeof members[0] }) => (
    <div className="bg-blue-900/30 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all">
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
      />
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="text-blue-300">{member.role}</p>
      <p className="mt-2 text-sm text-gray-300">{member.achievement}</p>
    </div>
  );

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-blue-400">Community</span> Super Heroes
          </h2>
          <p className="text-xl text-gray-300">
            Meet the exceptional individuals who make Project Athena an inspiring community.
          </p>
        </div>

     

        {/* Community Members Section */}
        <div className="mt-24">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <MemberProfileCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
