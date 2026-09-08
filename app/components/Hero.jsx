"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-[#F7FAFC]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#0F4C81]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="order-1"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/15 bg-white px-3 py-2 shadow-sm sm:mb-6 sm:px-4">
            <span className="h-2 w-2 rounded-full bg-[#0F4C81]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#0F4C81] sm:text-xs">
              Stainless Steel Exporter
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-[2.25rem] font-bold leading-[1.08] tracking-tight text-[#052C4F] sm:text-5xl lg:text-6xl">
            Stainless Steel

            <span className="block text-[#0F4C81]">
              Flanges
            </span>

            <span className="block">
              Built for Global Industry.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:mt-6 sm:text-lg sm:leading-7">
            High-quality stainless steel flanges for industrial buyers across
            Saudi Arabia, UAE, and the wider Middle East.
          </p>

          {/* Trust Points */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-7 sm:grid-cols-2 sm:gap-3">
            {[
              "ASTM compliant materials",
              "Export-ready packaging",
              "Material test certificates",
              "Global shipping support",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-medium text-slate-700 sm:text-sm"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-[#0F4C81]"
                />

                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <button
              type="button"
              onClick={scrollToContact}
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#0F4C81] px-6 text-sm font-bold text-white shadow-lg shadow-[#0F4C81]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#052C4F] sm:w-auto"
            >
              Request a Quote

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 text-sm font-bold text-[#052C4F] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0F4C81] sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 25,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="order-2 w-full"
        >
          <div className="relative mx-auto max-w-xl">

            {/* Main visual */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-white shadow-xl sm:shadow-2xl">

              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <img
                  src="images\stainless-steel-flange.svg"
                  alt="Stainless steel weld neck flange"
                  className="h-auto w-full max-w-[520px] object-contain"
                />
              </div>

              {/* Material card */}
              <div className="absolute bottom-4 left-4 rounded-xl bg-white/95 p-3 shadow-lg sm:bottom-5 sm:left-5 sm:p-4">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0F4C81]/10 sm:h-10 sm:w-10">
                    <ShieldCheck size={18} className="text-[#0F4C81]" />
                  </div>
                  <div>
                    <p className="text-[9px] font-semibold text-slate-500 sm:text-xs">
                      Material Grades
                    </p>
                    <p className="text-xs font-bold text-[#052C4F] sm:text-sm">
                      304 · 316 · 316L
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              className="absolute -bottom-4 right-2 rounded-xl border border-slate-100 bg-white px-3 py-3 shadow-xl sm:-right-5 sm:px-5 sm:py-4"
            >
              <p className="text-base font-bold text-[#0F4C81] sm:text-xl">
                304 / 316 / 316L
              </p>

              <p className="mt-1 text-[9px] font-medium text-slate-500 sm:text-xs">
                Stainless Steel Grades
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
          {[
            ["ASTM", "International Standards"],
            ["ISO", "Quality Systems"],
            ["MTC", "Material Certificates"],
            ["Global", "Export Support"],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="px-3 py-4 text-center sm:px-4 sm:py-5"
            >
              <p className="text-base font-bold text-[#052C4F] sm:text-lg">
                {title}
              </p>

              <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}