import React from 'react';
import { NavBar } from '../components/NavBar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { SecretariaSmart } from '../components/SecretariaSmart';
import { Services } from '../components/Services';
import { SocialProof } from '../components/SocialProof';
import { Plans } from '../components/Plans';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-[#3CEFFF] selection:text-black">
      <NavBar />
      <Hero />
      <About />
      <SecretariaSmart />
      <Services />
      <SocialProof />
      <Plans />
      <Footer />
    </div>
  );
};
