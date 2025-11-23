"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const orange = "oklch(0.78_0.19_50)";

  const centerLinks = [
    { name: "Home", href: "/" },
    { name: "Corporate Overview", href: "/corporate-overview" },
    { name: "Products", href: "/products" },
    { name: "Operations", href: "/operations" },
    { name: "Global Presence", href: "/global-presence" },
    { name: "Quality Control", href: "/quality-control" },
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50 
      backdrop-blur-xl 
      bg-white/70 dark:bg-black/40 
      border-b border-black/10 dark:border-white/10
      shadow-[0_2px_20px_rgba(0,0,0,0.06)]
    "
    >
      <div className="mx-auto px-6 h-16 flex items-center justify-between">

        {/* BRAND */}
        <Link
          href="/"
          className="font-extrabold text-lg tracking-tight text-[oklch(0.78_0.19_50)] hover:opacity-80 transition"
        >
          SHYAM FERRO ALLOYS LTD
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {centerLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} className="relative group transition">
                <span
                  className={`
                    transition 
                    ${active ? "text-[oklch(0.78_0.19_50)] font-semibold" :
                      "text-gray-700 dark:text-gray-300"}
                    group-hover:text-[oklch(0.78_0.19_50)]
                  `}
                >
                  {item.name}
                </span>

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] w-full rounded-full
                    bg-[oklch(0.78_0.19_50)]
                    scale-x-0 group-hover:scale-x-100 transition-transform origin-left
                    ${active ? "scale-x-100" : ""}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6 font-medium">

          {/* CONTACT BUTTON */}
          <Link
            href="/contact"
            className="
              px-4 py-1.5 
              bg-[oklch(0.78_0.19_50)]
              hover:bg-[oklch(0.72_0.19_50)]
              text-white rounded-full text-sm font-semibold 
              shadow-[0_4px_12px_rgba(253,116,53,0.4)]
              transition-all
            "
          >
            Contact Us
          </Link>

          {/* ENQUIRY */}
          <Link
            href="/enquiry"
            className={`transition ${pathname === "/enquiry"
              ? "text-[oklch(0.78_0.19_50)] font-semibold"
              : "text-gray-700 dark:text-gray-300 hover:text-[oklch(0.78_0.19_50)]"
              }`}
          >
            Enquiry
          </Link>

          {/* THEME TOGGLE — Hydration Safe */}
          <button
            onClick={toggleTheme}
            className="hover:opacity-80 transition text-gray-700 dark:text-gray-300"
          >
            {!mounted ? (
              <div className="w-[22px] h-[22px]" /> /* placeholder to avoid mismatch */
            ) : theme === "dark" ? (
              <Sun size={22} />
            ) : (
              <Moon size={22} />
            )}
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 dark:text-gray-200 hover:opacity-80"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden fixed top-16 right-0 
          bg-white/90 dark:bg-black/90 
          w-full h-screen px-6 py-8 
          backdrop-blur-xl 
          transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-7 text-lg font-medium">
          {centerLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  active
                    ? "text-[oklch(0.78_0.19_50)] font-semibold"
                    : "text-gray-800 dark:text-gray-300 hover:text-[oklch(0.78_0.19_50)]"
                }
              >
                {item.name}
              </Link>
            );
          })}

          {/* Contact Button */}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="
              mt-3 px-5 py-2 
              bg-[oklch(0.78_0.19_50)] hover:bg-[oklch(0.72_0.19_50)]
              text-white rounded-full text-lg font-semibold
              shadow-[0_4px_18px_rgba(253,116,53,0.4)]
              transition-all w-fit
            "
          >
            Contact Us
          </Link>

          {/* Theme Toggle — Hydration Safe */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 mt-6 text-gray-700 dark:text-gray-300 hover:opacity-80 transition"
          >
            {!mounted ? (
              <div className="w-[22px] h-[22px]" />
            ) : theme === "dark" ? (
              <>
                <Sun size={22} /> Light Mode
              </>
            ) : (
              <>
                <Moon size={22} /> Dark Mode
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
