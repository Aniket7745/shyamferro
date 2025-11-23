"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const productSectionRef = useRef<HTMLDivElement>(null);

  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const orange = "oklch(0.78 0.19 50)";

  const products = [
    {
      id: "high-carbon-ferro-manganese",
      name: "High Carbon Ferro Manganese",
      tagline: "Strength, reliability & core steel performance",
      image: "/products/HighCarbonFerroManganese.png",
      description:
        "High Carbon Ferro Manganese enhances hardness, strength, and resistance to wear. It acts as a cost-effective deoxidizer and alloying component in steelmaking.",
    },
    {
      id: "high-carbon-silico-manganese",
      name: "High Carbon Silico Manganese",
      tagline: "Powerful deoxidizer for robust steelmaking",
      image: "/products/HighCarbonSilicoManganese.jpg",
      description:
        "A high-performance alloy used as a deoxidizer and alloying agent across various steel applications.",
    },
    {
      id: "medium-carbon-silico-manganese",
      name: "Medium Carbon Silico Manganese",
      tagline: "Balanced chemistry. Uniform steel structure.",
      image: "/products/MediumCarbonSilicoManganese.png",
      description:
        "Ensures controlled composition and stable mechanical properties during alloy steel production.",
    },
    {
      id: "high-carbon-ferro-chrome",
      name: "High Carbon Ferro Chrome",
      tagline: "High-grade chromium alloy for tough stainless steel",
      image: "/products/HighCarbonFerroChrome.jpg",
      description:
        "Widely used in stainless steel and alloy steel manufacturing for its strong chromium content.",
    },
    {
      id: "low-carbon-silico-manganese",
      name: "Low Carbon Silico Manganese",
      tagline: "Low-carbon precision for high-end steelmaking",
      image: "/products/LowCarbonSilicoManganese.jpg",
      description:
        "Ideal for high-quality alloy steels that require strict carbon control.",
    },
    {
      id: "medium-carbon-ferro-manganese",
      name: "Medium Carbon Ferro Manganese",
      tagline: "Reliable alloy for strong deoxidation & refining",
      image: "/products/MediumCarbonFerroManganese.png",
      description:
        "Used in alloy steel production for its strong deoxidizing and desulfurizing properties.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black dark:bg-[#0a0a0a] dark:text-white transition-colors duration-300">

      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
        >
          <source src="/homepage/banner_video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            Engineering Strength.
            <br /> Delivering Precision.
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10">
            From Ferro Manganese to Silico Manganese and Ferro Chrome —
            engineered for global steel excellence.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProducts}
            className="
              px-6 py-3 text-lg font-medium rounded-full
              border border-black text-black hover:bg-black hover:text-white
              dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black
              transition-all duration-300
            "
          >
            View Products ↓
          </motion.button>
        </div>
      </section>

      {/* PRODUCT SECTION - NEW NOTION STYLE */}
      <section ref={productSectionRef} className="py-24 bg-neutral-50 dark:bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">

          {/* SECTION TITLE */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16">
            Our Products
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-12">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-neutral-200/50 dark:border-neutral-800
                     bg-white dark:bg-black/40 
                     shadow-sm hover:shadow-xl transition-all p-6 md:p-8"
              >
                {/* IMAGE */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* TEXT */}
                <h3 className="text-2xl font-bold mb-2" style={{ color: orange }}>
                  {product.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  {product.tagline}
                </p>

                <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* BUTTONS */}
                <div className="flex items-center gap-6 mt-auto">
                  <Link
                    href={`/enquiry?product=${encodeURIComponent(product.name)}`}
                    className="px-5 py-2.5 rounded-md font-medium text-white shadow-md hover:opacity-90"
                    style={{ backgroundColor: orange }}
                  >
                    Enquire Now
                  </Link>

                  <Link
                    href={`/products/${product.id}`}
                    className="font-medium text-orange-600 dark:text-orange-300 hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
