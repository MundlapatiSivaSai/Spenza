import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

const MainCTA = () => {
  return (
    <>
      {/* → New Two‑Column Section Above */}
      <section className="py-20 bg-white">
  <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row items-center justify-center gap-14">
    {/* Text Side */}
    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
     <h3 className="text-3xl font-bold text-gray-900">
  Bundle <span className="text-trail-orange">Connectivity</span> to Your Trail Cameras
</h3>

      <p className="text-lg text-gray-700">
  With <span className="font-bold">Spenza</span>, you can easily bundle global 4G/5G eSIM connectivity with your trail cameras—no carrier contracts or technical headaches.
</p>

      <p className="text-lg text-gray-700">
        Simply launch your branded online store in just 7 days using Shopify and Spenza, resell flexible data plans, and manage all your devices from a single dashboard.
      </p>
      <p className="text-lg text-gray-700">
        Offer connected trail cameras with instant activation and predictable monthly revenue—no network negotiations or extra engineering needed.
      </p>
    </div>

    {/* Image Side */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-full max-w-xs md:max-w-md aspect-square bg-gray-200 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1751276319/1_91245e13-3f84-4bd1-96f0-4e9845315eb7_xbitj0.webp"
          // or use your local: src="/mnt/data/c8cce00d-2dbd-487a-8132-becb29a0ab7e.png"
          alt="4G LTE Trail Camera"
          className="object-contain w-full h-full rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>


      {/* → Original MainCTA Section */}
      <section className="bg-gradient-to-br from-trail-page-bg via-white to-trail-bg-light py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-trail-orange opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-trail-orange-light opacity-5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-trail-text-primary mb-4 mx-auto">
              Ready to scale your trail-camera business?
            </h2>
            <p className="text-lg md:text-xl text-trail-text-secondary mb-12 mx-auto max-w-3xl">
              Join 100+ brands already earning predictable revenue with Spenza's unified platform
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-400">
              <a href="https://spenza.com/" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                <Button 
                  className="group bg-trail-orange hover:bg-gradient-to-r hover:from-trail-orange-light hover:to-trail-orange-lighter text-trail-page-bg px-10 py-5 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Know More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://calendly.com/spenza/discovery" target="_blank" rel="noopener noreferrer" tabIndex={0}>
                <Button 
                  variant="outline"
                  className="group border-2 border-trail-orange text-trail-orange hover:bg-trail-orange hover:text-trail-page-bg px-10 py-5 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl bg-white"
                >
                  <Calendar className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Book a Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCTA;
