"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const orange = "oklch(0.78 0.19 50)";

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 pt-16  mt-20">
      <div className=" mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: orange }}>
            SHYAM FERRO
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xs">
            Leading manufacturer & exporter of Ferro Alloys & Stainless Steel
            with global presence and world-class quality.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="#"
              className="p-2 rounded-full border border-neutral-300 
              dark:border-neutral-700 hover:border-orange-500 transition"
            >
              <Facebook className="w-5 h-5" />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-full border border-neutral-300 
              dark:border-neutral-700 hover:border-orange-500 transition"
            >
              <Instagram className="w-5 h-5" />
            </Link>

            <Link
              href="#"
              className="p-2 rounded-full border border-neutral-300 
              dark:border-neutral-700 hover:border-orange-500 transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: orange }}>
            Quick Links
          </h3>

          <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>
              <Link href="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/corporate-overview"
                className="hover:text-orange-500 transition"
              >
                Corporate Overview
              </Link>
            </li>
            <li>
              <Link
                href="/global-presence"
                className="hover:text-orange-500 transition"
              >
                Global Presence
              </Link>
            </li>
            <li>
              <Link
                href="/quality-control"
                className="hover:text-orange-500 transition"
              >
                Quality Control
              </Link>
            </li>
            <li>
              <Link
                href="/operations"
                className="hover:text-orange-500 transition"
              >
                Operations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: orange }}>
            Locations
          </h3>

          <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
            <li>
              <span className="font-semibold">Corporate Office</span>
              <br />
              Sector V, Salt Lake
              <br />
              Kolkata, West Bengal
            </li>

            <li>
              <span className="font-semibold">Durgapur Unit</span>
              <br />
              Integrated Ferro Alloys & Stainless Steel Plant
            </li>

            <li>
              <span className="font-semibold">Burdwan Unit</span>
              <br />
              Integrated Ferro Alloys Plant
            </li>

            <li>
              <span className="font-semibold">Vizag Unit</span>
              <br />
              Sundaram Alloys Ltd.
            </li>
          </ul>
        </div>

        {/* MAP */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: orange }}>
            Find Us
          </h3>

          <div className="rounded-xl overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29447.776663221714!2d88.4294894!3d22.5785369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027781b43518f5%3A0xa3ad234b63d31589!2sSalt%20Lake%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="180"
              className="border-0"
              loading="lazy"
            ></iframe>
          </div>

          <p className="text-neutral-700 dark:text-neutral-300 text-sm mt-3">
            Phone: +91 98765 43210
            <br />
            Email: info@shyamferro.com
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-neutral-600 dark:text-neutral-400 text-sm mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        © {new Date().getFullYear()} Shyam Ferro Alloys Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
