import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.tsx";
import ThemeProvider from "../components/ThemeProvider.tsx";
export const metadata = {
  title: "SHYAM FERRO ALLOYS LTD",
  description: "Official website of Shyam Ferro Alloys Ltd",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="pt-24">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
