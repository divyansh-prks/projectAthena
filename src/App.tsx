import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import TwitterScroller from './components/TwitterScroller';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        <JoinUs />
        <TwitterScroller />
      </main>
      <Footer />
    </div>
  );
}

export default App;