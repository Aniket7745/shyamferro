"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SELECTED_STATES = [
    "Gujarat",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Bihar",
    "Jharkhand",
    "West Bengal",
    "Odisha",
    "Orissa",
    "Chhattisgarh",
    "Maharashtra",
    "Karnataka",
    "Tamil Nadu",
    "Andhra Pradesh",
    "Telangana"
];

const FACTORY_DATA: Record<string, any> = {
    Gujarat: {
        title: "Gujarat Operations Hub",
        city: "Ahmedabad",
        description: "Large-scale ferro-alloy and export facility.",
        capacity: "1.2M tonnes / year",
    },
    Rajasthan: {
        title: "Rajasthan Steel Unit",
        city: "Jaipur",
        description: "Key distribution and processing hub.",
        capacity: "800k tonnes / year",
    },
    "Madhya Pradesh": {
        title: "MP Central Plant",
        city: "Indore",
        description: "High-volume ferro alloy operations.",
        capacity: "1M tonnes / year",
    },
    "Uttar Pradesh": {
        title: "UP Logistics Hub",
        city: "Kanpur",
        description: "Major warehousing node.",
        capacity: "650k tonnes / year",
    },
    Bihar: {
        title: "Bihar Distribution Node",
        city: "Patna",
        description: "Strategic eastern distribution center.",
        capacity: "400k tonnes / year",
    },
    Jharkhand: {
        title: "Jharkhand Raw Material Plant",
        city: "Ranchi",
        description: "Material processing facility.",
        capacity: "700k tonnes / year",
    },
    "West Bengal": {
        title: "WB Port Unit",
        city: "Kolkata",
        description: "Port-connected export hub.",
        capacity: "1.5M tonnes / year",
    },
    Orissa: {
        title: "Odisha Manufacturing Division",
        city: "Bhubaneswar",
        description: "Large-scale alloy production.",
        capacity: "1.8M tonnes / year",
    },

    Chhattisgarh: {
        title: "Chhattisgarh Alloy Plant",
        city: "Raipur",
        description: "High-capacity alloy melting unit.",
        capacity: "1.1M tonnes / year",
    },
    Maharashtra: {
        title: "Maharashtra Industrial Hub",
        city: "Mumbai",
        description: "Export-ready processing center.",
        capacity: "900k tonnes / year",
    },
    Karnataka: {
        title: "Karnataka Manufacturing Plant",
        city: "Bengaluru",
        description: "Advanced production unit.",
        capacity: "750k tonnes / year",
    },
    "Tamil Nadu": {
        title: "TN Coastal Unit",
        city: "Chennai",
        description: "Coastal export facility.",
        capacity: "1.3M tonnes / year",
    },
    "Andhra Pradesh": {
        title: "AP Logistics Terminal",
        city: "Visakhapatnam",
        description: "Port-side logistics hub.",
        capacity: "1.6M tonnes / year",
    },
    Telangana: {
        title: "Telangana Processing Unit",
        city: "Hyderabad",
        description: "Warehouse + processing.",
        capacity: "600k tonnes / year",
    }
};

export default function IndiaMapPopup({ className = "" }) {
    const [paths, setPaths] = useState<{ d: string; id: string }[]>([]);
    const [points, setPoints] = useState<{ name: string; cx: number; cy: number }[]>([]);
    const [vb, setVb] = useState<string | null>(null);

    const [selected, setSelected] = useState<any>(null);
    const [selectedState, setSelectedState] = useState<string | null>(null);

    const popupRef = useRef<HTMLDivElement | null>(null);

    const ORANGE = "oklch(0.78 0.19 50)";
    const ORANGE_LIGHT = "oklch(0.82 0.23 55)";
    const HOVER_FILL = "oklch(0.92 0.07 50 / 0.2)";
    const SELECTED_FILL = "oklch(0.84 0.20 50 / 0.35)";

    // CLOSE POPUP WHEN CLICKING OUTSIDE
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
                setSelected(null);
                setSelectedState(null);
            }
        }
        if (selected) window.addEventListener("mousedown", handleClick);
        return () => window.removeEventListener("mousedown", handleClick);
    }, [selected]);

    // LOAD SVG
    useEffect(() => {
        const loadSvg = async () => {
            const res = await fetch("/india.svg");
            const text = await res.text();
            const doc = new DOMParser().parseFromString(text, "image/svg+xml");

            const svgEl = doc.querySelector("svg");
            setVb(svgEl?.getAttribute("viewBox") ?? "0 0 1000 1000");

            // extract paths (states)
            const ps = [...doc.querySelectorAll("path")].map((p) => ({
                d: p.getAttribute("d") || "",
                id: p.getAttribute("id") || "",
            }));
            setPaths(ps);

            // extract label_points (dots)
            const pts: any[] = [];
            const lg = doc.querySelector("#label_points");
            if (lg) {
                [...lg.querySelectorAll("circle")].forEach((c) => {
                    const nm = c.getAttribute("class") || "";
                    if (SELECTED_STATES.some((s) => nm.toLowerCase().includes(s.toLowerCase()))) {
                        pts.push({
                            name: nm,
                            cx: parseFloat(c.getAttribute("cx") || "0"),
                            cy: parseFloat(c.getAttribute("cy") || "0"),
                        });
                    }
                });
            }
            setPoints(pts);
        };
        loadSvg();
    }, []);

    return (
        <div className={`relative w-full ${className}`}>
            <svg viewBox={vb!} preserveAspectRatio="xMidYMid meet" className="w-full h-auto">

                {/* MAP ANIMATION + HOVER + CLICK HIGHLIGHT */}
                {paths.map((p, i) => {
                    const stateMatch = SELECTED_STATES.find((s) =>
                        p.id.toLowerCase().includes(s.toLowerCase())
                    );
                    const isSelected = stateMatch === selectedState;

                    return (
                        <motion.path
                            key={i}
                            d={p.d}
                            fill={isSelected ? SELECTED_FILL : "transparent"}
                            stroke={isSelected ? ORANGE : ORANGE}
                            strokeWidth={isSelected ? 1.5 : 1.1}
                            initial={{ opacity: 0, scale: 0.995 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.008 }}
                            whileHover={{
                                scale: 1.015,
                                stroke: ORANGE_LIGHT,
                                fill: stateMatch ? HOVER_FILL : "transparent",
                                filter: "drop-shadow(0px 0px 6px oklch(0.8 0.2 50 / 0.3))",
                                transition: { duration: 0.2 },
                            }}
                            onClick={() => {
                                if (stateMatch) setSelectedState(stateMatch);
                            }}
                        />
                    );
                })}

                {/* DOTS WITH FULL HOVER ANIMATION RESTORED */}
                {points.map((p, i) => (
                    <g
                        key={i}
                        transform={`translate(${p.cx}, ${p.cy})`}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            setSelected({ name: p.name, cx: p.cx, cy: p.cy });
                            setSelectedState(p.name);
                        }}
                    >
                        {/* Glow */}
                        <AnimatePresence>
                            <motion.circle
                                cx={0}
                                cy={0}
                                r={10}
                                fill={ORANGE}
                                opacity={0.18}
                                initial={{ opacity: 0, scale: 0.4 }}
                                animate={{ opacity: 0.18, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.4 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>

                        {/* Dot */}
                        <motion.circle
                            cx={0}
                            cy={0}
                            r={5}
                            fill={ORANGE}
                            stroke="white"
                            strokeWidth={1.2}
                            whileHover={{
                                scale: 1.45,
                                fill: ORANGE_LIGHT,
                                transition: { duration: 0.15 },
                            }}
                        />
                    </g>
                ))}

            </svg>

            {/* FLOATING POPUP */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        ref={popupRef}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute z-50 p-3 rounded-xl shadow-xl backdrop-blur-md
                       bg-white/90 dark:bg-neutral-900/90 border 
                       border-neutral-200 dark:border-neutral-700"
                        style={{
                            left: selected.cx,
                            top: selected.cy,
                            transform: "translate(-50%, -120%)",
                            minWidth: 180,
                        }}
                    >
                        <p className="text-sm font-bold text-orange-600 dark:text-orange-400">
                            {FACTORY_DATA[selected.name]?.title}
                        </p>

                        <p className="text-xs mt-1 text-neutral-700 dark:text-neutral-300">
                            {FACTORY_DATA[selected.name]?.description}
                        </p>

                        <p className="mt-2 text-[11px] text-neutral-500">
                            Capacity: {FACTORY_DATA[selected.name]?.capacity}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
