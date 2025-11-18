"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HighCarbonFerroChromePage() {
    const orange = "oklch(0.78 0.19 50)";

    const specs = [
        {
            grade: "III",
            Cr: "60% - 65%",
            Si: "3.5% Max",
            C: "6% - 8%",
            S: "0.06% Max",
            P: "0.4% - 0.5% Max",
            Size: "10-150 mm/or as per customer choice",
        },
        {
            grade: "IV",
            Cr: "60% - 65%",
            Si: "2.5% - 3.5% Max",
            C: "6% - 8%",
            S: "0.06% - 0.8% Max",
            P: "0.4% - 0.5% Max",
            Size: "10-150 mm/or as per customer choice",
        },
    ];

    return (
        <main className="bg-white text-black dark:bg-black dark:text-white overflow-hidden transition-colors duration-300">
            {/* HERO SECTION */}
            <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
                <Image
                    src="/products/hc-ferro-chrome.jpg"
                    alt="High Carbon Ferro Chrome"
                    fill
                    className="object-cover opacity-40 dark:opacity-30"
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white dark:from-black/70 dark:via-black/60 dark:to-black" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative z-10 max-w-4xl px-6"
                >
                    <h1 className="text-6xl md:text-7xl font-bold mb-4">
                        High Carbon <span style={{ color: orange }}>Ferro Chrome</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-200 font-medium mb-8">
                        High-grade chromium alloy for tough stainless steel
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
                        Widely used for stainless steel and alloy steel production. It imparts corrosion resistance and hardness to the steel, making it essential for durable applications.
                    </p>
                </motion.div>
            </section>

            {/* DETAILS SECTION */}
            <section className="relative py-28 bg-gray-100 dark:bg-neutral-950 border-t border-gray-200 dark:border-neutral-800 transition-colors">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    {/* LEFT TEXT */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6" style={{ color: orange }}>
                            Corrosion Resistance & Strength
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            High Carbon Ferro Chrome is the primary source of chromium in steelmaking. It is vital for manufacturing stainless steel, tool steel, and ball-bearing steels.
                        </p>

                        <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-base mb-8">
                            <li>• Essential for stainless steel</li>
                            <li>• Enhances corrosion resistance</li>
                            <li>• Increases hardness and wear resistance</li>
                            <li>• High chromium recovery</li>
                            <li>• Stable chemical properties</li>
                        </ul>

                        <Link
                            href="/enquiry?product=High Carbon Ferro Chrome"
                            className="px-6 py-3 rounded-full font-semibold text-white transition"
                            style={{ backgroundColor: orange }}
                        >
                            Enquire Now
                        </Link>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative h-[450px] rounded-xl overflow-hidden border border-gray-300 dark:border-neutral-800 shadow-xl"
                    >
                        <Image
                            src="/products/hc-ferro-chrome.jpg"
                            alt="High Carbon Ferro Chrome"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* SPECIFICATION TABLE */}
            <section className="py-20 bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800 transition-colors">
                <div className="max-w-6xl mx-auto px-6">
                    <h2
                        className="text-4xl font-bold mb-10 text-center"
                        style={{ color: orange }}
                    >
                        Chemical Composition (Typical)
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse rounded-xl overflow-hidden shadow-lg">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-neutral-800 text-black dark:text-white">
                                    <th className="p-4">Grade</th>
                                    <th className="p-4">Cr</th>
                                    <th className="p-4">Si</th>
                                    <th className="p-4">C</th>
                                    <th className="p-4">S</th>
                                    <th className="p-4">P</th>
                                    <th className="p-4">Size</th>
                                </tr>
                            </thead>

                            <tbody>
                                {specs.map((row, i) => (
                                    <tr
                                        key={i}
                                        className={`border-b border-gray-300 dark:border-neutral-700 ${i % 2 === 0
                                            ? "bg-gray-50 dark:bg-neutral-900"
                                            : "bg-white dark:bg-neutral-800"
                                            }`}
                                    >
                                        <td className="p-4 font-semibold">{row.grade}</td>
                                        <td className="p-4">{row.Cr}</td>
                                        <td className="p-4">{row.Si}</td>
                                        <td className="p-4">{row.C}</td>
                                        <td className="p-4">{row.S}</td>
                                        <td className="p-4">{row.P}</td>
                                        <td className="p-4">{row.Size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    );
}
