
import React from 'react';
import Hero from '@/components/Hero';
import TrailFeatures from '@/components/TrailFeatures';
import WhyChooseSpenza from '@/components/WhyChooseSpenza';
import MainCTA from '@/components/MainCTA';
const Index = () => {
  return (
    <div className="min-h-screen bg-trail-page-bg">
      <Hero />
      <TrailFeatures />
      <WhyChooseSpenza />
      <MainCTA />
    </div>
  );
};

export default Index;
