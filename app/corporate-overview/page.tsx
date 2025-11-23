"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CorporateOverviewPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 pb-20 sm:pb-32 bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 transition-colors">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-20 sm:space-y-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4 px-2"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Corporate <span className="text-orange-500">Overview</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl sm:max-w-2xl mx-auto">
            A creative, Notion-style company profile designed for a modern
            corporate experience.
          </p>
        </motion.div>

        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-neutral-200 dark:border-neutral-800 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-orange-500">
            About Us
          </h2>

          <div className="space-y-4 sm:space-y-5 leading-relaxed text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
            <p>
              We are one of the leading Manufacturer-Exporters of Ferro Alloys
              with a yearly turnover exceeding Rs. 2500 Crores, operating
              manufacturing units across Burdwan (W.B), Durgapur (W.B) and
              Visakhapatnam (Sundaram Alloys Ltd).
            </p>
            <p>
              Established in 1995, Shyam Ferro Alloys brings over 25 years of
              expertise in steel, alloy steel and stainless steel industries,
              maintaining a strong legacy of delivering high-quality products.
            </p>
            <p>
              Our clientele spans across India and global markets. Our products
              reach nearly all major consumers worldwide—directly or indirectly.
            </p>
            <p>
              We procure the highest-quality raw materials, including Manganese
              Ore sourced from Australia, Gabon, South Africa, Brazil, and other
              mining-rich regions.
            </p>
            <p>
              As a major stainless and alloy steel manufacturer in Eastern
              India, we are certified with ISO 9001:2015 by NQAQSR Certification
              Pty Ltd.
            </p>
            <p>
              Consistent quality and customer satisfaction are the foundation of
              our operations. Every product undergoes rigorous screening,
              processing, and third-party testing prior to dispatch.
            </p>
            <p>
              With an annual production capacity of 400,000 MT and a fully
              integrated production line, our cost structure remains among the
              most competitive in the Ferro Alloy and Alloy Steel industry.
            </p>
          </div>
        </motion.div>

        {/* Group Companies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl bg-white dark:bg-neutral-900 p-6 sm:p-10 border border-neutral-200 dark:border-neutral-800 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 sm:mb-6">
            Group Companies
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            <strong>Sundaram Alloys Ltd.</strong> is a 100% subsidiary company
            of Shyam Ferro Alloys Ltd. For more details, visit
            <span className="text-orange-500 font-medium">
              {" "} www.sundaramalloys.com
            </span>.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg space-y-10 sm:space-y-12"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-3 sm:mb-4">
              Vision
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              We operate with uncompromising ethical standards, aiming for
              success rooted in responsibility, respect and determination…
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-3 sm:mb-4">
              Mission
            </h2>
            <div className="space-y-2 sm:space-y-3 text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
              <p>• To be among the top global Ferro Alloy producers.</p>
              <p>• To be one of the most cost-effective manufacturers.</p>
              <p>• To build a strong global presence.</p>
              <p>• To lead in Stainless Steel production.</p>
              <p>• To achieve maximum energy utilization.</p>
              <p>• To promote environment-friendly processes.</p>
            </div>
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 sm:mb-6">
            Awards & Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
            <p>• ISO 9001:2008 Certification</p>
            <p>• Star Export House</p>
            <p>• Special Achievement Award – EEPC</p>
            <p>• Authorized Economic Operator – Ministry of Finance</p>
            <p>• Dhatu Nayak Award (2005)</p>
            <p>• Export Excellence Awards – EEPC</p>
          </div>
        </motion.div>

        {/* CSR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 sm:mb-6">
            Corporate Social Responsibility
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            We believe every organisation carries a responsibility…
          </p>
        </motion.div>

        {/* Policies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-4 sm:mb-6">
            Policies
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
            • Vigil Mechanism Policy
            <br />• CSR Policy
          </p>
        </motion.div>
      </section>
    </main>
  );
}
