"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CircleDot,
  Layers3,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const products = [
  {
    name: "Weld Neck Flanges",
    description:
      "Suitable for high-pressure and high-temperature piping applications.",
    icon: CircleDot,
    tag: "High Pressure",
  },
  {
    name: "Slip-On Flanges",
    description:
      "Practical flange solution for general industrial piping systems.",
    icon: Layers3,
    tag: "General Purpose",
  },
  {
    name: "Blind Flanges",
    description:
      "Used for safely closing pipeline ends, vessels, and nozzles.",
    icon: ShieldCheck,
    tag: "Pipeline Closing",
  },
  {
    name: "Socket Weld Flanges",
    description:
      "Compact solution for smaller diameter piping systems.",
    icon: Wrench,
    tag: "Compact Design",
  },
  {
    name: "Threaded Flanges",
    description:
      "Internally threaded connection for applications where welding is unsuitable.",
    icon: Settings2,
    tag: "No Welding",
  },
  {
    name: "Lap Joint Flanges",
    description:
      "Flexible option for systems requiring frequent dismantling and maintenance.",
    icon: Layers3,
    tag: "Maintenance",
  },
];

const scrollToContact = () => {
  document.querySelector("#contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default function ProductOverview() {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-[#0F4C81]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0F4C81]">
            Our Products
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#052C4F] sm:text-4xl">
            Stainless Steel Flanges for{" "}
            <span className="text-[#0F4C81]">Industrial Applications</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            A range of stainless steel flange configurations for piping,
            process equipment, petrochemical, oil & gas, and industrial
            applications.
          </p>
        </motion.div>

        <div className="mt-12 grid items-center gap-8 lg:mt-14 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl bg-[#052C4F] p-6 shadow-xl shadow-[#052C4F]/10 sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-blue-200">
              Product Range
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Engineered for demanding environments.
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-300 sm:text-base">
              Stainless steel flanges can be supplied in different
              configurations, dimensions, pressure classes, and material
              grades according to project requirements.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl" />
              <img
                src="/images/stainless-steel-flange.svg"
                alt="Stainless steel flange product illustration"
                loading="lazy"
                className="relative mx-auto h-auto w-full max-w-[430px] object-contain"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl font-bold text-white">304</p>
                <p className="mt-1 text-xs text-slate-400">General Purpose</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl font-bold text-white">316 / 316L</p>
                <p className="mt-1 text-xs text-slate-400">
                  Corrosion Resistant
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0F4C81]">
              Built to Specification
            </p>

            <h3 className="mt-3 text-2xl font-bold text-[#052C4F] sm:text-3xl">
              Reliable flange solutions for industrial projects.
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              Select configurations can be supplied according to applicable
              dimensions, pressure ratings, material grades, finishing
              requirements, and customer specifications.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "SS 304, SS 316 and SS 316L material options",
                "Multiple pressure classes and dimensions",
                "Machined and finished according to requirements",
                "Inspection and material documentation available",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F4C81]" />
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToContact}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0F4C81]"
            >
              Discuss your requirements
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0F4C81]">
                Flange Configurations
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#052C4F] sm:text-3xl">
                Choose the right flange for your application.
              </h3>
            </div>
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C81]"
            >
              Request a quote <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#0F4C81]/20 hover:bg-[#F8FBFE] hover:shadow-2xl hover:shadow-[#0F4C81]/10"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#0F4C81]/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0F4C81]/10 text-[#0F4C81] transition-colors duration-300 group-hover:bg-[#0F4C81] group-hover:text-white"
                      >
                        <Icon size={21} />
                      </motion.div>

                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 transition-colors group-hover:bg-[#0F4C81]/10 group-hover:text-[#0F4C81]">
                        {product.tag}
                      </span>
                    </div>

                    <h4 className="mt-6 text-lg font-bold text-[#052C4F]">
                      {product.name}
                    </h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {product.description}
                    </p>

                    <button
                      type="button"
                      onClick={scrollToContact}
                      className="group/link mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F4C81]"
                    >
                      Request Details
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
