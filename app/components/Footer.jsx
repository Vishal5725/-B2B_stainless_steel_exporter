"use client";

import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

const productLinks = [
  "Weld Neck Flanges",
  "Slip-On Flanges",
  "Blind Flanges",
  "Socket Weld Flanges",
];

function scrollToSection(id) {
  document.querySelector(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export default function Footer() {
  return (
    <footer className="bg-[#031D34] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <button
              type="button"
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-3 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F4C81] font-bold">
                BS
              </span>
              <span>
                <span className="block font-bold">BHANSALI</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  Stainless Steel
                </span>
              </span>
            </button>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Stainless steel flange solutions for industrial buyers across
              Saudi Arabia, UAE, and the wider Middle East.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold">Products</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              {productLinks.map((product) => (
                <li key={product}>
                  <button
                    type="button"
                    onClick={() => scrollToSection("#products")}
                    className="transition hover:text-white"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Information</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-400">
              <li><button type="button" onClick={() => scrollToSection("#grades")} className="transition hover:text-white">Material Grades</button></li>
              <li><button type="button" onClick={() => scrollToSection("#specifications")} className="transition hover:text-white">Specifications</button></li>
              <li><button type="button" onClick={() => scrollToSection("#certifications")} className="transition hover:text-white">Certifications</button></li>
              <li><button type="button" onClick={() => scrollToSection("#contact")} className="transition hover:text-white">Request a Quote</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact</h3>
            <div className="mt-5 space-y-4 text-sm text-slate-400">
              <a href="tel:+919999999999" className="flex items-center gap-2 transition hover:text-white">
                <Phone size={16} />
                +91 99999 99999
              </a>
              <a href="mailto:sales@example.com" className="flex items-center gap-2 transition hover:text-white">
                <Mail size={16} />
                sales@example.com
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                India · Exporting to Middle East
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Bhansali Stainless. All rights reserved.</p>
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="inline-flex items-center gap-1 font-semibold text-slate-400 transition hover:text-white"
          >
            Request an enquiry <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
