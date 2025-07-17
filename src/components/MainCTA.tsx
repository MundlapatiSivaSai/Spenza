import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const MainCTA = () => {
  // State and handler for the inline HubSpot form
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/25414858/2a572b4e-13c6-4f12-b51b-3f5fc14f1a81`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [{ name: 'email', value: email }],
            context: { pageUri: window.location.href, pageName: document.title },
          }),
        }
      );

      if (res.ok) {
        setStatus('success');
        setMessage("Thank you! We'll be in touch soon to schedule your demo.");
        setEmail('');
      } else {
        const errorData = await res.json();
        setStatus('error');
        setMessage(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* → New Two-Column Section Above */}
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
                alt="4G LTE Trail Camera"
                className="object-contain w-full h-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* → Original MainCTA Section - MODIFIED */}
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

            {/* Inline HubSpot Form */}
            <div className="animate-fade-in delay-400">
              <div className="max-w-lg mx-auto">
                {status === 'success' ? (
                  <div className="text-center p-4 bg-green-100 rounded-lg">
                    <p className="font-medium text-green-800">{message}</p>
                  </div>
                ) : (
                  <>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          className="w-full pl-12 pr-4 py-4 text-base text-gray-800 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder-gray-500"
                          placeholder="Your Work Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={status === 'loading'}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-[#FF4500] hover:bg-[#E03E00] transition-colors text-white text-lg font-semibold py-4 px-6 rounded-xl flex items-center justify-center disabled:bg-orange-300 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                          </svg>
                        ) : (
                          'Book a Free Demo'
                        )}
                      </button>
                    </form>
                    {status === 'error' && (
                      <p className="text-center mt-2 text-sm text-red-600">{message}</p>
                    )}
                  </>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCTA;