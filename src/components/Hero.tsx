import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, X } from "lucide-react";

const LOGOS = [
  { src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/proxidize-official-logo-white.png_n4008h.webp", alt: "Proxidize" },
  { src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/logo_light_p6kfgh.png", alt: "RSVP Wireless" },
  { src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608290/qt_q_95_juzf2t.webp", alt: "Butlr" },
  { src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/Lockup-Gradient-Black-180-x-60_ceezwf.svg", alt: "WeLink" },
  { src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/65c0d669f5c3943a370395b4_Logo_zrxd3k.svg", alt: "NDL" },
];

const Hero = () => {
  // State for the main hero form
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // State for the new modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for the modal's form
  const [modalEmail, setModalEmail] = useState("");
  const [modalSubmitted, setModalSubmitted] = useState(false);
  const [modalError, setModalError] = useState("");
  const [modalLoading, setModalLoading] = useState(false);

  // Reset modal state when it closes
  useEffect(() => {
    if (!isModalOpen) {
      setTimeout(() => {
        setModalEmail('');
        setModalSubmitted(false);
        setModalError('');
        setModalLoading(false);
      }, 300); // Delay to allow for closing animation
    }
  }, [isModalOpen]);


  // Handler for the main hero form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid work email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/25414858/2a572b4e-13c6-4f12-b51b-3f5fc14f1a81",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ name: "email", value: email }],
            context: { pageUri: window.location.href, pageName: document.title },
          }),
        }
      );
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  // Handler for the modal's form
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    setModalError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(modalEmail)) {
      setModalError("Please enter a valid work email.");
      return;
    }
    setModalLoading(true);
    try {
      const res = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/25414858/2a572b4e-13c6-4f12-b51b-3f5fc14f1a81",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: [{ name: "email", value: modalEmail }],
            context: { pageUri: window.location.href, pageName: document.title },
          }),
        }
      );
      if (res.ok) {
        setModalSubmitted(true);
      } else {
        setModalError("Something went wrong. Please try again.");
      }
    } catch {
      setModalError("Something went wrong. Please try again.");
    }
    setModalLoading(false);
  };

  return (
    <section className="relative overflow-hidden bg-trail-page-bg">
      <div className="mx-auto max-w-6xl px-8 pt-4">
        <div className="flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1751288264/ozapxrldbvnqvd5nmt12.png"
            alt="Spenza Logo"
            className="h-10 w-auto object-contain"
          />
          <Button 
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FF4500] text-white font-semibold px-6 py-2 shadow hover:bg-[#e03e00] transition-all text-base flex items-center gap-2 rounded-full"
          >
            <MessageSquare className="w-5 h-5" />
            Chat with Us
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-trail-orange/10 border border-trail-orange/20 mb-6 text-xs font-semibold text-trail-orange">
              🚀 Trusted by Leading Trail Camera Brands
            </div>
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight mb-4">
              Add Connectivity & <br />
              Earn Upto <span className="text-trail-orange">$10/Month</span>
              <br />
              <span>Per Trail Camera</span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl text-trail-text-secondary mb-8 font-medium">
              Bundle global 4G/5G eSIMs with every device—no contracts, no carrier headaches, no engineering lift.
            </h2>

            <div className="mb-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto items-stretch bg-white rounded-full shadow-[0_2px_8px_0_rgba(16,30,54,0.08)] border border-gray-200" style={{ minHeight: 64, background: "#fff" }}>
                  <div className="flex items-center px-6">
                    <Mail className="w-7 h-7 text-gray-400" />
                  </div>
                  <input type="email" required className="flex-1 px-4 py-4 text-lg text-gray-500 bg-transparent focus:outline-none placeholder-gray-400 font-medium rounded-full" placeholder="Your Work Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: "none", background: "transparent" }} disabled={loading} />
                  <button type="submit" disabled={loading} className="bg-[#FF4500] hover:bg-[#e03e00] transition-all text-white text-lg font-semibold px-10 rounded-full ml-[-2.2rem] shadow flex items-center justify-center" style={{ border: "none", borderTopLeftRadius: 0, borderBottomLeftRadius: 0, height: "100%", minHeight: "64px", zIndex: 1, minWidth: 180 }}>
                    {loading ? <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg> : "Book a Free Demo"}
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 font-medium text-green-600 bg-green-50 rounded-full">Thank you! We’ll be in touch soon.</div>
              )}
              {error && <div className="text-center mt-2 text-sm text-red-500">{error}</div>}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 mb-4">
              <span className="flex items-center text-sm text-trail-text-secondary bg-trail-orange/10 px-2.5 py-1 rounded-lg"><svg className="w-4 h-4 text-trail-orange mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor"/><path d="M12 7v5l3 3" stroke="currentColor" strokeLinecap="round"/></svg>15 min Demo</span>
              <span className="flex items-center text-sm text-trail-text-secondary bg-green-50 px-2.5 py-1 rounded-lg"><svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>No commitment</span>
              <span className="flex items-center text-sm text-trail-text-secondary bg-trail-orange/10 px-2.5 py-1 rounded-lg"><svg className="w-4 h-4 text-trail-orange mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8L21 10h-8l1-8z" stroke="currentColor" strokeLinejoin="round"/></svg>1 week Go-Live</span>
            </div>
          </div>

          <div className="flex justify-end">
             <div className="w-80 h-56 md:w-[26rem] md:h-64 rounded-3xl bg-gradient-to-tr from-orange-200 to-orange-100 border-2 border-dashed border-trail-orange flex items-center justify-center shadow-lg overflow-hidden">
                <img src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1751277191/pgilicokjimeo0cqwne6.jpg" alt="Trail Camera mounted on a tree" className="object-cover w-full h-full" loading="lazy" />
              </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12 mb-10">
          <div className="group hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="text-3xl md:text-4xl font-bold text-trail-orange mb-2">180+</div>
            <div className="text-trail-text-secondary">Countries Covered</div>
          </div>
          <div className="group hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="text-3xl md:text-4xl font-bold text-trail-orange mb-2">$10</div>
            <div className="text-trail-text-secondary">Per Month/Camera</div>
          </div>
          <div className="group hover:transform hover:scale-105 transition-all duration-300 text-center">
            <div className="text-3xl md:text-4xl font-bold text-trail-orange mb-2">70%</div>
            <div className="text-trail-text-secondary">Reduction in SIM Operations</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-white via-white to-gray-50 py-10 px-4 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex-1 w-full md:w-1/2">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              <span className="text-[#FF4500]">100+</span>
              <span className="text-black"> leading innovators<br />trust </span>
              <span className="text-[#FF4500]">Spenza</span>
            </h2>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-3 grid-rows-2 gap-6">
            {LOGOS.map((logo, i) => (
              <div key={i} className="flex items-center justify-center bg-white rounded-2xl shadow-sm h-24 min-w-[160px]">
                <img src={logo.src} alt={logo.alt} className="object-contain max-h-12 max-w-[120px]" />
              </div>
            ))}
            {LOGOS.length % 3 !== 0 && Array.from({ length: 3 - (LOGOS.length % 3) }).map((_, idx) => ( <div key={`empty-${idx}`} /> ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center font-sans">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-[#FDFBF7] rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl text-center">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="w-full">
              {!modalSubmitted ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h2>
                  <p className="text-gray-500 mb-6">Enter your email to begin our discussion!</p>
                  <form onSubmit={handleModalSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" required className="w-full pl-11 pr-4 py-3 text-base text-gray-800 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/50 placeholder-gray-400" placeholder="Enter your email address" value={modalEmail} onChange={(e) => setModalEmail(e.target.value)} disabled={modalLoading} />
                    </div>
                    <button type="submit" disabled={modalLoading} className="w-full bg-[#FF6B00] hover:bg-[#E66000] transition-colors text-white text-base font-semibold py-3 px-6 rounded-lg flex items-center justify-center disabled:bg-orange-300">
                      {modalLoading ? <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" /></svg> : 'Submit'}
                    </button>
                  </form>
                  {modalError && <p className="text-center mt-2 text-sm text-red-600">{modalError}</p>}
                </>
              ) : (
                <div className="min-h-[150px] flex flex-col justify-center">
                  <div className="text-center py-4 bg-green-100/50 rounded-lg">
                    <p className="font-medium text-green-700">Thank you! We'll be in touch soon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;