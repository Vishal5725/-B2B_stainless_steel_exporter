"use client";

import { motion } from "framer-motion";

const specifications = [
    ["Material Grades", "SS 304, SS 316, SS 316L"],
    ["Manufacturing Standard", "ASTM A182"],
    ["Dimensional Standard", "ASME B16.5 / ASME B16.47"],
    ["Pressure Classes", "150#, 300#, 600#, 900#, 1500#, 2500#"],
    ["Nominal Size", '1/2" to 48"'],
    ["Face Types", "RF, FF, RTJ"],
    ["Surface Finish", "Machined / Pickled / Polished"],
    ["Inspection", "PMI / Dimensional / Visual"],
    ["Documentation", "MTC / Inspection Reports"],
];

export default function Specifications() {
    return (
        <section id="specifications" className="scroll-mt-20 bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl"
                >
                    <span className="inline-flex rounded-full bg-[#0F4C81]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0F4C81]">Technical Data </span>
                    <h2 className="mt-5 text-3xl font-bold text-[#052C4F] sm:text-4xl">
                        Stainless Steel Flange Specifications
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600">
                        Typical specifications for stainless steel flanges. Final
                        dimensions and requirements should be confirmed against the
                        applicable project standard and purchase specification.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-10 overflow-hidden rounded-2xl border border-slate-200"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[650px] border-collapse text-left">
                            <thead>
                                <tr className="bg-[#052C4F] text-white">
                                    <th className="px-6 py-4 text-sm font-bold">
                                        Specification
                                    </th>
                                    <th className="px-6 py-4 text-sm font-bold">
                                        Typical Requirement
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {specifications.map(([label, value], index) => (
                                    <tr
                                        key={label}
                                        className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                                    >
                                        <td className="border-b border-slate-100 px-6 py-4 text-sm font-semibold text-[#052C4F]">
                                            {label}
                                        </td>

                                        <td className="border-b border-slate-100 px-6 py-4 text-sm text-slate-600">
                                            {value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                <p className="mt-4 text-xs leading-5 text-slate-400">
                    * Specifications shown are sample content for this assessment and
                    should be verified against the manufacturer's actual product data.
                </p>
            </div>
        </section>
    );
}
