
"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const productFromURL = searchParams.get("product") || "";

  const orange = "oklch(0.78 0.19 50)";

  const productList = [
    "High Carbon Ferro Chrome",
    "High Carbon Ferro Manganese",
    "High Carbon Silico Manganese",
    "Medium Carbon Ferro Manganese",
    "Medium Carbon Silico Manganese",
    "Low Carbon Silico Manganese",
  ];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    product: productFromURL || "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Your enquiry has been submitted!");
  }

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-200 pt-24 pb-32">
      <section className="max-w-3xl mx-auto px-6 text-center mb-14">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: orange }}
        >
          Product Enquiry
        </motion.h1>

        <p className="text-neutral-500 dark:text-neutral-400 text-lg">
          We’ll respond to you as soon as possible.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-neutral-900 rounded-3xl shadow-md border border-neutral-200 dark:border-neutral-800 p-8 md:p-10 space-y-6"
        >
          {/* PRODUCT */}
          <div>
            <label className="block font-semibold mb-1">Select Product</label>

            <select
              name="product"
              value={form.product}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
            >
              <option value="">-- Select a Product --</option>

              {productFromURL && (
                <option value={productFromURL}>{productFromURL}</option>
              )}

              {productList
                .filter((product) => product !== productFromURL)
                .map((product, idx) => (
                  <option key={idx} value={product}>
                    {product}
                  </option>
                ))}
            </select>
          </div>

          {/* NAME */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Your name"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Your email"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block font-semibold mb-1">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Phone number"
            />
          </div>

          {/* COMPANY */}
          <div>
            <label className="block font-semibold mb-1">Company</label>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Your company"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800"
              placeholder="Write your enquiry..."
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white text-lg"
            style={{ backgroundColor: orange }}
          >
            Submit Enquiry
          </button>
        </motion.form>
      </section>
    </main>
  );
}
