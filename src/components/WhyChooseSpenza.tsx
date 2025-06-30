
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket, TrendingUp, Globe, BarChart3 } from 'lucide-react';

const WhyChooseSpenza = () => {
  const [activeTab, setActiveTab] = useState('fast-launch');

  const tabContent = {
    'fast-launch': {
      title: 'Fast Launch',
      icon: Rocket,
      content: 'Launch in weeks, not months. Cut connectivity costs by 70%.',
      bullets: [
        'Pre-built integrations reduce development time by 80%',
        'Use Shopify or Spenza API to bundle devices with connectivity',
        'Zero technical debt or infrastructure overhead'
      ]
    },
    'revenue-growth': {
      title: 'Revenue Growth',
      icon: TrendingUp,
      content: 'Add $5–$10 recurring revenue per camera, billing fully automated.',
      bullets: [
        'Predictable monthly recurring revenue stream',
        'Zero billing infrastructure required on your end',
        'Automated subscription management and renewals'
      ]
    },
    'global-reliability': {
      title: 'Global Reliability',
      icon: Globe,
      content: 'Seamless 4G/5G in 180+ countries with neutral roaming.',
      bullets: [
        'Redundant network connections ensure 99.9% uptime',
        'Automatic failover to strongest available signal',
        'Real-time network optimization algorithms'
      ]
    },
    'single-pane': {
      title: 'Single‑pane Management',
      icon: BarChart3,
      content: 'One dashboard for usage, billing, support + API.',
      bullets: [
        'Comprehensive analytics and usage tracking',
        'RESTful APIs for seamless integration with existing systems',
        'Advanced reporting and insights for business optimization'
      ]
    }
  };

  return (
    <section className="bg-trail-page-bg py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-trail-orange/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-trail-text-primary mb-4">
            What Sets Spenza Apart
          </h2>
          <p className="text-trail-text-secondary text-lg max-w-2xl mx-auto">
            All-in-one platform for scaling your trail camera business worldwide
          </p>
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-2 bg-white shadow-lg rounded-xl">
            {Object.entries(tabContent).map(([key, tab]) => {
              const IconComponent = tab.icon;
              return (
                <TabsTrigger 
                  key={key}
                  value={key}
                  className={`
                    flex flex-col items-center p-4 rounded-lg transition-all duration-300 hover:bg-trail-orange/5
                    ${activeTab === key 
                      ? 'text-trail-orange bg-trail-orange/10 shadow-md transform scale-105' 
                      : 'text-trail-text-secondary hover:text-trail-orange'
                    }
                  `}
                >
                  <IconComponent className="h-6 w-6 mb-2" />
                  <span className="text-sm font-medium">{tab.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {Object.entries(tabContent).map(([key, tab]) => (
            <TabsContent 
              key={key}
              value={key}
              className="animate-fade-in"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <p className="text-2xl md:text-3xl text-trail-text-primary mb-6 leading-relaxed font-medium">
                    {tab.content}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tab.bullets.map((bullet, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-4 bg-trail-orange/5 rounded-lg hover:bg-trail-orange/10 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-trail-orange rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <span className="text-trail-text-secondary leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WhyChooseSpenza;
