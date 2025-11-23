"use client";

import { useEffect } from "react";
import FeaturedCarousel from "../components/FeaturedCarousel";
export default function HomePage() {
  const scrollToAbout = () => {
    const section = document.getElementById("about-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // Brand Orange
  const orange = "oklch(0.78 0.19 50)";
  const orangeHover = "oklch(0.72 0.19 50)";

  return (
    <div
      className="
        w-full text-gray-900 dark:text-gray-200 
        bg-[radial-gradient(ellipse_at_top,rgba(255,175,90,0.08),transparent_60%)]
        dark:bg-black
      "
    >
      {/* ================================================================== */}
      {/*                            HERO SECTION                           */}
      {/* ================================================================== */}
      <section
        className="
          w-full h-screen flex flex-col items-center justify-center text-center px-6
          relative -mt-16 pt-16
        "
      >
        {/* Soft concentric circles (premium white-mode effect) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.5] 
            bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,transparent_60%)]
            dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]
        "
        />

        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-3xl 
                       text-gray-900 dark:text-white leading-tight drop-shadow-sm"
        >
          SHYAM FERRO ALLOYS LTD
        </h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Premium Ferro Alloys with global trust, precision engineering and
          unmatched quality.
        </p>

        <div className="mt-10 flex gap-4">
          {/* Explore Button */}
          <a
            href="/products"
            className="px-8 py-3 rounded-full text-white text-lg font-medium transition-all shadow-[0_6px_18px_rgba(253,116,53,0.45)]"
            style={{ backgroundColor: orange }}
          >
            Explore Products
          </a>

          {/* Outline Button */}
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 rounded-full text-lg font-medium transition-all"
            style={{
              border: `2px solid ${orange}`,
              color: orange,
              backgroundColor: "white",
            }}
          >
            Learn More
          </button>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 text-gray-500 dark:text-gray-300 hover:opacity-80 text-4xl animate-bounce"
        >
          ↓
        </button>
      </section>

      {/* ================================================================== */}
      {/*                              ABOUT                                */}
      {/* ================================================================== */}
      <section id="about-section" className="max-w-5xl mx-auto px-6 py-24">
        <h2
          className="text-4xl font-bold text-center mb-8 tracking-tight drop-shadow-sm"
          style={{ color: orange }}
        >
          Corporate Overview
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          We are one of India’s largest Ferro Alloy producers with world-class
          operational units in Burdwan, Durgapur & Vishakhapatnam.
          <strong className="font-semibold"> 400,000 MT (125 MVA) </strong>
          annual capacity powers trusted industries worldwide.
        </p>
      </section>

      {/* FIXED — PERFECT 3-CARD HORIZONTAL CAROUSEL */}
      <FeaturedCarousel orange={orange} />
      {/*                           GLOBAL PRESENCE                           */}
      <section className="relative w-full py-28">
        <div
          className="absolute inset-0 opacity-[0.06] 
                     bg-[url('/worldmap.png')] bg-cover bg-center"
        />

        <div className="relative max-w-5xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-10 drop-shadow-sm"
            style={{ color: orange }}
          >
            Global Presence
          </h2>

          <div
            className="
            bg-white dark:bg-[#151515] 
            p-12 rounded-3xl shadow-xl 
            border border-gray-200 dark:border-white/10
            backdrop-blur-xl
          "
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              We export across all major continents with hubs in
              <strong>
                {" "}
                Seattle, Vancouver, New Jersey, Savannah, Santos, Buenos Aires,
                Hamburg, Rotterdam, Dubai, Singapore, Shanghai, Tokyo,
                Osaka{" "}
              </strong>
              . Ensuring fast delivery and consistent industrial support
              globally.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
