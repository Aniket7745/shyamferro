"use client";

import { motion } from "framer-motion";

export default function QualityControlPage() {
  const orange = "oklch(0.78 0.19 50)";

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 pt-20 pb-28 transition-colors">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: orange }}
        >
          Quality Control
        </motion.h1>

        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          A complete end-to-end quality assurance system that governs every
          stage of ferro alloy production — from raw material selection to
          finished metal delivery.
        </p>
      </section>

      {/* TIMELINE SECTION */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 w-px bg-neutral-300 dark:bg-neutral-800 h-full"></div>

          <div className="space-y-16">
            {/* STEP 1 */}
            <div className="relative flex md:flex-row flex-col md:items-center gap-8">
              <div className="md:w-1/2"></div>

              {/* Dot */}
              <div
                className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950"
                style={{ backgroundColor: orange }}
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md"
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: orange }}
                >
                  Raw Material Feeding
                </h3>
                <p className="leading-relaxed">
                  Shyam Ferro Alloys Ltd. maintains strict quality systems
                  beginning with raw material feeding. Inspection and laboratory
                  reporting are conducted based on IS 1473–1960 standards for
                  Manganese Ores and other relevant IS specifications.
                </p>
              </motion.div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex md:flex-row flex-col-reverse md:items-center gap-8">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md"
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: orange }}
                >
                  Lab Reports & Material Verification
                </h3>
                <p className="leading-relaxed">
                  After reviewing test reports, process metallurgists verify
                  physical and chemical characteristics before materials enter
                  the furnace through a precise batch weighing system.
                </p>
              </motion.div>

              {/* Dot */}
              <div
                className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950"
                style={{ backgroundColor: orange }}
              />

              <div className="md:w-1/2"></div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex md:flex-row flex-col md:items-center gap-8">
              <div className="md:w-1/2"></div>

              {/* Dot */}
              <div
                className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950"
                style={{ backgroundColor: orange }}
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md"
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: orange }}
                >
                  Hot Sample Testing (2–3 Hour Cycle)
                </h3>
                <p className="leading-relaxed">
                  Finished High Carbon Ferro Manganese metal is tested in the
                  laboratory every 2–3 hours using hot samples. Chemical
                  properties are analyzed, and reports are sent to metallurgists
                  for corrective action if required.
                </p>
              </motion.div>
            </div>

            {/* STEP 4 */}
            <div className="relative flex md:flex-row flex-col-reverse md:items-center gap-8">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md"
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: orange }}
                >
                  Casting & Slag Removal
                </h3>
                <p className="leading-relaxed">
                  Molten metal is collected in casting pans instead of sand
                  pockets to prevent contamination. Slag is removed at the
                  molten stage itself to ensure purity of the metal.
                </p>
              </motion.div>

              {/* Dot */}
              <div
                className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950"
                style={{ backgroundColor: orange }}
              />

              <div className="md:w-1/2"></div>
            </div>

            {/* STEP 5 */}
            <div className="relative flex md:flex-row flex-col md:items-center gap-8">
              <div className="md:w-1/2"></div>

              {/* Dot */}
              <div
                className="absolute left-5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-neutral-950"
                style={{ backgroundColor: orange }}
              />

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md"
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: orange }}
                >
                  Final Sizing & Stockyard Handling
                </h3>
                <p className="leading-relaxed">
                  Finished metal is broken, screened, sized, and stacked in
                  dedicated stockyards as per customer requirements, ensuring
                  perfect uniformity and dispatch-ready quality.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SUMMARY CARDS */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm">
            <h4
              className="text-xl font-semibold mb-2"
              style={{ color: orange }}
            >
              End-to-End Inspection
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Every stage—from raw material to finished metal—is monitored and
              recorded.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm">
            <h4
              className="text-xl font-semibold mb-2"
              style={{ color: orange }}
            >
              Consistent Hot Sampling
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              2–3 hour chemical verification cycles ensure continuous
              metallurgical stability.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm">
            <h4
              className="text-xl font-semibold mb-2"
              style={{ color: orange }}
            >
              Purity & Accuracy
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Slag removal at molten stage and precise batch weighing create
              superior product quality.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
