import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const LOGOS = [
  {
    src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/proxidize-official-logo-white.png_n4008h.webp",
    alt: "Proxidize",
  },
  {
    src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/logo_light_p6kfgh.png",
    alt: "RSVP Wireless",
  },
  {
    src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608290/qt_q_95_juzf2t.webp",
    alt: "Butlr",
  },
  {
    src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/Lockup-Gradient-Black-180-x-60_ceezwf.svg",
    alt: "WeLink",
  },
  {
    src: "https://res.cloudinary.com/dw2h36vj0/image/upload/v1751608289/65c0d669f5c3943a370395b4_Logo_zrxd3k.svg",
    alt: "NDL",
  },
];

const Hero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: [{ name: "email", value: email }],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
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

  return (
    <section className="relative overflow-hidden bg-trail-page-bg pb-10 md:pb-20 lg:pb-24">
      {/* Header: Logo left, WhatsApp Chat right */}
      <div className="mx-auto max-w-6xl px-8 pt-4">
        <div className="flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1751288264/ozapxrldbvnqvd5nmt12.png"
            alt="Spenza Logo"
            className="h-10 w-auto object-contain"
          />
          <a
            href="https://wa.me/16697775275"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] text-white font-semibold px-6 py-2 shadow hover:bg-[#128C7E] transition-all text-base flex items-center gap-2 rounded-full">
              {/* WhatsApp icon */}
              <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" className="text-white">
                <path d="M16 2.993C8.82 2.993 2.993 8.82 2.993 16c0 2.816.823 5.466 2.375 7.77L2.1 29.885c-.086.26-.015.545.183.742.197.197.483.269.743.182l6.151-2.236A13.006 13.006 0 0 0 16 29.007C23.18 29.007 29.007 23.18 29.007 16S23.18 2.993 16 2.993zm0 23.55c-2.457 0-4.846-.7-6.886-2.02l-.494-.314-3.655 1.33 1.297-3.781-.322-.488A10.408 10.408 0 0 1 5.592 16C5.592 9.77 10.77 4.592 17 4.592c6.23 0 11.408 5.178 11.408 11.408 0 6.23-5.178 11.408-11.408 11.408zM23.32 19.978c-.328-.164-1.94-.961-2.24-1.07-.299-.109-.516-.164-.734.164-.217.327-.84 1.07-1.03 1.288-.19.217-.379.246-.706.082-.327-.164-1.382-.509-2.634-1.62-.974-.868-1.63-1.939-1.823-2.266-.19-.328-.021-.504.143-.668.147-.146.327-.38.49-.57.163-.19.218-.328.327-.547.109-.217.055-.409-.028-.573-.082-.164-.733-1.77-1.005-2.426-.264-.636-.535-.551-.734-.561l-.623-.012c-.19 0-.495.07-.757.328-.262.259-1 1-1 2.438 0 1.439 1.027 2.828 1.172 3.025.144.198 2.024 3.095 5.014 4.212.7.241 1.243.385 1.669.494.7.178 1.338.153 1.84.093.561-.066 1.94-.791 2.216-1.557.273-.765.273-1.419.191-1.555-.081-.137-.294-.218-.622-.383z" />
              </svg>
              Chat with Us
            </Button>
          </a>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
          {/* LEFT: Text Content */}
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

            {/* Custom Email Row */}
            <div className="mb-6">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full max-w-xl mx-auto items-stretch bg-white rounded-full shadow-[0_2px_8px_0_rgba(16,30,54,0.08)] border border-gray-200"
                  style={{ minHeight: 64, background: "#fff" }}
                >
                  <div className="flex items-center px-6">
                    {/* Email icon */}
                    <svg
                      className="w-7 h-7 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2"
                        y="6"
                        width="20"
                        height="12"
                        rx="4"
                        stroke="currentColor"
                        fill="none"
                      />
                      <path
                        d="M4 8l8 6 8-6"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    className="flex-1 px-4 py-4 text-lg text-gray-500 bg-transparent focus:outline-none placeholder-gray-400 font-medium rounded-full"
                    placeholder="Your Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      border: "none",
                      background: "transparent",
                    }}
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#FF4500] hover:bg-[#e03e00] transition-all text-white text-lg font-semibold px-10 rounded-full ml-[-2.2rem] shadow flex items-center justify-center"
                    style={{
                      border: "none",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                      height: "100%",
                      minHeight: "64px",
                      zIndex: 1,
                      minWidth: 180,
                    }}
                  >
                    {loading ? (
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                    ) : (
                      "Book a Free Demo"
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-4 font-medium text-green-600">
                  Thank you! We’ll be in touch soon.
                </div>
              )}
              {error && (
                <div className="text-center mt-2 text-sm text-red-500">{error}</div>
              )}
            </div>

            {/* Features Row */}
            <div className="flex flex-wrap items-center gap-4 mt-3 mb-4">
              <span className="flex items-center text-sm text-trail-text-secondary bg-trail-orange/10 px-2.5 py-1 rounded-lg">
                {/* Clock icon */}
                <svg className="w-4 h-4 text-trail-orange mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor"/>
                  <path d="M12 7v5l3 3" stroke="currentColor" strokeLinecap="round"/>
                </svg>
                15 min Demo
              </span>
              <span className="flex items-center text-sm text-trail-text-secondary bg-green-50 px-2.5 py-1 rounded-lg">
                {/* Check icon */}
                <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                No commitment
              </span>
              <span className="flex items-center text-sm text-trail-text-secondary bg-trail-orange/10 px-2.5 py-1 rounded-lg">
                {/* Lightning icon */}
                <svg className="w-4 h-4 text-trail-orange mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8L21 10h-8l1-8z" stroke="currentColor" strokeLinejoin="round"/>
                </svg>
                1 week Go-Live
              </span>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-end">
            <div className="w-80 h-56 md:w-[26rem] md:h-64 rounded-3xl bg-gradient-to-tr from-trail-orange-light to-trail-bg-light border-2 border-dashed border-trail-orange flex items-center justify-center shadow-lg overflow-hidden">
              <img
                src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1751277191/pgilicokjimeo0cqwne6.jpg"
                alt="Trail Camera mounted on a tree"
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        {/* STATS GRID */}
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

      {/* Trusted By Banner */}
      <section className="bg-gradient-to-br from-white via-white to-gray-50 py-10 px-4 mt-0 mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: Headline */}
          <div className="flex-1 w-full md:w-1/2">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">
              <span className="text-[#FF4500]">100+</span>
              <span className="text-black"> leading innovators<br />trust </span>
              <span className="text-[#FF4500]">Spenza</span>
            </h2>
          </div>
          {/* Right: Logos */}
          <div className="w-full md:w-1/2 grid grid-cols-3 grid-rows-2 gap-6">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white rounded-2xl shadow-sm h-24 min-w-[160px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain max-h-12 max-w-[120px]"
                />
              </div>
            ))}
            {/* Fill last grid cell if odd number of logos */}
            {LOGOS.length % 3 !== 0 &&
              Array.from({ length: 3 - (LOGOS.length % 3) }).map((_, idx) => (
                <div key={`empty-${idx}`} />
              ))
            }
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
