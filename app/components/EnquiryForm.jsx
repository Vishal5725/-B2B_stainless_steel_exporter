"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, Loader2 } from "lucide-react";

const products = [
  "Stainless Steel Flanges",
  "Weld Neck Flanges",
  "Slip-On Flanges",
  "Blind Flanges",
  "Socket Weld Flanges",
  "Threaded Flanges",
  "Lap Joint Flanges",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    // Remove field error when user starts correcting it
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[+]?[\d\s()-]{7,18}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.product) {
      newErrors.product = "Please select a product.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed.");
      }

      // Mock GA4 / GTM event
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: "generate_lead",
          form_name: "stainless_steel_flange_enquiry",
          product_interest: formData.product,
        });
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Request a Quote
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Get a Stainless Steel Flange Quote
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Tell us what you need and our export team can help with product
              selection, specifications, quantities and shipping requirements.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "304, 316 & 316L stainless steel grades",
                "Multiple flange configurations",
                "Export-ready documentation",
                "Worldwide shipping support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-blue-700" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
          >
            {status === "success" ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle className="h-16 w-16 text-green-600" />

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  Enquiry Submitted
                </h3>

                <p className="mt-3 max-w-md text-slate-600">
                  Thank you for your enquiry. Our team will review your
                  requirements and get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                        errors.name
                          ? "border-red-400 focus:ring-red-100"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    />

                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                        errors.email
                          ? "border-red-400 focus:ring-red-100"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Phone / WhatsApp *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 5X XXX XXXX"
                      className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                        errors.phone
                          ? "border-red-400 focus:ring-red-100"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    />

                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Product */}
                  <div>
                    <label
                      htmlFor="product"
                      className="mb-2 block text-sm font-semibold text-slate-800"
                    >
                      Product Interest *
                    </label>

                    <select
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                        errors.product
                          ? "border-red-400 focus:ring-red-100"
                          : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                      }`}
                    >
                      <option value="">Select a product</option>

                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>

                    {errors.product && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.product}
                      </p>
                    )}
                  </div>
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong while submitting your enquiry.
                    Please try again.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-800 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-slate-500">
                  Your enquiry details are used only to respond to your
                  product request.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}