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
      image: "/products/hc-ferro-manganese.jpg",
      description:
        "High Carbon Ferro Manganese plays a critical role in steel production, enhancing hardness, strength, and resistance to wear. It acts as a cost-effective deoxidizer and alloying component in various grades of steel.",
    },
    {
      id: "high-carbon-silico-manganese",
      name: "High Carbon Silico Manganese",
      tagline: "Powerful deoxidizer for robust steelmaking",
      image: "/products/hc-silico-manganese.jpg",
      description:
        "A high-performance alloy used as a deoxidizer and alloying agent.",
    },
    {
      id: "medium-carbon-silico-manganese",
      name: "Medium Carbon Silico Manganese",
      tagline: "Balanced chemistry. Uniform steel structure.",
      image: "/products/mc-silico-manganese.jpg",
      description:
        "Provides controlled composition and stable mechanical properties.",
    },
    {
      id: "high-carbon-ferro-chrome",
      name: "High Carbon Ferro Chrome",
      tagline: "High-grade chromium alloy for tough stainless steel",
      image: "/products/hc-ferro-chrome.jpg",
      description:
        "Widely used for stainless steel and alloy steel production.",
    },
    {
      id: "low-carbon-silico-manganese",
      name: "Low Carbon Silico Manganese",
      tagline: "Low-carbon precision for high-end steelmaking",
      image: "/products/lc-silico-manganese.jpg",
      description:
        "Ideal for advanced alloy steels requiring strict low-carbon control.",
    },
    {
      id: "medium-carbon-ferro-manganese",
      name: "Medium Carbon Ferro Manganese",
      tagline: "Reliable alloy for strong deoxidation & refining",
      image: "/products/mc-ferro-manganese.jpg",
      description:
        "Used in alloy steel production for strong deoxidizing and desulfurizing properties.",
    },
  ];

  return (
    <main
      className="
        min-h-screen 
        bg-white text-black 
        dark:bg-black dark:text-white 
        transition-colors duration-300
      "
    >
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute inset-0 w-full h-full object-cover 
            opacity-20 dark:opacity-30
          "
        >
          <source src="/homepage/banner_video.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Engineering Strength.
            <br /> Delivering Precision.
          </h1>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-10">
            From Ferro Manganese to Silico Manganese and Ferro Chrome —
            engineered for global steel excellence.
          </p>

          {/* SCROLL BUTTON */}
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

      {/* PRODUCT SECTION */}
      <div ref={productSectionRef}>
        {products.map((product, index) => {
          const reversed = index % 2 === 1;

          return (
            <section
              key={product.id}
              className={`
                min-h-[90vh] flex flex-col md:flex-row items-center
                ${reversed ? "md:flex-row-reverse" : ""}
                bg-neutral-100 dark:bg-neutral-950
                transition-colors duration-300
              `}
            >
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: reversed ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full md:w-1/2 h-[70vh]"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`
                  w-full md:w-1/2 px-10 md:px-20 py-12
                  ${reversed ? "text-right" : "text-left"}
                `}
              >
                <h2
                  className="text-4xl font-bold mb-3"
                  style={{ color: orange }}
                >
                  {product.name}
                </h2>

                <h3 className="text-gray-600 dark:text-gray-300 italic mb-6">
                  {product.tagline}
                </h3>

                <p className="text-gray-700 dark:text-gray-400 text-lg leading-relaxed mb-10">
                  {product.description}
                </p>

                <div
                  className={`flex gap-6 ${
                    reversed ? "justify-end" : "justify-start"
                  }`}
                >
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={`/enquiry?product=${encodeURIComponent(
                        product.name,
                      )}`}
                      className="
                        px-6 py-3 rounded-md font-medium text-white
                        shadow-md
                        hover:opacity-90
                      "
                      style={{ backgroundColor: orange }}
                    >
                      Enquire Now
                    </Link>
                  </motion.div>

                  <Link
                    href={`/products/${product.id}`}
                    className="
                      font-medium 
                      text-orange-600 dark:text-orange-300 
                      hover:underline
                    "
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
