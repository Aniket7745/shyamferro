"use client";

import { motion } from "framer-motion";

export default function OperationsPage() {
    const orange = "oklch(0.78 0.19 50)";

    const futurePlans = {
        stainless: [
            "Bright Bar in 200/300/400 series and Alloy Steel in all sizes",
            "Wire Rod in in 200/300/400 series",
            "Fasteners in 200/300/400 series",
            "Flanges in all grades",
            "Hot Rolling Division",
        ],
        ferro: [
            "Low and medium Carbon Ferro Chrome in Trial Stage",
            "Low and medium Carbon Ferro Manganese - ACHIEVED",
            "Low Carbon Silicon Manganese - ACHIEVED",
        ],
    };

    return (
        <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 pt-10 pb-24">
            {/* HEADER */}
            <section className="max-w-6xl mx-auto px-6 mb-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Operation <span style={{ color: orange }}>Capacity</span>
                </motion.h1>Integrated Ferro Alloys and Stainless Steel Plant in Durgapur, West Bengal, India
                ↓
                Present Capacity50 MVA
                ↓
                Future Plan75 MVA
                Burdwan U
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    Our integrated manufacturing units in West Bengal drive our global
                    supply chain with consistent quality and expanding capacity.
                </p>
            </section>

            {/* CAPACITY VISUALIZATION */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 gap-12 relative">
                    {/* CENTRAL DIVIDER (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent -translate-x-1/2" />

                    {/* LEFT BRANCH: DURGAPUR */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl border border-blue-100 dark:border-blue-900 mb-8 w-full max-w-md shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                Durgapur Unit
                            </h3>
                            <p className="text-blue-700 dark:text-blue-300">
                                Integrated Ferro Alloys and Stainless Steel Plant in Durgapur,
                                West Bengal, India
                            </p>
                        </div>

                        {/* ARROW */}
                        <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 mb-2" />
                        <div className="text-gray-400 mb-6">↓</div>

                        <div className="bg-gray-100 dark:bg-neutral-900 px-8 py-4 rounded-full font-mono font-bold text-xl mb-8 border border-gray-200 dark:border-neutral-800">
                            <span className="text-gray-500 text-sm block font-sans font-normal mb-1">
                                Present Capacity
                            </span>
                            50 MVA
                        </div>

                        {/* ARROW */}
                        <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 mb-2" />
                        <div className="text-gray-400 mb-6">↓</div>

                        <div
                            className="px-8 py-6 rounded-2xl font-bold text-2xl w-full max-w-xs border border-transparent"
                            style={{
                                backgroundColor: "rgba(253, 116, 53, 0.1)",
                                color: orange,
                                borderColor: "rgba(253, 116, 53, 0.2)",
                            }}
                        >
                            <span className="text-sm block font-sans font-normal mb-1 opacity-80 text-black dark:text-white">
                                Future Plan
                            </span>
                            75 MVA
                        </div>
                    </motion.div>

                    {/* RIGHT BRANCH: BURDWAN */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-8 rounded-2xl border border-blue-100 dark:border-blue-900 mb-8 w-full max-w-md shadow-sm">
                            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                Burdwan Unit
                            </h3>
                            <p className="text-blue-700 dark:text-blue-300">
                                Integrated Ferro Alloys Plant in Burdwan, West Bengal, India
                            </p>
                        </div>

                        {/* ARROW */}
                        <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 mb-2" />
                        <div className="text-gray-400 mb-6">↓</div>

                        <div className="bg-gray-100 dark:bg-neutral-900 px-8 py-4 rounded-full font-mono font-bold text-xl mb-8 border border-gray-200 dark:border-neutral-800">
                            <span className="text-gray-500 text-sm block font-sans font-normal mb-1">
                                Present Capacity
                            </span>
                            50 MVA
                        </div>

                        {/* ARROW */}
                        <div className="h-12 w-px bg-gray-300 dark:bg-gray-700 mb-2" />
                        <div className="text-gray-400 mb-6">↓</div>

                        <div
                            className="px-8 py-6 rounded-2xl font-bold text-2xl w-full max-w-xs border border-transparent"
                            style={{
                                backgroundColor: "rgba(253, 116, 53, 0.1)",
                                color: orange,
                                borderColor: "rgba(253, 116, 53, 0.2)",
                            }}
                        >
                            <span className="text-sm block font-sans font-normal mb-1 opacity-80 text-black dark:text-white">
                                Future Plan
                            </span>
                            75 MVA
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FUTURE EXTENSION PLAN */}
            <section className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl"
                >
                    <div className="p-8 md:p-12 text-center border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-4"
                            style={{ color: orange }}
                        >
                            Future Extension Plan
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium uppercase tracking-widest text-sm">
                            Coming up within 1-1/2 years
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-200 dark:divide-neutral-800">
                        {/* COLUMN 1 */}
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-blue-600 rounded-full" />
                                Stainless Steel & Alloy Steel
                            </h3>
                            <ul className="space-y-4">
                                {futurePlans.stainless.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COLUMN 2 */}
                        <div className="p-8">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span
                                    className="w-2 h-8 rounded-full"
                                    style={{ backgroundColor: orange }}
                                />
                                Ferro Alloys
                            </h3>
                            <ul className="space-y-4">
                                {futurePlans.ferro.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ backgroundColor: orange }}
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
