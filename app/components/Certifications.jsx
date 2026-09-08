"use client";

import { motion } from "framer-motion";
import {
    Award,
    BadgeCheck,
    FileCheck2,
    ShieldCheck,
} from "lucide-react";

const certifications = [
    {
        title: "ASTM Standards",
        subtitle: "Material & manufacturing reference",
        description:
            "Sample certification reference for stainless steel flange material and manufacturing requirements.",
        icon: Award,
    },
    {
        title: "ISO 9001",
        subtitle: "Quality management",
        description:
            "Placeholder for applicable quality management certification and documentation.",
        icon: BadgeCheck,
    },
    {
        title: "Material Test Certificate",
        subtitle: "MTC / EN 10204",
        description:
            "Material documentation can be provided according to applicable purchase requirements.",
        icon: FileCheck2,
    },
    {
        title: "Inspection Support",
        subtitle: "Quality verification",
        description:
            "Inspection and verification documentation can be arranged according to project requirements.",
        icon: ShieldCheck,
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="scroll-mt-20 bg-[#052C4F] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-blue-200">
                        Quality & Documentation
                    </span>

                    <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
                        Standards You Can Specify With Confidence
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-300">
                        Quality documentation and inspection requirements can be aligned
                        with your project's applicable standards.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {certifications.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -6 }}
                                className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-blue-200 transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                                    {item.subtitle}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-slate-300">
                                    {item.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <p className="text-sm text-slate-300">
                        <span className="font-semibold text-white">Certification note:</span>{" "}

                        The certification information above is presented as placeholder
                        assessment content and should be replaced with verified company
                        credentials before publication.

                    </p>
                </div>
            </div>
        </section>

    );
}
