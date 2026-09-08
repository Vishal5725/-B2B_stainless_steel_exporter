"use client";

import { motion } from "framer-motion";
import { Check, FlaskConical, ShieldCheck } from "lucide-react";

const grades = [
    {
        grade: "304",
        title: "General Purpose Stainless Steel",
        description:
            "A versatile austenitic stainless steel grade widely used for general industrial and piping applications.",
        applications: [
            "Food processing",
            "General piping",
            "Architectural applications",
            "Industrial equipment",
        ],
    },
    {
        grade: "316",
        title: "Enhanced Corrosion Resistance",
        description:
            "A molybdenum-bearing stainless steel grade suited to environments requiring improved corrosion resistance.",
        applications: [
            "Marine environments",
            "Chemical processing",
            "Petrochemical applications",
            "Process equipment",
        ],
    },
    {
        grade: "316L",
        title: "Low-Carbon Stainless Steel",
        description:
            "A low-carbon variant of 316 designed for applications involving welding and demanding corrosion environments.",
        applications: [
            "Welded assemblies",
            "Chemical processing",
            "Pharmaceutical equipment",
            "Corrosive environments",
        ],
    },
];

export default function Grades() {
    return (
        <section id="grades" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full bg-[#0F4C81]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0F4C81]">Material Grades </span>

                    <h2 className="mt-5 text-3xl font-bold text-[#052C4F] sm:text-4xl">
                        Stainless Steel Grades
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600">
                        Select the material grade based on your application,
                        environmental conditions, and required corrosion resistance.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-5 lg:grid-cols-3">
                    {grades.map((grade, index) => (
                        <motion.article
                            key={grade.grade}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -7, scale: 1.01 }}
                            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#0F4C81]/20 hover:shadow-xl hover:shadow-[#0F4C81]/10"
                        >
                            <div className="flex items-center justify-between bg-[#052C4F] px-6 py-5 transition-colors duration-300 group-hover:bg-[#0F4C81]">
                                <div>
                                    <p className="text-4xl font-bold text-white">
                                        {grade.grade}
                                    </p>
                                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-200">
                                        Stainless Steel
                                    </p>
                                </div>

                                {index === 0 ? (
                                    <ShieldCheck className="text-blue-200" size={28} />
                                ) : (
                                    <FlaskConical className="text-blue-200" size={28} />
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-lg font-bold text-[#052C4F]">
                                    {grade.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {grade.description}
                                </p>

                                <div className="mt-6 border-t border-slate-100 pt-5">
                                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                        Typical Applications
                                    </p>

                                    <div className="mt-4 space-y-3">
                                        {grade.applications.map((application) => (
                                            <div
                                                key={application}
                                                className="flex items-center gap-2"
                                            >
                                                <Check
                                                    size={16}
                                                    className="shrink-0 text-[#0F4C81]"
                                                />

                                                <span className="text-sm text-slate-700">
                                                    {application}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="mt-7 block rounded-lg border border-slate-200 py-3 text-center text-sm font-bold text-[#0F4C81] transition hover:border-[#0F4C81] hover:bg-[#0F4C81]/5"
                                >
                                    Enquire About {grade.grade}
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
