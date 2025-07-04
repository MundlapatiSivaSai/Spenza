import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden bg-trail-page-bg pb-10 md:pb-20 lg:pb-24">
      {/* Header: Logo left, Contact Us right */}
      <div className="mx-auto max-w-6xl px-8 pt-4">
        <div className="flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dw2h36vj0/image/upload/v1751288264/ozapxrldbvnqvd5nmt12.png"
            alt="Spenza Logo"
            className="h-10 w-auto object-contain"
          />
          <a
            href="https://spenza.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white border border-trail-orange text-trail-orange font-semibold px-6 py-2 shadow hover:bg-trail-orange/10 transition-all text-base">
              Contact Us
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
            <div className="mb-2">
              <a
                href="https://calendly.com/spenza/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="bg-trail-orange hover:bg-gradient-to-r hover:from-trail-orange-light hover:to-trail-orange-lighter active:bg-trail-red-medium text-trail-page-bg px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl flex items-center transition-all">
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
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

      {/* Trusted By Banner (reduced spacing below) */}
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
