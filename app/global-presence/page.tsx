// New Global Presence Page with Dark/Light Mode + Enhanced India Map Hover Effects
// Tailwind + Framer Motion + Interactive SVG State Hover Elevation

"use client";

import { motion } from "framer-motion";

import IndiaMap from "../../components/IndiaMap";

export default function GlobalPresencePage() {
    const orange = "oklch(0.78 0.19 50)";

    const hubs = [
        { region: "North America", cities: ["Seattle", "Vancouver", "New Jersey", "Savannah"] },
        { region: "South America", cities: ["Santos", "Buenos Aires"] },
        { region: "Europe", cities: ["Hamburg", "Rotterdam"] },
        { region: "Middle East", cities: ["Dubai"] },
        { region: "Asia", cities: ["Singapore", "Shanghai", "Tokyo", "Osaka"] },
    ];

    return (
        <main className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-white transition-colors duration-300 pt-12 pb-32 relative overflow-hidden">

            {/* BACKGROUND EFFECT */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.08] bg-gradient-to-br from-orange-100/20 to-orange-300/10 dark:from-orange-900/5 dark:to-orange-700/5" />



            {/* DOMESTIC PRESENCE */}
            <section className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 mb-32">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                        Domestic <span style={{ color: orange }}>Stronghold</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Our roots are strong across India, enabling efficient distribution and operational leadership.
                    </p>
                </div>

                {/* ENHANCED INDIA MAP WITH STATE HOVER HEIGHT EFFECT */}
                <div className="rounded-3xl p-6 shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <IndiaMap />
                </div>
            </section>

            {/* SUMMARY */}
            <section className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-orange-50 dark:bg-orange-950/20 p-10 md:p-14 rounded-3xl border border-orange-200/40 dark:border-orange-900/40 text-center shadow-lg"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-orange-900 dark:text-orange-200">
                        Seamless Global Logistics
                    </h3>
                    <p className="text-orange-800 dark:text-orange-300/80 leading-relaxed text-lg">
                        From India to the world, our optimized supply chain ensures rapid industrial support and
                        precision-driven logistics across all major markets.
                    </p>
                </motion.div>
            </section>

        </main>
    );
}
