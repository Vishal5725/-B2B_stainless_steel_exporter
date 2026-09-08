"use client";
import { motion } from "framer-motion";
import {
    Box,
    FileText,
    Globe2,
    Ship,
} from "lucide-react";

const destinations = [
    {
        country: "Saudi Arabia",
        ports: "Jeddah · Dammam",
        code: "SA",
    },
    {
        country: "United Arab Emirates",
        ports: "Dubai · Abu Dhabi",
        code: "AE",
    },
    {
        country: "Qatar",
        ports: "Doha",
        code: "QA",
    },
    {
        country: "Oman",
        ports: "Muscat · Sohar",
        code: "OM",
    },
];

const documents = [
    "Commercial Invoice",
    "Packing List",
    "Certificate of Origin",
    "Material Test Certificate",
];

export default function ExportInfo() {
    return (
        <section id="export" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-flex rounded-full bg-[#0F4C81]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0F4C81]">
                            Export & Shipping
                        </span>
                        <h2 className="mt-5 text-3xl font-bold text-[#052C4F] sm:text-4xl">
                            Export-ready support for Middle East buyers.
                        </h2>

                        <p className="mt-5 text-base leading-7 text-slate-600">
                            Coordinate your stainless steel flange requirements with
                            packaging, documentation, and shipping arrangements suited to
                            international industrial orders.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81]/20 hover:shadow-lg">
                                <Ship className="text-[#0F4C81]" size={24} />

                                <p className="mt-4 text-sm font-bold text-[#052C4F]">
                                    Export Shipping
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Port and freight coordination
                                </p>
                            </div>

                            <div className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81]/20 hover:shadow-lg">
                                <Box className="text-[#0F4C81]" size={24} />

                                <p className="mt-4 text-sm font-bold text-[#052C4F]">
                                    Secure Packaging
                                </p>

                                <p className="mt-1 text-xs leading-5 text-slate-500">
                                    Industrial export packaging
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-3">
                                <Globe2 className="text-[#0F4C81]" size={24} />

                                <h3 className="text-xl font-bold text-[#052C4F]">
                                    Middle East Export Destinations
                                </h3>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                {destinations.map((destination) => (
                                    <div
                                        key={destination.country}
                                        className="group rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F4C81]/20 hover:bg-white hover:shadow-md"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="font-bold text-[#052C4F]">
                                                {destination.country}
                                            </p>

                                            <span className="rounded bg-white px-2 py-1 text-[10px] font-bold text-slate-400">
                                                {destination.code}
                                            </span>
                                        </div>

                                        <p className="mt-2 text-xs text-slate-500">
                                            {destination.ports}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 border-t border-slate-100 pt-7">
                                <div className="flex items-center gap-3">
                                    <FileText className="text-[#0F4C81]" size={21} />

                                    <h4 className="font-bold text-[#052C4F]">
                                        Export Documentation
                                    </h4>
                                </div>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {documents.map((document) => (
                                        <div
                                            key={document}
                                            className="flex items-center gap-2 text-sm text-slate-600"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C81]" />
                                            {document}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
