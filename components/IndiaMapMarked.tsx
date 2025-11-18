"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LabelPoint = {
    id: string;
    name: string;
    cx: number;
    cy: number;
};

export default function IndiaMapMarkedFromSVG({ src = "/india.svg", className = "" }) {
    const [paths, setPaths] = useState<string[]>([]);
    const [labelPoints, setLabelPoints] = useState<LabelPoint[]>([]);
    const [vb, setVb] = useState<string | null>(null); // svg viewBox

    const ORANGE = "oklch(0.78 0.19 50)";
    const ORANGE_LIGHT = "oklch(0.82 0.23 55)";

    useEffect(() => {
        const loadSvg = async () => {
            const res = await fetch(src);
            const text = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "image/svg+xml");

            // read viewBox from root svg (fallback to width/height)
            const svgEl = doc.querySelector("svg");
            if (!svgEl) return;

            const viewBox = svgEl.getAttribute("viewBox");
            if (viewBox) {
                setVb(viewBox);
            } else {
                const w = svgEl.getAttribute("width") ?? "1000";
                const h = svgEl.getAttribute("height") ?? "1000";
                setVb(`0 0 ${w} ${h}`);
            }

            // extract paths (outline)
            const pathEls = [...doc.querySelectorAll("path")];
            const dValues = pathEls.map((p) => p.getAttribute("d") || "").filter(Boolean);
            setPaths(dValues);

            // extract label_points circles
            const labelGroup = doc.querySelector("#label_points");
            const points: LabelPoint[] = [];
            if (labelGroup) {
                const circles = [...labelGroup.querySelectorAll("circle")];
                for (const c of circles) {
                    const id = c.getAttribute("id") ?? "";
                    // class attribute in your SVG contains the human readable name in many cases
                    const classAttr = c.getAttribute("class") ?? "";
                    const name = classAttr || id || "";
                    const cx = parseFloat(c.getAttribute("cx") ?? "0");
                    const cy = parseFloat(c.getAttribute("cy") ?? "0");
                    points.push({ id, name, cx, cy });
                }
            }

            setLabelPoints(points);
        };

        loadSvg();
    }, [src]);

    return (
        <div className={`relative w-full ${className}`}>
            <svg
                viewBox={vb ?? "0 0 1000 1000"}
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-auto"
                role="img"
                aria-label="India map with markers"
            >
                {/* subtle dark background (keeps compatibility with light/dark page) */}
                <rect width="100%" height="100%" fill="transparent" />

                {/* render map paths */}
                <g transform="">
                    {paths.map((d, i) => (
                        <path
                            key={i}
                            d={d}
                            fill="none"
                            stroke={ORANGE}
                            strokeWidth={1.1}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            style={{ mixBlendMode: "screen", transition: "stroke .18s ease" }}
                        />
                    ))}
                </g>

                {/* markers layer */}
                <g>
                    {labelPoints.map((p, i) => (
                        <Marker
                            key={p.id || p.name || i}
                            x={p.cx}
                            y={p.cy}
                            label={p.name}
                            fill={ORANGE}
                            fillHover={ORANGE_LIGHT}
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}

/* Marker subcomponent */
function Marker({
    x,
    y,
    label,
    fill,
    fillHover,
}: {
    x: number;
    y: number;
    label: string;
    fill: string;
    fillHover: string;
}) {
    const [hover, setHover] = useState(false);

    return (
        <g transform={`translate(${x}, ${y})`} style={{ cursor: "pointer" }}>
            {/* outer pulsing glow */}
            <AnimatePresence>
                {hover && (
                    <motion.circle
                        cx={0}
                        cy={0}
                        r={20}
                        fill={fill}
                        opacity={0.18}
                        initial={{ scale: 0.6, opacity: 0.12 }}
                        animate={{ scale: 1, opacity: 0.18 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                )}
            </AnimatePresence>

            {/* outer ring */}
            <motion.circle
                cx={0}
                cy={0}
                r={12}
                fill={fill}
                opacity={hover ? 1 : 0.28}
                stroke="rgba(255,255,255,0.85)"
                strokeWidth={hover ? 1.6 : 1.2}
                initial={false}
                animate={{ r: hover ? 14 : 12, opacity: hover ? 1 : 0.28 }}
                transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onFocus={() => setHover(true)}
                onBlur={() => setHover(false)}
            />

            {/* inner core */}
            <motion.circle
                cx={0}
                cy={0}
                r={6}
                fill={hover ? fillHover : "#fff"}
                stroke={fill}
                strokeWidth={0.8}
                initial={false}
                animate={{ r: hover ? 7 : 6 }}
                transition={{ duration: 0.18 }}
                pointerEvents="none"
            />

            {/* label tooltip */}
            <foreignObject
                x={18}
                y={-10}
                width={160}
                height={40}
                style={{ overflow: "visible", pointerEvents: "none" }}
            >
                <div style={{ pointerEvents: "none" }}>
                    <AnimatePresence>
                        {hover && (
                            <motion.div
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                transition={{ duration: 0.18 }}
                            >
                                <div
                                    style={{
                                        background: "rgba(0,0,0,0.72)",
                                        color: "white",
                                        padding: "6px 8px",
                                        borderRadius: 8,
                                        fontSize: 12,
                                        boxShadow: "0 6px 18px rgba(0,0,0,0.45)",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {label}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </foreignObject>
        </g>
    );
}
