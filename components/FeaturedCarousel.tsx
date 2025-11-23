"use client";

import { useState } from "react";

const products = [
  {
    title: "High Carbon Ferro Manganese",
    desc: "High carbon ferro manganese for steel & casting applications.",
    img: "/products/hc-ferro-manganese.jpg",
  },
  {
    title: "High Carbon Silico Manganese",
    desc: "High carbon silico manganese used as a deoxidizing agent.",
    img: "/products/hc-silico-manganese.jpg",
  },
  {
    title: "Medium Carbon Silico Manganese",
    desc: "Medium carbon silico manganese for precise chemistry control.",
    img: "/products/mc-silico-manganese.jpg",
  },
  {
    title: "High Carbon Ferro Chrome",
    desc: "High carbon ferro chrome for stainless steel & alloys.",
    img: "/products/hc-ferro-chrome.jpg",
  },
  {
    title: "Low Carbon Silico Manganese",
    desc: "Low carbon silico manganese for superior alloy performance.",
    img: "/products/lc-silico-manganese.jpg",
  },
  {
    title: "Medium Carbon Ferro Manganese",
    desc: "Medium carbon ferro manganese for controlled carbon specs.",
    img: "/products/mc-ferro-manganese.jpg",
  },
];

export default function FeaturedCarousel({ orange }: { orange: string }) {
  const [page, setPage] = useState(0);
  const pageSize = 3;
  const totalPages = Math.ceil(products.length / pageSize);

  const next = () => setPage((p) => (p + 1 < totalPages ? p + 1 : 0));
  const prev = () => setPage((p) => (p - 1 >= 0 ? p - 1 : totalPages - 1));

  const visible = products.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <section
      className="
        w-full py-20 
        bg-white text-gray-900 
        dark:bg-[#0d0d0d] dark:text-gray-200
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2
          className="text-4xl font-bold text-center mb-12"
          style={{ color: orange }}
        >
          Featured Products
        </h2>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute -left-10 top-[45%] -translate-y-1/2
            w-14 h-14 rounded-full
            flex items-center justify-center
            bg-white/60 dark:bg-[#0a0a0a]/70
            border border-gray-300 dark:border-[oklch(0.78_0.19_50)]/40
            shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,140,60,0.25)]
            backdrop-blur-md
            hover:scale-110 hover:border-[oklch(0.78_0.19_50)]
            transition-all duration-300
            z-30
          "
        >
          <span className="text-2xl" style={{ color: orange }}>
            ←
          </span>
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute -right-10 top-[45%] -translate-y-1/2
            w-14 h-14 rounded-full
            flex items-center justify-center
            bg-white/60 dark:bg-[#0a0a0a]/70
            border border-gray-300 dark:border-[oklch(0.78_0.19_50)]/40
            shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,140,60,0.25)]
            backdrop-blur-md
            hover:scale-110 hover:border-[oklch(0.78_0.19_50)]
            transition-all duration-300
            z-30
          "
        >
          <span className="text-2xl" style={{ color: orange }}>
            →
          </span>
        </button>

        {/* PREMIUM 3-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 select-none">
          {visible.map((p, i) => (
            <div
              key={i}
              className="
                bg-white dark:bg-[#141414] 
                rounded-3xl overflow-hidden 
                border border-gray-200 dark:border-white/10
                shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.6)]
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_10px_35px_rgba(0,0,0,0.75)]
                hover:-translate-y-1
                transition-all duration-300
                flex flex-col
                h-[500px]
              "
            >
              {/* Image */}
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={p.img}
                  className="
                    w-full h-full object-cover 
                    opacity-95 
                    transition-all duration-500 
                    hover:scale-110
                  "
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    className="text-2xl font-semibold mb-3 tracking-tight"
                    style={{ color: orange }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href="/products"
                  className="
                    mt-6 inline-block 
                    px-6 py-3 rounded-full 
                    text-sm font-semibold text-white
                    shadow-[0_4px_12px_rgba(255,120,40,0.4)]
                    hover:shadow-[0_4px_15px_rgba(255,120,40,0.55)]
                    transition-all
                  "
                  style={{ backgroundColor: orange }}
                >
                  View Product →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All */}
        <div className="flex justify-center pt-10">
          <a
            href="/products"
            className="px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg transition"
            style={{ backgroundColor: orange }}
          >
            Explore All Products →
          </a>
        </div>
      </div>
    </section>
  );
}
