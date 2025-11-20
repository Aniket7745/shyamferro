"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  const orange = "oklch(0.78 0.19 50)";

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 pt-24 pb-32">
      {/* HEADER SECTION */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ color: orange }}
        >
          Contact Us
        </motion.h1>

        <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl mx-auto">
          Have questions? Need assistance? Our team is ready to support you.
          Reach out anytime — we respond quickly.
        </p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14">
        {/* LEFT SIDE : CONTACT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: orange }}>
              Corporate Office
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Shyam Ferro Alloys Ltd.
              <br />
              Block GP, Sector V<br />
              Salt Lake, Kolkata, West Bengal, India
              <br />
              PIN – 700091
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: orange }}>
              Contact Details
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Phone: +91 98765 43210
              <br />
              Email: info@shyamferroalloys.com
              <br />
              Support: support@shyamferroalloys.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: orange }}>
              Working Hours
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Monday – Saturday: 10:00 AM – 6:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border border-neutral-300 dark:border-neutral-800 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29447.776663221714!2d88.4294894!3d22.5785369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027781b43518f5%3A0xa3ad234b63d31589!2sSalt%20Lake%20Sector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="270"
              className="border-0"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT SIDE : CONTACT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl shadow-md border border-neutral-200 dark:border-neutral-800 p-8 md:p-10 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent!");
          }}
        >
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white text-lg"
            style={{ backgroundColor: orange }}
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </main>
  );
}
