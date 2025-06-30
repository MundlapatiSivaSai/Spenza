import React from 'react';
import { 
  Globe, 
  Zap, 
  Monitor, 
  FileCheck 
} from 'lucide-react';

const TrailFeatures = () => {
  const features = [
    {
      icon: Globe,
      title: "Global 4G/5G Coverage",
      description: "Seamless connectivity across all major networks worldwide.",
    },
    {
      icon: Zap,
      title: "Multi-Carrier Support",
      description: "Auto-switch to the best local network. No manual setup.",
    },
    {
      icon: Monitor,
      title: "Unified Dashboard",
      description: "Monitor device status, usage, and connectivity in real time.",
    },
    {
      icon: FileCheck,
      title: "No Contracts",
      description: "Activate instantly—no carrier paperwork or tech headaches.",
    }
  ];

  return (
    <section className="bg-trail-bg-light py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-trail-text-primary mb-4 animate-fade-in">
            Why Trail Camera Brands Choose Spenza
          </h2>
          <p className="text-trail-text-secondary text-lg max-w-2xl mx-auto animate-fade-in delay-200">
            Everything you need to scale your trail camera business globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="group bg-white rounded-xl p-8 text-center hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-500 animate-fade-in border border-gray-100 hover:border-trail-orange/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-trail-orange/10 rounded-full flex items-center justify-center group-hover:bg-trail-orange/20 transition-colors duration-300">
                    <IconComponent 
                      size={32} 
                      className="text-trail-orange group-hover:scale-110 transition-transform duration-300" 
                      aria-label={feature.title}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-trail-text-primary mb-3 group-hover:text-trail-orange transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-trail-text-primary mb-3 leading-relaxed">
                  {feature.description}
                </p>
                {/* Removed unused detail line */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrailFeatures;
